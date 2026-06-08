import { Heart, Menu, Search, Share2, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SiteHeaderProps = {
  showSearch?: boolean;
  showActions?: boolean;
};

function SiteHeader({ showSearch = false, showActions = true }: SiteHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white px-4 py-3 shadow-sm md:px-8 md:py-4">
      <div className="flex items-center gap-3 md:gap-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="whitespace-nowrap text-2xl font-extrabold text-[#06152e] md:text-4xl"
        >
          estate<span className="text-blue-500">hub</span>
        </button>

        {showSearch && (
          <div className="hidden flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 md:flex">
            <Search className="mr-3 shrink-0 text-slate-500" size={22} />

            <input
              className="w-full min-w-0 bg-transparent text-lg outline-none"
              placeholder="Search city, locality, project or builder"
              defaultValue="Flats in Gurgaon"
            />

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
            >
              Search
            </button>
          </div>
        )}

        {showActions && (
          <div className="ml-auto flex items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => navigate("/post-property")}
              className="hidden rounded-lg border border-[#06152e] px-6 py-3 text-lg font-bold text-[#06152e] md:block"
            >
              Post Property FREE
            </button>

            <button
              type="button"
              onClick={() => navigate("/saved-properties")}
              className="hidden rounded-full border border-[#06152e] p-3 text-[#06152e] sm:flex"
            >
              <Heart size={22} />
            </button>

            <button
              type="button"
              onClick={() => navigate("/compare")}
              className="hidden rounded-full border border-[#06152e] p-3 text-[#06152e] sm:flex"
            >
              <Share2 size={22} />
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-full border border-[#06152e] p-2.5 text-[#06152e] md:p-3"
            >
              <UserRound size={22} />
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded-full border border-[#06152e] p-2.5 text-[#06152e] md:hidden"
            >
              <Menu size={23} />
            </button>
          </div>
        )}
      </div>

      {showSearch && (
        <div className="mt-3 flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 md:hidden">
          <Search className="mr-2 shrink-0 text-slate-500" size={20} />

          <input
            className="w-full min-w-0 bg-transparent text-sm outline-none"
            placeholder="Search city, locality, project"
            defaultValue="Flats in Gurgaon"
          />

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white"
          >
            Search
          </button>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;