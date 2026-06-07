import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ChevronLeft,
  Headphones,
  X,
  CircleUserRound,
  Play,
  Mic,
  MapPin,
  Phone,
  PhoneCall,
  Search,
  Target,
  UserCircle,
} from "lucide-react";
import { properties } from "../data/properties";
import heroBanner from "../assets/hero-banner.webp";
import agentImage from "../assets/agent.png";
import buyHomeImage from "../assets/buy-home.webp";
import residentialOne from "../assets/residential-1.jpg";
import residentialTwo from "../assets/residential-2.jpg";
import residentialThree from "../assets/residential-3.jpg";
import upcomingProject from "../assets/upcoming-project.jpg";
import rentHomeImage from "../assets/rent-home.webp";
import plotsLandImage from "../assets/plots-land.webp";
import ownerServiceImage from "../assets/owner-service.png";
import pgColivingImage from "../assets/pg-coliving.webp";
import mobileAppBanner from "../assets/mobile-app-banner.webp";


const exploreCards = [
  {
    title: "Sell/Rent your property",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Plots/Land",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Explore Insights",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "PG and co-living",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Buying commercial spaces",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Lease commercial spaces",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop",
  },
];

const heroSlides = [
  heroBanner,
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
];
type ActiveMenu =
  | null
  | "location"
  | "buyers"
  | "tenants"
  | "owners"
  | "dealers"
  | "insights"
  | "contact"
  | "profile";

