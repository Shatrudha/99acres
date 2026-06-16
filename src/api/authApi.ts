const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxjZ-Vny2fLkdH4ABHo6sI8lGy0BfWYBeR0jrc-Q1z3AHVebxx6AW03VRksTZQd_CXnfg/exec";

export type AuthResponse = {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id?: string | number;
    name?: string;
    email?: string;
    phone?: string;
    countryCode?: string;
  };
};

type GoogleSheetLoginPayload = {
  email?: string;
  phone?: string;
  countryCode?: string;
  source: "phone-login" | "email-login" | "register-login";
};

export async function saveLoginToGoogleSheet(
  payload: GoogleSheetLoginPayload
): Promise<AuthResponse> {
  const now = new Date().toISOString();

  await fetch(GOOGLE_SHEET_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      email: payload.email || "",
      phone: payload.phone || "",
      countryCode: payload.countryCode || "",
      source: payload.source,
      loginTime: now,
    }),
  });

  const demoUser = {
    id: Date.now(),
    name: payload.email
      ? payload.email.split("@")[0]
      : payload.phone || "Guest User",
    email: payload.email || "",
    phone: payload.phone || "",
    countryCode: payload.countryCode || "",
  };

  return {
    success: true,
    message: "Login successful.",
    token: `demo-token-${Date.now()}`,
    user: demoUser,
  };
}

export async function loginWithEmailPassword(
  email: string,
  _password: string
): Promise<AuthResponse> {
  return saveLoginToGoogleSheet({
    email: email.trim().toLowerCase(),
    source: "email-login",
  });
}

export async function registerWithEmailPassword(
  name: string,
  email: string,
  _password: string
): Promise<AuthResponse> {
  return saveLoginToGoogleSheet({
    email: email.trim().toLowerCase(),
    source: "register-login",
  });
}