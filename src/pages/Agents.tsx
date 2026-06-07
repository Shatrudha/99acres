import {
  BadgeCheck,
  Building2,
  MapPin,
  Phone,
  Search,
  Star,
  UserRound,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";

const agents = [
  {
    id: 1,
    name: "Rajesh Property Consultants",
    type: "Dealer",
    location: "Sector 88A, Gurugram",
    experience: "12+ years",
    properties: 84,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Urban Nest Realty",
    type: "Builder",
    location: "Sector 77, Noida",
    experience: "9+ years",
    properties: 56,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Prime Estate Advisors",
    type: "Dealer",
    location: "Golf Course Road, Gurugram",
    experience: "15+ years",
    properties: 120,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
  },
];

function Agents() {
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showSearch />

      <section className="px-10 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#06152e] to-blue-700 p-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Dealers / Builders
          </p>

          <h1 className="mt-4 text-5xl font-extrabold">
            Find trusted property agents and builders
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-blue-100">
            Connect with verified real estate professionals, dealers and builders
            across top localities.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-[320px_1fr] gap-6">
          {/* Filters */}
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-[#06152e]">
              <Search size={24} />
              Search Agents
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Location
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-4 outline-none"
                  placeholder="Enter city/locality"
                  defaultValue="Gurugram"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Agent Type
                </label>
                <select className="w-full rounded-xl border px-4 py-4 outline-none">
                  <option>All</option>
                  <option>Dealer</option>
                  <option>Builder</option>
                  <option>Owner</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Experience
                </label>

                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  5+ years
                </label>

                <label className="mt-2 block">
                  <input type="checkbox" className="mr-2" />
                  10+ years
                </label>

                <label className="mt-2 block">
                  <input type="checkbox" className="mr-2" />
                  15+ years
                </label>
              </div>

              <button className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Agent cards */}
          <section>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-4xl font-extrabold text-[#06152e]">
                  Top Agents & Builders
                </h2>
                <p className="mt-1 text-slate-500">
                  {agents.length} verified professionals found
                </p>
              </div>

              <select className="rounded-xl border bg-white px-5 py-4 font-bold">
                <option>Sort by Rating</option>
                <option>Most Properties</option>
                <option>Most Experience</option>
              </select>
            </div>

            <div className="space-y-5">
              {agents.map((agent) => (
                <article
                  key={agent.id}
                  className="grid grid-cols-[180px_1fr_auto] gap-6 rounded-3xl bg-white p-6 shadow-sm"
                >
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="h-[170px] w-full rounded-2xl object-cover"
                  />

                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                      <BadgeCheck size={18} />
                      Verified {agent.type}
                    </span>

                    <h3 className="mt-4 text-3xl font-extrabold text-[#06152e]">
                      {agent.name}
                    </h3>

                    <p className="mt-3 flex items-center gap-2 text-slate-500">
                      <MapPin size={18} />
                      {agent.location}
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-4">
                      <div className="rounded-xl bg-slate-50 p-4">
                        <UserRound className="mb-2 text-blue-600" />
                        <p className="text-sm text-slate-400">Experience</p>
                        <p className="font-bold">{agent.experience}</p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-4">
                        <Building2 className="mb-2 text-blue-600" />
                        <p className="text-sm text-slate-400">Properties</p>
                        <p className="font-bold">{agent.properties}</p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-4">
                        <Star className="mb-2 text-blue-600" />
                        <p className="text-sm text-slate-400">Rating</p>
                        <p className="font-bold">{agent.rating}/5</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <button className="rounded-xl border border-blue-600 px-6 py-3 font-bold text-blue-600">
                      View Profile
                    </button>

                    <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white">
                      <Phone size={20} />
                      Contact
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Agents;