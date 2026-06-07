import { Building2, CheckCircle2, Home, MapPin } from "lucide-react";
import SiteHeader from "../components/SiteHeader";

function PostProperty() {
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showActions={false} />

      <section className="px-10 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Post Property for Free
            </p>

            <h1 className="mt-3 text-4xl font-extrabold text-[#06152e]">
              Sell or Rent your property faster
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              Add your property details and connect with genuine buyers and
              tenants.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-blue-50 p-5">
                <Home className="text-blue-600" size={30} />
                <h3 className="mt-3 text-lg font-bold">Residential</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Flats, villas, builder floors
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5">
                <Building2 className="text-blue-600" size={30} />
                <h3 className="mt-3 text-lg font-bold">Commercial</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Offices, shops, showrooms
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5">
                <MapPin className="text-blue-600" size={30} />
                <h3 className="mt-3 text-lg font-bold">Plots / Land</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Residential and commercial plots
                </p>
              </div>
            </div>
          </div>

          <form className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#06152e]">
              Property Details
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Property For
                </label>
                <select className="w-full rounded-xl border px-4 py-4 outline-none">
                  <option>Sell</option>
                  <option>Rent</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Property Type
                </label>
                <select className="w-full rounded-xl border px-4 py-4 outline-none">
                  <option>Flat / Apartment</option>
                  <option>Villa</option>
                  <option>Independent House</option>
                  <option>Commercial Office</option>
                  <option>Plot / Land</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Property Title
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-4 outline-none"
                  placeholder="Example: 3 BHK Luxury Apartment"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Location
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-4 outline-none"
                  placeholder="Example: Sector 88A, Gurugram"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Price
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-4 outline-none"
                  placeholder="Example: ₹85 Lac"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Area
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-4 outline-none"
                  placeholder="Example: 1250 sq.ft."
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Bedrooms
                </label>
                <select className="w-full rounded-xl border px-4 py-4 outline-none">
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                  <option>5 BHK+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Your Mobile Number
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-4 outline-none"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-bold text-slate-700">
                Description
              </label>
              <textarea
                className="min-h-[130px] w-full rounded-xl border px-4 py-4 outline-none"
                placeholder="Write property description..."
              />
            </div>

            <div className="mt-6 rounded-2xl bg-green-50 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                <p className="font-bold text-green-800">
                  Your property will be visible to buyers after submission.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white"
            >
              Submit Property
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default PostProperty;