import { Heart, MapPin, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { properties } from "../data/properties";

function SavedProperties() {
  const navigate = useNavigate();

  const savedProperties = properties.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showSearch />

      <section className="px-10 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#06152e] to-blue-700 p-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Saved Properties
          </p>

          <h1 className="mt-4 text-5xl font-extrabold">
            Your shortlisted properties
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-blue-100">
            View properties you liked and compare them before contacting sellers.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {savedProperties.map((property) => (
            <article
              key={property.id}
              className="grid grid-cols-[320px_1fr_auto] gap-6 rounded-3xl bg-white p-5 shadow-sm"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-[220px] w-full rounded-2xl object-cover"
              />

              <div className="py-2">
                <span className="rounded bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
                  {property.tag}
                </span>

                <h2 className="mt-4 text-3xl font-extrabold text-[#06152e]">
                  {property.title}
                </h2>

                <p className="mt-3 flex items-center gap-2 text-lg text-slate-500">
                  <MapPin size={20} />
                  {property.location}
                </p>

                <div className="mt-6 grid grid-cols-4 gap-5">
                  <div>
                    <p className="text-sm text-slate-400">Price</p>
                    <p className="text-xl font-bold">{property.price}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Area</p>
                    <p className="text-xl font-bold">{property.area}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Bedrooms</p>
                    <p className="text-xl font-bold">{property.bedrooms}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Type</p>
                    <p className="text-xl font-bold">{property.type}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => navigate(`/property/${property.id}`)}
                    className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
                  >
                    View Details
                  </button>

                  <button className="rounded-xl border border-blue-600 px-6 py-3 font-bold text-blue-600">
                    Contact Seller
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between py-2">
                <div className="rounded-full bg-red-50 p-4 text-red-500">
                  <Heart fill="currentColor" />
                </div>

                <button className="flex items-center gap-2 rounded-xl border px-5 py-3 font-bold text-slate-600">
                  <Trash2 size={20} />
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedProperties;