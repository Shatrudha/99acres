import {
  Building2,
  Eye,
  Heart,
  Home,
  MessageCircle,
  PlusCircle,
  Search,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { properties } from "../data/properties";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showSearch />

      <section className="px-10 py-8">
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-[#06152e] to-blue-700 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            User Dashboard
          </p>

          <h1 className="mt-3 text-4xl font-extrabold">
            Welcome back, Property Manager
          </h1>

          <p className="mt-2 text-lg text-blue-100">
            Manage your saved properties, listings, leads and profile from one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Home />
            </div>
            <p className="mt-4 text-slate-500">My Listings</p>
            <h2 className="text-3xl font-extrabold text-[#06152e]">12</h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <Heart />
            </div>
            <p className="mt-4 text-slate-500">Saved Properties</p>
            <h2 className="text-3xl font-extrabold text-[#06152e]">8</h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <MessageCircle />
            </div>
            <p className="mt-4 text-slate-500">New Leads</p>
            <h2 className="text-3xl font-extrabold text-[#06152e]">24</h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Eye />
            </div>
            <p className="mt-4 text-slate-500">Total Views</p>
            <h2 className="text-3xl font-extrabold text-[#06152e]">1.2k</h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <UserRound />
              </div>

              <div>
                <h3 className="font-bold text-[#06152e]">Demo User</h3>
                <p className="text-sm text-slate-500">demo@estatehub.com</p>
              </div>
            </div>

            <div className="space-y-2">
              <button className="flex w-full items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 font-bold text-white">
                <Home size={20} />
                Dashboard
              </button>

              <button
                onClick={() => navigate("/post-property")}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold text-slate-600 hover:bg-slate-50"
              >
                <PlusCircle size={20} />
                Post Property
              </button>

              <button
                onClick={() => navigate("/search")}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold text-slate-600 hover:bg-slate-50"
              >
                <Search size={20} />
                Search Properties
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold text-slate-600 hover:bg-slate-50">
                <Heart size={20} />
                Saved Properties
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold text-slate-600 hover:bg-slate-50">
                <MessageCircle size={20} />
                Leads
              </button>
            </div>
          </aside>

          {/* Main */}
          <section className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#06152e]">
                    My Recent Listings
                  </h2>
                  <p className="mt-1 text-slate-500">
                    Recently posted and promoted properties
                  </p>
                </div>

                <button
                  onClick={() => navigate("/post-property")}
                  className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
                >
                  Add New Listing
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {properties.slice(0, 3).map((property) => (
                  <div
                    key={property.id}
                    className="grid grid-cols-[160px_1fr_auto] gap-5 rounded-2xl border p-4"
                  >
                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-[120px] w-full rounded-xl object-cover"
                    />

                    <div>
                      <span className="rounded bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
                        {property.tag}
                      </span>

                      <h3 className="mt-3 text-xl font-bold text-[#06152e]">
                        {property.title}
                      </h3>

                      <p className="mt-1 text-slate-500">{property.location}</p>

                      <div className="mt-3 flex gap-5">
                        <p className="font-bold">{property.price}</p>
                        <p className="font-bold">{property.area}</p>
                        <p className="font-bold">{property.bedrooms}</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <span className="rounded-full bg-green-50 px-4 py-2 text-center text-sm font-bold text-green-700">
                        Active
                      </span>

                      <button
                        onClick={() => navigate(`/property/${property.id}`)}
                        className="rounded-lg border border-blue-600 px-5 py-3 font-bold text-blue-600"
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-[#06152e]">
                  Recent Leads
                </h2>

                <div className="mt-5 space-y-4">
                  {["Rahul Sharma", "Ankit Verma", "Priya Singh"].map(
                    (name, index) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-xl border p-4"
                      >
                        <div>
                          <h3 className="font-bold">{name}</h3>
                          <p className="text-sm text-slate-500">
                            Interested in Property #{index + 1}
                          </p>
                        </div>

                        <button className="rounded-lg bg-blue-50 px-4 py-2 font-bold text-blue-600">
                          Call
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-[#06152e]">
                  Quick Actions
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => navigate("/post-property")}
                    className="rounded-2xl border p-5 text-left hover:bg-slate-50"
                  >
                    <PlusCircle className="text-blue-600" />
                    <p className="mt-3 font-bold">Post Property</p>
                  </button>

                  <button
                    onClick={() => navigate("/search")}
                    className="rounded-2xl border p-5 text-left hover:bg-slate-50"
                  >
                    <Search className="text-blue-600" />
                    <p className="mt-3 font-bold">Find Property</p>
                  </button>

                  <button className="rounded-2xl border p-5 text-left hover:bg-slate-50">
                    <Building2 className="text-blue-600" />
                    <p className="mt-3 font-bold">My Projects</p>
                  </button>

                  <button className="rounded-2xl border p-5 text-left hover:bg-slate-50">
                    <MessageCircle className="text-blue-600" />
                    <p className="mt-3 font-bold">View Leads</p>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;