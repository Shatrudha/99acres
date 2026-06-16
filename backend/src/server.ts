import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key";

const dataDir = path.join(__dirname, "../data");
const usersFile = path.join(dataDir, "users.json");

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const ensureUsersFile = () => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([], null, 2));
  }
};

const readUsers = (): User[] => {
  ensureUsersFile();
  const data = fs.readFileSync(usersFile, "utf-8");
  return JSON.parse(data || "[]");
};

const writeUsers = (users: User[]) => {
  ensureUsersFile();
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Backend is running",
  });
});

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required.",
      });
    }

    const users = readUsers();

    const existingUser = users.find(
      (user) => user.email.toLowerCase() === String(email).toLowerCase()
    );

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
      id: Date.now(),
      name,
      email: String(email).toLowerCase(),
      password: hashedPassword,
    };

    users.push(newUser);
    writeUsers(users);

    return res.status(201).json({
      success: true,
      message: "Registration successful.",
    });
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during registration.",
    });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    const cleanEmail = email ? String(email).trim().toLowerCase() : "";
    const cleanPhone = phone ? String(phone).trim() : "";

    if (!cleanEmail && !cleanPhone) {
      return res.status(400).json({
        success: false,
        message: "Email or phone is required.",
      });
    }

    // Save email OR phone to Google Sheet. Never save password.
    if (process.env.GOOGLE_SHEET_WEB_APP_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEET_WEB_APP_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: cleanEmail,
            phone: cleanPhone,
            source: cleanPhone ? "phone-login" : "email-login",
            loginTime: new Date().toISOString(),
          }),
        });
      } catch (sheetError) {
        console.error("Google Sheet save failed:", sheetError);
      }
    }

    const demoUser = {
      id: Date.now(),
      name: cleanEmail ? cleanEmail.split("@")[0] : cleanPhone,
      email: cleanEmail,
      phone: cleanPhone,
    };

    const token = jwt.sign(
      {
        id: demoUser.id,
        email: demoUser.email,
        phone: demoUser.phone,
        name: demoUser.name,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.json({
      success: true,
      message: "Login successful.",
      token,
      user: demoUser,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during login.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});