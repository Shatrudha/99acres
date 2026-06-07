import { Building2, CheckCircle2, UsersRound } from "lucide-react";
import SiteHeader from "../components/SiteHeader";

function AboutUs() {
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showSearch />

      <section className="px-10 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#06152e] to-blue-700 p-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            About EstateHub
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-tight">
            A modern real estate platform for buyers, tenants, owners and dealers
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-blue-100">
            EstateHub helps people discover verified properties, compare options
            and connect with genuine sellers across India.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <Building2 className="text-blue-600" size={36} />
            <h2 className="mt-4 text-2xl font-bold text-[#06152e]">
              Verified Listings
            </h2>
            <p className="mt-2 text-slate-500">
              Explore apartments, villas, commercial spaces and plots with
              clean property information.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <UsersRound className="text-blue-600" size={36} />
            <h2 className="mt-4 text-2xl font-bold text-[#06152e]">
              Trusted Sellers
            </h2>
            <p className="mt-2 text-slate-500">
              Connect with owners, dealers and builders through a simple contact
              flow.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <CheckCircle2 className="text-blue-600" size={36} />
            <h2 className="mt-4 text-2xl font-bold text-[#06152e]">
              Easy Experience
            </h2>
            <p className="mt-2 text-slate-500">
              Search, shortlist, post and manage properties from one modern
              dashboard.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#06152e]">
            Our Mission
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our mission is to make property discovery easier, faster and more
            transparent. We want users to compare properties, understand local
            markets and contact the right people without confusion.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;