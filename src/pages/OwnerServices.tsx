import { ChevronDown, Mail, Menu, UserCircle, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import agentImage from "../assets/agent.png";

function OwnerServices() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-[#06152e]">
      <header className="relative z-20 flex h-[86px] items-center justify-between bg-[#071d33] px-[72px] text-white">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-[34px] font-extrabold tracking-[-1px] text-white"
        >
          99acres
        </button>

        <div className="flex items-center gap-10 text-[16px] font-bold text-white/85">
          <button className="flex items-center gap-2">
            <Headphones size={20} />
            Get Support
          </button>

          <button className="relative flex items-center gap-2">
            <UserCircle size={28} />
            <span className="absolute -right-1 top-0 h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-[#071d33]" />
            <ChevronDown size={17} />
          </button>

          <button>
            <Menu size={31} />
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#f7f8fb]">
        <div className="absolute inset-0 z-10 bg-black/65" />

        <div className="relative mx-auto max-w-7xl px-10 py-10">
          <div className="mb-8 flex justify-center">
            <div className="relative z-20 flex rounded-full bg-slate-100 p-1 shadow-lg">
              <button className="rounded-full bg-white px-10 py-3 text-[24px] font-extrabold text-[#06152e] shadow">
                Owners
              </button>
              <button className="px-10 py-3 text-[24px] font-medium text-[#06152e]">
                Dealers
              </button>
              <button className="px-10 py-3 text-[24px] font-medium text-[#06152e]">
                Builders
              </button>
            </div>
          </div>

          <div className="relative z-20 mx-auto w-[560px] rounded-md bg-white px-7 py-8 shadow-2xl">
            <h1 className="text-[28px] font-extrabold text-[#06152e]">
              Login / Register
            </h1>

            <p className="mt-3 text-[18px] text-slate-600">
              Please enter your Phone Number
            </p>

            <div className="mt-10 border border-blue-500 px-3 py-2">
              <p className="mb-1 text-[14px] font-semibold text-blue-600">
                Phone Number
              </p>

              <div className="flex items-center">
                <button className="flex items-center gap-2 border-r pr-5 text-[16px] text-[#06152e]">
                  +91
                  <ChevronDown size={16} className="text-slate-500" />
                </button>

                <input
                  autoFocus
                  className="ml-5 h-8 flex-1 text-[18px] outline-none"
                />
              </div>
            </div>

            <button className="mt-28 h-[58px] w-full rounded bg-[#7bb9ea] text-[22px] font-extrabold text-white">
              Continue
            </button>

            <button className="mt-4 flex h-[58px] w-full items-center justify-center gap-4 border border-slate-300 bg-white text-[20px] font-extrabold text-[#06152e]">
              <Mail size={26} className="text-slate-600" />
              Login with Email
            </button>

            <p className="mt-4 text-[13px] text-slate-500">
              By clicking you agree to{" "}
              <span className="font-bold text-blue-600">
                Terms and Conditions
              </span>
            </p>
          </div>

          <div className="absolute right-10 top-[140px] z-20 rounded-lg bg-white px-8 py-6 shadow-xl">
            <h2 className="text-[23px] font-extrabold text-[#06152e]">
              Are you a Dealer?
            </h2>

            <button className="mt-3 text-[21px] font-bold text-blue-600">
              Continue without Login →
            </button>
          </div>

          <div className="relative z-0 mt-[-80px] grid grid-cols-2 items-end gap-10">
            <div>
              <img
                src={agentImage}
                alt="Owner services"
                className="h-[420px] w-full object-contain opacity-70"
              />
            </div>

            <div className="pb-12">
              <h2 className="text-[58px] font-extrabold leading-tight text-[#06152e] opacity-70">
                100% buyer reach,
                <br />
                guaranteed
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OwnerServices;