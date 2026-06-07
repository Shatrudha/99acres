import {
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  MapPin,
  Ruler,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { properties } from "../data/properties";

function CompareProperties() {
  const navigate = useNavigate();

  const compareProperties = properties.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showSearch />

      <section className="px-10 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#06152e] to-blue-700 p-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Compare Properties
          </p>

          <h1 className="mt-4 text-5xl font-extrabold">
            Compare shortlisted properties
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-blue-100">
            Compare price, location, area, bedrooms, amenities and property type
            before making a decision.
          </p>
        </div>

        {/* Property cards */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          {compareProperties.map((property) => (
            <article
              key={property.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-[230px] w-full object-cover"
                />

                <button className="absolute right-4 top-4 rounded-full bg-white p-3 text-slate-600 shadow">
                  <X size={20} />
                </button>

                <span className="absolute left-4 top-4 rounded bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  {property.tag}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-extrabold text-[#06152e]">
                  {property.title}
                </h2>

                <p className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={18} />
                  {property.location}
                </p>

                <button
                  onClick={() => navigate(`/property/${property.id}`)}
                  className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Compare table */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="border-b p-6">
            <h2 className="text-3xl font-extrabold text-[#06152e]">
              Comparison Table
            </h2>
            <p className="mt-1 text-slate-500">
              Check all important property details side by side.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="w-[220px] border-b p-5 text-lg font-bold text-[#06152e]">
                    Feature
                  </th>

                  {compareProperties.map((property) => (
                    <th
                      key={property.id}
                      className="min-w-[300px] border-b p-5 text-lg font-bold text-[#06152e]"
                    >
                      {property.title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border-b p-5 font-bold text-slate-600">
                    Price
                  </td>
                  {compareProperties.map((property) => (
                    <td
                      key={property.id}
                      className="border-b p-5 text-xl font-extrabold text-[#06152e]"
                    >
                      {property.price}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border-b p-5 font-bold text-slate-600">
                    Location
                  </td>
                  {compareProperties.map((property) => (
                    <td key={property.id} className="border-b p-5">
                      {property.location}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border-b p-5 font-bold text-slate-600">
                    Area
                  </td>
                  {compareProperties.map((property) => (
                    <td key={property.id} className="border-b p-5">
                      <div className="flex items-center gap-2">
                        <Ruler className="text-blue-600" size={20} />
                        <span className="font-bold">{property.area}</span>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border-b p-5 font-bold text-slate-600">
                    Bedrooms
                  </td>
                  {compareProperties.map((property) => (
                    <td key={property.id} className="border-b p-5">
                      <div className="flex items-center gap-2">
                        <BedDouble className="text-blue-600" size={20} />
                        <span className="font-bold">{property.bedrooms}</span>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border-b p-5 font-bold text-slate-600">
                    Bathrooms
                  </td>
                  {compareProperties.map((property) => (
                    <td key={property.id} className="border-b p-5">
                      <div className="flex items-center gap-2">
                        <Bath className="text-blue-600" size={20} />
                        <span className="font-bold">
                          {property.type === "Commercial" ? "Common" : "3 Baths"}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border-b p-5 font-bold text-slate-600">
                    Type
                  </td>
                  {compareProperties.map((property) => (
                    <td key={property.id} className="border-b p-5">
                      <div className="flex items-center gap-2">
                        <Building2 className="text-blue-600" size={20} />
                        <span className="font-bold">{property.type}</span>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border-b p-5 font-bold text-slate-600">
                    Parking
                  </td>
                  {compareProperties.map((property) => (
                    <td key={property.id} className="border-b p-5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-green-600" size={20} />
                        <span className="font-bold">Available</span>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border-b p-5 font-bold text-slate-600">
                    Security
                  </td>
                  {compareProperties.map((property) => (
                    <td key={property.id} className="border-b p-5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-green-600" size={20} />
                        <span className="font-bold">24x7 Security</span>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-5 font-bold text-slate-600">Action</td>
                  {compareProperties.map((property) => (
                    <td key={property.id} className="p-5">
                      <button
                        onClick={() => navigate(`/property/${property.id}`)}
                        className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
                      >
                        View Property
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CompareProperties;