function Home() {
  const navigate = useNavigate();
const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
const [cityPopupOpen, setCityPopupOpen] = useState(false);
const [sideMenuOpen, setSideMenuOpen] = useState(false);
const [viewNumberPopupOpen, setViewNumberPopupOpen] = useState(false);
const [activeHeroSlide, setActiveHeroSlide] = useState(0);
const [showStickyHeader, setShowStickyHeader] = useState(false);

const [cityPopupType, setCityPopupType] = useState<"Residential" | "Commercial">(
  "Residential"
);

const [cityPopupTab, setCityPopupTab] = useState<
  "buy" | "rent" | "plots" | "pg"
>("buy");

const [activeSearchTab, setActiveSearchTab] = useState<
  "buy" | "rent" | "newLaunch" | "commercial" | "plots" | "projects"
>("buy");

const [searchText, setSearchText] = useState("");
const [showSearchWarning, setShowSearchWarning] = useState(false);
const searchInputRef = useRef<HTMLInputElement | null>(null);
const stickySearchInputRef = useRef<HTMLInputElement | null>(null);

const [activeQuickLinkTab, setActiveQuickLinkTab] = useState<"buy" | "rent">(
  "buy"
);

const [quickLinkSlide, setQuickLinkSlide] = useState(0);

const quickLinkBuySlides = [
  [
    {
      title: "Properties in Mumbai",
      links: ["Flats in Mumbai", "House for sale in Mumbai", "Plots in Mumbai"],
    },
    {
      title: "Properties in Navi Mumbai",
      links: [
        "Flats for sale in Navi Mumbai",
        "House for sale in Navi Mumbai",
        "Plots in Navi Mumbai",
      ],
    },
    {
      title: "Properties in Thane",
      links: ["Flats for sale in Thane", "House for sale in Thane", "Plots in Thane"],
    },
  ],
  [
    {
      title: "Properties in Delhi / NCR",
      links: [
        "Flats in Delhi / NCR",
        "House for sale in Delhi / NCR",
        "Plots in Delhi / NCR",
      ],
    },
    {
      title: "Properties in Gurgaon",
      links: [
        "Flats for sale in Gurgaon",
        "House for sale in Gurgaon",
        "Plots in Gurgaon",
      ],
    },
    {
      title: "Properties in Noida",
      links: ["Flats for sale in Noida", "House for sale in Noida", "Plots in Noida"],
    },
  ],
  [
    {
      title: "Properties in Bangalore",
      links: [
        "Flats in Bangalore",
        "House for sale in Bangalore",
        "Plots in Bangalore",
      ],
    },
    {
      title: "Properties in Hyderabad",
      links: [
        "Flats for sale in Hyderabad",
        "House for sale in Hyderabad",
        "Plots in Hyderabad",
      ],
    },
    {
      title: "Properties in Pune",
      links: ["Flats for sale in Pune", "House for sale in Pune", "Plots in Pune"],
    },
  ],
];

const quickLinkRentSlides = [
  [
    {
      title: "Rental Properties in Mumbai",
      links: ["Flats for rent in Mumbai", "House for rent in Mumbai", "PG in Mumbai"],
    },
    {
      title: "Rental Properties in Navi Mumbai",
      links: [
        "Flats for rent in Navi Mumbai",
        "House for rent in Navi Mumbai",
        "PG in Navi Mumbai",
      ],
    },
    {
      title: "Rental Properties in Thane",
      links: ["Flats for rent in Thane", "House for rent in Thane", "PG in Thane"],
    },
  ],
  [
    {
      title: "Rental Properties in Delhi / NCR",
      links: [
        "Flats for rent in Delhi / NCR",
        "House for rent in Delhi / NCR",
        "PG in Delhi / NCR",
      ],
    },
    {
      title: "Rental Properties in Gurgaon",
      links: [
        "Flats for rent in Gurgaon",
        "House for rent in Gurgaon",
        "PG in Gurgaon",
      ],
    },
    {
      title: "Rental Properties in Noida",
      links: ["Flats for rent in Noida", "House for rent in Noida", "PG in Noida"],
    },
  ],
  [
    {
      title: "Rental Properties in Bangalore",
      links: [
        "Flats for rent in Bangalore",
        "House for rent in Bangalore",
        "PG in Bangalore",
      ],
    },
    {
      title: "Rental Properties in Hyderabad",
      links: [
        "Flats for rent in Hyderabad",
        "House for rent in Hyderabad",
        "PG in Hyderabad",
      ],
    },
    {
      title: "Rental Properties in Pune",
      links: ["Flats for rent in Pune", "House for rent in Pune", "PG in Pune"],
    },
  ],
];

const activeQuickLinkSlides =
  activeQuickLinkTab === "buy" ? quickLinkBuySlides : quickLinkRentSlides;

const activeQuickLinkCards = activeQuickLinkSlides[quickLinkSlide];

const handleQuickLinkNext = () => {
  setQuickLinkSlide((prev) =>
    prev === activeQuickLinkSlides.length - 1 ? 0 : prev + 1
  );
};

const handleQuickLinkPrev = () => {
  setQuickLinkSlide((prev) =>
    prev === 0 ? activeQuickLinkSlides.length - 1 : prev - 1
  );
};

const [homeArticleTab, setHomeArticleTab] = useState<
  "news" | "tax" | "help" | "investment"
>("news");

const [rentArticleTab, setRentArticleTab] = useState<
  "news" | "tax" | "help" | "investment"
>("news");

const [quickLinksExpanded, setQuickLinksExpanded] = useState<Record<string, boolean>>({});

const toggleQuickLink = (key: string) => {
  setQuickLinksExpanded((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));
};

const handleHeroSearch = () => {
  searchInputRef.current?.focus();

  if (!searchText.trim()) {
    setShowSearchWarning(true);
    return;
  }

  setShowSearchWarning(false);
  navigate("/search");
};

const handleStickySearch = () => {
  stickySearchInputRef.current?.focus();

  if (!searchText.trim()) {
    setShowSearchWarning(true);
    return;
  }

  setShowSearchWarning(false);
  navigate("/search");
};

const openMobileAppsInNewTab = () => {
  window.open("/mobile-apps", "_blank", "noopener,noreferrer");
};

const openMenu = (menu: ActiveMenu) => {
  setActiveMenu(menu);
};

const openCityPopup = (
  type: "Residential" | "Commercial" = "Residential",
  tab: "buy" | "rent" | "plots" | "pg" = "buy"
) => {
  closeMenu();
  setCityPopupType(type);
  setCityPopupTab(tab);
  setCityPopupOpen(true);
};

const closeMenu = () => {
  setActiveMenu(null);
};

const goToPreviousHeroSlide = () => {
  setActiveHeroSlide((prev) =>
    prev === 0 ? heroSlides.length - 1 : prev - 1
  );
};

const goToNextHeroSlide = () => {
  setActiveHeroSlide((prev) =>
    prev === heroSlides.length - 1 ? 0 : prev + 1
  );
};

useEffect(() => {
  const handleScroll = () => {
    setShowStickyHeader(window.scrollY > 260);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const cityList = [
    "Property in Delhi / NCR",
    "Property in Mumbai",
    "Property in Bangalore",
    "Property in Hyderabad Metropolitan Region",
    "Property in Pune",
    "Property in Kolkata",
    "Property in Chennai",
    "Property in Ahmedabad",
  ];

const rentCityList = [
  "Property for rent in Delhi / NCR",
  "Property for rent in Mumbai",
  "Property for rent in Bangalore",
  "Property for rent in Hyderabad Metropolitan Region",
  "Property for rent in Pune",
  "Property for rent in Kolkata",
  "Property for rent in Chennai",
  "Property for rent in Ahmedabad",
];

const homeArticleTabs = [
  { key: "news", label: "News" },
  { key: "tax", label: "Tax & Legal" },
  { key: "help", label: "Help Guides" },
  { key: "investment", label: "Investment" },
] as const;

const homeArticleData: Record<
  "news" | "tax" | "help" | "investment",
  { title: string; date: string; image: string }[]
> = {
  news: [
    {
      title: "Noida Sports City projects update...",
      date: "Apr 08, 2026",
      image: buyHomeImage,
    },
    {
      title: "Registries opened Noida’s Sports City...",
      date: "Dec 22, 2025",
      image: buyHomeImage,
    },
    {
      title: "UP Affordable Housing Policy...",
      date: "Mar 12, 2026",
      image: buyHomeImage,
    },
    {
      title: "UP moves to title property registration...",
      date: "Dec 17, 2025",
      image: buyHomeImage,
    },
  ],
  tax: [
    {
      title: "Construction delay: What to do next?...",
      date: "Aug 20, 2025",
      image: residentialOne,
    },
    {
      title: "How to assess a property approach road?...",
      date: "Aug 13, 2025",
      image: plotsLandImage,
    },
    {
      title: "Impact of possession delays on rental income...",
      date: "Aug 13, 2025",
      image: residentialTwo,
    },
    {
      title: "What to ask resident before buying a home?...",
      date: "Aug 12, 2025",
      image: residentialThree,
    },
  ],
  help: [
    {
      title: "Factors affecting the real estate market...",
      date: "Mar 20, 2026",
      image: residentialTwo,
    },
    {
      title: "Shortlist homes smartly with 99shorts...",
      date: "Jan 06, 2026",
      image: buyHomeImage,
    },
    {
      title: "Homebuyer's stamp duty & registration...",
      date: "Jan 21, 2026",
      image: residentialOne,
    },
    {
      title: "5 broker questions before resale homes...",
      date: "Sep 09, 2025",
      image: residentialThree,
    },
  ],
  investment: [
    {
      title: "Samanvay The Autograph: An insight...",
      date: "May 11, 2026",
      image: residentialOne,
    },
    {
      title: "Nani's Buildcon: Rewriting Nagpur's skyline...",
      date: "Apr 27, 2026",
      image: residentialTwo,
    },
    {
      title: "Reasons to invest in Bagru-Mahlan, Ajmer Road...",
      date: "Apr 27, 2026",
      image: plotsLandImage,
    },
    {
      title: "Why buy a home in Bazar, Bhubaneswar...",
      date: "Mar 17, 2026",
      image: residentialThree,
    },
  ],
};

const rentArticleTabs = [
  { key: "news", label: "News" },
  { key: "tax", label: "Tax & Legal" },
  { key: "help", label: "Help Guides" },
  { key: "investment", label: "Investment" },
] as const;

const rentArticleData: Record<
  "news" | "tax" | "help" | "investment",
  { title: string; date: string; image: string }[]
> = {
  news: [
    {
      title: "Emerald Court asks bachelor tenants...",
      date: "Apr 08, 2026",
      image: rentHomeImage,
    },
    {
      title: "New GST rule on house rent...",
      date: "Dec 22, 2025",
      image: rentHomeImage,
    },
    {
      title: "How to check rental agreement...",
      date: "Mar 12, 2026",
      image: rentHomeImage,
    },
    {
      title: "Tips before shifting to rented home...",
      date: "Dec 17, 2025",
      image: rentHomeImage,
    },
  ],
  tax: [
    {
      title: "Landlords need permission to enter? Know more...",
      date: "Feb 27, 2025",
      image: rentHomeImage,
    },
    {
      title: "Fake rent receipt punishment & penalty...",
      date: "Jan 12, 2024",
      image: rentHomeImage,
    },
    {
      title: "What if your tenants abscond?...",
      date: "Feb 09, 2024",
      image: rentHomeImage,
    },
    {
      title: "Understanding Section 24 of Income Tax Act...",
      date: "Jan 03, 2024",
      image: rentHomeImage,
    },
  ],
  help: [
    {
      title: "Landlord increasing the rent? Know what to!...",
      date: "Mar 04, 2025",
      image: rentHomeImage,
    },
    {
      title: "What to check during home inspections...",
      date: "Feb 28, 2025",
      image: rentHomeImage,
    },
    {
      title: "Choosing furnished vs unfurnished rental home...",
      date: "Mar 04, 2025",
      image: rentHomeImage,
    },
    {
      title: "Proven cost-saving strategies for tenants...",
      date: "Feb 26, 2025",
      image: rentHomeImage,
    },
  ],
  investment: [
    {
      title: "Top areas to earn rental income in Allahabad...",
      date: "Jul 19, 2024",
      image: rentHomeImage,
    },
    {
      title: "Top areas to earn rental income in Chandigarh...",
      date: "Jul 11, 2024",
      image: rentHomeImage,
    },
    {
      title: "Top areas to earn rental income in Amritsar...",
      date: "Jul 18, 2024",
      image: rentHomeImage,
    },
    {
      title: "Top areas to earn rental income in Agra...",
      date: "Jul 04, 2024",
      image: rentHomeImage,
    },
  ],
};

return (
  <main className="min-h-screen overflow-x-hidden bg-white text-[#06152e]">
  {showStickyHeader && (
  <header className="fixed left-0 right-0 top-0 z-[9999] flex h-[72px] items-center bg-[#0060a9] px-[74px] text-white shadow-[0_6px_18px_rgba(15,23,42,0.18)]">
    <button
      type="button"
      onClick={() => navigate("/")}
      className="mr-9 whitespace-nowrap text-[30px] font-extrabold leading-none tracking-[-1px] text-white"
    >
      99acres
    </button>

    <button
      type="button"
      onClick={() => openCityPopup("Residential")}
      className="mr-9 flex items-center gap-1 whitespace-nowrap text-[16px] font-bold text-white"
    >
      All India
      <ChevronDown size={16} strokeWidth={3} />
    </button>

    <div className="mx-auto grid h-[48px] max-w-[890px] flex-1 grid-cols-[74px_minmax(0,1fr)_52px_52px_1px_66px] items-center overflow-visible rounded bg-white text-[#06152e]">
      <button
        type="button"
        className="flex h-full items-center justify-center gap-1 border-r border-slate-200 text-[16px] font-bold"
      >
        Buy
        <ChevronDown size={15} strokeWidth={2.8} />
      </button>

      <div className="relative flex h-full min-w-0 items-center">
        <input
          ref={stickySearchInputRef}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setShowSearchWarning(false);
          }}
          onFocus={() => setShowSearchWarning(false)}
          className="h-full min-w-0 w-full px-5 text-[16px] font-medium text-slate-700 outline-none placeholder:text-slate-500"
          placeholder="Enter Locality / Project / Society / Landmark"
        />

        {showSearchWarning && (
          <div className="absolute left-0 right-0 top-[48px] z-[99999] flex h-[44px] items-center gap-3 rounded-b-md border-t border-orange-100 bg-[#fff4df] px-4 text-[13px] font-semibold text-[#30415f] shadow-[0_8px_16px_rgba(15,23,42,0.16)]">
            <span className="text-[19px] leading-none text-orange-700">⚠</span>
            <span>Please try again with the location included!</span>
          </div>
        )}
      </div>

      <div className="group relative z-[200] mx-auto flex h-10 w-10 items-center justify-center overflow-visible">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f8ff] text-[#0078d7] transition duration-200 hover:bg-[#e6f4ff]"
        >
          <Target size={20} strokeWidth={2.7} />
        </button>

        <div className="pointer-events-none absolute left-1/2 top-[46px] z-[99999] hidden -translate-x-1/2 group-hover:block">
          <div className="absolute left-1/2 top-[-7px] h-4 w-4 -translate-x-1/2 rotate-45 bg-[#d9f1ff]" />

          <div className="relative flex h-[40px] items-center gap-2 whitespace-nowrap rounded bg-[#d9f1ff] px-4 text-[14px] font-medium text-[#18456f] shadow-[0_8px_20px_rgba(15,23,42,0.16)]">
            <Target size={16} strokeWidth={2.7} className="text-[#0078d7]" />
            <span>
              Search <b>Near Me</b>
            </span>
          </div>
        </div>
      </div>

      <div className="group relative z-[200] mx-auto flex h-10 w-10 items-center justify-center overflow-visible">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f8ff] text-[#0078d7] transition duration-200 hover:bg-[#e6f4ff]"
        >
          <Mic size={20} strokeWidth={2.6} />
        </button>

        <div className="pointer-events-none absolute left-1/2 top-[46px] z-[99999] hidden -translate-x-1/2 group-hover:block">
          <div className="absolute left-1/2 top-[-7px] h-4 w-4 -translate-x-1/2 rotate-45 bg-[#d9f1ff]" />

          <div className="relative flex h-[40px] items-center gap-2 whitespace-nowrap rounded bg-[#d9f1ff] px-4 text-[14px] font-medium text-[#18456f] shadow-[0_8px_20px_rgba(15,23,42,0.16)]">
            <Mic size={16} strokeWidth={2.6} className="text-[#0078d7]" />
            <span>
              Search by <b>Voice</b>
            </span>

            <span className="ml-2 rounded bg-pink-500 px-2 py-[3px] text-[10px] font-bold leading-none text-white">
              NEW
            </span>
          </div>
        </div>
      </div>

      <span className="h-7 w-px bg-slate-200" />

      <button
        type="button"
        onClick={handleStickySearch}
        className="flex h-full items-center justify-center text-[#26364f]"
      >
        <Search size={28} strokeWidth={2.4} />
      </button>
    </div>

    <button
      type="button"
      onClick={() => navigate("/post-property")}
      className="ml-8 flex h-[40px] shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 text-[16px] font-bold text-[#06152e]"
    >
      <span>Post property</span>
      <span className="rounded bg-green-600 px-2 py-[3px] text-[10px] font-extrabold leading-none text-white">
        FREE
      </span>
    </button>

    <button
      type="button"
      className="relative ml-7 flex h-10 w-10 items-center justify-center rounded-full text-white"
    >
      <UserCircle size={28} />
      <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-[#0060a9]" />
      <ChevronDown size={17} strokeWidth={3} className="ml-1" />
    </button>

    <button
      type="button"
      onClick={() => {
        closeMenu();
        setCityPopupOpen(false);
        setSideMenuOpen(true);
      }}
      className="ml-7 flex h-10 w-10 items-center justify-center rounded-full text-white"
    >
      <span className="relative block h-[18px] w-[30px]">
        <span className="absolute left-0 top-0 h-[3px] w-[30px] rounded-full bg-white" />
        <span className="absolute left-0 top-[7px] h-[3px] w-[24px] rounded-full bg-white" />
        <span className="absolute left-0 top-[14px] h-[3px] w-[30px] rounded-full bg-white" />
      </span>
    </button>
  </header>
)}

    <section className="relative h-[430px] overflow-visible bg-[#050918] text-white">
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="flex h-full transition-transform duration-700 ease-in-out"
      style={{
        width: `${heroSlides.length * 100}%`,
        transform: `translateX(-${activeHeroSlide * (100 / heroSlides.length)}%)`,
      }}
    >
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className="h-full shrink-0 bg-cover bg-center"
          style={{
            width: `${100 / heroSlides.length}%`,
            backgroundImage: `url(${slide})`,
          }}
        />
      ))}
    </div>
  </div>

  <div className="absolute inset-0 bg-black/45" />
  <button
  type="button"
  onClick={goToPreviousHeroSlide}
  className="absolute left-8 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-lg transition hover:bg-white hover:text-[#06152e]"
>
  <ChevronLeft size={28} />
</button>

<button
  type="button"
  onClick={goToNextHeroSlide}
  className="absolute right-8 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-lg transition hover:bg-white hover:text-[#06152e]"
>
  <ChevronRight size={28} />
</button>
{(activeMenu || cityPopupOpen || viewNumberPopupOpen) && (
  <div
    className={`fixed inset-0 transition-opacity duration-200 ${
      viewNumberPopupOpen ? "z-[180] bg-black/75" : "z-[80] bg-black/35"
    }`}
    onClick={() => {
      closeMenu();
      setCityPopupOpen(false);
      setViewNumberPopupOpen(false);
    }}
  />
)}

{/* ADD THIS CITY CLICK POPUP HERE */}
{cityPopupOpen && (
  <div className="fixed left-[30px] top-[130px] z-[140] w-[900px] overflow-hidden rounded-lg bg-white text-[#06152e] shadow-2xl">
    <div className="px-10 py-9">
      <h2 className="text-[34px] font-extrabold">
        Explore real estate in...
      </h2>

    <div className="mt-8 flex items-center gap-11 text-[16px] font-semibold text-slate-400">
  <button
    type="button"
    onClick={() => setCityPopupTab("buy")}
    className={`relative ${cityPopupTab === "buy" ? "text-[#06152e]" : ""}`}
  >
    Buy
    {cityPopupTab === "buy" && (
      <span className="absolute -bottom-4 left-0 h-1 w-12 rounded-full bg-blue-600" />
    )}
  </button>

  <button
    type="button"
    onClick={() => setCityPopupTab("rent")}
    className={`relative ${cityPopupTab === "rent" ? "text-[#06152e]" : ""}`}
  >
    Rent / Lease
    {cityPopupTab === "rent" && (
      <span className="absolute -bottom-4 left-0 h-1 w-[118px] rounded-full bg-blue-600" />
    )}
  </button>

  <button
    type="button"
    onClick={() => setCityPopupTab("plots")}
    className={`relative ${cityPopupTab === "plots" ? "text-[#06152e]" : ""}`}
  >
    Plots/Land
    {cityPopupTab === "plots" && (
      <span className="absolute -bottom-4 left-0 h-1 w-[88px] rounded-full bg-blue-600" />
    )}
  </button>

  <button
    type="button"
    onClick={() => setCityPopupTab("pg")}
    className={`relative ${cityPopupTab === "pg" ? "text-[#06152e]" : ""}`}
  >
    PG / Co-living
    {cityPopupTab === "pg" && (
      <span className="absolute -bottom-4 left-0 h-1 w-[112px] rounded-full bg-blue-600" />
    )}
  </button>
</div>

      <div className="mt-8 flex h-[62px] items-center rounded bg-white shadow-lg">
       <button className="flex h-full w-[180px] items-center justify-center gap-2 border-r text-[16px] font-bold">
  {cityPopupType} <ChevronDown size={18} />
</button>

        <div className="flex flex-1 items-center gap-4 px-7">
          <Search size={24} className="text-slate-500" />
          <input
            className="w-full text-[17px] outline-none"
            placeholder="City Name"
          />
        </div>

        <button
          type="button"
          onClick={() => navigate("/search")}
          className="mr-5 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white"
        >
          Explore
        </button>
      </div>
    </div>

    <div className="mt-20 flex items-center justify-between rounded-b-lg bg-slate-50 px-10 py-5 text-[16px] text-slate-600">
      <div className="flex items-center gap-10">
        <button>All India</button>
        <button>Dubai</button>
        <button>For NRI</button>

        <div>
          <button>International</button>
          <p className="text-xs text-slate-400">
            Powered by listglobally.com
          </p>
        </div>
      </div>

      <button className="font-semibold">
        View top cities <span className="ml-3">›</span>
      </button>
    </div>
  </div>
)}

{viewNumberPopupOpen && (
  <div className="fixed left-1/2 top-[86px] z-[220] w-[1010px] -translate-x-1/2 text-white">
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-[18px] font-extrabold">
        Please share your details
      </h2>

      <button
        type="button"
        onClick={() => setViewNumberPopupOpen(false)}
        className="flex h-9 w-9 items-center justify-center text-white hover:text-slate-200"
      >
        <X size={34} strokeWidth={2.4} />
      </button>
    </div>

    <div className="overflow-hidden bg-white text-[#06152e] shadow-2xl">
      <div className="grid grid-cols-[1fr_1.08fr] gap-12 px-16 py-9">
        <div>
          <h3 className="mb-8 text-[15px] font-extrabold uppercase tracking-wide text-slate-700">
            Basic Information
          </h3>

          <div className="mb-8 flex items-center gap-6 text-[16px] text-slate-500">
            <span className="text-[17px] text-[#333]">
              Are you a property dealer
            </span>

            <label className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full border-2 border-slate-200 bg-white" />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full border-2 border-slate-200 bg-white" />
              No
            </label>
          </div>

          <div className="mb-7 border-b border-slate-200 pb-4 text-[18px] text-[#333]">
            Name
          </div>

          <div className="flex items-end border-b border-slate-200 pb-2">
            <button
              type="button"
              className="flex items-center gap-2 pr-6 text-[15px] font-bold text-blue-500"
            >
              +91 IND
              <ChevronDown size={17} className="text-slate-600" />
            </button>

            <div className="flex-1">
              <p className="text-[14px] text-slate-400">Phone</p>
              <input
                autoFocus
                className="h-8 w-full text-[18px] outline-none"
              />
            </div>
          </div>

          <p className="mt-1 text-[12px] text-slate-400">
            This number would be verified
          </p>
        </div>

        <div>
          <h3 className="mb-8 text-[15px] font-extrabold uppercase tracking-wide text-slate-700">
            Optional Information
          </h3>

          <p className="mb-3 text-center text-[14px] text-slate-500">
            By when you are planning to buy the property?
          </p>

          <div className="mb-8 flex items-center justify-center gap-8 text-[14px] text-slate-500">
            <label className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full border-2 border-slate-200 bg-white" />
              3 months
            </label>

            <label className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full border-2 border-slate-200 bg-white" />
              6 months
            </label>

            <label className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full border-2 border-slate-200 bg-white" />
              More than 6 months
            </label>
          </div>

          <div className="space-y-5 text-[15px] text-slate-500">
            <label className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center border border-slate-300 bg-white" />
              I am interested in home loan
            </label>

            <label className="flex items-center gap-3 text-[#20314f]">
              <span className="flex h-5 w-5 items-center justify-center border border-cyan-300 bg-white text-cyan-500">
                ✓
              </span>
              I am interested in site visits.
            </label>

            <label className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center border border-slate-300 bg-white" />
              <span>
                I agree to the{" "}
                <button type="button" className="font-bold text-blue-500">
                  Terms & Conditions
                </button>{" "}
                and{" "}
                <button type="button" className="font-bold text-blue-500">
                  Privacy Policy
                </button>
              </span>
            </label>
          </div>

          <button
            type="button"
            className="mt-7 h-[46px] w-[300px] bg-[#3498db] text-[17px] font-extrabold text-white"
          >
            View Number
          </button>
        </div>
      </div>
    </div>

    <div className="fixed bottom-0 left-0 right-0 z-[221] flex h-[68px] items-center justify-center gap-12 bg-black text-white">
      <p className="text-[18px]">We do not spam–</p>

      <div className="flex items-center gap-3 text-[13px] leading-4">
        <span className="text-[26px]">👥</span>
        <span>
          Details shared with selected
          <br />
          advertisers only.
        </span>
      </div>

      <div className="flex items-center gap-3 text-[13px] leading-4">
        <span className="text-[26px]">🤝</span>
        <span>
          Connect with us for better
          <br />
          deals & offers.
        </span>
      </div>

      <div className="flex items-center gap-3 text-[13px] leading-4">
        <span className="text-[26px]">🔒</span>
        <span>
          Your details are secure with
          <br />
          us.
        </span>
      </div>
    </div>
  </div>
)}

       <header className="relative z-[120] flex h-[72px] items-center justify-between px-[78px]">
  <div className="flex h-full items-center gap-6">
    <button
      type="button"
      onClick={() => navigate("/")}
      className="whitespace-nowrap text-[34px] font-extrabold leading-none tracking-[-1px] text-white"
    >
      99acres
    </button>

    {/* All India */}
    <div
      className="relative h-full"
      onMouseEnter={() => openMenu("location")}
      onMouseLeave={closeMenu}
    >
      <button className="relative flex h-full items-center gap-2 whitespace-nowrap text-[15px] font-bold text-white">
        All India
        <ChevronDown
          size={18}
          strokeWidth={3}
          className={`transition duration-200 ${
            activeMenu === "location" ? "rotate-180" : ""
          }`}
        />

        {activeMenu === "location" && (
          <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-blue-600" />
        )}
      </button>

              {activeMenu === "location" && (
                <>
                  <div className="absolute left-[-115px] top-[72px] z-[130] h-5 w-[900px]" />

                  <div className="absolute left-[-115px] top-[88px] z-[130] w-[900px] overflow-hidden rounded-lg bg-white text-[#06152e] shadow-2xl">
                    <div className="px-10 py-9">
                      <h2 className="text-[34px] font-extrabold">
                        Explore real estate in...
                      </h2>

                      <div className="mt-8 flex items-center gap-11 text-[16px] font-semibold text-slate-400">
                        <button className="relative text-[#06152e]">
                          Buy
                          <span className="absolute -bottom-4 left-0 h-1 w-12 rounded-full bg-blue-600" />
                        </button>
                        <button>Rent / Lease</button>
                        <button>Plots/Land</button>
                        <button>PG / Co-living</button>
                      </div>

                      <div className="mt-8 flex h-[62px] items-center rounded bg-white shadow-lg">
                        <button className="flex h-full w-[180px] items-center justify-center gap-2 border-r text-[16px] font-bold">
                          Residential <ChevronDown size={18} />
                        </button>

                        <div className="flex flex-1 items-center gap-4 px-7">
                          <Search size={24} className="text-slate-500" />
                          <input
                            className="w-full text-[17px] outline-none"
                            placeholder="City Name"
                          />
                        </div>

                        <button
                          onClick={() => navigate("/search")}
                          className="mr-5 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white"
                        >
                          Explore
                        </button>
                      </div>
                    </div>

                    <div className="mt-20 flex items-center justify-between rounded-b-lg bg-slate-50 px-10 py-5 text-[16px] text-slate-600">
                      <div className="flex items-center gap-10">
                        <button>All India</button>
                        <button>Dubai</button>
                        <button>For NRI</button>

                        <div>
                          <button>International</button>
                          <p className="text-xs text-slate-400">
                            Powered by listglobally.com
                          </p>
                        </div>
                      </div>

                      <button className="font-semibold">
                        View top cities <span className="ml-3">›</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

<nav className="hidden h-full items-center gap-6 whitespace-nowrap text-[15px] font-bold text-slate-300 lg:flex">
              {/* For Buyers */}
            <div
              className="relative h-full"
              onMouseEnter={() => openMenu("buyers")}
              onMouseLeave={closeMenu}
            >
              <button className="relative flex h-full items-center whitespace-nowrap hover:text-white">
                For Buyers
                {activeMenu === "buyers" && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-blue-600" />
                )}
              </button>

              {activeMenu === "buyers" && (
                <>
                  <div className="absolute left-[-280px] top-[72px] z-[130] h-5 w-[980px]" />

                  <MegaMenu
                    className="left-[-280px]"
                    leftItems={[
                      "BUY A HOME",
                      "Land/Plot",
                      "COMMERCIAL",
                      "INSIGHTS",
                      "ARTICLES & NEWS",
                    ]}
                    middleTitle="TOP CITIES"
                    middleItems={cityList}
                    showInsightsCard
                  />
                </>
              )}
            </div>

            {/* For Tenants */}
            <div
              className="relative h-full"
              onMouseEnter={() => openMenu("tenants")}
              onMouseLeave={closeMenu}
            >
              <button className="relative flex h-full items-center whitespace-nowrap hover:text-white">
                For Tenants
                {activeMenu === "tenants" && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-blue-600" />
                )}
              </button>

              {activeMenu === "tenants" && (
                <>
                  <div className="absolute left-[-360px] top-[72px] z-[130] h-5 w-[980px]" />

                  <MegaMenu
                    className="left-[-360px]"
                    leftItems={[
                      "RENT A HOME",
                      "PG/CO-LIVING",
                      "COMMERCIAL",
                      "INSIGHTS",
                      "ARTICLES & NEWS",
                    ]}
                    middleTitle="TOP CITIES"
                    middleItems={rentCityList}
                    showInsightsCard
                  />
                </>
              )}
            </div>

            {/* For Owners */}
            <div
              className="relative h-full"
              onMouseEnter={() => openMenu("owners")}
              onMouseLeave={closeMenu}
            >
              <button className="relative flex h-full items-center whitespace-nowrap hover:text-white">
                For Owners
                {activeMenu === "owners" && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-blue-600" />
                )}
              </button>

           {activeMenu === "owners" && (
  <>
    <div className="absolute left-[-520px] top-[72px] z-[130] h-5 w-[960px]" />

    <OwnerMenu className="left-[-520px]" />
  </>
)}
            </div>

