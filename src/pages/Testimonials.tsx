import { ChevronDown, Menu, Search, Target, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cityTabs = [
  "Delhi/NCR",
  "Mumbai",
  "Pune",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
  "Kochi",
  "Other Cities",
];

const testimonials = [
  {
    name: "Mitul Thakar",
    role: "Owner Chandkheda, Ahmedabad North",
    text:
      "I want to express my heartfelt gratitude for the exceptional support your platform provided in helping me successfully sell my property. Your user-friendly interface, vast network of potential buyers, and excellent service played a crucial role in achieving this milestone.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
  },
  {
    name: "Srikanth Malleboina",
    role: "Owner, Hyderabad",
    text:
      "You get an exclusive RM from 99acres team who tracks your property closely and helps you reach genuine buyers faster.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2?q=80&w=100&auto=format&fit=crop",
  },
  {
    name: "Prateek Sengar",
    role: "Owner, Delhi",
    text:
      "99acres has a better response rate compared to any of their competitors. The platform helped me connect with serious buyers quickly.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop",
  },
];

function Testimonials() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-[#06152e]">
      <header className="sticky top-0 z-[100] flex h-[86px] items-center bg-[#0060a9] px-[72px] text-white shadow">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mr-12 whitespace-nowrap text-[34px] font-extrabold tracking-[-1px] text-white"
        >
          99acres
        </button>

        <div className="mx-auto grid h-[54px] max-w-[920px] flex-1 grid-cols-[80px_minmax(0,1fr)_56px_1px_72px] items-center rounded bg-white text-[#06152e]">
          <button
            type="button"
            className="flex h-full items-center justify-center gap-1 border-r border-slate-200 text-[17px] font-bold"
          >
            Buy
            <ChevronDown size={16} strokeWidth={2.8} />
          </button>

          <input
            className="h-full min-w-0 px-5 text-[17px] font-medium outline-none placeholder:text-slate-500"
            placeholder="Enter Locality / Project / Society / Landmark"
          />

          <button
            type="button"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600"
          >
            <Target size={21} strokeWidth={2.7} />
          </button>

          <span className="h-8 w-px bg-slate-200" />

          <button
            type="button"
            className="flex h-full items-center justify-center text-[#26364f]"
          >
            <Search size={30} strokeWidth={2.4} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => navigate("/post-property")}
          className="ml-8 flex h-[44px] shrink-0 items-center gap-2 rounded-lg bg-white px-7 text-[17px] font-bold text-[#06152e]"
        >
          Post property
          <span className="rounded bg-green-600 px-2 py-[3px] text-[10px] font-extrabold text-white">
            FREE
          </span>
        </button>

        <button className="relative ml-8 text-white">
          <UserCircle size={30} />
          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-[#0060a9]" />
        </button>

        <button className="ml-8 text-white">
          <Menu size={31} />
        </button>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 text-[16px] font-medium text-slate-600">
          <button onClick={() => navigate("/")} className="hover:text-blue-600">
            Home
          </button>{" "}
          &gt; <span>Testimonials</span>
        </div>

        <div className="flex h-[250px] flex-col items-center justify-center rounded-lg bg-blue-50">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-[32px]">
            💙
          </div>

          <h1 className="font-serif text-[32px] font-extrabold italic text-[#06152e]">
            Testimonials
          </h1>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {cityTabs.map((city) => (
            <button
              key={city}
              type="button"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-[16px] font-medium text-slate-600 shadow-sm hover:border-blue-300 hover:text-blue-600"
            >
              {city}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative rounded-xl border border-slate-200 bg-white px-7 py-7 shadow-sm"
            >
              <span className="absolute -left-5 -top-5 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-[24px] text-orange-400">
                “
              </span>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-[18px] font-extrabold text-[#06152e]">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="mt-7 text-[17px] leading-7 text-[#06152e]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Testimonials;