import { Mail, Lock, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showActions={false} />

      <section className="flex min-h-[calc(100vh-100px)] items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-5xl grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-sm">
          {/* Left Side */}
          <div className="bg-gradient-to-br from-[#06152e] to-blue-700 p-10 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
              Welcome Back
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight">
              Login to manage your properties
            </h1>

            <p className="mt-5 text-lg text-blue-100">
              Save properties, contact sellers, post listings and manage your
              real estate dashboard from one place.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl bg-white/10 p-5">
                Post properties for free
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                Contact verified owners and dealers
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                Track your saved searches
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10">
            <div className="mx-auto max-w-md">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <UserRound size={32} />
              </div>

              <h2 className="text-4xl font-extrabold text-[#06152e]">
                Sign in
              </h2>

              <p className="mt-2 text-slate-500">
                Enter your details to continue.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block font-bold text-slate-700">
                    Email Address
                  </label>

                  <div className="flex items-center rounded-xl border px-4 py-4">
                    <Mail className="mr-3 text-slate-400" size={22} />
                    <input
                      className="w-full outline-none"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-bold text-slate-700">
                    Password
                  </label>

                  <div className="flex items-center rounded-xl border px-4 py-4">
                    <Lock className="mr-3 text-slate-400" size={22} />
                    <input
                      type="password"
                      className="w-full outline-none"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-bold text-white"
                >
                  Login
                </button>
              </form>

              <p className="mt-6 text-center text-slate-500">
                New user?{" "}
                <button
                  onClick={() => navigate("/post-property")}
                  className="font-bold text-blue-600"
                >
                  Post your first property
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;