import { Heart, Search, Share2, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SiteHeaderProps = {
  showSearch?: boolean;
  showActions?: boolean;
};

function SiteHeader({ showSearch = false, showActions = true }: SiteHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white px-8 py-4 shadow-sm">
      <div className="flex items-center gap-8">
        <button
          onClick={() => navigate("/")}
          className="text-4xl font-extrabold text-[#06152e]"
        >
          estate<span className="text-blue-500">hub</span>
        </button>

        {showSearch && (
          <div className="flex flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <Search className="mr-3 text-slate-500" size={22} />

            <input
              className="w-full bg-transparent text-lg outline-none"
              placeholder="Search city, locality, project or builder"
              defaultValue="Flats in Gurgaon"
            />

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white">
              Search
            </button>
          </div>
        )}

        {showActions && (
         <div className="ml-auto flex items-center gap-4">
  <button
    onClick={() => navigate("/post-property")}
    className="rounded-lg border border-[#06152e] px-6 py-3 text-lg font-bold text-[#06152e]"
  >
    Post Property FREE
  </button>

 <button
  onClick={() => navigate("/saved-properties")}
  className="rounded-full border border-[#06152e] p-3 text-[#06152e]"
>
  <Heart size={24} />
</button>

  <button
  onClick={() => navigate("/compare")}
  className="rounded-full border border-[#06152e] p-3 text-[#06152e]"
>
  <Share2 size={24} />
</button>

  <button
    onClick={() => navigate("/login")}
    className="rounded-full border border-[#06152e] p-3 text-[#06152e]"
  >
    <UserRound size={24} />
  </button>
</div>
        )}
      </div>
    </header>
  );
}

export default SiteHeader;