{/* For Dealers / Builders */}
<div
  className="relative h-full"
  onMouseEnter={() => openMenu("dealers")}
  onMouseLeave={closeMenu}
>
  <button
    onClick={() => navigate("/agents")}
    className="relative flex h-full items-center whitespace-nowrap hover:text-white"
  >
    For Dealers / Builders

    {activeMenu === "dealers" && (
      <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-blue-600" />
    )}
  </button>

  {activeMenu === "dealers" && (
    <>
     <div className="absolute left-[-620px] top-[72px] z-[130] h-5 w-[1040px]" />

<DealerMenu className="left-[-620px]" />
    </>
  )}
</div>

{/* Insights */}
<div
  className="relative h-full"
  onMouseEnter={() => openMenu("insights")}
  onMouseLeave={closeMenu}
>
  <button
    onClick={() => navigate("/insights")}
    className="relative flex h-full items-center whitespace-nowrap hover:text-white"
  >
    Insights

    <span className="absolute -right-5 top-2 rounded bg-pink-600 px-1 py-0.5 text-[9px] font-bold leading-none text-white">
  NEW
</span>

    {activeMenu === "insights" && (
      <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-blue-600" />
    )}
  </button>

  {activeMenu === "insights" && (
    <>
      <div className="absolute left-[-760px] top-[72px] z-[130] h-5 w-[960px]" />

      <InsightsMenu className="left-[-760px]" />
    </>
  )}
</div>
          </nav>

          <div className="relative z-[121] ml-4 flex items-center gap-3">
            <button
  onClick={() => navigate("/post-property")}
className="flex h-[36px] shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-white px-4 text-[14px] font-bold text-[#06152e]">

              <span className="whitespace-nowrap leading-none">
                Post property
              </span>
           <span className="whitespace-nowrap rounded bg-green-600 px-1.5 py-[2px] text-[9px] font-extrabold leading-none text-white">
  FREE
</span>
            </button>

<div
  className="relative"
  onMouseEnter={() => openMenu("contact")}
  onMouseLeave={closeMenu}
