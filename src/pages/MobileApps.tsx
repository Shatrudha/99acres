import { Menu, UserCircle, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MobileApps() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#eef8ff] text-[#06152e]">
      <header className="flex h-[92px] items-center justify-between bg-[#0060a9] px-[72px] text-white shadow">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-[34px] font-extrabold tracking-[-1px] text-white"
        >
          99acres
        </button>

        <div className="flex items-center gap-8">
          <button className="relative flex items-center text-white">
            <UserCircle size={30} />
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-[#0060a9]" />
            <ChevronDown size={17} className="ml-1" />
          </button>

          <button className="flex items-center gap-3 text-[18px] font-bold text-white">
            <Menu size={31} />
            Menu
          </button>
        </div>
      </header>

      <section className="relative mx-auto flex min-h-[620px] max-w-7xl items-center justify-between px-10 py-16">
        <div className="max-w-[620px]">
          <h1 className="text-[38px] font-extrabold leading-tight text-[#06152e]">
            Buy, Rent and Sell Home from app
            <br />
            Anytime! Anywhere!
          </h1>

          <div className="mt-8 flex items-center gap-7 text-[15px] text-slate-600">
            <span>
              Available on Android{" "}
              <b className="ml-2 rounded bg-slate-100 px-2 py-1 text-[11px]">
                4.4
              </b>
            </span>

            <span className="h-6 w-px bg-slate-300" />

            <span>
              Available on IOS{" "}
              <b className="ml-2 rounded bg-slate-100 px-2 py-1 text-[11px]">
                4.6
              </b>
            </span>
          </div>

          <div className="mt-20 flex items-center">
            <input
              className="h-[68px] w-[520px] bg-white px-6 text-[18px] shadow outline-none placeholder:text-[#26364f]"
              placeholder="Enter contact number to get App link on SMS"
            />

            <button className="h-[68px] bg-blue-600 px-8 text-[18px] font-extrabold text-white hover:bg-blue-700">
              Get Link via SMS
            </button>
          </div>

          <p className="mt-4 text-[15px] text-slate-500">
            We respect your privacy! We will only use your no. to send an SMS
            with the link
          </p>
        </div>

        <div className="relative h-[430px] w-[520px]">
          <div className="absolute right-[80px] top-0 h-[430px] w-[250px] rounded-[30px] border-[10px] border-white bg-[#dff2ff] shadow-xl">
            <div className="absolute left-1/2 top-0 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-white" />

            <div className="absolute bottom-20 left-8 flex items-end gap-2">
              <div className="h-[95px] w-12 bg-[#ffb342]" />
              <div className="h-[160px] w-12 bg-[#0d79bd]" />
              <div className="h-[220px] w-12 bg-[#0057a8]" />
              <div className="h-[130px] w-12 bg-[#ffb342]" />
            </div>
          </div>

          <div className="absolute left-0 top-[150px] rounded bg-white px-7 py-4 shadow-xl">
            🏠
            <span className="ml-4 inline-block h-3 w-40 rounded bg-slate-200" />
          </div>

          <div className="absolute right-0 top-[50px] rounded bg-white px-7 py-4 shadow-xl">
            🏡
            <span className="ml-4 inline-block h-3 w-36 rounded bg-slate-200" />
          </div>

          <div className="absolute right-[20px] top-[45px] flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            📞
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-7xl px-10">
        <div className="grid min-h-[150px] grid-cols-[260px_1fr_1fr_1fr] items-center bg-white px-10 shadow">
          <div className="flex items-center gap-5 border-r border-slate-200 pr-8">
            <div className="h-[92px] w-[92px] bg-white text-[48px]">▦</div>
            <p className="text-[19px] font-extrabold leading-7">
              Scan QR code by camera to Install
              <br />
              99Acres App on your phone
            </p>
          </div>

          <div className="text-center">
            <p className="text-[24px] font-extrabold">80,000+</p>
            <p className="mt-2 text-[14px] text-slate-500">
              Verified Properties
            </p>
          </div>

          <div className="border-l border-r border-slate-200 text-center">
            <p className="text-[24px] font-extrabold">5,000,000+</p>
            <p className="mt-2 text-[14px] text-slate-500">
              users downloaded the app
            </p>
          </div>

          <div className="text-center">
            <p className="text-[24px] font-extrabold">97,015</p>
            <p className="mt-2 text-[14px] text-slate-500">
              Customer Reviews you can trust
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MobileApps;