import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import axios from "axios";

dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://shatrudha.github.io"],
  credentials: true,
}));

app.use(express.json());

const PORT = Number(process.env.PORT || 5000);
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const OTP_EXPIRY_MINUTES = Number(process.env.OTP_EXPIRY_MINUTES || 2);

type User = {
  id: number;
  phone: string;
  countryCode: string;
  name?: string;
  email?: string;
  createdAt: string;
};

type OtpRecord = {
  phone: string;
  countryCode: string;
  otp: string;
  expiresAt: number;
};

const users: User[] = [];
const otps: OtpRecord[] = [];

const generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const createToken = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
      phone: user.phone,
      countryCode: user.countryCode,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

const sendOtpSms = async (phone: string, otp: string) => {
  const apiKey = process.env.FAST2SMS_API_KEY;

  if (!apiKey) {
    console.log("Demo OTP:", otp);
    return;
  }

  const response = await axios.post(
    "https://www.fast2sms.com/dev/bulkV2",
    {
      route: "otp",
      variables_values: otp,
      numbers: phone,
    },
    {
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json",
      },
    }
  );

  console.log("Fast2SMS response:", response.data);
};

app.get("/", (_req, res) => {
  res.json({
    message: "99acres clone backend running",
  });
});

app.post("/api/auth/send-otp", async (req, res) => {
  const { phone, countryCode } = req.body;

  if (!countryCode) {
    return res.status(400).json({
      success: false,
      message: "Country code is required",
    });
  }

  if (!phone || !/^[6-9][0-9]{9}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "That looks like an invalid number",
    });
  }

  const otp = generateOtp();

  const existingOtpIndex = otps.findIndex(
    (item) => item.phone === phone && item.countryCode === countryCode
  );

  if (existingOtpIndex !== -1) {
    otps.splice(existingOtpIndex, 1);
  }

  otps.push({
    phone,
    countryCode,
    otp,
    expiresAt: Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000,
  });

  try {
    await sendOtpSms(phone, otp);

    return res.json({
      success: true,
      message: "OTP sent successfully",
    });
 } catch (error: any) {
  console.error("OTP SMS Error:", error?.response?.data || error);

  return res.status(500).json({
    success: false,
    message:
      error?.response?.data?.message ||
      "Unable to send OTP. Please try again.",
  });
}
});

app.post("/api/auth/verify-otp", (req, res) => {
  const { phone, countryCode, otp } = req.body;

  if (!phone || !countryCode || !otp) {
    return res.status(400).json({
      success: false,
      message: "Phone, country code and OTP are required",
    });
  }

  const otpRecord = otps.find(
    (item) =>
      item.phone === phone &&
      item.countryCode === countryCode &&
      item.otp === otp
  );

  if (!otpRecord) {
    return res.status(400).json({
      success: false,
      message: "Incorrect OTP. Please enter the correct OTP.",
    });
  }

  if (Date.now() > otpRecord.expiresAt) {
    return res.status(400).json({
      success: false,
      message: "OTP expired. Please resend OTP.",
    });
  }

  let user = users.find(
    (item) => item.phone === phone && item.countryCode === countryCode
  );

  if (!user) {
    user = {
      id: users.length + 1,
      phone,
      countryCode,
      createdAt: new Date().toISOString(),
    };

    users.push(user);
  }

  const token = createToken(user);

  const otpIndex = otps.findIndex(
    (item) => item.phone === phone && item.countryCode === countryCode
  );

  if (otpIndex !== -1) {
    otps.splice(otpIndex, 1);
  }

  return res.json({
    success: true,
    message: "Login successful",
    token,
    user,
  });
});

app.post("/api/auth/login-email", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  return res.status(400).json({
    success: false,
    message: "Incorrect Credentials. Kindly Register or Click Forgot password to reset",
  });
});

app.post("/api/auth/forgot-password", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  return res.json({
    success: true,
    message:
      "If your email is linked to an existing account, we’ve sent you a password reset link. Check your inbox and click the link to reset your password.",
  });
});

app.get("/api/auth/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
    };

    const user = users.find((item) => item.id === decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      user,
    });
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});