>
  <button
    type="button"
    className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 ${
      activeMenu === "contact" ? "bg-white/10" : ""
    }`}
  >
    <Headphones size={21} />
  </button>

  {activeMenu === "contact" && (
    <>
      <div className="absolute right-[-72px] top-[40px] z-[130] h-5 w-[330px]" />

     <div
  onMouseEnter={() => openMenu("contact")}
  onMouseLeave={closeMenu}
  className="absolute right-[-72px] top-[52px] z-[130] w-[330px] overflow-hidden rounded-lg bg-white px-6 py-5 text-[#06152e] shadow-2xl"
>
       <h3 className="mb-5 text-[14px] font-extrabold tracking-wide">
  CONTACT US
</h3>
        <div className="space-y-5">
         <div className="flex items-start gap-4">
  <Phone
    size={17}
    className="mt-3 shrink-0 text-slate-600"
  />

            <div>
             <p className="text-[13px] leading-5 text-slate-400">
  Toll Free | 9:30 AM to 6:30 PM
  <br />
  (Mon-Sun)
</p>

<p className="text-[19px] font-semibold leading-6 text-[#20314f]">
  1800-41-99099
</p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
           <div className="flex items-start gap-4">
  <Phone
    size={17}
    className="mt-7 shrink-0 text-slate-600"
  />

              <div>
               <p className="text-[13px] leading-5 text-slate-400">
  For International Users
</p>

<p className="text-[19px] font-semibold leading-6 text-[#20314f]">
  +91-120-6637501
</p>
              </div>
            </div>

          <ChevronRight
  size={16}
  className="shrink-0 text-slate-600"
/>
          </div>

       <button
  type="button"
  className="flex h-[42px] w-full items-center justify-center gap-2 rounded border border-blue-600 text-[15px] font-bold text-blue-600 hover:bg-blue-50"
>
  <PhoneCall size={17} />
  Request a Call Back
</button>

          <p className="text-[13px] text-[#20314f]">
            To check all the FAQ{" "}
            <button
              type="button"
              onClick={() => navigate("/contact-us")}
              className="text-blue-600 hover:underline"
            >
              click here
            </button>
          </p>
        </div>
      </div>
    </>
  )}
</div>

            <div
  className="relative"
  onMouseEnter={() => openMenu("profile")}
  onMouseLeave={closeMenu}
>
  <button
    type="button"
    className={`relative flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 ${
      activeMenu === "profile" ? "bg-white/10" : ""
    }`}
  >
    <UserCircle size={24} />

    <span className="absolute -right-0.5 top-0 h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-[#071026]" />
  </button>

  {activeMenu === "profile" && (
    <>
      <div className="absolute right-[-72px] top-[40px] z-[130] h-5 w-[288px]" />

      <div
        onMouseEnter={() => openMenu("profile")}
        onMouseLeave={closeMenu}
        className="absolute right-[-72px] top-[52px] z-[130] w-[288px] rounded-xl bg-white px-8 py-7 text-[#06152e] shadow-2xl"
      >
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mb-8 block text-[16px] font-extrabold uppercase text-blue-600 hover:underline"
        >
          LOGIN / REGISTER
        </button>

        <div className="space-y-6 text-[15px] text-[#20314f]">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="block font-semibold hover:text-blue-600"
          >
            My Activity
          </button>

          <button
            type="button"
            onClick={() => navigate("/search")}
            className="block hover:text-blue-600"
          >
            Recently Searched
          </button>

          <button
            type="button"
            onClick={() => navigate("/property-details")}
            className="block hover:text-blue-600"
          >
            Recently Viewed
          </button>

          <button
            type="button"
            onClick={() => navigate("/saved-properties")}
            className="block hover:text-blue-600"
          >
            Shortlisted
          </button>

          <button
            type="button"
            onClick={() => navigate("/contact-us")}
            className="block hover:text-blue-600"
          >
            Contacted
          </button>

          <button
            type="button"
            onClick={() => navigate("/post-property")}
            className="flex items-center gap-2 pt-2 font-semibold hover:text-blue-600"
          >
            <span>Post Property</span>
            <span className="rounded bg-green-600 px-2 py-[2px] text-[10px] font-bold leading-none text-white">
              FREE
            </span>
          </button>
        </div>
      </div>
    </>
  )}
</div>

<button
  type="button"
  onClick={() => {
    closeMenu();
    setCityPopupOpen(false);
    setSideMenuOpen(true);
  }}
  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
>
  <span className="relative block h-[20px] w-[32px]">
    <span className="absolute left-0 top-0 h-[3px] w-[32px] rounded-full bg-white" />
    <span className="absolute left-0 top-[8px] h-[3px] w-[25px] rounded-full bg-white" />
    <span className="absolute left-0 top-[16px] h-[3px] w-[32px] rounded-full bg-white" />
  </span>
</button>
          </div>
        </header>

{/* Search box */}
<div className="absolute left-1/2 top-[335px] z-[50] w-[78%] max-w-[1180px] -translate-x-1/2 rounded-2xl bg-white text-[#06152e] shadow-2xl">
<div className="grid h-[76px] grid-cols-[1fr_1fr_1.35fr_1.2fr_1.15fr_1fr_185px] items-center border-b text-center text-[17px] font-bold text-slate-500">
      <button
      type="button"
      onClick={() => setActiveSearchTab("buy")}
      className={`relative h-full ${
        activeSearchTab === "buy" ? "text-[#06152e]" : "text-slate-500"
      }`}
    >
      Buy
      {activeSearchTab === "buy" && (
        <span className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-blue-600" />
      )}
    </button>

    <button
      type="button"
      onClick={() => setActiveSearchTab("rent")}
      className={`relative h-full ${
        activeSearchTab === "rent" ? "text-[#06152e]" : "text-slate-500"
      }`}
    >
      Rent
      {activeSearchTab === "rent" && (
        <span className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-blue-600" />
      )}
    </button>

    <button
      type="button"
      onClick={() => setActiveSearchTab("newLaunch")}
      className={`relative h-full ${
        activeSearchTab === "newLaunch" ? "text-[#06152e]" : "text-slate-500"
      }`}
    >
      New Launch
      <span className="absolute right-8 top-5 h-2 w-2 rounded-full bg-red-600" />
      {activeSearchTab === "newLaunch" && (
        <span className="absolute bottom-0 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-blue-600" />
      )}
    </button>

    <button
      type="button"
      onClick={() => setActiveSearchTab("commercial")}
      className={`relative h-full ${
        activeSearchTab === "commercial" ? "text-[#06152e]" : "text-slate-500"
      }`}
    >
      Commercial
      {activeSearchTab === "commercial" && (
        <span className="absolute bottom-0 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-blue-600" />
      )}
    </button>

    <button
      type="button"
      onClick={() => setActiveSearchTab("plots")}
      className={`relative h-full ${
        activeSearchTab === "plots" ? "text-[#06152e]" : "text-slate-500"
      }`}
    >
      Plots/Land
      {activeSearchTab === "plots" && (
        <span className="absolute bottom-0 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-blue-600" />
      )}
    </button>

    <button
      type="button"
      onClick={() => setActiveSearchTab("projects")}
      className={`relative h-full ${
        activeSearchTab === "projects" ? "text-[#06152e]" : "text-slate-500"
      }`}
    >
      Projects
      {activeSearchTab === "projects" && (
        <span className="absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-blue-600" />
      )}
    </button>

    <button
      type="button"
      onClick={() =>
        navigate("/post-property?ctaSource=POST_PROPERTY_HP_SEARCH_BAR")
      }
      className="flex h-full items-center justify-center gap-1 border-0.5 whitespace-nowrap text-slate-500 hover:text-[#06152e]"
    >
      <span>Post Property</span>
      <span className="rounded bg-green-600 px-2 py-[2px] text-[11px] font-bold leading-none text-white">
        FREE
      </span>
    </button>
  </div>

  <div
    className={`grid h-[58px] min-w-0 items-center overflow-visible ${
      activeSearchTab === "commercial"
        ? "grid-cols-[120px_200px_minmax(0,1fr)_56px_56px_110px]"
        : activeSearchTab === "projects"
        ? "grid-cols-[220px_minmax(0,1fr)_56px_110px]"
        : "grid-cols-[220px_minmax(0,1fr)_56px_56px_110px]"
    }`}
  >
    {activeSearchTab === "commercial" ? (
      <>
        <button className="flex h-full items-center justify-center gap-2 border-r text-[16px] font-bold text-slate-700">
          Buy <ChevronDown size={17} />
        </button>

        <button className="flex h-full items-center justify-center gap-2 border-r text-[16px] font-bold text-slate-700">
          All Commercial <ChevronDown size={17} />
        </button>
      </>
    ) : (
      <button className="flex h-full items-center justify-center gap-2 border-r text-[16px] font-bold">
        {activeSearchTab === "projects" ? "Residential Project" : "All Residential"}
        <ChevronDown size={17} />
      </button>
    )}

    <div className="relative flex h-full min-w-0 items-center gap-4 px-6">
      <Search size={22} className="shrink-0 text-slate-500" />

      <input
        ref={searchInputRef}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setShowSearchWarning(false);
        }}
        onFocus={() => setShowSearchWarning(false)}
        className="min-w-0 w-full truncate text-[15px] outline-none"
        placeholder={
          activeSearchTab === "commercial"
            ? 'Search "Hyderabad"'
            : activeSearchTab === "projects"
            ? 'Search "3 BHK for sale in Mumbai"'
            : 'Search "Flats for rent in sector 77 Noida"'
        }
      />

      {showSearchWarning && (
        <div className="absolute left-0 right-0 top-[58px] z-[9999] flex h-[48px] items-center gap-3 rounded-b-md border-t border-orange-100 bg-[#fff4df] px-4 text-[13px] font-semibold text-[#30415f] shadow-[0_8px_16px_rgba(15,23,42,0.16)]">
          <span className="text-[20px] leading-none text-orange-700">⚠</span>
          <span>Please try again with the location included!</span>
        </div>
      )}
    </div>

    {activeSearchTab !== "projects" && (
 <div className="group relative z-[200] mx-auto flex h-11 w-11 items-center justify-center overflow-visible">
  <button
    type="button"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f8ff] text-[#0078d7] transition duration-200 hover:bg-[#e6f4ff]"
  >
    <Target size={23} strokeWidth={2.7} />
  </button>

  <div className="pointer-events-none absolute left-1/2 top-[51px] z-[9999] hidden -translate-x-1/2 group-hover:block">
    <div className="absolute left-1/2 top-[-7px] h-4 w-4 -translate-x-1/2 rotate-45 bg-[#d9f1ff]" />

    <div className="relative flex h-[44px] items-center gap-2 whitespace-nowrap rounded bg-[#d9f1ff] px-4 text-[14px] font-medium text-[#18456f] shadow-[0_8px_20px_rgba(15,23,42,0.16)]">
      <Target size={17} strokeWidth={2.7} className="text-[#0078d7]" />
      <span>
        Search <b>Near Me</b>
      </span>
    </div>
  </div>
</div>
    )}

<div className="group relative z-[200] mx-auto flex h-11 w-11 items-center justify-center overflow-visible">
  <button
    type="button"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f8ff] text-[#0078d7] transition duration-200 hover:bg-[#e6f4ff]"
  >
    <Mic size={22} strokeWidth={2.6} />
  </button>

  <div className="pointer-events-none absolute left-1/2 top-[51px] z-[9999] hidden -translate-x-1/2 group-hover:block">
    <div className="absolute left-1/2 top-[-7px] h-4 w-4 -translate-x-1/2 rotate-45 bg-[#d9f1ff]" />

    <div className="relative flex h-[44px] items-center gap-2 whitespace-nowrap rounded bg-[#d9f1ff] px-4 text-[14px] font-medium text-[#18456f] shadow-[0_8px_20px_rgba(15,23,42,0.16)]">
      <Mic size={17} strokeWidth={2.6} className="text-[#0078d7]" />
      <span>
        Search by <b>Voice</b>
      </span>

      <span className="ml-2 rounded bg-pink-500 px-2 py-[3px] text-[10px] font-bold leading-none text-white">
        NEW
      </span>
    </div>
  </div>
</div>

         <button
      type="button"
      onClick={handleHeroSearch}
      className="mr-3 rounded-md bg-blue-600 px-5 py-2.5 text-[16px] font-bold text-white shadow hover:bg-blue-700"
    >
      Search
    </button>
  </div>
</div>
</section>

{/* Explore cards */}
<section className="relative overflow-hidden px-10 pt-[75px]">
  <h3 className="text-center text-[13px] font-bold tracking-wide text-slate-400">
    GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
  </h3>

  <div className="relative mt-7">
    <div
  id="explore-scroll"
  className="flex gap-5 overflow-x-auto scroll-smooth pb-5 pr-16"
  style={{ scrollbarWidth: "none" }}
>
      {exploreCards.map((card) => (
        <button
          key={card.title}
          type="button"
          onClick={() => {
            if (card.title === "Sell/Rent your property") {
              navigate("/post-property?ctaSource=POST_PROPERTY_HP_SEARCH_BAR");
            } else if (card.title === "Plots/Land") {
              navigate("/plots-land");
            } else if (card.title === "Explore Insights") {
              navigate("/insights");
            } else if (card.title === "PG and co-living") {
              navigate("/rent");
            } else {
              navigate("/commercial");
            }
          }}
          className="shrink-0 text-left"
        >
          <div className="h-[118px] w-[195px] overflow-hidden rounded-lg bg-slate-100 shadow-sm">
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover"
            />
          </div>

          <h4 className="mt-3 w-[195px] text-[15px] font-bold leading-5 text-[#06152e]">
            {card.title}
          </h4>
        </button>
      ))}
    </div>

    <button
      type="button"
      onClick={() =>
        document
          .getElementById("explore-scroll")
          ?.scrollBy({ left: 260, behavior: "smooth" })
      }
      className="absolute right-0 top-[36px] flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg"
    >
      <ChevronRight size={24} />
    </button>
  </div>
</section>

{/* Heading */}
<section className="px-10 pt-8 pb-4 text-center">
  <p className="text-[13px] font-bold tracking-wide text-slate-400">
    ALL PROPERTY NEEDS - ONE PORTAL
  </p>

  <h1 className="mx-auto mt-3 max-w-5xl text-[38px] font-extrabold leading-tight text-[#06152e]">
    Find Better Places to Live, Work and Invest
  </h1>
</section>

{/* Buy home section */}
<section className="relative px-10 pb-[150px] pt-[26px]">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
    <div className="overflow-hidden rounded-xl bg-slate-100">
      <img
        src={buyHomeImage}
        alt="Modern living room"
        className="h-[430px] w-full object-cover"
      />
    </div>

    <div>
      <p className="text-[13px] font-extrabold tracking-wide text-slate-400">
        BUY A HOME
      </p>

      <h2 className="mt-3 text-[32px] font-extrabold leading-tight text-[#06152e]">
        Find, Buy & Own Your Dream Home
      </h2>

      <p className="mt-5 max-w-md text-[17px] leading-7 text-slate-600">
        Explore from Apartments, land, builder floors, villas and more
      </p>

      <button
  type="button"
  onClick={() => openCityPopup("Residential")}
  className="mt-7 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white shadow hover:bg-blue-700"
>
  Explore Buying
</button>
    </div>
  </div>

<div className="absolute left-1/2 bottom-[-95px] z-[20] w-[76%] max-w-[1080px] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-[0_2px_18px_rgba(15,23,42,0.12)] ring-1 ring-blue-100">
  <div className="grid grid-cols-[245px_1fr]">
    <div className="border-r border-slate-100 px-7 py-5">
      <h2 className="text-[23px] font-extrabold leading-tight text-[#06152e]">
        Top articles on
        <br />
        home buying
      </h2>

      <p className="mt-4 text-[14px] leading-5 text-slate-500">
        Read from Beginners check-list to
        <br />
        Pro Tips
      </p>
    </div>

    <div className="px-7 py-5">
     <div className="flex gap-12 border-b border-slate-100 text-[14px] text-slate-400">
  {homeArticleTabs.map((tab) => (
    <button
      key={tab.key}
      type="button"
      onMouseEnter={() => setHomeArticleTab(tab.key)}
      onClick={() => setHomeArticleTab(tab.key)}
      className={`relative pb-3 ${
        homeArticleTab === tab.key
          ? "font-semibold text-[#06152e]"
          : "hover:text-[#06152e]"
      }`}
    >
      {tab.label}

      {homeArticleTab === tab.key && (
        <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-blue-600" />
      )}
    </button>
  ))}
</div>

     <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
  {homeArticleData[homeArticleTab].map((article, index) => (
    <article
      key={`${homeArticleTab}-${article.title}`}
      className={`flex gap-4 ${
        index > 1 ? "border-t border-slate-100 pt-4" : ""
      }`}
    >
      <img
        src={article.image}
        alt="Article"
        className="h-[58px] w-[82px] rounded object-cover"
      />

      <div>
        <h4 className="text-[14px] font-bold leading-5 text-[#06152e]">
          {article.title}
        </h4>

        <p className="mt-1 text-[12px] text-slate-400">
          {article.date}
        </p>
      </div>
    </article>
  ))}
</div>
    </div>
  </div>

  <button
    type="button"
    className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg"
  >
    <ChevronRight size={21} />
  </button>
</div>

</section>


{/* Newly launched projects */}
<section className="px-10 pt-[120px] pb-16">

  <div className="mx-auto max-w-5xl rounded-xl bg-blue-50 px-7 py-7">
    <div className="mb-6 flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[25px] shadow-sm">
        🏢
      </div>

      <div>
        <h2 className="text-[23px] font-extrabold leading-tight text-[#06152e]">
          Newly launched projects
        </h2>
        <p className="text-[14px] font-semibold text-slate-500">
          Limited launch offers available
        </p>
      </div>
    </div>

    <div className="relative">
      <div
        id="new-launch-scroll"
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pr-12"
        style={{ scrollbarWidth: "none" }}
      >
        {[
          {
            tag: "NEW ARRIVAL",
            title: "Urban Lakes Phase 2",
            location: "Konnagar, Hooghly",
            price: "₹35.85 - 72.77 L",
            config: "2, 3, 4 BHK Apa...",
            growth: "8.3% price increase in last 3 years in ...",
          },
          {
            tag: "NEW ARRIVAL",
            title: "Leverage Green Heights",
            location: "Wardha Road, Nagpur",
            price: "₹42 - 58.9 L",
            config: "2, 3 BHK Apartment",
            growth: "8.7% price increase in last 3 months in...",
          },
          {
            tag: "NEW LAUNCH",
            title: "Fugen Royal Millennia",
            location: "Vuyyuru, Vijayawada",
            price: "₹20.04 - 48 L",
            config: "Land",
            growth: "22.7% price increase in...",
          },
          {
            tag: "NEW LAUNCH",
            title: "Skyline Avenue",
            location: "Noida Extension",
            price: "₹48 - 88 L",
            config: "2, 3 BHK Apartment",
            growth: "9.4% price increase in last year...",
          },
        ].map((project) => (
          <div
            key={project.title}
            className="shrink-0 overflow-hidden rounded bg-white shadow-sm ring-1 ring-blue-100"
          >
            <div className="w-[300px] px-4 pt-4">
<span className="relative inline-block bg-yellow-100 px-2 py-1 text-[11px] font-extrabold text-[#06152e]">
                  {project.tag}
                <span className="absolute right-[-13px] top-0 h-full w-4 bg-yellow-100 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
              </span>

              <div className="mt-4 flex gap-4">
                <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full bg-slate-100">
                  <img
                    src={buyHomeImage}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded bg-[#00496b] px-2 py-[2px] text-[9px] font-bold text-white">
                    RERA
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-[16px] font-extrabold text-[#06152e]">
                    {project.title}
                  </h3>

                  <p className="mt-1 truncate text-[14px] text-slate-600">
                    {project.location}
                  </p>

                  <p className="mt-2 text-[14px] font-extrabold text-[#26364f]">
                    {project.price}
                    <span className="mx-2 font-normal text-slate-400">|</span>
                    <span className="font-normal">{project.config}</span>
                  </p>

                  <p className="mt-1 truncate text-[13px] font-semibold text-emerald-600">
                    {project.growth}
                  </p>
                </div>
              </div>
            </div>

<div className="mt-3 flex items-center justify-between border-t border-dashed border-slate-200 px-4 py-3">
                <div className="flex items-start gap-2 text-[13px] font-semibold text-[#26364f]">
                <span className="text-blue-600">◆</span>
                <span>
                  Get preferred options
                  <br />
                  @zero brokerage
                </span>
              </div>

             <button
  type="button"
  onClick={() => setViewNumberPopupOpen(true)}
  className="rounded bg-blue-600 px-4 py-2.5 text-[14px] font-extrabold text-white shadow hover:bg-blue-700"
>
  View Number
</button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("new-launch-scroll")
            ?.scrollBy({ left: 360, behavior: "smooth" })
        }
className="absolute right-[-14px] top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  </div>
</section>

{/* Handpicked Residential Projects */}
<section className="bg-slate-50 px-10 py-16">
  <div className="mx-auto max-w-6xl">
    <div className="mb-7">
      <h2 className="text-[25px] font-extrabold text-[#06152e]">
        Handpicked Residential Projects
      </h2>
      <p className="mt-1 text-[15px] text-slate-400">
        Featured Residential projects across India
      </p>
    </div>

    <div className="relative">
      <div
        id="residential-project-scroll"
        className="flex gap-6 overflow-x-auto scroll-smooth pb-5 pr-12"
        style={{ scrollbarWidth: "none" }}
      >
        {[
          {
            image: residentialOne,
            logoText: "Eastern Meadows",
            title: "Nishija Akshita Eastern Meadows",
            location: "Land, Ghatkesar, Hyderabad",
            price: "₹ 19.54 - 34.25 Lacs",
          },
          {
            image: residentialTwo,
            logoText: "STAR LIGHT",
            title: "Rajul Starlight",
            location: "4,5 BHK Independent House/Villa, Land, Saliwada, Jabalpur",
            price: "₹ 77 Lacs - 2.65 Cr",
          },
          {
            image: residentialThree,
            logoText: "SKYLINE",
            title: "Sage Skylin",
            location: "3,4,5,6 BHK Apartment, Bhopal",
            price: "₹ 1.71 - 3.75 Cr",
          },
          {
            image: residentialOne,
            logoText: "Eastern Meadows",
            title: "Nishija Akshita Eastern Meadows",
            location: "Land, Ghatkesar, Hyderabad",
            price: "₹ 19.54 - 34.25 Lacs",
          },
        ].map((project) => (
          <div key={project.title} className="relative shrink-0 w-[350px]">
            <div className="relative h-[190px] overflow-hidden rounded">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              <span className="absolute left-0 top-5 rounded-r bg-pink-600 px-2 py-1 text-[10px] font-bold text-white">
                Featured
              </span>

              <button
                type="button"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white"
              >
                ☆
              </button>
            </div>

            <div className="relative mx-auto -mt-10 w-[285px] rounded bg-white px-8 pb-8 pt-14 shadow-lg">
              <div className="absolute left-8 top-[-38px] flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full border-4 border-white bg-slate-100 text-center text-[10px] font-bold text-slate-600 shadow">
                {project.logoText}
              </div>

              <h3 className="line-clamp-1 text-[18px] font-extrabold text-[#06152e]">
                {project.title}
              </h3>

              <p className="mt-1 line-clamp-2 text-[14px] leading-5 text-slate-400">
                {project.location}
              </p>

              <p className="mt-5 text-[17px] font-extrabold text-[#06152e]">
                {project.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("residential-project-scroll")
            ?.scrollBy({ left: 370, behavior: "smooth" })
        }
        className="absolute right-[-20px] top-[175px] flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  </div>
</section>

{/* Upcoming Projects */}
<section className="overflow-hidden px-10 pb-20">
  <div className="mx-auto max-w-[1080px]">
    <div className="mb-8">
      <h2 className="text-[25px] font-extrabold text-[#06152e]">
        Upcoming Projects
      </h2>
      <p className="mt-2 text-[15px] text-slate-500">
        Visit these projects and get early bird benefits
      </p>
    </div>

    <div className="relative">
    <div
  id="upcoming-project-scroll"
  className="flex gap-6 overflow-hidden scroll-smooth pb-4"
  style={{ scrollbarWidth: "none" }}
>
        {[
          {
            image: upcomingProject,
            title: "Shubham Anthem",
            location: "Shela, Ahmedabad",
            builder: "Shubham Developers Ahmedabad?",
          },
          {
            image: upcomingProject,
            title: "Skyline Heights",
            location: "Gota, Ahmedabad",
            builder: "Skyline Developers?",
          },
        ].map((project) => (
          <div
            key={project.title}
            className="relative shrink-0 overflow-hidden rounded-xl bg-slate-100 p-3 shadow-sm"
          >
            <div className="relative h-[430px] w-[1080px] overflow-hidden rounded-lg bg-slate-200">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-7 py-7 text-white">
                <h3 className="text-[26px] font-extrabold leading-tight">
                  {project.title}
                </h3>
                <p className="mt-3 text-[16px] font-bold">
                  {project.location}
                </p>
              </div>

  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-[#06152e] px-7 py-6 text-white">
  <div>
    <p className="text-[15px] text-white/80">
      Interested in this project by
    </p>

    <p className="mt-1 text-[18px] font-extrabold">
      {project.builder} <span className="ml-4">→</span>
    </p>
  </div>

  <button
    type="button"
    onClick={() => setViewNumberPopupOpen(true)}
    className="mr-4 flex h-[48px] w-[300px] items-center justify-center gap-3 rounded bg-blue-600 text-[17px] font-extrabold text-white hover:bg-blue-700"
  >
    <Phone size={21} />
    View Number
  </button>
</div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("upcoming-project-scroll")
            ?.scrollBy({ left: -700, behavior: "smooth" })
        }
        className="absolute left-[-22px] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("upcoming-project-scroll")
            ?.scrollBy({ left: 700, behavior: "smooth" })
        }
        className="absolute right-[-22px] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  </div>
</section>

{/* Rent home section */}
<section className="relative px-10 pb-[165px] pt-[40px]">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">    <div className="overflow-hidden rounded-xl bg-slate-100">
      <img
        src={rentHomeImage}
        alt="Rental home"
        className="h-[430px] w-full object-cover"
      />
    </div>

    <div>
      <p className="text-[13px] font-extrabold tracking-wide text-slate-400">
        RENT A HOME
      </p>

      <h2 className="mt-3 text-[32px] font-extrabold leading-tight text-[#06152e]">
        Rental Homes for
        <br />
        Everyone
      </h2>

      <p className="mt-5 max-w-md text-[17px] leading-7 text-slate-600">
        Explore from Apartments, builder floors, villas and more
      </p>

      <button
  type="button"
  onClick={() => openCityPopup("Residential", "rent")}
  className="mt-7 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white shadow hover:bg-blue-700"
>
  Explore Renting
</button>
    </div>
  </div>

<div className="absolute left-1/2 bottom-[-95px] z-[20] w-[76%] max-w-[1080px] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-[0_2px_18px_rgba(15,23,42,0.12)] ring-1 ring-blue-100">
  <div className="grid grid-cols-[245px_1fr]">
    <div className="border-r border-slate-100 px-7 py-5">
      <h2 className="text-[23px] font-extrabold leading-tight text-[#06152e]">
  Best Renting
  <br />
  Advice by Our Top
  <br />
  Editors
</h2>

       <p className="mt-4 text-[14px] leading-5 text-slate-500">
          Read from rental guides to
          <br />
          smart tenant tips
        </p>
      </div>

      <div className="px-7 py-5">
       <div className="flex gap-12 border-b border-slate-100 text-[15px] text-slate-400">
  {rentArticleTabs.map((tab) => (
    <button
      key={tab.key}
      type="button"
      onMouseEnter={() => setRentArticleTab(tab.key)}
      onClick={() => setRentArticleTab(tab.key)}
      className={`relative pb-3 ${
        rentArticleTab === tab.key
          ? "font-semibold text-[#06152e]"
          : "hover:text-[#06152e]"
      }`}
    >
      {tab.label}

      {rentArticleTab === tab.key && (
        <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-blue-600" />
      )}
    </button>
  ))}
</div>
       <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
  {rentArticleData[rentArticleTab].map((article, index) => (
    <article
      key={`${rentArticleTab}-${article.title}`}
      className={`flex gap-4 ${
        index > 1 ? "border-t border-slate-100 pt-4" : ""
      }`}
    >
      <img
        src={article.image}
        alt="Article"
        className="h-[58px] w-[82px] rounded object-cover"
      />

      <div>
        <h4 className="text-[14px] font-bold leading-5 text-[#06152e]">
          {article.title}
        </h4>

        <p className="mt-1 text-[12px] text-slate-400">
          {article.date}
        </p>
      </div>
    </article>
  ))}
</div>
      </div>
    </div>

    <button
      type="button"
      className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg"
    >
      <ChevronRight size={22} />
    </button>
  </div>
</section>

{/* Plots/Land section */}
<section className="relative px-10 pb-[140px] pt-[150px]">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
    <div className="overflow-hidden rounded-xl bg-slate-100">
      <img
        src={plotsLandImage}
        alt="Residential and commercial plots land"
        className="h-[430px] w-full object-cover"
      />
    </div>

    <div>
      <p className="text-[13px] font-extrabold tracking-wide text-slate-400">
        BUY PLOTS/LAND
      </p>

      <h2 className="mt-3 text-[32px] font-extrabold leading-tight text-[#06152e]">
        Residential &
        <br />
        Commercial Plots/Land
      </h2>

      <p className="mt-5 max-w-md text-[17px] leading-7 text-slate-600">
        Explore Residential, Agricultural, Industrial and Commercial Plots/Land
      </p>

     <button
  type="button"
  onClick={() => openCityPopup("Residential", "plots")}
  className="mt-7 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white shadow hover:bg-blue-700"
>
  Explore Plots/Land
</button>
    </div>
  </div>

<div className="absolute left-1/2 bottom-[-68px] z-[20] w-[76%] max-w-[1080px] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-[0_2px_18px_rgba(15,23,42,0.12)] ring-1 ring-blue-100">
  <div className="grid grid-cols-[245px_1fr]">
    <div className="border-r border-slate-100 px-7 py-5">
      <h2 className="text-[23px] font-extrabold leading-tight text-[#06152e]">
          Best articles on
          <br />
          Plots/Land
        </h2>

       <p className="mt-4 text-[14px] leading-5 text-slate-500">
          Read from Beginners check-list to
          <br />
          Pro Tips
        </p>
      </div>

    <div className="px-7 py-5">
        <div className="mt-1 grid grid-cols-2 gap-x-8 gap-y-4">
          <article className="flex gap-4">
            <img
              src={plotsLandImage}
              alt="Article"
              className="h-[58px] w-[82px] rounded object-cover"
            />
            <div>
              <h4 className="text-[14px] font-bold leading-5 text-[#06152e]">
                Tips for buying a plot in India...
              </h4>
              <p className="mt-1 text-[13px] text-slate-400">Feb 16, 2022</p>
            </div>
          </article>

          <article className="flex gap-4">
            <img
              src={plotsLandImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
             <h4 className="text-[14px] font-bold leading-5 text-[#06152e]">
                Know all about investing in industrial...
              </h4>
             <p className="mt-1 text-[12px] text-slate-400">Feb 24, 2022</p>
            </div>
          </article>

          <article className="flex gap-4 border-t border-slate-100 pt-5">
            <img
              src={plotsLandImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
              <h4 className="text-[15px] font-bold leading-5 text-[#06152e]">
                Tips for buying commercial land in India...
              </h4>
             <p className="mt-1 text-[12px] text-slate-400">Feb 17, 2022</p>
            </div>
          </article>

          <article className="flex gap-4 border-t border-slate-100 pt-5">
            <img
              src={plotsLandImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
              <h4 className="text-[15px] font-bold leading-5 text-[#06152e]">
                Legal tips for buying agricultural land...
              </h4>
              <p className="mt-1 text-[13px] text-slate-400">Feb 23, 2022</p>
            </div>
          </article>
        </div>

       <button
  type="button"
  onClick={() => navigate("/insights")}
  className="mt-4 text-[15px] font-extrabold text-[#06152e]"
>
  Read realty news, guides & articles →
</button>
      </div>
    </div>

    <button
  type="button"
  className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg"
>
  <ChevronRight size={21} />
</button>
  </div>
</section>

{/* Sell/Rent property owner section */}
<section className="relative px-10 pb-[180px] pt-[120px]">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
    <div className="overflow-hidden rounded-xl bg-[#dff4e9]">
      <img
        src={agentImage}
        alt="Sell or rent property"
        className="mx-auto h-[430px] w-full object-contain object-bottom"
      />
    </div>

    <div>
      <h2 className="text-[32px] font-extrabold leading-tight text-[#06152e]">
        Sell or rent faster at the
        <br />
        right price!
      </h2>

      <p className="mt-5 text-[17px] leading-7 text-slate-600">
        List your property now
      </p>

      <button
        type="button"
        onClick={() => navigate("/post-property")}
        className="mt-7 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white shadow hover:bg-blue-700"
      >
        Post Property, It’s FREE
      </button>

      <button
        type="button"
        onClick={() => navigate("/post-property")}
        className="mt-5 flex items-center gap-2 text-[16px] font-extrabold text-[#06152e]"
      >
        Post via
        <span className="text-green-600">Whatsapp</span>
        <ChevronRight size={22} />
      </button>
    </div>
  </div>

<div className="absolute left-1/2 bottom-[-65px] z-[20] w-[72%] max-w-6xl -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-[0_2px_18px_rgba(15,23,42,0.12)] ring-1 ring-blue-100">
  <div className="grid grid-cols-[280px_1fr]">
    <div className="border-r border-slate-100 px-8 py-5">
      <h2 className="text-[22px] font-extrabold leading-tight text-[#06152e]">
        Articles and guides
        <br />
        for property
        <br />
        owners
      </h2>

      <p className="mt-4 text-[14px] leading-5 text-slate-500">
        Read from Beginners check-list to
        <br />
        Pro Tips
      </p>
    </div>

    <div className="px-7 py-5">
      <div className="mt-0 grid grid-cols-2 gap-x-8 gap-y-3">
          <article className="flex gap-4">
            <img
              src={buyHomeImage}
              alt="Article"
              className="h-[58px] w-[82px] rounded object-cover"
            />
            <div>
              <h4 className="text-[14px] font-bold leading-5 text-[#06152e]">
                The latest Circle Rates in Mumbai...
              </h4>
              <p className="mt-1 text-[12px] text-slate-400">Apr 29, 2026</p>
            </div>
          </article>

          <article className="flex gap-4">
            <img
              src={plotsLandImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
              <h4 className="text-[15px] font-bold leading-5 text-[#06152e]">
                Digital property management portal Mumbai...
              </h4>
              <p className="mt-1 text-[13px] text-slate-400">Mar 26, 2026</p>
            </div>
          </article>

          <article className="flex gap-4 border-t border-slate-100 pt-5">
            <img
              src={buyHomeImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
              <h4 className="text-[15px] font-bold leading-5 text-[#06152e]">
                Noida Sports City projects update...
              </h4>
              <p className="mt-1 text-[13px] text-slate-400">Apr 08, 2026</p>
            </div>
          </article>

          <article className="flex gap-4 border-t border-slate-100 pt-5">
            <img
              src={plotsLandImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
              <h4 className="text-[15px] font-bold leading-5 text-[#06152e]">
                UP moves to title property registration...
              </h4>
              <p className="mt-1 text-[13px] text-slate-400">Dec 17, 2025</p>
            </div>
          </article>
        </div>

        <button
          type="button"
          onClick={() => navigate("/insights")}
          className="mt-4 text-[16px] font-extrabold text-[#06152e]"
        >
          Read realty news, guides & articles →
        </button>
      </div>
    </div>

    <button
      type="button"
      className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg"
    >
      <ChevronRight size={22} />
    </button>
  </div>
</section>

{/* Owner services */}
<section className="px-10 pb-16 pt-[115px]">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-[26px] font-extrabold leading-tight text-[#06152e]">
      Our services for owners
    </h2>

    <p className="mt-2 text-[16px] text-slate-500">
      Make your life easier with our services
    </p>

    <div className="mt-6 max-w-[520px] rounded-xl bg-orange-50 px-12 py-14 shadow-sm">
      <div className="mb-10 text-[90px]">💻</div>

      <h3 className="text-[22px] font-extrabold text-[#06152e]">
        Get assistance in selling faster
      </h3>

      <p className="mt-4 text-[15px] leading-6 text-slate-400">
        Dedicated Relationship manager to help you sell your property faster
      </p>

    <button
  type="button"
  onClick={() => navigate("/owner-services")}
  className="mt-7 text-[16px] font-extrabold text-blue-600"
>
  Explore now →
</button>
    </div>
  </div>
</section>

{/* PG / Co-living section */}
<section className="relative px-10 pb-[165px] pt-10">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
    <div className="overflow-hidden rounded-xl bg-slate-100">
      <img
        src={pgColivingImage}
        alt="PG and co-living room"
        className="h-[430px] w-full object-cover"
      />
    </div>

    <div>
      <p className="text-[13px] font-extrabold tracking-wide text-slate-400">
        RENT A PG/ CO-LIVING
      </p>

      <h2 className="mt-3 text-[32px] font-extrabold leading-tight text-[#06152e]">
        Paying Guest or Co-living options
      </h2>

      <p className="mt-5 max-w-md text-[17px] leading-7 text-slate-600">
        Explore shared and private rooms in all top cities of india
      </p>

      <button
  type="button"
  onClick={() => openCityPopup("Residential", "pg")}
  className="mt-7 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white shadow hover:bg-blue-700"
>
  Explore PG/ Co-living
</button>
    </div>
  </div>

<div className="absolute left-1/2 bottom-[-42px] z-[20] w-[78%] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-[0_2px_16px_rgba(15,23,42,0.12)] ring-1 ring-blue-100">
  <div className="grid grid-cols-[250px_1fr]">
    <div className="border-r border-slate-100 px-7 py-6">
      <h2 className="text-[22px] font-extrabold leading-tight text-[#06152e]">
        Best articles on PG/
        <br />
        Co-living
      </h2>

      <p className="mt-4 text-[14px] leading-6 text-slate-500">
        Read from beginners checklist to
        <br />
        pro-tips
      </p>
    </div>

    <div className="px-7 py-6">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <article className="flex gap-4">
            <img
              src={pgColivingImage}
              alt="Article"
              className="h-[58px] w-[82px] rounded object-cover"
            />
            <div>
              <h4 className="text-[14px] font-bold leading-5 text-[#06152e]">
                How to convert your home into a PG...
              </h4>
              <p className="mt-1 text-[12px] text-slate-400">Oct 30, 2023</p>
            </div>
          </article>

          <article className="flex gap-4">
            <img
              src={pgColivingImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
              <h4 className="text-[15px] font-bold leading-5 text-[#06152e]">
                Top areas to rent a PG in Noida...
              </h4>
              <p className="mt-1 text-[13px] text-slate-400">Apr 30, 2023</p>
            </div>
          </article>

          <article className="flex gap-4 border-t border-slate-100 pt-5">
            <img
              src={pgColivingImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
              <h4 className="text-[15px] font-bold leading-5 text-[#06152e]">
                Where to find a PG in Noida under Rs 10,000?...
              </h4>
              <p className="mt-1 text-[13px] text-slate-400">May 01, 2023</p>
            </div>
          </article>

          <article className="flex gap-4 border-t border-slate-100 pt-5">
            <img
              src={pgColivingImage}
              alt="Article"
              className="h-[70px] w-[92px] rounded object-cover"
            />
            <div>
              <h4 className="text-[15px] font-bold leading-5 text-[#06152e]">
                Is PG a good option for students?...
              </h4>
              <p className="mt-1 text-[13px] text-slate-400">Jan 30, 2023</p>
            </div>
          </article>
        </div>

       <button
  type="button"
  onClick={() => window.open("/testimonials", "_blank", "noopener,noreferrer")}
  className="mt-7 flex items-center gap-3 text-[17px] font-extrabold text-[#06152e]"
>
  View all testimonials <ArrowRight size={24} />
</button>
      </div>
    </div>

    <button
      type="button"
      className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg"
    >
      <ChevronRight size={22} />
    </button>
  </div>
</section>

{/* Top cities */}
<section className="px-10 pt-[115px] pb-16">
  <div className="mx-auto max-w-6xl">
    <p className="text-[13px] font-extrabold uppercase tracking-wide text-slate-400">
      TOP CITIES
    </p>

    <h2 className="mt-4 text-[34px] font-extrabold leading-tight text-[#06152e]">
      Explore Real Estate in Popular Indian Cities
    </h2>

    <div className="relative mt-10">
      <div
        id="popular-cities-scroll"
        className="grid grid-flow-col grid-rows-2 gap-x-14 gap-y-4 overflow-x-auto scroll-smooth pb-4 pr-14"
        style={{ scrollbarWidth: "none" }}
      >
       {[
  {
    name: "Delhi / NCR",
    count: "251,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Mumbai",
    count: "77,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Bangalore",
    count: "84,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Hyderabad",
    count: "41,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Pune",
    count: "67,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Kolkata",
    count: "47,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Chennai",
    count: "48,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Ahmedabad",
    count: "34,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1604134459673-64a6304b0f46?q=80&w=300&auto=format&fit=crop",
  },
].map((city) => (
<button
  key={city.name}
  type="button"
  onClick={() => openCityPopup("Residential")}
  className="group flex w-[270px] cursor-pointer items-center gap-5 rounded-lg p-2 text-left transition-all duration-300 hover:bg-blue-50 hover:shadow-sm active:scale-[0.98]"
>
  <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-md bg-slate-100">
    <img
      src={city.image}
      alt={city.name}
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
  </div>

  <div>
    <h3 className="text-[18px] font-extrabold text-[#06152e] transition-colors duration-300 group-hover:text-blue-600">
      {city.name}
    </h3>

    <p className="mt-2 text-[15px] font-semibold text-slate-400">
      {city.count}
    </p>
  </div>
</button>
))}
      </div>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("popular-cities-scroll")
            ?.scrollBy({ left: 320, behavior: "smooth" })
        }
        className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  </div>
</section>

{/* Commercial Spaces */}
<section className="px-10 pb-20 pt-10">
  <div className="mx-auto max-w-6xl text-center">
    <p className="text-[13px] font-extrabold uppercase tracking-wide text-slate-400">
      COMMERCIAL SPACES
    </p>

    <h2 className="mx-auto mt-4 max-w-3xl text-[34px] font-extrabold leading-tight text-[#06152e]">
      Choose from a wide variety of
      <br />
      commercial properties
    </h2>

   <div className="mt-10 grid grid-cols-1 gap-6 text-left lg:grid-cols-2">
  <div
    role="button"
    tabIndex={0}
    onClick={() => openCityPopup("Commercial")}
    onKeyDown={(e) => {
      if (e.key === "Enter") openCityPopup("Commercial");
    }}
    className="relative h-[430px] cursor-pointer overflow-hidden rounded-lg bg-slate-200 px-16 py-20 transition hover:shadow-lg"
  >
    <img
      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop"
      alt="Buy commercial property"
      className="absolute inset-0 h-full w-full object-cover opacity-25"
    />

    <div className="relative z-10">
      <p className="text-[14px] font-extrabold uppercase tracking-wide text-slate-400">
        BUY FOR COMMERCIAL USE
      </p>

      <h3 className="mt-6 text-[34px] font-extrabold leading-tight text-[#06152e]">
        Buy a Commercial
        <br />
        property
      </h3>

      <p className="mt-7 max-w-md text-[17px] leading-7 text-slate-600">
        Explore from Office Spaces, Co-working spaces,
        Retail Shops, Land, Factories and more
      </p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          openCityPopup("Commercial");
        }}
        className="mt-7 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white shadow hover:bg-blue-700"
      >
        Explore Buying Commercial
      </button>
    </div>
  </div>

  <div
    role="button"
    tabIndex={0}
    onClick={() => openCityPopup("Commercial")}
    onKeyDown={(e) => {
      if (e.key === "Enter") openCityPopup("Commercial");
    }}
    className="relative h-[430px] cursor-pointer overflow-hidden rounded-lg bg-orange-50 px-16 py-20 transition hover:shadow-lg"
  >
    <img
      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop"
      alt="Lease commercial property"
      className="absolute inset-0 h-full w-full object-cover opacity-25"
    />

    <div className="relative z-10">
      <p className="text-[14px] font-extrabold uppercase tracking-wide text-slate-400">
        LEASE FOR COMMERCIAL USE
      </p>

      <h3 className="mt-6 text-[34px] font-extrabold leading-tight text-[#06152e]">
        Lease a Commercial
        <br />
        property
      </h3>

      <p className="mt-7 max-w-md text-[17px] leading-7 text-slate-600">
        Explore from Office Spaces, Co-working spaces,
        Retail Shops, Land, Factories and more
      </p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          openCityPopup("Commercial");
        }}
        className="mt-7 rounded-md bg-blue-600 px-7 py-3 text-[16px] font-bold text-white shadow hover:bg-blue-700"
      >
        Explore Leasing Commercial
      </button>
    </div>
  </div>
</div>
   </div>
</section>

{/* Benefits of 99acres */}
<section className="px-10 pb-10 pt-8">
  <div className="mx-auto max-w-6xl text-center">
    <p className="text-[13px] font-extrabold uppercase tracking-wide text-slate-400">
      BENEFITS OF 99ACRES
    </p>

    <h2 className="mt-4 text-[38px] font-extrabold leading-tight text-[#06152e]">
      Why choose 99acres
    </h2>

    <div className="mt-10 grid grid-cols-1 gap-12 text-left md:grid-cols-3">
      <div>
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[28px]">
          🏢
        </div>

        <h3 className="text-[20px] font-extrabold leading-tight text-[#06152e]">
          <span className="text-blue-600">01.</span> Over 12 Lac properties
        </h3>

        <p className="mt-4 text-[17px] leading-7 text-slate-400">
          10,000+ properties are added every day
        </p>
      </div>

      <div>
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[28px]">
          🏠
        </div>

        <h3 className="text-[20px] font-extrabold leading-tight text-[#06152e]">
          <span className="text-blue-600">02.</span> Verification by 99acres team
        </h3>

        <p className="mt-4 text-[17px] leading-7 text-slate-400">
          Photos / Videos and other details are verified on location
        </p>
      </div>

      <div>
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[28px]">
          👥
        </div>

        <h3 className="text-[20px] font-extrabold leading-tight text-[#06152e]">
          <span className="text-blue-600">03.</span> Large user base
        </h3>

        <p className="mt-4 text-[17px] leading-7 text-slate-400">
          High active user count and user engagement to find and close deals
        </p>
      </div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="bg-slate-50 px-10 py-10">
  <div className="mx-auto max-w-6xl">
    <p className="text-[13px] font-extrabold uppercase tracking-wide text-slate-400">
      TESTIMONIALS
    </p>

    <h2 className="mt-4 max-w-3xl text-[38px] font-extrabold leading-tight text-[#06152e]">
      What our customers are
      <br />
      saying about 99acres
    </h2>

    <p className="mt-4 text-[17px] text-slate-600">
      Hear from our satisfied buyers, tenants, owners and dealers
    </p>

    <div className="relative mt-8">
      <div
        id="testimonial-scroll"
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pr-16"
        style={{ scrollbarWidth: "none" }}
      >
        {[
          {
            name: "Srikanth Malleboina",
            role: "Owner, Hyderabad",
            text: "You get an exclusive RM from 99acres team who tracks your property closely",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop",
          },
          {
            name: "Prateek Sengar",
            role: "Owner, Delhi",
            text: "99acres has a better response rate compared to any of their competitors.",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
          },
          {
            name: "SOBHA Developers",
            role: "Developer",
            text: "Platform to meet customers and improve revenues with lowest cost.",
            image:
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=120&auto=format&fit=crop",
          },
          {
            name: "Amit Verma",
            role: "Dealer, Mumbai",
            text: "The platform helped us connect with serious buyers quickly.",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=120&auto=format&fit=crop",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="min-w-[390px] rounded-md bg-white px-7 py-7 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h3 className="text-[17px] font-bold text-[#06152e]">
                  {item.name}
                </h3>
                <p className="text-[13px] text-slate-500">{item.role}</p>
              </div>
            </div>

            <p className="mt-5 text-[17px] leading-7 text-[#172b4d]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          document
            .getElementById("testimonial-scroll")
            ?.scrollBy({ left: 420, behavior: "smooth" });
        }}
        className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg"
      >
        <ChevronRight size={23} />
      </button>
    </div>

   <button
  type="button"
  onClick={() => {
    window.open("/testimonials", "_blank", "noopener,noreferrer");
  }}
  className="mt-7 flex items-center gap-3 text-[17px] font-extrabold text-[#06152e]"
>
  View all testimonials <ArrowRight size={24} />
</button>
  </div>
</section>

{/* Mobile app download */}
<section className="px-10 pb-10 pt-12">
  <div className="relative mx-auto max-w-6xl overflow-hidden rounded-md bg-[#fff3df]">
    <img
      src={mobileAppBanner}
      alt="Download 99acres Mobile App"
      className="h-auto w-full object-cover"
    />

    {/* Google Play clickable area */}
    <button
      type="button"
      aria-label="Open mobile apps page from Google Play"
      onClick={openMobileAppsInNewTab}
      className="absolute left-[25px] top-[70%] h-[52px] w-[150px] cursor-pointer rounded-md"
    />

    {/* App Store clickable area */}
    <button
      type="button"
      aria-label="Open mobile apps page from App Store"
      onClick={openMobileAppsInNewTab}
      className="absolute left-[185px] top-[70%] h-[52px] w-[150px] cursor-pointer rounded-md"
    />

    {/* Right phone/banner clickable area */}
    <button
      type="button"
      aria-label="Open mobile apps page from phone banner"
      onClick={openMobileAppsInNewTab}
      className="absolute bottom-0 right-[120px] top-[10px] w-[390px] cursor-pointer rounded-md"
    />
  </div>
</section>

{/* Curated Quick Links */}
<section className="px-10 pb-20 pt-4">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-[28px] font-extrabold text-[#06152e]">
      Curated Quick Links
    </h2>

    <div className="mt-7 flex gap-8 border-b border-slate-200 text-[16px] text-slate-600">
      <button
  type="button"
  onClick={() => {
    setActiveQuickLinkTab("buy");
    setQuickLinkSlide(0);
    setQuickLinksExpanded({});
  }}
  className={`relative pb-4 ${
    activeQuickLinkTab === "buy"
      ? "font-bold text-[#06152e]"
      : "font-medium"
  }`}
>
        Buy
        {activeQuickLinkTab === "buy" && (
          <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-blue-600" />
        )}
      </button>

     <button
  type="button"
  onClick={() => {
    setActiveQuickLinkTab("rent");
    setQuickLinkSlide(0);
    setQuickLinksExpanded({});
  }}
  className={`relative pb-4 ${
    activeQuickLinkTab === "rent"
      ? "font-bold text-[#06152e]"
      : "font-medium"
  }`}
>
        Rent / Lease
        {activeQuickLinkTab === "rent" && (
          <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-blue-600" />
        )}
      </button>
    </div>

 <div className="relative mt-8">
  <button
    type="button"
    onClick={handleQuickLinkPrev}
    className="absolute left-[-58px] top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
  >
    <ArrowRight size={23} className="rotate-180" />
  </button>

  <div className="grid grid-cols-1 gap-14 pr-20 md:grid-cols-3">
    {activeQuickLinkCards.map((card) => (
      <div key={card.title}>
        <h3 className="text-[16px] font-extrabold text-[#06152e]">
          {card.title}
        </h3>

        <div className="mt-5 space-y-4 text-[16px] text-slate-600">
          {card.links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => navigate("/search")}
              className="block text-left transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
            >
              {link}
            </button>
          ))}

          <button
            type="button"
            onClick={() => navigate("/search")}
            className="pt-2 text-[15px] font-semibold text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
          >
            View 2 More
          </button>
        </div>
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={handleQuickLinkNext}
    className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
  >
    <ArrowRight size={23} />
  </button>
</div>
  </div>
</section>

{/* 99acres style footer */}
<footer className="bg-[#121a20] px-10 py-10 text-white">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[0.9fr_0.8fr_1.45fr_1.6fr]">
    {/* Column 1 */}
    <div>
      <h3 className="mb-5 text-[18px] font-extrabold text-white">99acres</h3>

      <div className="space-y-4 text-[14px] font-bold leading-5 text-white/95">
        <p className="cursor-pointer hover:text-blue-300">Mobile Apps</p>
        <p className="cursor-pointer hover:text-blue-300">Our Services</p>
        <p className="cursor-pointer hover:text-blue-300">Price Trends</p>
        <p className="cursor-pointer hover:text-blue-300">Post your Property</p>
        <p className="cursor-pointer hover:text-blue-300">Real Estate Investments</p>
        <p className="cursor-pointer hover:text-blue-300">Builders in India</p>
        <p className="cursor-pointer hover:text-blue-300">Area Converter</p>
        <p className="cursor-pointer hover:text-blue-300">Articles</p>
        <p className="cursor-pointer hover:text-blue-300">Rent Receipt</p>
        <p className="cursor-pointer hover:text-blue-300">Customer Service</p>
        <p className="cursor-pointer hover:text-blue-300">Sitemap</p>
      </div>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="mb-5 text-[18px] font-extrabold text-white">Company</h3>

      <div className="space-y-4 text-[14px] font-bold leading-5 text-white/95">
        <p className="cursor-pointer hover:text-blue-300">About us</p>
        <p className="cursor-pointer hover:text-blue-300">Contact us</p>
        <p className="cursor-pointer hover:text-blue-300">Careers with us</p>
        <p className="cursor-pointer hover:text-blue-300">Terms & Conditions</p>
        <p className="cursor-pointer hover:text-blue-300">Request Info</p>
        <p className="cursor-pointer hover:text-blue-300">Feedback</p>
        <p className="cursor-pointer hover:text-blue-300">Report a problem</p>
        <p className="cursor-pointer hover:text-blue-300">Testimonials</p>
        <p className="cursor-pointer hover:text-blue-300">Privacy Policy</p>
        <p className="cursor-pointer hover:text-blue-300">Summons/Notices</p>
        <p className="cursor-pointer hover:text-blue-300">Grievances</p>
        <p className="cursor-pointer hover:text-blue-300">Safety Guide</p>
      </div>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="mb-5 text-[18px] font-extrabold text-white">Our Partners</h3>

      <div className="space-y-4 text-[14px] font-bold leading-5 text-white/95">
        <p className="cursor-pointer hover:text-blue-300">
          Naukri.com - Jobs in India
        </p>
        <p className="cursor-pointer hover:text-blue-300">
          Naukrigulf.com - Jobs in middle east
        </p>
        <p className="cursor-pointer hover:text-blue-300">
          Jeevansathi.com - Matrimonials
        </p>
        <p className="cursor-pointer hover:text-blue-300">
          Brijj.com - Professional Networking
        </p>
        <p className="cursor-pointer hover:text-blue-300">
          Shiksha.com - Education Career Info
        </p>
        <p className="cursor-pointer hover:text-blue-300">
          Policybazaar.com - Insurance India
        </p>
        <p className="cursor-pointer hover:text-blue-300">PaisaBazaar.com</p>
        <p className="cursor-pointer hover:text-blue-300">AmbitionBox.com</p>
        <p className="cursor-pointer hover:text-blue-300">
          FirstNaukri.com - A jobsite for campus hiring
        </p>
        <p className="cursor-pointer hover:text-blue-300">
          Jobhai.com - Find Jobs Near You
        </p>
        <p className="cursor-pointer hover:text-blue-300">
          Techminis.com - Tech news on the go
        </p>
      </div>
    </div>

    {/* Column 4 */}
    <div>
      <h3 className="mb-5 text-[18px] font-extrabold text-white">Contact Us</h3>

      <div className="space-y-5 text-white/95">
        <div>
          <p className="text-[14px] font-bold">Toll Free - 1800 41 99099</p>
          <p className="mt-1 text-[12px] font-semibold text-white/60">
            9:30 AM to 6:30 PM (Mon-Sun)
          </p>
        </div>

        <p className="text-[16px] font-semibold">
          Email - feedback@99acres.com
        </p>

        <div className="pt-2">
          <h4 className="mb-4 text-[18px] font-extrabold text-white">
            Connect with us
          </h4>

          <div className="flex items-center gap-7">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-[24px] font-bold text-white hover:text-blue-300"
            >
              f
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-300"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.8 8.001s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 4.9 12 4.9 12 4.9s-4 0-6.9.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s4 0 6.9-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2ZM9.9 14.7V8.9l5.4 2.9-5.4 2.9Z" />
              </svg>
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 5.9c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.7 1-1.6-1.7-4.4-.9-5 1.3-.1.4-.1.8 0 1.2-3.4-.2-6.5-1.8-8.5-4.3-1.1 1.9-.6 4.3 1.3 5.5-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.8 3.5 4.2-.6.2-1.3.2-1.9.1.5 1.7 2.2 3 4.1 3-1.8 1.4-4 2.1-6.3 1.9 1.9 1.2 4.2 1.9 6.7 1.9 8 0 12.5-6.7 12.2-12.7.8-.6 1.5-1.3 2.1-2Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="mb-4 text-[18px] font-extrabold text-white">
            Download the App
          </h4>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-[48px] w-[165px] items-center justify-center rounded-md border border-white/60 bg-black px-3 text-white hover:border-blue-300"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M3 2.5v19l10-9.5L3 2.5Z" fill="#34A853" />
                <path d="M13 12 3 2.5l13 7.3-3 2.2Z" fill="#FBBC05" />
                <path d="M13 12 3 21.5l13-7.3-3-2.2Z" fill="#EA4335" />
                <path d="M16 9.8 20.5 12 16 14.2 13 12l3-2.2Z" fill="#4285F4" />
              </svg>

              <div className="ml-2 leading-tight">
                <p className="text-[10px] font-bold">GET IT ON</p>
                <p className="text-[17px] font-extrabold">Google Play</p>
              </div>
            </a>

            <a
              href="https://www.apple.com/app-store"
              target="_blank"
              rel="noreferrer"
              className="flex h-[48px] w-[165px] items-center justify-center rounded-md border border-white/60 bg-black px-3 text-white hover:border-blue-300"
            >
              <span className="mr-2 text-[28px] leading-none"></span>

              <div className="leading-tight">
                <p className="text-[10px] font-bold">Download on the</p>
                <p className="text-[17px] font-extrabold">App Store</p>
              </div>
            </a>
          </div>

          <p className="mt-3 max-w-md text-[12px] leading-5 text-white/45">
            Usage of 99acres.com to upload content showing area in non standard
            units or which enables targeting by religion/community/caste/race is
            prohibited. Please report inappropriate content by writing to us at{" "}
            <span className="font-bold text-blue-400">report abuse</span>
          </p>
        </div>

        <div className="pt-3 text-[14px] font-bold leading-6 text-white">
          <p>All trademarks are the property of their respective owners.</p>
          <p>All rights reserved - Info Edge (India) Ltd.</p>
          <p>A naukri.com group venture</p>
        </div>
      </div>
    </div>
  </div>
</footer>

{sideMenuOpen && (
  <>
    <button
      type="button"
      aria-label="Close side menu overlay"
      onClick={() => setSideMenuOpen(false)}
      className="fixed inset-0 z-[300] bg-black/55"
    />

    <aside className="fixed right-0 top-0 z-[310] h-screen w-[430px] max-w-[92vw] overflow-y-auto bg-white text-[#06152e] shadow-2xl">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-7 py-5 shadow-sm">
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 text-[18px] font-semibold text-blue-600"
        >
          <CircleUserRound size={30} className="text-slate-600" />
          LOGIN / REGISTER
        </button>

        <button
          type="button"
          onClick={() => setSideMenuOpen(false)}
          className="text-slate-600 transition hover:text-[#06152e]"
        >
          <X size={31} strokeWidth={2.4} />
        </button>
      </div>

      <div className="px-7 py-6">
        <div className="overflow-hidden rounded-lg bg-[#e7f6ec]">
          <div className="grid grid-cols-[1fr_145px] items-center gap-2 px-5 py-4">
            <div>
              <h3 className="text-[20px] font-extrabold leading-tight text-[#06152e]">
                Sell or rent faster at
                <br />
                the right price!
              </h3>

              <button
                type="button"
                onClick={() => {
                  setSideMenuOpen(false);
                  navigate("/post-property");
                }}
                className="mt-4 rounded-md bg-blue-600 px-6 py-3 text-[17px] font-bold text-white shadow hover:bg-blue-700"
              >
                Post Property
              </button>
            </div>

            <img
              src={agentImage}
              alt="Post property"
              className="h-[135px] w-full object-contain object-bottom"
            />
          </div>
        </div>

        <div className="my-5 h-px bg-slate-200" />

        <p className="mb-5 text-[18px] text-slate-700">
          Explore our Services
        </p>

        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {[
            "For Buyers",
            "For Tenants",
            "For Owners",
            "For Dealers / Builders",
          ].map((item) => (
            <button
              key={item}
              type="button"
              className="group flex w-full items-center gap-5 px-1 py-4 text-left text-[18px] text-[#06152e] transition hover:bg-slate-50 hover:text-blue-600"
            >
              <ChevronRight
                size={18}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
              />
              {item}
            </button>
          ))}

          <button
            type="button"
            className="flex w-full items-center px-8 py-4 text-left text-[18px] text-[#06152e] transition hover:bg-slate-50 hover:text-blue-600"
          >
            Home Loans
          </button>

          <button
            type="button"
            className="group flex w-full items-center gap-5 bg-slate-100 px-1 py-4 text-left text-[18px] text-slate-600 transition hover:text-blue-600"
          >
            <ChevronRight
              size={18}
              className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
            />
            Insights
            <span className="rounded bg-blue-600 px-2 py-[2px] text-[10px] font-extrabold text-white">
              NEW
            </span>
          </button>

          <button
            type="button"
            className="group flex w-full items-center gap-5 px-1 py-4 text-left text-[18px] text-[#06152e] transition hover:bg-slate-50 hover:text-blue-600"
          >
            <ChevronRight
              size={18}
              className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
            />
            Articles & News
          </button>

          <button
            type="button"
            onClick={() => {
              setSideMenuOpen(false);
              navigate("/about-us");
            }}
            className="flex w-full items-center px-8 py-4 text-left text-[18px] text-[#06152e] transition hover:bg-slate-50 hover:text-blue-600"
          >
            About Us
          </button>

          <button
            type="button"
            className="group flex w-full items-center gap-5 px-1 py-4 text-left text-[18px] text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
          >
            <ChevronRight
              size={18}
              className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
            />
            Get Help
          </button>

          <button
            type="button"
            className="flex w-full items-center px-8 py-4 text-left text-[18px] text-[#06152e] transition hover:bg-slate-50 hover:text-blue-600"
          >
            Download App
          </button>
        </div>

        <div className="mt-8 flex items-center rounded bg-slate-100 px-4 py-3">
          <input
            type="text"
            placeholder="Search by Property Code"
            className="w-full bg-transparent text-[17px] text-[#06152e] outline-none placeholder:text-slate-500"
          />
          <Search size={30} className="text-slate-400" />
        </div>

        <p className="mt-6 text-[15px] leading-5 text-[#06152e]">
          Toll Free Number: 1800 41 99099.
          <br />
          For international numbers{" "}
          <button type="button" className="font-bold text-[#06152e]">
            click here
          </button>
        </p>
      </div>
    </aside>
  </>
)}
    </main>
  );
}

function MegaMenu({
  className,
  leftItems,
  middleTitle,
  middleItems,
  showInsightsCard,
}: {
  className: string;
  leftItems: string[];
  middleTitle: string;
  middleItems: string[];
  showInsightsCard?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div
  className={`absolute top-[88px] z-[130] grid w-[980px] grid-cols-[235px_1fr_260px] overflow-hidden rounded-lg bg-white text-[#06152e] shadow-2xl ${className}`}
>
      <aside className="bg-slate-100 px-7 py-8">
        <div className="space-y-7 text-[14px] font-bold text-slate-600">
          {leftItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                item.includes("INSIGHTS")
                  ? navigate("/insights")
                  : item.includes("COMMERCIAL")
                  ? navigate("/commercial")
                  : item.includes("Land")
                  ? navigate("/plots-land")
                  : navigate("/search")
              }
              className="flex items-center gap-2 text-left hover:text-blue-600"
            >
              {item}
              {item.includes("INSIGHTS") && (
                <span className="rounded bg-blue-700 px-2 py-0.5 text-[10px] text-white">
                  NEW
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-20 text-[14px] text-slate-500">
          <p className="font-bold">contact us toll free on</p>
          <p className="mt-2 text-[18px] font-semibold text-slate-700">
            1800 41 99099
          </p>
          <p className="text-xs">(9AM-11PM IST)</p>
        </div>
      </aside>

      <section className="px-11 py-8">
        <p className="text-[14px] font-semibold uppercase text-slate-400">
          {middleTitle}
        </p>

        <div className="mt-5 space-y-4 text-[14px] font-bold text-[#06152e]">
          {middleItems.map((city) => (
            <button
              key={city}
              onClick={() => navigate("/search")}
              className="block text-left hover:text-blue-600"
            >
              {city}
            </button>
          ))}
        </div>

        <p className="mt-10 text-[13px] text-slate-500">
          Email us at support@estatehub.com or call us at 1800 41 99099
        </p>
      </section>

      {showInsightsCard && (
       <aside className="px-5 py-8">
  <div className="rounded-xl bg-blue-50 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase text-blue-600">
                  Introducing
                </p>
               <h3 className="mt-1 text-[25px] font-extrabold">Insights</h3>
              </div>
              <span className="text-[34px] text-blue-600">↗</span>
            </div>

           <div className="mt-6 space-y-4 text-[13px] font-semibold">
              {[
                "Understand localities",
                "Read Resident Reviews",
                "Check Price Trends",
                "Tools, Utilities & more",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

function InsightsMenu({ className }: { className: string }) {
  const navigate = useNavigate();

  return (
    <div
      className={`absolute top-[68px] z-[130] grid w-[960px] grid-cols-[240px_1fr_270px] overflow-hidden rounded-lg bg-white text-[#06152e] shadow-2xl ${className}`}
    >
      <aside className="bg-slate-100 px-7 py-8">
        <div className="space-y-7 text-[14px] font-bold text-slate-600">
          <button
            onClick={() => navigate("/insights")}
            className="block text-left hover:text-blue-600"
          >
            CITY OVERVIEW
          </button>

          <button className="block text-left hover:text-blue-600">
            PRICE TRENDS
          </button>
        </div>
      </aside>

      <section className="px-9 py-8">
        <p className="text-[14px] font-semibold uppercase text-slate-400">
          Check Overview of Top Cities
        </p>

        <div className="mt-5 space-y-3 text-[14px] font-bold">
          <button className="block hover:text-blue-600">
            Secunderabad Overview
          </button>

          <button className="block hover:text-blue-600">Pune Overview</button>

          <button className="block hover:text-blue-600">Noida Overview</button>

          <button className="block hover:text-blue-600">Mumbai Overview</button>

          <button className="block hover:text-blue-600">
            Hyderabad Overview
          </button>

          <button className="block hover:text-blue-600">
            Gurgaon Overview
          </button>

          <button className="block hover:text-blue-600">Delhi Overview</button>

          <button className="block hover:text-blue-600">
            Chennai Overview
          </button>

          <button
            onClick={() => navigate("/insights")}
            className="block pt-1 text-blue-600 hover:text-blue-700"
          >
            View All Insights
          </button>
        </div>
      </section>

      <aside className="px-3 py-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase text-blue-600">
                Introducing
              </p>

              <h3 className="mt-1 text-[28px] font-extrabold leading-tight text-[#06152e]">
                Insights
              </h3>
            </div>

            <button
              onClick={() => navigate("/insights")}
              className="text-[28px] font-bold text-blue-600"
            >
              ↗
            </button>
          </div>

          <div className="mt-7 space-y-5 text-[14px] text-slate-700">
            <div className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 text-[12px] font-bold text-blue-600">
                ✓
              </span>
              <span>Understand localities</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 text-[12px] font-bold text-blue-600">
                ✓
              </span>
              <span>Read Resident Reviews</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 text-[12px] font-bold text-blue-600">
                ✓
              </span>
              <span>Check Price Trends</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 text-[12px] font-bold text-blue-600">
                ✓
              </span>
              <span>Tools, Utilities & more</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function OwnerMenu({ className }: { className: string }) {
  const navigate = useNavigate();

  return (
<div
  className={`absolute top-[88px] z-[130] grid h-[380px] w-[1040px] grid-cols-[270px_1fr_285px] overflow-hidden rounded-lg bg-white text-[#06152e] shadow-2xl ${className}`}
>
      <aside className="bg-slate-100 px-9 py-8">
        <div className="space-y-6 text-[14px] font-bold text-slate-600">
          <button className="block text-left hover:text-blue-600">
            OWNER OFFERINGS
          </button>

          <button
            onClick={() => navigate("/insights")}
            className="flex items-center gap-2 text-left hover:text-blue-600"
          >
            INSIGHTS
            <span className="rounded bg-blue-700 px-2 py-0.5 text-[10px] text-white">
              NEW
            </span>
          </button>

          <button className="block text-left hover:text-blue-600">
            ARTICLES & NEWS
          </button>
        </div>

       <div className="mt-[112px] text-[14px] text-slate-500">
          <p className="font-bold">contact us toll free on</p>
          <p className="mt-2 text-[18px] font-semibold text-slate-700">
            1800 41 99099
          </p>
          <p className="text-xs">(9AM-11PM IST)</p>
        </div>
      </aside>

    <section className="px-10 py-8">
        <p className="text-[14px] font-semibold uppercase text-slate-400">
          Owner Offerings
        </p>

        <div className="mt-6 space-y-4 text-[14px] font-bold">

      <button
  onClick={() => navigate("/post-property")}
  className="flex h-[38px] w-[220px] shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-[#e5e7eb] px-5 text-[18px] font-semibold leading-none text-[#06152e]"
>
  <span className="whitespace-nowrap leading-none">Post property</span>
  <span className="whitespace-nowrap rounded bg-[#198754] px-2 py-[3px] text-[13px] font-bold leading-none text-white">
    FREE
  </span>
</button>

          <button className="block hover:text-blue-600">Owner Services</button>

          <button
            onClick={() => navigate("/dashboard")}
            className="block hover:text-blue-600"
          >
            My99acres
          </button>

          <button className="block hover:text-blue-600">View Responses</button>
        </div>

       <p className="mt-[112px] text-[13px] font-semibold text-slate-500">
  Email us at services@99acres.com. or call us at 1800 41 99099
  (IND Toll-Free)
</p>
      </section>

<aside className="-ml-12 px-3 py-8">
  <div className="relative h-[215px] w-[238px] overflow-hidden rounded-lg bg-[#dff4e9] p-4">
    <div className="relative z-10 w-[150px]">
      <h3 className="text-[15px] font-extrabold leading-tight text-[#06152e]">
        Sell or rent faster at the right price!
      </h3>

      <p className="mt-2 text-[13px] leading-snug text-slate-600">
        List your property now for FREE
      </p>

      <button
        onClick={() => navigate("/post-property")}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-[13px] font-bold text-white"
      >
        Post Property
      </button>
    </div>

    <img
      src={agentImage}
      alt="Agent"
      className="absolute bottom-0 right-[-2px] h-[145px] w-auto object-contain"
    />
  </div>
</aside>
    </div>
  );
}

function DealerMenu({ className }: { className: string }) {
  const navigate = useNavigate();

  return (
 <div
  className={`absolute top-[88px] z-[130] grid h-[380px] w-[1040px] grid-cols-[270px_1fr_285px] overflow-hidden rounded-lg bg-white text-[#06152e] shadow-2xl ${className}`}
>
     <aside className="bg-slate-100 px-9 py-8">
  <div className="space-y-6 text-[14px] font-bold text-slate-600">
          <button className="block text-left hover:text-blue-600">
            DEALER OFFERINGS
          </button>

          <button className="block text-left hover:text-blue-600">
            RESEARCH AND ADVICE
          </button>
        </div>

       <div className="mt-[205px] text-[14px] font-semibold text-slate-600">
  Are you a builder?{" "}
  <button className="font-bold text-blue-600 hover:underline">
    click here
  </button>
</div>
      </aside>

      <section className="px-10 py-8">
        <p className="text-[14px] font-semibold uppercase text-slate-400">
          Property Services
        </p>

        <div className="mt-6 space-y-4 text-[14px] font-bold">
          <button
            onClick={() => navigate("/post-property")}
            className="block hover:text-blue-600"
          >
            Post Property
          </button>

          <button
            onClick={() => navigate("/agents")}
            className="block hover:text-blue-600"
          >
            Dealer Services
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="block hover:text-blue-600"
          >
            My99acres
          </button>

          <button className="block hover:text-blue-600">
            View Responses
          </button>
        </div>

       <p className="mt-[95px] text-[13px] font-semibold text-slate-500">
          Email us at services@99acres.com. or call us at 1800 41 99099
          (IND Toll-Free)
        </p>
      </section>
<aside className="-ml-12 px-3 py-8">
  <div className="relative h-[215px] w-[238px] overflow-hidden rounded-lg bg-[#dff4e9] p-4">
    <div className="relative z-10 w-[150px]">
      <h3 className="text-[15px] font-extrabold leading-tight text-[#06152e]">
        Sell or rent faster at the right price!
      </h3>

      <p className="mt-2 text-[13px] leading-snug text-slate-600">
        List your property now for FREE
      </p>

      <button
        onClick={() => navigate("/post-property")}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-[13px] font-bold text-white"
      >
        Post Property
      </button>
    </div>

   <img
  src={agentImage}
  alt="Agent"
  className="absolute bottom-0 right-[4px] h-[145px] w-auto object-contain"
/>
  </div>
</aside>
</div>
  );
}



export default Home;