import { Mail, MapPin, Phone } from "lucide-react";
import SiteHeader from "../components/SiteHeader";

function ContactUs() {
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showSearch />

      <section className="px-10 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#06152e] to-blue-700 p-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Contact Us
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-tight">
            Need help with buying, renting or posting a property?
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-blue-100">
            Send us your query and our support team will help you.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-[1fr_420px] gap-6">
          <form className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-[#06152e]">
              Send Message
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Your Name
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-4 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Mobile Number
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-4 outline-none"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-bold text-slate-700">
                Email Address
              </label>
              <input
                className="w-full rounded-xl border px-4 py-4 outline-none"
                placeholder="Enter email"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-bold text-slate-700">
                Message
              </label>
              <textarea
                className="min-h-[150px] w-full rounded-xl border px-4 py-4 outline-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="button"
              className="mt-6 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white"
            >
              Submit
            </button>
          </form>

          <aside className="h-fit rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-[#06152e]">
              Contact Details
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                <Phone className="text-blue-600" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-slate-500">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                <Mail className="text-blue-600" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-slate-500">support@estatehub.com</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                <MapPin className="text-blue-600" />
                <div>
                  <h3 className="font-bold">Office</h3>
                  <p className="text-slate-500">
                    Sector 88A, Gurugram, Haryana
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;