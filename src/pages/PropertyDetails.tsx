import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  CalendarDays,
  Car,
  CheckCircle2,
  Home,
  MapPin,
  Phone,
  Ruler,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { properties } from "../data/properties";
import SiteHeader from "../components/SiteHeader";

function PropertyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <main className="min-h-screen bg-slate-50 p-10">
        <h1 className="text-3xl font-bold text-[#06152e]">
          Property not found
        </h1>

        <button
          onClick={() => navigate("/search")}
          className="mt-5 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
        >
          Back to Search
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader />
      <section className="px-10 py-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-5 flex items-center gap-2 font-bold text-blue-600"
        >
          <ArrowLeft size={20} />
          Back to results
        </button>

        {/* Main Layout */}
        <div className="grid grid-cols-[1fr_360px] gap-6">
          {/* Left Content */}
          <section className="space-y-6">
            {/* Gallery */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="grid grid-cols-[2fr_1fr] gap-2 p-2">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-[430px] w-full rounded-xl object-cover"
                />

                <div className="grid gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=900&auto=format&fit=crop"
                    alt="Property room"
                    className="h-[210px] w-full rounded-xl object-cover"
                  />

                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=900&auto=format&fit=crop"
                      alt="Property interior"
                      className="h-[210px] w-full rounded-xl object-cover brightness-75"
                    />

                    <button className="absolute inset-0 m-auto h-fit w-fit rounded-lg bg-white px-5 py-3 font-bold text-[#06152e]">
                      View all photos
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Title Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="rounded bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                    {property.tag}
                  </span>

                  <h1 className="mt-4 text-4xl font-bold text-[#06152e]">
                    {property.title}
                  </h1>

                  <p className="mt-3 flex items-center gap-2 text-xl text-slate-500">
                    <MapPin size={22} />
                    {property.location}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-400">Price</p>
                  <p className="text-4xl font-extrabold text-[#06152e]">
                    {property.price}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-4 gap-4 border-t pt-6">
                <div className="rounded-xl bg-slate-50 p-4">
                  <Ruler className="mb-3 text-blue-600" />
                  <p className="text-sm text-slate-400">Super Area</p>
                  <p className="text-xl font-bold">{property.area}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <BedDouble className="mb-3 text-blue-600" />
                  <p className="text-sm text-slate-400">Bedrooms</p>
                  <p className="text-xl font-bold">{property.bedrooms}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <Bath className="mb-3 text-blue-600" />
                  <p className="text-sm text-slate-400">Bathrooms</p>
                  <p className="text-xl font-bold">3 Baths</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <Home className="mb-3 text-blue-600" />
                  <p className="text-sm text-slate-400">Type</p>
                  <p className="text-xl font-bold">{property.type}</p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#06152e]">
                Property Overview
              </h2>

              <div className="mt-6 grid grid-cols-3 gap-5">
                <div className="flex gap-3 rounded-xl border p-4">
                  <Building2 className="text-blue-600" />
                  <div>
                    <p className="text-sm text-slate-400">Project</p>
                    <p className="font-bold">Arya Residences</p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border p-4">
                  <CalendarDays className="text-blue-600" />
                  <div>
                    <p className="text-sm text-slate-400">Possession</p>
                    <p className="font-bold">Ready to Move</p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border p-4">
                  <Car className="text-blue-600" />
                  <div>
                    <p className="text-sm text-slate-400">Parking</p>
                    <p className="font-bold">Covered Parking</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                This premium property offers spacious rooms, modern interiors,
                excellent connectivity and high-end amenities. It is suitable
                for families looking for comfort, security and a peaceful living
                experience.
              </p>
            </div>

            {/* Amenities */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#06152e]">Amenities</h2>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  "Swimming Pool",
                  "Gymnasium",
                  "Power Backup",
                  "Club House",
                  "24x7 Security",
                  "Lift",
                  "Park",
                  "Visitor Parking",
                  "CCTV",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600" size={22} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Right Contact Box */}
          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#06152e]">
              Contact Seller
            </h2>

            <p className="mt-2 text-slate-500">
              Get owner/dealer contact details instantly.
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-400">Posted by</p>
              <p className="text-xl font-bold">Verified Seller</p>
              <p className="mt-1 text-slate-500">EstateHub Partner</p>
            </div>

            <input
              className="mt-5 w-full rounded-lg border px-4 py-3 outline-none"
              placeholder="Your name"
            />

            <input
              className="mt-3 w-full rounded-lg border px-4 py-3 outline-none"
              placeholder="Mobile number"
            />

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-lg font-bold text-white">
              <Phone size={22} />
              Contact Owner
            </button>

            <button className="mt-3 w-full rounded-lg border border-blue-600 px-6 py-4 text-lg font-bold text-blue-600">
              Request Callback
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default PropertyDetails;