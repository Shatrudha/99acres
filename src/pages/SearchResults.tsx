import { SlidersHorizontal, MapPin, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { properties } from "../data/properties";
import SiteHeader from "../components/SiteHeader";

function SearchResults() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showSearch />

      <section className="grid grid-cols-[280px_1fr] gap-6 px-10 py-8">
        {/* Left filters */}
        <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <SlidersHorizontal size={22} />
            <h2 className="text-xl font-bold text-[#06152e]">Filters</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-bold text-slate-700">Budget</h3>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Under ₹50 Lac
              </label>
              <label className="mt-2 block">
                <input type="checkbox" className="mr-2" />
                ₹50 Lac - ₹1 Cr
              </label>
              <label className="mt-2 block">
                <input type="checkbox" className="mr-2" />
                Above ₹1 Cr
              </label>
            </div>

            <div>
              <h3 className="mb-3 font-bold text-slate-700">Property Type</h3>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Flat / Apartment
              </label>
              <label className="mt-2 block">
                <input type="checkbox" className="mr-2" />
                Villa
              </label>
              <label className="mt-2 block">
                <input type="checkbox" className="mr-2" />
                Commercial
              </label>
            </div>

            <div>
              <h3 className="mb-3 font-bold text-slate-700">Bedrooms</h3>
              <div className="flex flex-wrap gap-2">
                {["1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((item) => (
                  <button
                    key={item}
                    className="rounded-full border px-4 py-2 text-sm font-semibold"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Results */}
        <section>
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#06152e]">
                Properties for Sale
              </h1>
              <p className="mt-1 text-slate-500">
                {properties.length} results found
              </p>
            </div>

            <select className="rounded-lg border bg-white px-4 py-3 font-semibold">
              <option>Sort by Relevance</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="space-y-5">
            {properties.map((property) => (
              <article
                key={property.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="grid grid-cols-[300px_1fr]">
                  <div className="relative h-[230px]">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute left-4 top-4 rounded bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                      {property.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h2 className="text-2xl font-bold text-[#06152e]">
                          {property.title}
                        </h2>

                        <p className="mt-2 flex items-center gap-2 text-slate-500">
                          <MapPin size={18} />
                          {property.location}
                        </p>
                      </div>

                      <button className="rounded-full border p-3 text-slate-500 hover:text-red-500">
                        <Heart size={22} />
                      </button>
                    </div>

                    <div className="mt-6 grid grid-cols-4 gap-4">
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

                    <div className="mt-6 flex items-center justify-between border-t pt-5">
                      <p className="text-sm text-slate-500">
                        Posted by verified seller
                      </p>

                      <div className="flex gap-3">
                        <button className="rounded-lg border border-blue-600 px-6 py-3 font-bold text-blue-600">
                          Contact Owner
                        </button>

                        <button
                          onClick={() => navigate(`/property/${property.id}`)}
                          className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default SearchResults;