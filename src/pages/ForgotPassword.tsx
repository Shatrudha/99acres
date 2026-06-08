import { useState } from "react";
import { ChevronDown, Mic, Search, Target, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#06152e]">
      <header className="flex h-[78px] items-center bg-[#0060a9] px-6 text-white shadow md:px-[74px]">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mr-8 whitespace-nowrap text-[30px] font-extrabold tracking-[-1px] text-white"
        >
          99acres
        </button>

        <div className="hidden h-[52px] max-w-[860px] flex-1 grid-cols-[74px_minmax(0,1fr)_52px_52px_1px_66px] items-center rounded bg-white text-[#06152e] md:grid">
          <button
            type="button"
            className="flex h-full items-center justify-center gap-1 border-r border-slate-200 text-[16px] font-bold"
          >
            Buy
            <ChevronDown size={15} strokeWidth={2.8} />
          </button>

          <input
            className="h-full min-w-0 px-5 text-[16px] font-medium text-slate-700 outline-none placeholder:text-slate-500"
            placeholder="Enter Locality / Project / Society / Landmark"
          />

          <button
            type="button"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f8ff] text-[#0078d7]"
          >
            <Target size={20} strokeWidth={2.7} />
          </button>

          <button
            type="button"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f8ff] text-[#0078d7]"
          >
            <Mic size={20} strokeWidth={2.6} />
          </button>

          <span className="h-7 w-px bg-slate-200" />

          <button
            type="button"
            className="flex h-full items-center justify-center text-[#26364f]"
          >
            <Search size={28} strokeWidth={2.4} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => navigate("/post-property")}
          className="ml-auto hidden h-[40px] shrink-0 items-center gap-2 rounded-lg bg-white px-6 text-[16px] font-bold text-[#06152e] md:flex"
        >
          <span>Post property</span>
          <span className="rounded bg-green-600 px-2 py-[3px] text-[10px] font-extrabold leading-none text-white">
            FREE
          </span>
        </button>

        <UserCircle className="ml-6 hidden md:block" size={30} />
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        {!submitted ? (
          <div className="max-w-[520px]">
            <h1 className="text-[30px] font-extrabold">
              Forgot Password
            </h1>

            <p className="mt-4 text-[16px] leading-6 text-slate-500">
              Enter your email id linked with your account. We will send you a
              password reset link.
            </p>

            <div className="mt-8 h-[68px] border border-blue-500 px-3 py-2">
              <p className="text-[12px] font-bold text-blue-600">
                Email Id/Username
              </p>

              <input
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full text-[17px] outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="mt-7 h-[52px] w-full rounded bg-blue-600 text-[18px] font-extrabold text-white"
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="py-5 text-[18px] leading-8 text-slate-600">
            <p>
              If your email is linked to an existing account, we’ve sent you a
              password reset link. Check your inbox and click the link to reset
              your password.
            </p>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-4 text-[20px] font-semibold text-blue-600"
            >
              Click here to go back
            </button>
          </div>
        )}
      </section>

      <footer className="bg-[#121a20] px-10 py-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[0.9fr_0.8fr_1.45fr_1.6fr]">
          <div>
            <h3 className="mb-5 text-[18px] font-extrabold">99acres</h3>
            <div className="space-y-4 text-[14px] font-bold">
              <p>Mobile Apps</p>
              <p>Our Services</p>
              <p>Price Trends</p>
              <p>Post your Property</p>
              <p>Real Estate Investments</p>
              <p>Builders in India</p>
              <p>Area Converter</p>
              <p>Articles</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[18px] font-extrabold">Company</h3>
            <div className="space-y-4 text-[14px] font-bold">
              <p>About us</p>
              <p>Contact us</p>
              <p>Careers with us</p>
              <p>Terms & Conditions</p>
              <p>Request Info</p>
              <p>Feedback</p>
              <p>Report a problem</p>
              <p>Testimonials</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[18px] font-extrabold">Our Partners</h3>
            <div className="space-y-4 text-[14px] font-bold">
              <p>Naukri.com - Jobs in India</p>
              <p>Naukrigulf.com - Jobs in middle east</p>
              <p>Jeevansathi.com - Matrimonials</p>
              <p>Brijj.com - Professional Networking</p>
              <p>Shiksha.com - Education Career Info</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[18px] font-extrabold">Contact Us</h3>
            <p className="text-[14px] font-bold">Toll Free - 1800 41 99099</p>
            <p className="mt-1 text-[12px] font-semibold text-white/60">
              9:30 AM to 6:30 PM (Mon-Sun)
            </p>

            <p className="mt-7 text-[16px] font-semibold">
              Email - feedback@99acres.com
            </p>

            <h4 className="mt-8 text-[18px] font-extrabold">
              Connect with us
            </h4>

            <div className="mt-5 flex gap-7 text-[26px] font-bold">
              <span>f</span>
              <span>▶</span>
              <span>♥</span>
              <span>◎</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default ForgotPassword;