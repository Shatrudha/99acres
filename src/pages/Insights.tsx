import { ArrowRight, BarChart3, CalendarDays, Home, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

const insightArticles = [
  {
    id: 1,
    title: "Gurugram property market sees strong demand in premium housing",
    category: "Market Trends",
    date: "03 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
    description:
      "Premium residential projects continue to attract buyers due to better connectivity, lifestyle amenities and long-term investment potential.",
  },
  {
    id: 2,
    title: "Top localities to buy a home in Noida this year",
    category: "Buying Guide",
    date: "02 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=900&auto=format&fit=crop",
    description:
      "Explore popular sectors in Noida for families, working professionals and investors looking for modern apartments.",
  },
  {
    id: 3,
    title: "Commercial office spaces gaining popularity in Cyber City",
    category: "Commercial",
    date: "01 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop",
    description:
      "Demand for ready-to-move commercial spaces is rising as businesses prefer flexible and well-connected office locations.",
  },
];

function Insights() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader showSearch />

      <section className="px-10 py-10">
        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-[#06152e] to-blue-700 p-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Real Estate Insights
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-tight">
            Property market updates, buying guides and investment tips
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-blue-100">
            Stay updated with latest trends, top localities, price movements and
            smart property buying advice.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <TrendingUp className="text-blue-600" size={34} />
            <h3 className="mt-4 text-2xl font-bold text-[#06152e]">
              Price Trends
            </h3>
            <p className="mt-2 text-slate-500">
              Track locality-wise property price movements.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <BarChart3 className="text-blue-600" size={34} />
            <h3 className="mt-4 text-2xl font-bold text-[#06152e]">
              Market Reports
            </h3>
            <p className="mt-2 text-slate-500">
              Understand demand, supply and buyer activity.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <Home className="text-blue-600" size={34} />
            <h3 className="mt-4 text-2xl font-bold text-[#06152e]">
              Buying Advice
            </h3>
            <p className="mt-2 text-slate-500">
              Learn how to choose the right property.
            </p>
          </div>
        </div>

        {/* Articles */}
        <section className="mt-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Latest Articles
              </p>
              <h2 className="mt-2 text-4xl font-extrabold text-[#06152e]">
                Read latest real estate insights
              </h2>
            </div>

            <button
              onClick={() => navigate("/search")}
              className="rounded-xl border border-blue-600 px-6 py-3 font-bold text-blue-600"
            >
              Explore Properties
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {insightArticles.map((article) => (
              <article
                key={article.id}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[230px] w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                      {article.category}
                    </span>

                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays size={16} />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-snug text-[#06152e]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-slate-500">{article.description}</p>

                  <button className="mt-5 flex items-center gap-2 font-bold text-blue-600">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Insights;