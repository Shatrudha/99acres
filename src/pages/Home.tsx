import { useEffect, useRef, useState } from "react";
import { loginWithEmailPassword, registerWithEmailPassword } from "../api/authApi";
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

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

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

function MobilePostPropertyPage({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"sell" | "rent" | "pg">("sell");
  const [propertyKind, setPropertyKind] = useState<"residential" | "commercial">(
    "residential"
  );

  return (
    <section className="mobile-post-property-page-99">
      <header className="mobile-post-property-header-99">
        <button type="button" onClick={onBack}>
          ☰
        </button>

        <strong>99acres</strong>

        <button type="button" className="mobile-post-whatsapp-99">
          Post via Whatsapp 🟢
        </button>
      </header>

      <section className="mobile-post-hero-99">
        <div className="mobile-post-whatsapp-tip-99">
          Comfortable with WhatsApp? Post property here <span>×</span>
        </div>

        <div className="mobile-post-hero-art-99">🏠</div>

        <h1>Sell or Rent Property online faster</h1>
        <p>✓ Get unlimited enquiries</p>

        <div className="mobile-post-tabs-99">
          <button
            type="button"
            className={activeTab === "sell" ? "active" : ""}
            onClick={() => setActiveTab("sell")}
          >
            Sell
          </button>

          <button
            type="button"
            className={activeTab === "rent" ? "active" : ""}
            onClick={() => setActiveTab("rent")}
          >
            Rent / Lease
          </button>

          <button
            type="button"
            className={activeTab === "pg" ? "active" : ""}
            onClick={() => setActiveTab("pg")}
          >
            PG
          </button>
        </div>
      </section>

      <main className="mobile-post-body-99">
        <section className="mobile-post-form-card-99">
          <h2>What kind of property do you have?</h2>

          <div className="mobile-post-kind-tabs-99">
            <button
              type="button"
              className={propertyKind === "residential" ? "active" : ""}
              onClick={() => setPropertyKind("residential")}
            >
              Residential
            </button>

            <button
              type="button"
              className={propertyKind === "commercial" ? "active" : ""}
              onClick={() => setPropertyKind("commercial")}
            >
              Commercial
            </button>
          </div>

          <div className="mobile-post-chip-wrap-99">
            {(propertyKind === "residential"
              ? [
                  "Flat/Apartment",
                  "Independent House / Villa",
                  "Independent / Builder Floor",
                  "Plot / Land",
                  "1 RK/ Studio Apartment",
                  "Serviced Apartment",
                  "Farmhouse",
                  "Other",
                ]
              : [
                  "Office",
                  "Shop",
                  "Showroom",
                  "Commercial Land",
                  "Warehouse",
                  "Industrial Building",
                  "Other",
                ]
            ).map((item) => (
              <button type="button" key={item}>
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="mobile-post-contact-99">
          <h2>Your contact details for the buyer to reach you</h2>

          <input placeholder="Phone number / Email / Username" />

          <button type="button">Start now, it’s FREE</button>

          <p>* Available with Owner Assist Plans</p>
        </section>

        <section className="mobile-post-steps-99">
          <p>HOW TO POST</p>
          <h2>Post Your Property in 3 Simple Steps</h2>

          <article>
            <span>01.</span>
            <strong>Add property details</strong>
            <p>
              Begin by telling us the few basic details about your property like
              your property type, location, rooms, etc
            </p>
          </article>

          <article className="right">
            <span>02.</span>
            <strong>Upload Photos & Videos</strong>
            <p>Add photos/videos of your property from desktop or mobile</p>
          </article>

          <article>
            <span>03.</span>
            <strong>Add Pricing & Ownership</strong>
            <p>Add ownership details and expected price, then you are ready to post</p>
          </article>
        </section>

        <section className="mobile-post-trust-99">
          <p>WHY TRUST US</p>
          <h2>Get maximum visibility with 7 million unique visitors monthly</h2>
          <span>99acres gives your property the best reach with best advertisement</span>

          <div>
            <strong>Over 1 million</strong>
            <p>Property listings</p>
          </div>

          <div>
            <strong>Over 5.5 million</strong>
            <p>Monthly searches</p>
          </div>

          <div>
            <strong>Over 200K</strong>
            <p>Owners advertising monthly</p>
          </div>
        </section>

        <section className="mobile-post-faq-99">
          <h2>Frequently Asked Questions</h2>

          {[
            "What type of property I can post on 99acres.com for selling/renting?",
            "Is posting property for selling/renting on 99acres.com FREE?",
            "Can I sell/rent out my property on my own?",
            "How can I rent/sell my property faster?",
            "Will I get genuine buyers & tenants even with free property listings?",
          ].map((faq, index) => (
            <details key={faq} open={index < 2}>
              <summary>{faq}</summary>
              <p>
                Yes, you can post residential and commercial properties for rent,
                lease or sale. Add complete details and photos to get better
                enquiries from genuine buyers and tenants.
              </p>
            </details>
          ))}

          <button type="button">View more FAQs</button>
        </section>

        <section className="mobile-post-benefits-99">
          <p>ADDITIONAL BENEFITS</p>
          <h2>Everything 99acres does to sell or rent out your property faster...</h2>
          <span>
            Post free property ads on 99acres.com, India’s No. 1 property portal,
            to find genuine buyers and tenants. Whether you are a property owner,
            builder or broker, you can rent or sell property online with ease.
          </span>
        </section>
      </main>

      <button type="button" className="mobile-post-floating-btn-99">
        Start now, it’s FREE
      </button>
    </section>
  );
}

function Home() {
  const navigate = useNavigate();
const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
const [cityPopupOpen, setCityPopupOpen] = useState(false);
const [sideMenuOpen, setSideMenuOpen] = useState(false);
const [mobilePageOpen, setMobilePageOpen] = useState<
  null | "profile" | "feedback"
>(null);

const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
const [mobilePostPropertyOpen, setMobilePostPropertyOpen] = useState(false);
const [mobilePlotLandSheetOpen, setMobilePlotLandSheetOpen] = useState(false);
const [mobilePlotLandPageOpen, setMobilePlotLandPageOpen] = useState(false);
const [mobileShortlistOpen, setMobileShortlistOpen] = useState(false);
const [mobileLocalitiesPageOpen, setMobileLocalitiesPageOpen] = useState(false);
const [mobilePlotLandCitySearchOpen, setMobilePlotLandCitySearchOpen] = useState(false);
const [mobilePlotLandType, setMobilePlotLandType] = useState<"residential" | "commercial">("residential");
const [mobilePlotLandCity, setMobilePlotLandCity] = useState("");
const [mobilePlotLandSearchText, setMobilePlotLandSearchText] = useState("");

const [mobileFeedbackName, setMobileFeedbackName] = useState("");
const [mobileFeedbackEmail, setMobileFeedbackEmail] = useState("");
const [mobileFeedbackRating, setMobileFeedbackRating] = useState(0);
const [mobileFeedbackType, setMobileFeedbackType] = useState("");
const [mobileFeedbackText, setMobileFeedbackText] = useState("");
const [mobileFeedbackMessage, setMobileFeedbackMessage] = useState("");

const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
const [mobileInsightsSheetOpen, setMobileInsightsSheetOpen] = useState(false);
const [mobilePriceTrendsOpen, setMobilePriceTrendsOpen] = useState(false);
const [mobileMyPropertyInsightsOpen, setMobileMyPropertyInsightsOpen] = useState(false);
const [mobileKnowledgeOpen, setMobileKnowledgeOpen] = useState(false);
const [mobileKnowledgeTab, setMobileKnowledgeTab] = useState<"news" | "articles">("articles");
const [mobileMyPropertyGoalOpen, setMobileMyPropertyGoalOpen] = useState(false);

const [mobileInvestModalOpen, setMobileInvestModalOpen] = useState(false);
const [mobileInvestSearchOpen, setMobileInvestSearchOpen] = useState(false);
const [mobileInvestPageOpen, setMobileInvestPageOpen] = useState(false);
const [mobileInvestCity, setMobileInvestCity] = useState("Delhi");
const [mobileInvestCitySearch, setMobileInvestCitySearch] = useState("");
const [mobileInvestMinBudget, setMobileInvestMinBudget] = useState("0");
const [mobileInvestMaxBudget, setMobileInvestMaxBudget] = useState("100+ Cr");
const [mobileInvestBudgetDropdown, setMobileInvestBudgetDropdown] = useState<
  null | "min" | "max"
>(null);
const [mobileInsightSearch, setMobileInsightSearch] = useState("");
const [mobileInsightCity, setMobileInsightCity] = useState("Hyderabad");
const [mobileMyPropertyLocation, setMobileMyPropertyLocation] = useState("");
const [mobileOwnerPageOpen, setMobileOwnerPageOpen] = useState(false);
const [mobileNewProjectOpen, setMobileNewProjectOpen] = useState(false);
const [mobileNewProjectSortOpen, setMobileNewProjectSortOpen] = useState(false);
const [mobileNewProjectFilterOpen, setMobileNewProjectFilterOpen] = useState(false);
const [mobileNewProjectSort, setMobileNewProjectSort] = useState("Relevance");
const [mobileNewProjectFilterTab, setMobileNewProjectFilterTab] =
  useState("Quick Filters (1)");
const [mobileBudgetMin, setMobileBudgetMin] = useState("No min");
const [mobileBudgetMax, setMobileBudgetMax] = useState("No max");
const [mobileSelectedBhk, setMobileSelectedBhk] = useState<string[]>([]);

const mobileBhkOptions = ["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"];

const getMobileBhkChipText = () => {
  if (mobileSelectedBhk.length === 0) return "";

  if (mobileSelectedBhk.length === mobileBhkOptions.length) {
    return "1 RK/1, 2, 3, 4, 4+ BHK";
  }

  const shortLabels: Record<string, string> = {
    "1 RK/1 BHK": "1 RK/1",
    "2 BHK": "2",
    "3 BHK": "3",
    "4 BHK": "4",
    "4+ BHK": "4+",
  };

  return `${mobileBhkOptions
    .filter((item) => mobileSelectedBhk.includes(item))
    .map((item) => shortLabels[item])
    .join(", ")} BHK`;
};

const toggleMobileBhk = (value: string) => {
  setMobileSelectedBhk((prev) =>
    prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value]
  );
};

const selectAllMobileBhk = () => {
  setMobileSelectedBhk(mobileBhkOptions);
};

const clearMobileBhk = () => {
  setMobileSelectedBhk([]);
};

const [mobileSearchStep, setMobileSearchStep] = useState<
  "suggestions" | "typing" | "selected" | "filters"
>("suggestions");
const [mobileSearchTab, setMobileSearchTab] = useState<
  "buy" | "rent" | "commercial"
>("buy");
const [mobileSearchLocation, setMobileSearchLocation] = useState("");
const [mobileAdvancedOpen, setMobileAdvancedOpen] = useState(false);
const [mobileSelectedConstruction, setMobileSelectedConstruction] = useState("");

const [viewNumberPopupOpen, setViewNumberPopupOpen] = useState(false);
const [activeHeroSlide, setActiveHeroSlide] = useState(0);
const [showStickyHeader, setShowStickyHeader] = useState(false);

const [loginModalOpen, setLoginModalOpen] = useState(false);
const [loginStep, setLoginStep] = useState<"phone" | "otp" | "call" | "email">(
  "phone"
);
const [loginCountryCode, setLoginCountryCode] = useState("+91");
const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
const [loginPhone, setLoginPhone] = useState("");
const [loginPhoneTouched, setLoginPhoneTouched] = useState(false);
const [otpValues, setOtpValues] = useState(["", "", "", ""]);
const [missedCallSeconds, setMissedCallSeconds] = useState(118);
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [loginError, setLoginError] = useState(false);
const [otpError, setOtpError] = useState("");
const [authLoading, setAuthLoading] = useState(false);

const handleSendOtp = async () => {
  setLoginError(false);
  setOtpError("");

  const cleanPhone = loginPhone.trim();
  const isValidIndianMobile = /^[6-9][0-9]{9}$/.test(cleanPhone);

  if (!isValidIndianMobile) {
    setLoginPhoneTouched(true);
    setLoginError(true);
    setOtpError("Please enter valid 10 digit mobile number.");
    return;
  }

  try {
    setAuthLoading(true);

    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        countryCode: loginCountryCode,
        phone: cleanPhone,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      setLoginError(true);
      setOtpError(data.message || "Login failed. Please try again.");
      return;
    }

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("authToken", data.token);
    }

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("authUser", JSON.stringify(data.user));
    }

    setLoginModalOpen(false);
    setLoginStep("phone");
    setLoginPhone("");
    setOtpValues(["", "", "", ""]);
    setLoginError(false);
    setOtpError("");

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.error("Phone login error:", error);
    setLoginError(true);
    setOtpError("Cannot connect to backend. Please check backend is running on port 5000.");
  } finally {
    setAuthLoading(false);
  }
};

const handleVerifyOtp = async () => {
  setOtpError("");

  const otp = otpValues.join("");

  if (otp.length !== 4) {
    setOtpError("Please enter 4 digit OTP");
    return;
  }

  try {
    setAuthLoading(true);

    const res = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
   body: JSON.stringify({
  countryCode: loginCountryCode,
  phone: loginPhone,
  otp,
}),
    });

    const data = await res.json();

    if (!data.success) {
      setOtpError(data.message || "Incorrect OTP. Please enter the correct OTP.");
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    setLoginModalOpen(false);
    setLoginStep("phone");
    setLoginPhone("");
    setOtpValues(["", "", "", ""]);
    setOtpError("");
  } catch (error) {
    console.error(error);
    setOtpError("Something went wrong. Please try again.");
  } finally {
    setAuthLoading(false);
  }
};
const handleRealEmailLogin = async () => {
  setLoginError(false);
  setOtpError("");

  const email = loginEmail.trim();

  if (!email || !loginPassword.trim()) {
    setLoginError(true);
    setOtpError("Please enter email and password.");
    return;
  }

  try {
    setAuthLoading(true);

    const data = await loginWithEmailPassword(email, loginPassword);

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("authToken", data.token);
    }

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("authUser", JSON.stringify(data.user));
    }

    setLoginModalOpen(false);
    setLoginStep("phone");
    setLoginEmail("");
    setLoginPassword("");
    setLoginError(false);
    setOtpError("");
  } catch (error) {
    console.error(error);
    setLoginError(true);
    setOtpError(
      error instanceof Error
        ? error.message
        : "Incorrect Credentials. Kindly Register or Click Forgot password to reset."
    );
  } finally {
    setAuthLoading(false);
  }
};

const countryCodes = ["+91", "+44", "+1", "+61", "+60", "+971", "+93", "+355", "+213", "+1684"];

const isValidLoginPhone = /^[6-9][0-9]{9}$/.test(loginPhone);
const showLoginPhoneError = loginPhoneTouched && loginPhone.length > 0 && !isValidLoginPhone;

useEffect(() => {
  if (!loginModalOpen || loginStep !== "call") return;

  setMissedCallSeconds(118);

  const timer = window.setInterval(() => {
    setMissedCallSeconds((prev) => {
      if (prev <= 0) {
        window.clearInterval(timer);
        return 0;
      }

      return prev - 1;
    });
  }, 1000);

  return () => window.clearInterval(timer);
}, [loginModalOpen, loginStep]);

const missedCallMinutes = Math.floor(missedCallSeconds / 60);
const missedCallRemainingSeconds = missedCallSeconds % 60;
const missedCallTimeText = `${missedCallMinutes}:${String(
  missedCallRemainingSeconds
).padStart(2, "0")}`;

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

const openMobilePostPropertyPage = () => {
  setMobileSearchOpen(false);
  setMobileOwnerPageOpen(false);
  setMobileNewProjectOpen(false);
  setMobileInvestModalOpen(false);
  setMobileInvestSearchOpen(false);
  setMobileInvestPageOpen(false);
  setMobilePlotLandSheetOpen(false);
  setMobilePlotLandPageOpen(false);
  setMobilePlotLandCitySearchOpen(false);
  setMobileInsightsOpen(false);
  setMobileShortlistOpen(false);
  setMobileLocalitiesPageOpen(false);
  setSideMenuOpen(false);
  setLoginModalOpen(false);
  setMobilePageOpen(null);

  setMobilePostPropertyOpen(true);
};

const openMobileShortlistPage = () => {
  setMobileSearchOpen(false);
  setMobileOwnerPageOpen(false);
  setMobileNewProjectOpen(false);
  setMobileInvestModalOpen(false);
  setMobileInvestSearchOpen(false);
  setMobileInvestPageOpen(false);
  setMobilePlotLandSheetOpen(false);
  setMobilePlotLandPageOpen(false);
  setMobilePlotLandCitySearchOpen(false);
  setMobileInsightsOpen(false);
  setMobilePostPropertyOpen(false);
  setMobileLocalitiesPageOpen(false);
  setSideMenuOpen(false);
  setLoginModalOpen(false);
  setMobilePageOpen(null);

  setMobileShortlistOpen(true);
};

const openMobileInsightsPage = () => {
  setMobileSearchOpen(false);
  setMobileOwnerPageOpen(false);
  setMobileNewProjectOpen(false);
  setMobileInvestModalOpen(false);
  setMobileInvestSearchOpen(false);
  setMobileInvestPageOpen(false);
  setMobilePlotLandSheetOpen(false);
  setMobilePlotLandPageOpen(false);
  setMobilePlotLandCitySearchOpen(false);
  setMobilePostPropertyOpen(false);
  setMobileShortlistOpen(false);
  setMobileLocalitiesPageOpen(false);
  setSideMenuOpen(false);
  setLoginModalOpen(false);
  setMobilePageOpen(null);

  setMobileInsightsOpen(true);

  window.setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
};

const openMobileLocalitiesPage = () => {
  setMobileSearchOpen(false);
  setMobileOwnerPageOpen(false);
  setMobileNewProjectOpen(false);
  setMobileInvestModalOpen(false);
  setMobileInvestSearchOpen(false);
  setMobileInvestPageOpen(false);
  setMobilePlotLandSheetOpen(false);
  setMobilePlotLandPageOpen(false);
  setMobilePlotLandCitySearchOpen(false);
  setMobileInsightsOpen(false);
  setMobilePostPropertyOpen(false);
  setMobileShortlistOpen(false);
  setSideMenuOpen(false);
  setLoginModalOpen(false);
  setMobilePageOpen(null);

  setMobileLocalitiesPageOpen(true);

  window.setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
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
  window.open(
    "https://play.google.com/store/apps/details?id=com.nnacres.app&hl=en_IN",
    "_blank",
    "noopener,noreferrer"
  );
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

  const hasSeenLoginPopup = localStorage.getItem("hasSeenLoginPopup");

  if (!hasSeenLoginPopup) {
    const timer = window.setTimeout(() => {
      setLoginModalOpen(true);
      setLoginStep("phone");
      localStorage.setItem("hasSeenLoginPopup", "true");
    }, 900);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }

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

const mobileCategories = [
  { label: "Buy", icon: "⌂", action: "search" },
  { label: "Rent", icon: "⚿", action: "rent" },
  { label: "New Projects", icon: "▻", action: "new-launch" },
  { label: "Insights", icon: "💡", action: "insights" },
  { label: "Invest", icon: "📈", action: "invest" },
  { label: "Plot / Land", icon: "◧", action: "plots" },
  { label: "Commercial", icon: "▦", action: "commercial" },
  { label: "Lease Commercial", icon: "🔑", action: "lease-commercial" },
  { label: "PG", icon: "🛏️", action: "pg" },
  { label: "Post a property", icon: "⊕", action: "post-property" },
];

const mobileBudgetValues = [
  "No min",
  "5 L",
  "10 L",
  "15 L",
  "20 L",
  "25 L",
  "30 L",
  "35 L",
  "40 L",
  "45 L",
  "50 L",
  "60 Cr",
  "70 Cr",
  "80 Cr",
  "90 Cr",
  "100 Cr",
];

const mobileBudgetMaxValues = [
  "No max",
  "5 L",
  "10 L",
  "15 L",
  "20 L",
  "25 L",
  "30 L",
  "35 L",
  "40 L",
  "45 L",
  "50 L",
  "60 Cr",
  "70 Cr",
  "80 Cr",
  "90 Cr",
  "100 Cr",
  "100+ Cr",
];
const mobileInvestCityOptions = [
  "Central Delhi",
  "Delhi South West",
  "East Delhi",
  "North Delhi",
  "South Delhi",
  "West Delhi",
  "Faridabad",
  "Ghaziabad",
  "Greater Noida",
  "Gurgaon",
  "Noida",
  "Hyderabad",
  "Mumbai",
  "Bangalore",
  "Pune",
];

const formatInvestBudget = (value: string) => {
  if (value === "No min" || value === "No max") return value;
  return `₹ ${value}`;
};

const openMobileInvestModal = () => {
  setMobileSearchOpen(false);
  setMobileInsightsOpen(false);
  setMobileInsightsSheetOpen(false);
  setMobilePriceTrendsOpen(false);
  setMobileMyPropertyInsightsOpen(false);
  setMobileMyPropertyGoalOpen(false);
  setMobileKnowledgeOpen(false);
  setMobileOwnerPageOpen(false);
  setMobileNewProjectOpen(false);
  setMobileNewProjectSortOpen(false);
  setMobileNewProjectFilterOpen(false);
  setSideMenuOpen(false);
  setLoginModalOpen(false);
  setMobilePageOpen(null);
  setMobileInvestPageOpen(false);
  setMobileInvestSearchOpen(false);
  setMobileInvestModalOpen(true);
};

const openMobileInvestPage = () => {
  setMobileInvestBudgetDropdown(null);
  setMobileInvestSearchOpen(false);
  setMobileInvestModalOpen(false);
  setMobileInvestPageOpen(true);
};

const getFilteredInvestCities = () => {
  const value = mobileInvestCitySearch.trim().toLowerCase();

  if (!value) return mobileInvestCityOptions;

  return mobileInvestCityOptions.filter((city) =>
    city.toLowerCase().includes(value)
  );
};
const mobilePopularHyderabadLocalities = [
  "Adibatla",
  "LB Nagar",
  "Gandipet",
  "Vattinagulapally",
  "Nanakramguda",
  "Manikonda",
  "Manchirevula",
  "Sriram Nagar",
  "Srisailam Highway",
  "Khazaguda",
  "Kondapur",
  "Tellapur",
  "Bandlaguda Jagir",
  "Kokapeta Village",
  "Nallagandla",
];

const mobileCitySuggestionBase = [
  "Hyderabad",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Noida",
  "Gurgaon",
  "Lucknow",
  "Jaipur",
];

const mobilePriceTrendCities = [
  { city: "Bangalore", state: "Karnataka", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=200&auto=format&fit=crop" },
  { city: "Mumbai", state: "Maharashtra", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=200&auto=format&fit=crop" },
  { city: "Delhi", state: "India", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=200&auto=format&fit=crop" },
  { city: "Pune", state: "Maharashtra", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=200&auto=format&fit=crop" },
  { city: "Dehradun", state: "Uttarakhand", image: "" },
  { city: "Bhubaneswar", state: "Orissa", image: "" },
  { city: "Vadodara", state: "Gujarat", image: "" },
  { city: "Mysore", state: "Karnataka", image: "" },
  { city: "Visakhapatnam", state: "Andhra Pradesh", image: "" },
  { city: "Raipur", state: "Chattisgarh", image: "" },
  { city: "Secunderabad", state: "Telangana", image: "" },
  { city: "Bhopal", state: "Madhya Pradesh", image: "" },
];

const submitMobileInsightSearch = () => {
  const value = mobileInsightSearch.trim();

  if (!value) return;

  setMobileInsightCity(
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  );
};

const getMobileCitySuggestions = (cityText: string) => {
  const cleanCity = cityText.trim();

  if (!cleanCity) {
    return [
      { title: "Hyderabad", subtitle: "City" },
      { title: "Mumbai", subtitle: "City" },
      { title: "Delhi / NCR", subtitle: "City" },
      { title: "Bangalore", subtitle: "City" },
      { title: "Pune", subtitle: "City" },
    ];
  }

  const matchedCity =
    mobileCitySuggestionBase.find((city) =>
      city.toLowerCase().startsWith(cleanCity.toLowerCase())
    ) || cleanCity;

  return [
    { title: matchedCity, subtitle: "City" },
    { title: `${matchedCity} - New Launch Projects`, subtitle: "" },
    { title: `${matchedCity} Metropolitan Region`, subtitle: "City" },
    { title: `${matchedCity} Shah Guda`, subtitle: "Locality" },
    { title: `New ${matchedCity}`, subtitle: "Locality" },
    { title: `${matchedCity} Gate`, subtitle: "Locality" },
    { title: `${matchedCity} Highway`, subtitle: "Locality" },
    { title: `Harion ${matchedCity}`, subtitle: "Project" },
    { title: `${matchedCity} Residency`, subtitle: "Project" },
  ];
};

const openMobileSearch = (tab: "buy" | "rent" | "commercial" = "buy") => {
  setMobileSearchTab(tab);
  setMobileSearchOpen(true);
  setMobileOwnerPageOpen(false);
  setMobileNewProjectOpen(false);
  setMobilePageOpen(null);
  setSideMenuOpen(false);
  setLoginModalOpen(false);
};

const mobileNewProjectFilterTabs = [
  "Quick Filters (1)",
  "Budget",
  "Property Type",
  "BHK",
  "Property Size",
  "Possession Status",
  "New Booking / Resale",
  "Amenities & Facilities",
  "Builders",
  "Floor Preference",
  "Facing Direction",
  "Property Features",
  "Project Area",
  "Project Density",
  "Posted By (1)",
  "Bathrooms",
  "Photos & Videos",
  "Furnishing Status",
  "RERA Approved",
];

const mobileNewProjectSortOptions = [
  "Relevance",
  "Newest first",
  "Price : Low to High",
  "Price : High to Low",
  "Price / sq.ft. : Low to High",
  "Price / sq.ft. : High to Low",
];
const mobileNewProjectCards = [
  {
    title: "URBANYARDS SHANGRILA",
    subtitle: "2, 3 BHK Apartment in Tukkuguda, Hyderabad",
    config1: "2 BHK Apartment",
    price1: "₹87.96 L",
    config2: "3 BHK Apartment",
    price2: "₹1.06 - 1.74 Cr",
    rate: "₹6,000 /sqft onwards (super area)",
    desc: "Spacious 2,3 BHK apartments in Tukkuguda are available...",
    status: "New Launch · Completion in Oct, 2030",
    badge: "New Launch",
    count: "1/6",
  },
  {
    title: "Team4 Aria",
    subtitle: "3, 4 BHK Apartment in Miyapur, Hyderabad",
    config1: "3 BHK Apartment",
    price1: "₹1.25 - 1.92 Cr",
    config2: "4 BHK Apartment",
    price2: "₹1.85 - 2 Cr",
    rate: "₹7,550 /sqft onwards (super area)",
    desc: "Spacious 3,4 BHK apartments in Miyapur are available...",
    status: "New Launch · Completion in Dec, 2030",
    badge: "New Launch",
    count: "1/6",
  },
  {
    title: "GHR Trivana",
    subtitle: "4, 5 BHK Villa in Tukkuguda, Hyderabad",
    config1: "4 BHK Villa",
    price1: "₹4.05 Cr",
    config2: "5 BHK Villa",
    price2: "₹4.62 Cr",
    rate: "₹10,500 /sqft onwards (super area)",
    desc: "Spacious and elegant 4,5 BHK Villa are for sale in...",
    status: "New Launch · Completion in Feb, 2030",
    badge: "New Booking",
    count: "3/3",
  },
  {
    title: "Ambience Lumina",
    subtitle: "3 BHK Apartment in Hafeezpet, Hyderabad",
    config1: "3 BHK Apartment",
    price1: "₹1.05 - 1.78 Cr",
    config2: "",
    price2: "",
    rate: "₹7,000 /sqft onwards (super area)",
    desc: "Choose your dream home from the wide variety...",
    status: "New Launch · Completion in Dec, 2028",
    badge: "New Launch",
    count: "1/2",
  },
  {
    title: "Akshita Akreya",
    subtitle: "4 BHK Villa in Shamirpet, Secunderabad",
    config1: "4 BHK Villa",
    price1: "₹3.44 - 5.28 Cr",
    config2: "",
    price2: "",
    rate: "₹7,800 /sqft onwards (super area)",
    desc: "Buy 4 BHK Villa for sale in Shamirpet in a gated...",
    status: "New Launch · Completion in Jan, 2031",
    badge: "New Booking",
    count: "1/7",
  },
  {
    title: "Prestige Golden Grove",
    subtitle: "2, 3, 4 BHK Apartment in Tellapur, Hyderabad",
    config1: "2 BHK Apartment",
    price1: "₹1.05 - 1.15 Cr",
    config2: "3 BHK Apartment",
    price2: "₹1.36 - 2.22 Cr",
    rate: "₹9,000 /sqft onwards (super area)",
    desc: "Finest 2,3,4 BHK apartments in Tellapur available...",
    status: "New Launch · Completion in Mar, 2031",
    badge: "New Launch",
    count: "1/7",
  },
  {
    title: "Bright SLR Villas",
    subtitle: "3 BHK Villa in Kompally, Hyderabad",
    config1: "3 BHK Villa",
    price1: "₹2.21 - 2.55 Cr",
    config2: "",
    price2: "",
    rate: "₹7,500 /sqft onwards (builtup area)",
    desc: "Located in Kompally, Bright SLR Villas is now off...",
    status: "Under Construction · Completion in Jun, 2027",
    badge: "New Launch",
    count: "1/3",
  },
  {
    title: "Subha Sampada Shamshine City",
    subtitle: "Land in Shadnagar, Hyderabad",
    config1: "Land",
    price1: "₹43.42 L - 2.6 Cr",
    config2: "",
    price2: "",
    rate: "₹26,100 /sqyd onwards (plot area)",
    desc: "Subha Sampada Shamshine City offers plots in ...",
    status: "Ready To Move · Since May, 2026",
    badge: "New Launch",
    count: "1/10",
  },
];

const mobileOwnerCards = [
  {
    project: "ARAR SUMMIT",
    title: "3 BHK Flat",
    location: "Gajularamaram, Hyderabad",
    tag: "Resale",
    price: "₹60 Lac",
    rate: "₹5,221 /sqft",
    size: "1,149 sqft",
    areaType: "Built-up area",
    status: "Under Construction",
    desc: "Residential apartment This is your chance to a 3 b...",
    ownerAgo: "5d ago",
    photoMode: "request",
    count: "",
  },
  {
    project: "RADHEY RAAGA",
    title: "5 Bedroom House",
    location: "Kollur, Hyderabad",
    tag: "Resale",
    price: "₹4.36 Cr",
    rate: "₹1.98 L /sqyd",
    size: "220 sqyd",
    areaType: "Plot area",
    status: "Ready To Move",
    desc: "Are you planning to buy your dream home? You c...",
    ownerAgo: "2w ago",
    photoMode: "image",
    count: "20",
  },
  {
    project: "PURAVIDHA",
    title: "Residential land / Plot",
    location: "Nandigama, Hyderabad",
    tag: "Resale",
    price: "₹1.2 Cr",
    rate: "₹25,000 /sqyd",
    size: "480 sqyd",
    areaType: "Plot area",
    status: "Ready To Move",
    desc: "Clear title Grand entrance arch Gated community ...",
    ownerAgo: "3d ago",
    photoMode: "image",
    count: "7",
  },
  {
    project: "Habsiguda, Hyderabad",
    title: "3 Bedroom House",
    location: "Habsiguda, Hyderabad",
    tag: "Resale",
    price: "₹3.2 Cr",
    rate: "₹1.24 L /sqyd",
    size: "258 sqyd",
    areaType: "Plot area",
    status: "Ready To Move",
    desc: "Independent house for sale in the much sought af...",
    ownerAgo: "1mo ago",
    photoMode: "video",
    count: "3",
  },
  {
    project: "GANGARAM VILLAGE,SANGAR...",
    title: "Residential land / Plot",
    location: "Kondapur, Hyderabad",
    tag: "Resale",
    price: "₹95 Lac",
    rate: "₹20,742 /sqyd",
    size: "458 sqyd",
    areaType: "Plot area",
    status: "Ready To Move",
    desc: "Residential land Residential land / plot for sale in s...",
    ownerAgo: "1mo ago",
    photoMode: "video",
    count: "4",
  },
  {
    project: "SREE TOWERS",
    title: "3 BHK Flat",
    location: "Serilingampally, Hyderabad",
    tag: "Resale",
    price: "₹86 Lac",
    rate: "₹6,661 /sqft",
    size: "1,291 sqft",
    areaType: "Super built-up area",
    status: "Ready To Move",
    desc: "This is your chance to a 3 bhk apartment / flat for ...",
    ownerAgo: "2w ago",
    photoMode: "image",
    count: "20",
  },
  {
    project: "DAKSHIN",
    title: "3 Bedroom House",
    location: "Bandlaguda Jagir, Hyderabad",
    tag: "Resale",
    price: "₹2.75 Cr",
    rate: "₹1.08 L /sqyd",
    size: "255 sqyd",
    areaType: "Plot area",
    status: "Ready To Move",
    desc: "A spacious independent house with modern interiors...",
    ownerAgo: "3w ago",
    photoMode: "video",
    count: "3",
  },
  {
    project: "GREEN COUNTY",
    title: "Residential land / Plot",
    location: "Shadnagar, Hyderabad",
    tag: "Resale",
    price: "₹72 Lac",
    rate: "₹18,200 /sqyd",
    size: "396 sqyd",
    areaType: "Plot area",
    status: "Ready To Move",
    desc: "Open plot available in a gated community with roads...",
    ownerAgo: "1mo ago",
    photoMode: "image",
    count: "12",
  },
  {
    project: "LAKE VIEW HOMES",
    title: "2 BHK Flat",
    location: "Miyapur, Hyderabad",
    tag: "Resale",
    price: "₹78 Lac",
    rate: "₹6,900 /sqft",
    size: "1,130 sqft",
    areaType: "Super built-up area",
    status: "Ready To Move",
    desc: "Well maintained 2 bhk apartment close to metro...",
    ownerAgo: "4w ago",
    photoMode: "video",
    count: "5",
  },
  {
    project: "URBAN NEST",
    title: "4 BHK Flat",
    location: "Kokapet, Hyderabad",
    tag: "Resale",
    price: "₹2.25 Cr",
    rate: "₹12,096 /sqft",
    size: "1,860 sqft",
    areaType: "Super built-up area",
    status: "Ready To Move",
    desc: "This is your chance to a 4 bhk apartment / flat for ...",
    ownerAgo: "2w ago",
    photoMode: "image",
    count: "20",
  },
];

const openMobileOwnerResults = () => {
  setMobileNewProjectSortOpen(false);
  setMobileNewProjectFilterOpen(false);
  setMobileNewProjectOpen(false);
  setMobileSearchOpen(false);
  setSideMenuOpen(false);
  setMobilePageOpen(null);
  setMobileOwnerPageOpen(true);
};

const openMobileContactLogin = () => {
  setLoginModalOpen(true);
  setLoginStep("phone");
  setLoginError(false);
  setOtpError("");
};

const openMobilePostedByFilter = () => {
  setMobileNewProjectSortOpen(false);
  setMobileNewProjectFilterTab("Posted By (1)");
  setMobileNewProjectFilterOpen(true);
};

const openMobileNewProjects = () => {
  setMobileSearchOpen(false);
  setMobileOwnerPageOpen(false);
  setSideMenuOpen(false);
  setLoginModalOpen(false);
  setMobilePageOpen(null);
  setMobileNewProjectSortOpen(false);
  setMobileNewProjectFilterOpen(false);
  setMobileNewProjectOpen(true);
};

const getMobileSelectedCity = () => mobileSearchLocation || "Hyderabad";
const mobilePlotCityOptions = [
  "Delhi / NCR",
  "Hyderabad",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Faridabad",
  "Ghaziabad",
  "Greater Noida",
  "Gurgaon",
  "Noida",
  "Mysore",
  "Nagpur",
  "Nashik",
];

const filteredMobilePlotCities = mobilePlotCityOptions.filter((city) =>
  city.toLowerCase().includes(mobilePlotLandSearchText.trim().toLowerCase())
);

const openMobilePlotLandSheet = () => {
  setMobilePlotLandSheetOpen(true);
  setMobilePlotLandPageOpen(false);
  setMobilePlotLandCitySearchOpen(false);
  setMobileSearchOpen(false);
  setMobileNewProjectOpen(false);
  setMobileOwnerPageOpen(false);
  setMobileNewProjectSortOpen(false);
  setMobileNewProjectFilterOpen(false);
  setLoginModalOpen(false);
};

const openMobilePlotCitySearch = () => {
  setMobilePlotLandCitySearchOpen(true);
  setMobilePlotLandSearchText("");
};

const selectMobilePlotCity = (city: string) => {
  setMobilePlotLandCity(city);
  setMobilePlotLandCitySearchOpen(false);
  setMobilePlotLandSheetOpen(true);
};

const openMobilePlotLandPage = () => {
  setMobilePlotLandCity((prev) => prev || "Delhi / NCR");
  setMobilePlotLandSheetOpen(false);
  setMobilePlotLandCitySearchOpen(false);
  setMobilePlotLandPageOpen(true);
};

const closeMobilePlotLandAll = () => {
  setMobilePlotLandSheetOpen(false);
  setMobilePlotLandCitySearchOpen(false);
  setMobilePlotLandPageOpen(false);
};

const mobilePlotDisplayCity = mobilePlotLandCity || "Delhi / NCR";

const mobileResidentialPlotCards = [
  {
    price: "₹ 14.8 Cr",
    title: "Residential Land",
    place: "In Sector 26, Noida, Posted by Owner",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
  },
  {
    price: "₹ 4.1 Cr",
    title: "Residential Land",
    place: "In C Block Govindpuram, Ghaziabad, Posted by Owner",
    img: "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?auto=format&fit=crop&w=500&q=80",
  },
  {
    price: "₹ 78 L",
    title: "Residential Land",
    place: "In Nandgram, Ghaziabad, Posted by Owner",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
  },
  {
    price: "₹ 12.5 Cr",
    title: "Residential Land",
    place: "In Sector 23B Dwarka, Delhi, Posted by Owner",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=500&q=80",
  },
];

const mobileCommercialPlotCards = [
  {
    price: "₹ 14.6 Cr",
    title: "Industrial Lands/Plots",
    place: "In Manesar, Gurgaon, Posted by Owner",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
  },
  {
    price: "₹ 275 Cr",
    title: "Commercial Land/Inst. Land",
    place: "In Sector 104, Gurgaon, Posted by Owner",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  },
  {
    price: "₹ 3.01 Cr",
    title: "Commercial Land/Inst. Land",
    place: "In Sector 88A, Gurgaon, Posted by Owner",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80",
  },
  {
    price: "₹ 2.8 Cr",
    title: "Agricultural/Farm Land",
    place: "In Jewar, Greater Noida, Posted by Owner",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80",
  },
];

const activeMobilePlotCards =
  mobilePlotLandType === "commercial"
    ? mobileCommercialPlotCards
    : mobileResidentialPlotCards;

const getMobilePropertyCount = () => {
  const city = getMobileSelectedCity().toLowerCase();

  if (city.includes("chennai")) return "7887";
  if (city.includes("mumbai")) return "18452";
  if (city.includes("bangalore")) return "22409";
  if (city.includes("pune")) return "15683";
  if (city.includes("delhi")) return "19632";
  if (city.includes("noida")) return "12460";
  if (city.includes("gurgaon")) return "10342";

  return "31455";
};

const getMobileSearchPlaceholder = () => {
  if (mobileSearchTab === "rent") {
    return "Try - Gachibowli Hyderabad";
  }

  if (mobileSearchTab === "commercial") {
    return "Try - New Projects in Hyderabad";
  }

  return "Try - 3 BHK flats for sale in Hyderabad";
};

const handleMobileUseCurrentLocation = () => {
  if (!navigator.geolocation) {
    setMobileSearchLocation("Hyderabad");
    setMobileSearchStep("typing");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    () => {
      setMobileSearchLocation("Near Me");
      setMobileSearchStep("selected");
    },
    () => {
      setMobileSearchLocation("Hyderabad");
      setMobileSearchStep("typing");
    }
  );
};

const handleMobileVoiceSearch = () => {
  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    setMobileSearchLocation("Hyderabad");
    setMobileSearchStep("typing");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: any) => {
    const text = event.results?.[0]?.[0]?.transcript || "";
    setMobileSearchLocation(text);
    setMobileSearchStep("typing");
  };

  recognition.onerror = () => {
    setMobileSearchLocation("Hyderabad");
    setMobileSearchStep("typing");
  };

  recognition.start();
};

const openMobileKnowledge = (tab: "news" | "articles" = "articles") => {
  setMobileSearchOpen(false);
  setMobileOwnerPageOpen(false);
  setMobileNewProjectOpen(false);
  setMobileMyPropertyGoalOpen(false);
  setMobileMyPropertyInsightsOpen(false);
  setSideMenuOpen(false);
  setLoginModalOpen(false);
  setMobileKnowledgeTab(tab);
  setMobileKnowledgeOpen(true);
};

const closeMobileKnowledge = () => {
  setMobileKnowledgeOpen(false);
};

const MobileHomeView = (
  <section className="mobile-99-home">
    <div className="mobile-app-banner-99">
      <div className="mobile-app-phone">
        <span className="mobile-app-home-icon">⌂</span>
        <span className="mobile-app-download-icon">↓</span>
      </div>

      <div className="mobile-app-title">
        <strong>Switch to App for</strong>
        <strong>faster experience</strong>
      </div>

      <button
  type="button"
  onClick={openMobileAppsInNewTab}
  className="mobile-play-rating"
>
  <span>▶</span>
  <b>Play Store</b>
  <strong>4.6 ★</strong>
</button>

<button
  type="button"
  onClick={openMobileAppsInNewTab}
  className="mobile-use-app-btn-99"
>
  Use the app
</button>

    </div>

    <header className="mobile-main-header-99">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setSideMenuOpen(true)}
        className="mobile-hamburger-99"
      >
        ☰
      </button>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="mobile-logo-99"
      >
        99acres
      </button>

      <button
        type="button"
        onClick={() => navigate("/post-property")}
        className="mobile-post-99"
      >
        Post property <span>FREE</span>
      </button>
    </header>

   <nav className="mobile-category-strip-99">
{mobileCategories.map((item) => (
  <button
    key={item.label}
    type="button"
    onClick={() => {
      if (item.action === "search") {
        openMobileSearch("buy");
        return;
      }

      if (item.action === "rent") {
        openMobileSearch("rent");
        return;
      }

      if (item.action === "commercial") {
        openMobileSearch("commercial");
        return;
      }

      if (item.action === "lease-commercial") {
        openMobileSearch("commercial");
        setMobileSearchLocation("");
        setMobileSearchStep("suggestions");
        return;
      }

      if (item.action === "pg") {
        openMobileSearch("rent");
        setMobileSearchLocation("");
        setMobileSearchStep("suggestions");
        return;
      }

     if (item.action === "post-property") {
  openMobilePostPropertyPage();
  return;
}

      if (item.action === "new-launch") {
        openMobileNewProjects();
        return;
      }
if (item.action === "insights") {
  openMobileInsightsPage();
  return;
}

      if (item.action === "invest") {
        openMobileInvestModal();
        return;
      }

      if (item.action === "plots") {
        openMobilePlotLandSheet();
        return;
      }
    }}
    className="mobile-category-btn-99"
  >
      <span>{item.icon}</span>
      <strong>{item.label}</strong>
    </button>
  ))}
</nav>

    <section
      className="mobile-hero-99"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.05)), url(${heroBanner})`,
      }}
    >
      <div className="mobile-hero-text-99">
        <span>#KabTak</span>
        <span>Puchoge</span>
      </div>
    </section>
<button
  type="button"
  onClick={() => openMobileSearch("buy")}
  className="mobile-search-card-99"
>
      <Search size={34} strokeWidth={2.1} />
      <span>Search &quot;3 BHK flats for sale in Hyd...&quot;</span>
      <Mic size={27} strokeWidth={2.5} />
    </button>

    <div className="mobile-recent-row-99">
      <div className="mobile-recent-label-99">
        <span>↺</span>
        <p>
          Recent
          <br />
          Search
        </p>
      </div>

      <button type="button">Buy in undefined + 9 localities, Hoo...</button>
      <button type="button">All Re...</button>
    </div>

   <section className="mobile-recommended-99">
  <h2>Recommended Properties</h2>
  <p>Curated especially for you</p>

  <div className="mobile-property-grid-99">
    {properties.slice(0, 4).map((property) => (
      <button
        key={property.id}
        type="button"
        onClick={() => navigate(`/property/${property.id}`)}
        className="mobile-property-tile-99"
      >
        <div className="mobile-property-img-wrap-99">
          <img src={property.image} alt={property.title} />
          <span className="mobile-property-price-99">{property.price || "₹ 60 L"}</span>
          <span className="mobile-property-heart-99">♡</span>
        </div>

        <strong>{property.title || "2 BHK Flat Residential Apartment"}</strong>
        <p>In ARAR SUMMIT, Gajularamaram...</p>
        <small>Posted by Owner 1 week ago</small>
      </button>
    ))}
  </div>
</section>

<section className="mobile-projects-home-99">
  <h2>Recommended Projects</h2>
  <p>The most searched projects in Hyderabad</p>

  <div className="mobile-project-row-99">
    {[
      {
        name: "Unnati Shree Rath Apartments",
        config: "2, 3 BHK Apartment in Nizampet, Hyderabad",
        price: "₹ 69 L - 1.3 Cr",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
      },
      {
        name: "Abode M J Lakeview",
        config: "2 BHK Apartment in Hyderabad",
        price: "₹ 80.6 L",
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80",
      },
    ].map((project) => (
      <article key={project.name} className="mobile-project-card-home-99">
        <div>
          <img src={project.img} alt={project.name} />
          <span>✓ RERA</span>
          <button type="button">♡</button>
          <em>Possession from Dec 2026</em>
        </div>

        <h3>{project.name}</h3>
        <p>{project.config}</p>
        <strong>{project.price}</strong>
      </article>
    ))}
  </div>
</section>

<section className="mobile-localities-like-99">
  <h2>Localities you may like</h2>
  <p>Check property rates, price trends, reviews &amp; more</p>

  <div className="mobile-locality-like-row-99">
    {[
      ["Beeramguda", "4.1", "₹4,400/ sqft", "7.4% YoY"],
      ["Peerzadiguda", "4.2", "₹4,700/ sqft", "4.1% YoY"],
    ].map(([name, rating, price, yoy]) => (
      <article key={name} className="mobile-locality-like-card-99">
        <div className="mobile-locality-like-top-99">
          <span className="mobile-locality-round-img-99">📍</span>

          <div>
            <h3>
              {name} <em>{rating} ★</em>
            </h3>
            <p>
              {price} <span>▼</span> {yoy}
            </p>
          </div>
        </div>

        <div className="mobile-locality-like-actions-99">
          <button type="button">Insights</button>
          <button type="button">Properties</button>
        </div>
      </article>
    ))}
  </div>

 <button
  type="button"
  className="mobile-view-all-localities-99"
  onClick={openMobileLocalitiesPage}
>
  View all Localities you may like →
</button>
</section>

<section className="mobile-home-extra-99">
  <section className="mobile-home-apartments-99">
    <h2>Apartments, Villas and more</h2>
    <p>in Hyderabad</p>

    <div className="mobile-horizontal-row-99">
      {[
        ["Residential Apartment", "15,000+ Properties", residentialOne],
        ["Residential Land", "12,000+ Properties", plotsLandImage],
        ["Independent House", "4,500+ Properties", residentialTwo],
      ].map(([title, count, img]) => (
        <button
          type="button"
          key={title as string}
          className="mobile-big-category-card-99"
          onClick={() => openMobileSearch("buy")}
        >
          <strong>{title}</strong>
          <span>{count}</span>
          <img src={img as string} alt={title as string} />
        </button>
      ))}
    </div>
  </section>

  <section className="mobile-demand-projects-99">
    <h2>Projects in High Demand</h2>
    <p>The most explored projects in Hyderabad</p>

    <div className="mobile-horizontal-row-99">
      {[
        ["Pallavi Gardenia", "3 BHK Apartment in Nagole, Hyderabad", "₹ 87.05 L - 1.13 Cr"],
        ["Sharvani Sree Hemadurga", "2, 3 BHK Apartment in Hyderabad", "₹ 96 L - 1.4 Cr"],
      ].map(([name, desc, price], index) => (
        <article key={name} className="mobile-demand-card-99">
          <div>
            <img src={properties[index % properties.length]?.image} alt={name} />
            <span>✓ RERA</span>
            <button type="button">♡</button>
            <em>Possession from Dec 2025</em>
          </div>

          <h3>{name}</h3>
          <p>{desc}</p>
          <strong>{price}</strong>
        </article>
      ))}
    </div>
  </section>

  <section className="mobile-handpicked-projects-99">
    <h2>Handpicked Projects</h2>
    <p>Featured projects in Hyderabad</p>

    <div className="mobile-horizontal-row-99">
      {[
        ["R One Diamond Towers", "3,4 BHK Apartment, Financial District", "₹ 2.91 - 4.42 Cr"],
        ["The Pearl Heights", "2,3 BHK Apartment, Hyderabad", "₹ 96 L - 1.5 Cr"],
      ].map(([name, desc, price], index) => (
        <article key={name} className="mobile-handpicked-card-99">
          <img src={properties[(index + 2) % properties.length]?.image} alt={name} />
          <span>Featured</span>
          <button type="button">♡</button>

          <div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <strong>{price}</strong>
          </div>
        </article>
      ))}
    </div>
  </section>

  <section className="mobile-home-insights-mini-99">
    <h2>Recommended Insights</h2>
    <p>based on your search results &amp; history</p>

    <div className="mobile-horizontal-row-99">
      {[
        ["Gajularamaram Insights", "Locality Insight"],
        ["Peerzadiguda Insights", "Locality Insight"],
        ["Gajularamaram Reviews", "Reviews & Rating"],
      ].map(([title, sub]) => (
        <button
          type="button"
          key={title}
          className="mobile-home-insight-card-99"
          onClick={openMobileInsightsPage}
        >
          <div>
            <span>📍</span>
          </div>
          <strong>{title}</strong>
          <p>{sub}</p>
        </button>
      ))}
    </div>

    <button
      type="button"
      className="mobile-view-all-link-99"
      onClick={openMobileInsightsPage}
    >
      View all Insights →
    </button>

    <div className="mobile-helpful-line-99">
      Is this helpful? <button type="button">Yes 👍</button>
      <button type="button">No 👎</button>
    </div>
  </section>

  <section className="mobile-newly-launched-home-99">
    <h2>Newly launched projects</h2>
    <p>Best prices · Unit of choice · Easy payment plans</p>

    <div className="mobile-horizontal-row-99">
      {[
        ["Fiora By Yashoda", "Tukkuguda, Hyderabad", "₹3.55 - 5.63 Cr", "4 BHK Villa"],
        ["Lansum Palacio", "Puppalaguda, Hyderabad", "₹1.46 Cr Onwards", "3 BHK Apartment"],
      ].map(([name, place, price, type]) => (
        <article key={name} className="mobile-launch-card-99">
          <div className="mobile-launch-art-99">✓ RERA</div>

          <h3>{name}</h3>
          <p>{place}</p>
          <strong>{price}</strong>
          <span>{type}</span>

          <button type="button" onClick={openMobileContactLogin}>
            View number
          </button>
        </article>
      ))}
    </div>
  </section>

  <section className="mobile-exclusive-home-99">
    <h2>99acres exclusive</h2>
    <p>Sponsored projects and events</p>

    <div className="mobile-horizontal-row-99">
      <button
        type="button"
        className="mobile-exclusive-banner-99"
        onClick={openMobileContactLogin}
      >
        <strong>LANSUM EL PALACIO</strong>
        <span>3 BHK Apartments at Puppalaguda, Hyderabad</span>
        <b>₹ 1.46 Cr. Onwards</b>
        <em>Enquire Now</em>
      </button>

      <button
        type="button"
        className="mobile-exclusive-banner-99"
        onClick={openMobileContactLogin}
      >
        <strong>Premium Homes</strong>
        <span>Luxury apartments in Hyderabad</span>
        <b>₹ 95 L Onwards</b>
        <em>Enquire Now</em>
      </button>
    </div>
  </section>

  <section className="mobile-demand-area-99">
    <h2>Demand in Hyderabad</h2>
    <p>Where are buyers searching in Hyderabad</p>

    <div className="mobile-horizontal-row-99">
      {[
        ["Apartment", ["Old Mumbai Highway", "Narsingi", "Kukatpally", "Kondapur", "Manikonda"]],
        ["Plots", ["Old Mumbai Highway", "Narsingi", "Hayathnagar", "Patancheru", "Shamshabad"]],
      ].map(([title, list]) => (
        <article key={title as string} className="mobile-demand-area-card-99">
          <h3>{title}</h3>
          <p>Most searched localities for Flat/Apartment</p>

          {(list as string[]).map((name, index) => (
            <div key={name}>
              <span>#{index + 1}</span>
              <strong>{name}</strong>
              <em>{index === 0 ? "8%" : index === 1 ? "4%" : "3%"} Searches</em>
            </div>
          ))}

          <button type="button" onClick={openMobileLocalitiesPage}>
            View more localities
          </button>
        </article>
      ))}
    </div>

    <div className="mobile-helpful-line-99">
      Is this helpful? <button type="button">Yes 👍</button>
      <button type="button">No 👎</button>
    </div>
  </section>

  <section className="mobile-upcoming-home-99">
    <h2>Upcoming Projects</h2>
    <p>Visit these projects and get early bird benefits</p>

    <article>
      <img src={upcomingProject} alt="Fiora By Yashoda" />
      <h3>Fiora By Yashoda</h3>

      <div>
        <span>
          Tukkuguda
          <b>Hyderabad</b>
        </span>

        <strong>
          4 BHK Villa
          <b>₹ 3.55 - 5.63 Cr</b>
        </strong>
      </div>
    </article>

    <button type="button" onClick={openMobileContactLogin}>
      📞 View Number
    </button>
  </section>

  <section className="mobile-tools-home-99">
    <div className="mobile-section-title-row-99">
      <div>
        <span>💡</span>
        <h2>Use popular tools</h2>
        <p>Go from browsing to buying</p>
      </div>

      <button type="button" onClick={openMobileInsightsPage}>
        View All
      </button>
    </div>

    <div className="mobile-horizontal-row-99">
      {["Budget Calculator", "EMI Calculator"].map((tool) => (
        <button
          key={tool}
          type="button"
          className="mobile-tool-card-home-99"
          onClick={openMobileInsightsPage}
        >
          <span>{tool.includes("Budget") ? "🧮" : "🏦"}</span>
          <strong>{tool} →</strong>
          <p>
            {tool.includes("Budget")
              ? "Check your affordability range for buying home"
              : "Calculate your home loan EMI"}
          </p>
        </button>
      ))}
    </div>
  </section>

  <section className="mobile-offers-home-99">
    <h2>Offers for you</h2>

    <div className="mobile-horizontal-row-99">
      {[
        ["United Avaasa", "Aminpur", "2,3 BHK Apartment", "₹ 55.69 - 71.78 Lacs"],
        ["Lake View Homes", "Hyderabad", "3 BHK Apartment", "₹ 80 L - 1.1 Cr"],
      ].map(([name, place, type, price]) => (
        <article key={name} className="mobile-offer-card-99">
          <div>
            <span>🏠</span>
            <h3>{name}</h3>
            <p>{place}</p>
            <p>{type}</p>
            <strong>{price}</strong>
          </div>

          <button type="button" onClick={openMobileContactLogin}>
            🎁 Flat 200/- OFF Per SFT For Limited Period Only*
          </button>
        </article>
      ))}
    </div>
  </section>

  <section className="mobile-dealers-home-99">
    <h2>Featured Dealers</h2>
    <p>Who are popular amongst Residential Buyers</p>

    <article>
      <div>👤</div>
      <span>SREERAM VENTURES</span>
      <h3>Sreeram Ventures</h3>
      <p>Member Since Jan, 2026</p>
      <strong>Resale</strong>

      <div>
        <button type="button" onClick={openMobileContactLogin}>
          WhatsApp
        </button>

        <button type="button" onClick={openMobileContactLogin}>
          Call Now
        </button>
      </div>

      <button type="button" onClick={openMobileOwnerResults}>
        1 Matching Property ›
      </button>
    </article>

    <h3>More Dealers who can help...</h3>

    <button type="button" onClick={openMobileOwnerResults}>
      Ranjith Realtors <span>›</span>
    </button>

    <button
      type="button"
      className="mobile-view-all-link-99"
      onClick={openMobileOwnerResults}
    >
      View all dealers →
    </button>
  </section>

  <section className="mobile-builders-home-99">
    <h2>Popular builders</h2>
    <p>in Hyderabad</p>

    <div className="mobile-horizontal-row-99">
      {[
        ["Aparna Constructions", "63 Total Projects", "56 in this city"],
        ["My Home Group", "31 Total Projects", "30 in this city"],
        ["Prestige Group", "7 Total Projects", "7 in this city"],
      ].map(([name, total, city]) => (
        <button
          key={name}
          type="button"
          className="mobile-builder-card-99"
          onClick={openMobileNewProjects}
        >
          <span>{name.charAt(0)}</span>
          <strong>{name}</strong>
          <p>{total}</p>
          <p>{city}</p>
        </button>
      ))}
    </div>
  </section>

  <section className="mobile-top-gainers-home-99">
    <h2>Top Gainers</h2>
    <p>Across Hyderabad with highest appreciation</p>

    <article>
      <div>
        <strong>TOP 5 IN HYDERABAD</strong>
        <b>Last 1 Y</b>
      </div>

      {[
        ["Moosapet", "₹9,000/ sqft", "47.5% YoY"],
        ["Somajiguda", "₹14,900/ sqft", "41.9% YoY"],
        ["Lakdikapul", "₹8,850/ sqft", "33.1% YoY"],
        ["Kothaguda", "₹12,700/ sqft", "29.6% YoY"],
        ["Kavadiguda", "₹8,100/ sqft", "28.6% YoY"],
      ].map(([name, price, gain], index) => (
        <button type="button" key={name} onClick={openMobileInsightsPage}>
          <span>📍</span>
          <div>
            <strong>#{index + 1} {name}</strong>
            <p>@ {price}</p>
          </div>
          <em>▲ {gain}</em>
        </button>
      ))}

      <button type="button" onClick={openMobileLocalitiesPage}>
        View more localities
      </button>
    </article>

    <button
      type="button"
      className="mobile-outline-blue-btn-99"
      onClick={() => {
        openMobileInsightsPage();
        setMobilePriceTrendsOpen(true);
      }}
    >
      See Price Trends in any Locality
    </button>

    <div className="mobile-helpful-line-99">
      Is this helpful? <button type="button">Yes 👍</button>
      <button type="button">No 👎</button>
    </div>
  </section>

  <section className="mobile-bhk-home-99">
    <h2>BHK choice in mind?</h2>

    <div className="mobile-horizontal-row-99">
      {["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((bhk) => (
        <button type="button" key={bhk} onClick={() => openMobileSearch("buy")}>
          <span>🏠</span>
          <strong>{bhk}</strong>
          <p>680+ Properties</p>
        </button>
      ))}
    </div>
  </section>

  <section className="mobile-posted-by-home-99">
    <h2>Properties posted by</h2>

    <div className="mobile-horizontal-row-99">
      {["Owner", "Dealer", "Builder"].map((postedBy) => (
        <button type="button" key={postedBy} onClick={openMobileOwnerResults}>
          <span>👤</span>
          <strong>{postedBy}</strong>
          <p>{postedBy === "Owner" ? "60+" : "30+"} Properties</p>
        </button>
      ))}
    </div>
  </section>

  <section className="mobile-possession-home-99">
    <h2>Move in now, next year or later</h2>
    <p>Projects based on your preferred possession date</p>

    <div className="mobile-horizontal-row-99">
      {[
        ["Ready to move", "25,000+ Properties"],
        ["Possession in 2026", "2,400+ Properties"],
        ["Possession in 2027", "3,200+ Properties"],
      ].map(([title, count]) => (
        <button type="button" key={title} onClick={openMobileNewProjects}>
          <strong>{title}</strong>
          <span>{count}</span>
          <img src={residentialThree} alt={title} />
        </button>
      ))}
    </div>
  </section>

  <section className="mobile-app-download-card-99">
    <button type="button">×</button>
    <h2>Download our app and search 1.5x faster</h2>
    <p>✓ Get best deals &amp; offers</p>
    <p>✓ Receive personalised updates</p>
    <button type="button" onClick={openMobileAppsInNewTab}>
      Download Now
    </button>
  </section>

  <section className="mobile-emerging-home-99">
    <h2>Emerging localities</h2>
    <p>View insights of localities with recent developments</p>

    <div className="mobile-horizontal-row-99">
      {["Old Mumbai Highway", "Narsingi"].map((name) => (
        <article key={name}>
          <div>
            <span>📍</span>
            <h3>
              {name} <em>4.4 ★</em>
            </h3>
            <p>83 New Projects</p>
          </div>

          <div>
            <button type="button" onClick={openMobileInsightsPage}>
              Insights
            </button>
            <button type="button" onClick={openMobileNewProjects}>
              Projects
            </button>
          </div>
        </article>
      ))}
    </div>

    <button
      type="button"
      className="mobile-view-all-link-99"
      onClick={openMobileLocalitiesPage}
    >
      View all Emerging localities →
    </button>
  </section>

  <section className="mobile-rate-locality-home-99">
    <h2>How would you rate your locality / society?</h2>

    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <button type="button" key={star}>
          ☆
        </button>
      ))}
    </div>

    <p>
      <span>Terrible</span>
      <span>Excellent</span>
    </p>
  </section>

 <section className="mobile-invest-commercial-home-99">
  <button type="button" onClick={openMobileInvestModal}>
    <span>INVEST IN COMMERCIAL</span>
    <strong>Double your returns with commercial ...</strong>
    <p>Earn 2x ROI than Residential</p>
    <em>→</em>
  </button>

  <button type="button" onClick={() => openMobileKnowledge("articles")}>
    💡 Read investment articles from our experts
  </button>
</section>

  <section className="mobile-articles-home-99">
    <h2>Top articles on home buying</h2>
    <p>Know more about latest realty trends</p>

    {[
      ["Ananda The Drizzle, Narsingi: An overview", "Jun 12, 2026"],
      ["Akshita Infra: A legacy of excellence", "Apr 17, 2026"],
    ].map(([title, date]) => (
      <button type="button" key={title} onClick={() => openMobileKnowledge("articles")}>
        <img src={residentialOne} alt={title} />
        <div>
          <strong>{title}</strong>
          <p>{date}</p>
        </div>
      </button>
    ))}

    <button
      type="button"
      className="mobile-blue-full-btn-99"
      onClick={() => openMobileKnowledge("articles")}
    >
      Read realty news, guides &amp; articles
    </button>
  </section>

  <section className="mobile-register-post-home-99">
    <h2>
      Register to post
      <br />
      your property for
      <br />
      <span>FREE</span>
    </h2>

    <button type="button" onClick={openMobilePostPropertyPage}>
      Post property for FREE
    </button>

    <p>
      or <button type="button" onClick={openMobilePostPropertyPage}>click here</button>{" "}
      to post via 🟢 whatsapp
    </p>
  </section>

  <section className="mobile-other-offerings-home-99">
    <h2>Check out our other offerings</h2>

    {[
      ["Rent a home", "Apartments, builder floors, villas and more", "rent"],
      ["PG and co-living", "Organised, owner and broker listed PGs", "pg"],
      ["Buy Plots/Land", "Residential Plots, Agricultural Farm lands, Inst. Lands and more", "plots"],
      ["Buy a commercial property", "Shops, offices, land, factories, warehouses and more", "commercial"],
      ["Lease a commercial property", "Shops, offices, land, factories, warehouses and more", "commercial"],
    ].map(([title, desc, action]) => (
      <button
        type="button"
        key={title}
        onClick={() => {
          if (action === "rent") openMobileSearch("rent");
          if (action === "pg") openMobileSearch("rent");
          if (action === "plots") openMobilePlotLandSheet();
          if (action === "commercial") openMobileSearch("commercial");
        }}
      >
        <img src={rentHomeImage} alt={title} />
        <strong>
          {title}
          <small>{desc}</small>
        </strong>
        <span>›</span>
      </button>
    ))}
  </section>

  <section className="mobile-popular-cities-home-99">
    <h2>Explore popular cities</h2>
    <p>Buy or Rent properties in top cities</p>

    <div className="mobile-horizontal-row-99">
      {["Delhi / NCR", "Mumbai", "Bangalore", "Hyderabad"].map((city) => (
        <button
          type="button"
          key={city}
          onClick={() => {
            setMobileSearchLocation(city);
            openMobileSearch("buy");
          }}
        >
          <img src={buyHomeImage} alt={city} />
          <strong>{city}</strong>
        </button>
      ))}
    </div>
  </section>

  <section className="mobile-get-app-small-99">
    <h2>Search and contact effectively</h2>
    <p>Your search and activities are better managed with App</p>

    <button type="button" onClick={openMobileAppsInNewTab}>
      Get App ↓
    </button>
  </section>
</section>

    {sideMenuOpen && (
      <div className="mobile-menu-overlay-99">
        <button
          type="button"
          aria-label="Close menu overlay"
          className="mobile-menu-backdrop-99"
          onClick={() => setSideMenuOpen(false)}
        />

        <aside className="mobile-menu-sheet-99">
          <div className="mobile-menu-profile-99">
            <button
              type="button"
              aria-label="Close menu"
              className="mobile-menu-close-99"
              onClick={() => setSideMenuOpen(false)}
            >
              ×
            </button>

            <div className="mobile-profile-row-99">
              <div className="mobile-profile-avatar-99">
                <UserCircle size={58} strokeWidth={1.5} />
              </div>

              <div>
                <h2>Welcome</h2>
                <p>
                  Guest Profile <span>•</span> <b>Manage Profile</b>
                </p>
              </div>
            </div>

           <button
  type="button"
  onClick={() => {
    setSideMenuOpen(false);
    setMobilePageOpen(null);
    setLoginModalOpen(true);
    setLoginStep("phone");
    setLoginError(false);
  }}
  className="mobile-login-register-99"
>
  Login/ Register Now
</button>
          </div>

          <div className="mobile-menu-scroll-99">
            <div className="mobile-menu-card-list-99">
              <button
                type="button"
                onClick={() => {
                  setSideMenuOpen(false);
                  navigate("/post-property");
                }}
                className="mobile-menu-action-card-99"
              >
                <div>
                  <h3>Post Property</h3>
                  <p>Sell/ Rent faster with 99acres</p>
                </div>
                <span className="blue">⌂</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSideMenuOpen(false);
                  navigate("/post-property");
                }}
                className="mobile-menu-action-card-99"
              >
                <div>
                  <h3>Post Property via Whatsapp</h3>
                  <p>Faster property posting experience</p>
                </div>
                <span className="green">☘</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSideMenuOpen(false);
                  navigate("/search");
                }}
                className="mobile-menu-action-card-99"
              >
                <div>
                  <h3>Search Properties</h3>
                  <p>Explore residential and commercial properties</p>
                </div>
                <span className="orange">⌕</span>
              </button>
            </div>

            <h4 className="mobile-menu-section-title-99">
              YOUR PROPERTY SEARCH ACTIVITY
            </h4>

            <div className="mobile-menu-three-grid-99">
              <button type="button" onClick={() => navigate("/dashboard")}>
                <span>◉</span>
                <strong>Viewed</strong>
                <p>Properties</p>
              </button>

              <button type="button" onClick={() => navigate("/saved-properties")}>
                <span>★</span>
                <strong>Shortlisted</strong>
                <p>Properties</p>
              </button>

              <button type="button" onClick={() => navigate("/contact-us")}>
                <span>↪</span>
                <strong>Contacted</strong>
                <p>Properties</p>
              </button>
            </div>

            <div className="mobile-menu-list-card-99">
              <button
                type="button"
                onClick={() => {
                  setSideMenuOpen(false);
                  navigate("/");
                }}
              >
                <span>⌂</span>
                <strong>Homepage</strong>
              </button>
            </div>

            <h4 className="mobile-menu-section-title-99">
              PROPERTY MANAGEMENT - FOR OWNERS/ DEALERS
            </h4>

            <div className="mobile-menu-list-card-99">
              <button type="button" onClick={() => navigate("/dashboard")}>
                <span>▣</span>
                <strong>View Responses</strong>
              </button>

              <button type="button" onClick={() => navigate("/post-property")}>
                <span>▦</span>
                <strong>Manage/ Edit your Listings</strong>
              </button>
            </div>

            <h4 className="mobile-menu-section-title-99">
              PLANS AND SERVICES FOR OWNERS/ DEALERS
            </h4>

            <div className="mobile-menu-two-grid-99">
              <button type="button">
                <span>☢</span>
                <strong>Owner</strong>
                <p>Plans</p>
              </button>

              <button type="button" onClick={() => navigate("/agents")}>
                <span>♛</span>
                <strong>Dealer</strong>
                <p>Plans</p>
              </button>
            </div>

            <div className="mobile-menu-list-card-99 mobile-menu-list-card-tight-99">
              <button type="button">
                <span>▭</span>
                <strong>Manage Payments</strong>
              </button>

              <button type="button">
                <span>✪</span>
                <strong>
                  BOSS Plans- For dealers <em>NEW</em>
                </strong>
              </button>
            </div>

            <h4 className="mobile-menu-section-title-99">
              RESEARCH AND INSIGHTS
            </h4>

            <div className="mobile-menu-list-card-99">
              <button type="button" onClick={() => navigate("/insights")}>
                <span>▥</span>
                <div>
                  <strong>Price Trends</strong>
                  <p>Explore locality and society level price growth/ drops</p>
                </div>
              </button>

              <button type="button" onClick={() => navigate("/insights")}>
                <span>▧</span>
                <div>
                  <strong>Articles and News</strong>
                  <p>Articles, News, Policies, Guides...</p>
                </div>
              </button>

              <button type="button">
                <span>▦</span>
                <div>
                  <strong>Tools and Calculators</strong>
                  <p>Budget Calculator, EMI Calculator, Area Converter</p>
                </div>
              </button>
            </div>

            <h4 className="mobile-menu-section-title-99">
              EXPLORE PROPERTIES BY CATEGORY
            </h4>

            <div className="mobile-menu-two-grid-99">
              <button type="button" onClick={() => navigate("/buy")}>
                <span>⌂</span>
                <strong>Residential</strong>
                <p>Properties</p>
              </button>

              <button
  type="button"
  onClick={() => openMobileSearch("commercial")}
  className="mobile-category-btn-99"
>
  <span>▦</span>
  <strong>Commercial</strong>
</button>
            </div>

            <div className="mobile-menu-list-card-99">
              <button type="button">
                <span>◎</span>
                <strong>NRI Homepage</strong>
              </button>

              <button type="button">
                <span>▭</span>
                <strong>All India Homepage</strong>
              </button>
            </div>

            <div className="mobile-menu-list-card-99">
              <button type="button">
                <span>▱</span>
                <strong>Review your Society or Locality</strong>
              </button>
            </div>

            <div className="mobile-menu-list-card-99">
              <button type="button">
                <span>◈</span>
                <strong>Terms of Use</strong>
              </button>

              <button type="button" onClick={() => navigate("/contact-us")}>
                <span>▣</span>
                <strong>Help and Support</strong>
              </button>

              <button type="button">
                <span>◈</span>
                <div>
                  <strong>Other links</strong>
                  <p>Testimonials, Career with Us</p>
                </div>
              </button>

             <button
  type="button"
  onClick={() => {
    setSideMenuOpen(false);
    setLoginModalOpen(false);
    setMobilePageOpen("feedback");
  }}
>
  <span>▤</span>
  <strong>Share Feedback</strong>
</button>

              <button type="button" onClick={openMobileAppsInNewTab}>
                <span>▣</span>
                <strong>Download Our App</strong>
              </button>
            </div>

            <div className="mobile-menu-footer-logo-99">99acres</div>
          </div>

          <div className="mobile-menu-get-app-99">
            <div>
              <strong>Search faster with App</strong>
              <p>4.5 Rating <span>★★★★★</span></p>
            </div>

            <button type="button" onClick={openMobileAppsInNewTab}>
              ↓ Get App
            </button>
          </div>
        </aside>
      </div>
    )}

        {mobilePageOpen === "profile" && (
      <section className="mobile-inner-page-99">
        <header className="mobile-profile-header-99">
          <button
            type="button"
            onClick={() => setMobilePageOpen(null)}
            className="mobile-inner-menu-99"
          >
            ☰
          </button>

          <button
            type="button"
            onClick={() => setMobilePageOpen(null)}
            className="mobile-inner-logo-99"
          >
            99acres
          </button>
        </header>

        <section className="mobile-profile-hero-99">
  <button
    type="button"
    onClick={() => {
      setLoginModalOpen(true);
      setLoginStep("phone");
      setLoginError(false);
      setOtpError("");
    }}
    className="mobile-profile-login-click-99"
  >
    <div className="mobile-profile-big-avatar-99">
      <UserCircle size={112} strokeWidth={1.2} />
    </div>

    <h1>Login / Register</h1>

    <p>
      Login and access millions of
      <br />
      advertiser details on single click
    </p>
  </button>
</section>

        <section className="mobile-profile-list-99">
<button
  type="button"
  onClick={() => {
    setLoginModalOpen(true);
    setLoginStep("phone");
    setLoginError(false);
    setOtpError("");
  }}
>
  <span>⚙</span>
  <strong>Communication Settings</strong>
  <em>›</em>
</button>

          <button
            type="button"
            onClick={() => setMobilePageOpen("feedback")}
          >
            <span>▤</span>
            <strong>Share Feedback</strong>
            <em>›</em>
          </button>

          <button
  type="button"
  onClick={() => {
    setLoginModalOpen(true);
    setLoginStep("phone");
    setLoginError(false);
    setOtpError("");
  }}
>
  <span>↪</span>
  <strong>Login</strong>
  <em>›</em>
</button>
        </section>
      </section>
    )}

    {mobilePageOpen === "feedback" && (
      <section className="mobile-inner-page-99 mobile-feedback-page-99">
        <header className="mobile-feedback-header-99">
          <button
            type="button"
            onClick={() => setMobilePageOpen(null)}
            className="mobile-inner-menu-dark-99"
          >
            ☰
          </button>

          <button
            type="button"
            onClick={() => setMobilePageOpen(null)}
            className="mobile-inner-logo-blue-99"
          >
            99acres
          </button>
        </header>

        <div className="mobile-feedback-breadcrumb-99">
          Home &gt; Feedback
        </div>

        <section className="mobile-feedback-hero-99">
          <div className="mobile-feedback-icon-99">👥</div>
          <h1>Feedback</h1>
        </section>

        <section className="mobile-feedback-form-99">
          <h2>We would love to hear you!</h2>

          
        <input
  value={mobileFeedbackName}
  onChange={(e) => setMobileFeedbackName(e.target.value)}
  placeholder="Name"
/>

<input
  value={mobileFeedbackEmail}
  onChange={(e) => setMobileFeedbackEmail(e.target.value)}
  placeholder="Email"
/>

<h3>Rate 99acres mobile app</h3>

<div className="mobile-feedback-stars-99">
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      type="button"
      onClick={() => setMobileFeedbackRating(star)}
      className={mobileFeedbackRating >= star ? "active" : ""}
      aria-label={`Rate ${star} star`}
    >
      ★
    </button>
  ))}
</div>

<select
  value={mobileFeedbackType}
  onChange={(e) => setMobileFeedbackType(e.target.value)}
>
  <option value="" disabled>
    Select Feedback
  </option>
  <option value="App Experience">App Experience</option>
  <option value="Property Search">Property Search</option>
  <option value="Login Issue">Login Issue</option>
  <option value="Payment Issue">Payment Issue</option>
</select>

<textarea
  value={mobileFeedbackText}
  onChange={(e) => setMobileFeedbackText(e.target.value)}
  placeholder="Type your feedback"
/>

{mobileFeedbackMessage && (
  <p className="mobile-feedback-message-99">{mobileFeedbackMessage}</p>
)}

<button
  type="button"
  onClick={() => {
    if (
      !mobileFeedbackName.trim() ||
      !mobileFeedbackEmail.trim() ||
      !mobileFeedbackRating ||
      !mobileFeedbackType ||
      !mobileFeedbackText.trim()
    ) {
      setMobileFeedbackMessage("Please fill all feedback details.");
      return;
    }

    setMobileFeedbackMessage("Feedback sent successfully.");

    setTimeout(() => {
      setMobileFeedbackName("");
      setMobileFeedbackEmail("");
      setMobileFeedbackRating(0);
      setMobileFeedbackType("");
      setMobileFeedbackText("");
      setMobileFeedbackMessage("");
      setMobilePageOpen(null);
    }, 900);
  }}
>
  Send Feedback
</button>
        </section>
      </section>
    )}

    {mobileOwnerPageOpen && (
  <section className="mobile-owner-page-99">
    <header className="mobile-owner-header-99">
      <div className="mobile-owner-search-row-99">
        <button
          type="button"
          onClick={() => setMobileOwnerPageOpen(false)}
          className="mobile-owner-back-99"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => {
            setMobileOwnerPageOpen(false);
            openMobileSearch("buy");
          }}
          className="mobile-owner-search-box-99"
        >
          <span>Search City/Locality/Proj...</span>
          <Search size={26} strokeWidth={2.1} />
        </button>

        <button type="button" className="mobile-owner-heart-top-99">
          ♡
        </button>
      </div>

      <div className="mobile-owner-filter-row-99">
        <button
          type="button"
          className="mobile-owner-filter-main-99"
          onClick={() => {
            setMobileNewProjectFilterOpen(true);
            setMobileNewProjectSortOpen(false);
          }}
        >
          ☷ · 1
        </button>

        <button
          type="button"
          onClick={() => {
            setMobileNewProjectSortOpen(true);
            setMobileNewProjectFilterOpen(false);
          }}
        >
          Sort <span>⌄</span>
        </button>

       <button type="button" className="active">
  Owner
</button>

<button type="button" onClick={openMobileNewProjects}>
  New Launch
</button>

<button type="button" onClick={openMobilePostedByFilter}>
  Posted By <span>⌄</span>
</button>
      </div>
    </header>

    <main className="mobile-owner-list-99">
      <p className="mobile-owner-result-count-99">
        <b>17.4K RESULTS</b>{" "}
        <span>| Property in Hyderabad for Sale Posted By Owner</span>
      </p>

      {mobileOwnerCards.map((item, index) => {
        const firstImage = properties[index % properties.length]?.image;
        const secondImage = properties[(index + 1) % properties.length]?.image;
        const thirdImage = properties[(index + 2) % properties.length]?.image;

        return (
          <article key={item.project} className="mobile-owner-card-99">
            <div className="mobile-owner-media-99">
              {item.photoMode === "request" ? (
               <div className="mobile-owner-request-photo-99">
  <div className="mobile-owner-request-art-99">⌂</div>

  <button type="button" onClick={openMobileContactLogin}>
    Request Photos ›
  </button>
</div>
              ) : (
                <div className="mobile-owner-media-strip-99">
                  {[firstImage, secondImage, thirdImage].map((img, imgIndex) => (
                    <div
                      key={`${item.project}-${imgIndex}`}
                      className="mobile-owner-media-slide-99"
                    >
                      <img src={img} alt={item.project} />

                    </div>
                  ))}
                </div>
              )}

              <button type="button" className="mobile-owner-like-99">
                ♡
              </button>

              <button type="button" className="mobile-owner-share-99">
                ⤴
              </button>

            {item.count && (
  <span className="mobile-owner-img-count-99">{item.count}</span>
)}
            </div>

            <div className="mobile-owner-info-99">
              <div className="mobile-owner-project-99">{item.project}</div>

              <div className="mobile-owner-title-row-99">
                <h2>
                  {item.title} <span>in {item.location}</span>
                </h2>
                <em>{item.tag}</em>
              </div>

              <div className="mobile-owner-price-grid-99">
                <div>
                  <strong>{item.price}</strong>
                  <span>{item.rate}</span>
                  <p>{item.status}</p>
                </div>

                <div>
                  <strong>{item.size}</strong>
                  <span>
                    {item.size.includes("sqft") ? "(107 sqm)" : "(184 sqm)"}
                  </span>
                  <p>{item.areaType}</p>
                </div>
              </div>

              <p className="mobile-owner-desc-99">
                {item.desc}
                <span>⌄</span>
              </p>

              <div className="mobile-owner-contact-row-99">
                <div>
                  <strong>Owner</strong>
                  <p>{item.ownerAgo}</p>
                </div>

                <button type="button" onClick={openMobileContactLogin}>
                  View number
                </button>

               <button
  type="button"
  onClick={openMobileContactLogin}
  className="whatsapp"
  aria-label="Contact on WhatsApp"
>
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path
      d="M16 3C8.8 3 3 8.6 3 15.6c0 2.3.7 4.5 1.9 6.4L3.6 29l7.2-1.9c1.6.8 3.4 1.2 5.2 1.2 7.2 0 13-5.7 13-12.7S23.2 3 16 3Zm0 22.9c-1.6 0-3.1-.4-4.5-1.2l-.5-.3-4.2 1.1 1.1-4-.3-.5c-1.1-1.6-1.7-3.5-1.7-5.4C5.9 9.9 10.4 5.4 16 5.4s10.1 4.5 10.1 10.2S21.6 25.9 16 25.9Zm5.7-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 3 1.2 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z"
      fill="currentColor"
    />
  </svg>
</button>

<button
  type="button"
  onClick={openMobileContactLogin}
  className="call"
  aria-label="Call owner"
>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6.6 10.8c1.5 2.9 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z"
      fill="currentColor"
    />
  </svg>
</button>
              </div>
            </div>
          </article>
        );
      })}

      <section className="mobile-owner-around-99">
        <div className="mobile-owner-around-title-99">
          <span>▥</span>
          <div>
            <h2>In &amp; Around Hyderabad</h2>
            <p>Projects inspired by your search preferences</p>
          </div>
        </div>

        <div className="mobile-owner-around-scroll-99">
          {[
            ["Harika VK Grand", "Nagole, Hyderabad", "₹ 68.75 - 96.8 L"],
            ["Krishna Bai Residency", "Uppal, Hyderabad", "₹ 64.9 - 84.98 L"],
            ["MRKR Meridian", "Miyapur, Hyderabad", "₹ 88.02 L"],
          ].map(([name, place, price]) => (
            <button key={name} type="button">
              <div className="mobile-owner-round-img-99">⌂</div>
              <span>✓ RERA</span>
              <strong>{name}</strong>
              <p>{place}</p>
              <b>{price}</b>
            </button>
          ))}
        </div>
      </section>

      <section className="mobile-owner-faq-99">
        <h2>Frequently Asked Questions</h2>

        {[
          "How many owner properties are available in Hyderabad?",
          "Can I contact property owners directly?",
          "Are verified owner properties available?",
          "Can I shortlist owner properties?",
        ].map((faq) => (
          <details key={faq}>
            <summary>{faq}</summary>
            <p>
              Yes, you can explore owner-listed properties, shortlist them and
              contact the owner after login.
            </p>
          </details>
        ))}
      </section>
    </main>

    {mobileNewProjectSortOpen && (
      <div className="mobile-np-sheet-overlay-99">
        <button
          type="button"
          className="mobile-np-sheet-backdrop-99"
          onClick={() => setMobileNewProjectSortOpen(false)}
          aria-label="Close sort"
        />

        <section className="mobile-np-sort-sheet-99">
          <button
            type="button"
            className="mobile-np-sheet-close-99"
            onClick={() => setMobileNewProjectSortOpen(false)}
          >
            ×
          </button>

          <h2>Sort by</h2>

          <div className="mobile-np-sort-options-99">
            {mobileNewProjectSortOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMobileNewProjectSort(option)}
              >
                <span
                  className={mobileNewProjectSort === option ? "active" : ""}
                />
                <strong>{option}</strong>
                {option === "Newest first" && <em>🔒 Login to Unlock</em>}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mobile-np-sort-done-99"
            onClick={() => setMobileNewProjectSortOpen(false)}
          >
            Done
          </button>
        </section>
      </div>
    )}

    {mobileNewProjectFilterOpen && (
      <div className="mobile-np-sheet-overlay-99">
        <button
          type="button"
          className="mobile-np-sheet-backdrop-99"
          onClick={() => setMobileNewProjectFilterOpen(false)}
          aria-label="Close filters"
        />

        <section className="mobile-np-filter-sheet-99">
          <div className="mobile-np-filter-drag-99" />

          <header className="mobile-np-filter-head-99">
            <h2>Filters</h2>

            <button
              type="button"
              onClick={() => setMobileNewProjectFilterOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="mobile-np-filter-body-99">
            <aside className="mobile-np-filter-tabs-99">
              {mobileNewProjectFilterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setMobileNewProjectFilterTab(tab)}
                  className={mobileNewProjectFilterTab === tab ? "active" : ""}
                >
                  {tab}
                </button>
              ))}
            </aside>

            <main className="mobile-np-filter-options-99">
             
          {mobileNewProjectFilterTab === "Quick Filters (1)" && (
  <>
    {[
      "Verified Properties",
      "Owner",
      "Builder",
      "Dealer",
      "Featured Dealer (0)",
    ].map((filterItem) => (
      <button
        key={filterItem}
        type="button"
        className={filterItem === "Owner" ? "checked" : ""}
      >
        <span>{filterItem === "Owner" ? "✓" : ""}</span>
        <strong>{filterItem === "Owner" ? "Owner (0)" : filterItem}</strong>
        {filterItem === "Verified Properties" && <em>ⓘ</em>}
      </button>
    ))}
  </>
)}

{mobileNewProjectFilterTab === "Posted By (1)" && (
  <>
    {["Owner", "Builder", "Dealer", "Featured Dealer (0)"].map(
      (filterItem) => (
        <button
          key={filterItem}
          type="button"
          className={filterItem === "Owner" ? "checked" : ""}
        >
          <span>{filterItem === "Owner" ? "✓" : ""}</span>
          <strong>{filterItem === "Owner" ? "Owner (0)" : filterItem}</strong>
        </button>
      )
    )}
  </>
)}

       {mobileNewProjectFilterTab === "Budget" && (
  <div className="mobile-budget-filter-99">
    <h3>Budget in ₹</h3>

    <div className="mobile-budget-selected-99">
      <button type="button">{mobileBudgetMin}</button>
      <span>to</span>
      <button type="button">{mobileBudgetMax}</button>
    </div>

    <div className="mobile-budget-picker-99">
      <div className="mobile-budget-col-99">
        {mobileBudgetValues.map((value) => (
          <button
            key={`min-${value}`}
            type="button"
            onClick={() => setMobileBudgetMin(value)}
            className={mobileBudgetMin === value ? "active" : ""}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="mobile-budget-col-99">
        {mobileBudgetMaxValues.map((value) => (
          <button
            key={`max-${value}`}
            type="button"
            onClick={() => setMobileBudgetMax(value)}
            className={mobileBudgetMax === value ? "active" : ""}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  </div>
)}



{mobileNewProjectFilterTab === "BHK" && (
  <>
    {mobileBhkOptions.map((item) => (
      <button
        key={item}
        type="button"
        className={mobileSelectedBhk.includes(item) ? "checked" : ""}
        onClick={() => toggleMobileBhk(item)}
      >
        <span>{mobileSelectedBhk.includes(item) ? "✓" : ""}</span>
        <strong>{item}</strong>
      </button>
    ))}

    <button
      type="button"
      className="mobile-np-filter-select-all-99"
      onClick={selectAllMobileBhk}
    >
      Select All
    </button>
  </>
)}

{mobileNewProjectFilterTab !== "Quick Filters (1)" &&
  mobileNewProjectFilterTab !== "Budget" &&
  mobileNewProjectFilterTab !== "BHK" && (
    <div className="mobile-np-filter-placeholder-99">
      <h3>{mobileNewProjectFilterTab}</h3>

      {["Option 1", "Option 2", "Option 3", "Option 4"].map((item) => (
        <button key={item} type="button">
          <span />
          <strong>{item}</strong>
        </button>
      ))}
    </div>
  )}
            </main>
          </div>

          <footer className="mobile-np-filter-footer-99">
           <button
  type="button"
  onClick={() => {
    setMobileNewProjectFilterTab("Quick Filters (1)");
    setMobileBudgetMin("No min");
    setMobileBudgetMax("No max");
  }}
>
  Clear all
</button>

            <button
  type="button"
  onClick={() => {
    setMobileNewProjectFilterOpen(false);
    setMobileOwnerPageOpen(true);
    setMobileNewProjectOpen(false);
  }}
>
  See All Properties
</button>
          </footer>
        </section>
      </div>
    )}
  </section>
)}
{mobileMyPropertyInsightsOpen && (
  <section className="mobile-my-property-page-99">
    <main className="mobile-my-property-step-99">
      <div className="mobile-my-property-top-row-99">
       <button
  type="button"
  onClick={() => {
    setMobileMyPropertyInsightsOpen(false);
    setMobileMyPropertyGoalOpen(false);
  }}
>
  ←
</button>

        <span>Step 2 of 3</span>
      </div>

      <div className="mobile-my-property-location-art-99">📍</div>

      <p className="mobile-my-property-label-99">LOCATION</p>

      <h1>Where is your property located?</h1>

      <form
        className="mobile-my-property-location-form-99"
        onSubmit={(e) => {
          e.preventDefault();

          const value = mobileMyPropertyLocation.trim();

          if (!value) return;

          setMobileInsightCity(
            value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
          );

          setMobileInsightSearch(value);
          setMobileMyPropertyInsightsOpen(false);
        }}
      >
        <Search size={36} strokeWidth={2.3} />

        <input
          value={mobileMyPropertyLocation}
          onChange={(e) => setMobileMyPropertyLocation(e.target.value)}
          placeholder="Enter locality or society"
        />

        <button type="button">⌖</button>
      </form>

      <p className="mobile-my-property-help-99">
        We need your property’s location to share insights about price in your
        society or locality & more
      </p>
    </main>
  </section>
)}

{mobileMyPropertyGoalOpen && (
  <section className="mobile-my-property-page-99">
    <main className="mobile-my-property-step-99">
      <div className="mobile-my-property-top-row-99">
       <button
  type="button"
  onClick={() => {
    setMobileMyPropertyGoalOpen(false);
    setMobileMyPropertyInsightsOpen(false);
  }}
>
  ←
</button>

        <span>Step 1 of 3</span>
      </div>

      <div className="mobile-my-property-goal-art-99">🚩</div>

      <p className="mobile-my-property-label-99">YOUR GOAL</p>

      <h1>Get personalised insights based on your goal</h1>

      <section className="mobile-my-property-goal-card-99">
        <p>You’re planning to...</p>

        {[
          ["🏠", "Buy a Property"],
          ["🔑", "Rent Property"],
          ["🛍️", "Sell or Rent out a Property"],
          ["🎲", "I’m just exploring"],
        ].map(([icon, title]) => (
          <button
            key={title}
            type="button"
            onClick={() => {
              setMobileMyPropertyGoalOpen(false);
              setMobileMyPropertyInsightsOpen(true);
            }}
          >
            <span>{icon}</span>
            <strong>{title}</strong>
            <em>›</em>
          </button>
        ))}
      </section>
    </main>
  </section>
)}

{mobilePriceTrendsOpen && (
  <section className="mobile-price-trends-page-99">
    <header className="mobile-price-trends-header-99">
      <button
        type="button"
        onClick={() => setMobilePriceTrendsOpen(false)}
      >
        ←
      </button>

      <h2>Price Trends</h2>

      <button type="button">⌖</button>
    </header>

    <form
      className="mobile-price-trends-search-99"
      onSubmit={(e) => {
        e.preventDefault();
        submitMobileInsightSearch();
      }}
    >
      <Search size={31} strokeWidth={2.1} />
      <input
        value={mobileInsightSearch}
        onChange={(e) => setMobileInsightSearch(e.target.value)}
        placeholder="Enter any city, locality or society"
      />
    </form>

    <main className="mobile-price-trends-list-99">
      <p>SELECT CITY</p>

      {mobilePriceTrendCities.map((item) => (
        <button
          key={item.city}
          type="button"
          onClick={() => {
            setMobileInsightCity(item.city);
            setMobileInsightSearch(item.city);
          }}
        >
          {item.image ? (
            <img src={item.image} alt={item.city} />
          ) : (
            <span>📍</span>
          )}

          <div>
            <strong>Property Rates in {item.city}</strong>
            <em>{item.state}</em>
          </div>

          <b>›</b>
        </button>
      ))}

      <section className="mobile-price-trends-faq-99">
        <h2>Frequently Asked Questions</h2>

        {[
          "How can I check property rates in a city?",
          "Are price trends updated by locality?",
          "Can I compare price trends between cities?",
          "How do I search price trends for Hyderabad?",
        ].map((faq) => (
          <details key={faq}>
            <summary>{faq}</summary>
            <p>
              You can search any city, locality or society to view property
              rates, popular localities and price trend information.
            </p>
          </details>
        ))}
      </section>
    </main>
  </section>
)}

{mobileInsightsOpen && (
  <div className="mobile-insights-page-99">
    <header className="mobile-insights-header-99">
      <button
        type="button"
        className="mobile-insights-menu-99"
        onClick={() => setMobileInsightsOpen(false)}
      >
        ☰
      </button>

      <h1>Discover Best Places to Live!</h1>

      <button type="button" className="mobile-insights-share-99">
        ↗
      </button>
    </header>

   <form
  className="mobile-insights-search-99"
  onSubmit={(e) => {
    e.preventDefault();
    submitMobileInsightSearch();
  }}
>
      <span>⌕</span>
      <input
        value={mobileInsightSearch}
        onChange={(e) => setMobileInsightSearch(e.target.value)}
        placeholder="Enter any city, locality or society"
      />
    </form>

    <section className="mobile-insights-tools-card-99">
      <div className="mobile-insights-grid-99">
{[
  ["📈", "Price Trends"],
  ["🏠", "My Property Insights"],
  ["📰", "Articles"],
  ["🗞️", "News"],
  ["📖", "Guides"],
  ["🧮", "Budget Calculator"],
  ["🏦", "EMI Calculator"],
  ["🏠", "Home Loan Eligibility Calculator"],
  ["📐", "Area Convertor"],
].map(([icon, title]) => (
  <button
    key={title}
    type="button"
    onClick={() => {
      if (title === "Price Trends") {
        setMobilePriceTrendsOpen(true);
        return;
      }

      if (title === "My Property Insights") {
        setMobileMyPropertyInsightsOpen(true);
        setMobileMyPropertyGoalOpen(false);
        return;
      }

      if (title === "Articles") {
        openMobileKnowledge("articles");
        return;
      }

      if (title === "News") {
        openMobileKnowledge("news");
        return;
      }
    }}
  >
    <span>{icon}</span>
    <strong>{title}</strong>
  </button>
))}
      </div>

      <div className="mobile-insights-dots-99">
        <span />
        <span />
      </div>
    </section>

    <button
      type="button"
      className="mobile-insights-view-all-99"
      onClick={() => setMobileInsightsSheetOpen(true)}
    >
      View all⌄
    </button>

    <section className="mobile-insights-section-99">
      <h2>Recommended Insights</h2>
      <p>based on your search results & history</p>

      <div className="mobile-insights-horizontal-99">
        {[
          [`${mobileInsightCity} Insights`, "Locality Insight"],
          [`${mobileInsightCity} Reviews`, "Reviews & Rating"],
          [`${mobileInsightCity} Transactions`, "Transaction Prices"],
        ].map(([title, sub], index) => (
          <button key={title} type="button" className="mobile-insight-card-99">
            <div className={`mobile-insight-card-img-99 bg-${index}`}>
              <span>{mobileInsightCity}</span>
            </div>
            <strong>{title}</strong>
            <p>{sub}</p>
          </button>
        ))}
      </div>

      <div className="mobile-helpful-99">
        Is this helpful? <button type="button">Yes 👍</button>
        <button type="button">No 👎</button>
      </div>
    </section>

    <section className="mobile-insights-section-99">
      <h2>Discover in {mobileInsightCity}</h2>
      <p>Localities in {mobileInsightCity}</p>

      <div className="mobile-discover-row-99">
        {["Most Searched", "Most Rated"].map((item) => (
          <button key={item} type="button" className="mobile-discover-card-99">
            <em>Top 10</em>
            <span>📍</span>
            <strong>{item}</strong>
            <p>{item === "Most Searched" ? "Mostly searched by Buyers" : "Top Rated Localities"}</p>
          </button>
        ))}
      </div>

      <button type="button" className="mobile-outline-btn-99">
        View all {mobileInsightCity} Insights
      </button>

      <div className="mobile-helpful-99">
        Is this helpful? <button type="button">Yes 👍</button>
        <button type="button">No 👎</button>
      </div>
    </section>

    <section className="mobile-insights-section-99">
      <h2>Top Gainers</h2>
      <p>Across India with highest appreciation</p>

      <div className="mobile-rank-card-99">
        <div>
          <b>TOP 5 IN {mobileInsightCity.toUpperCase()}</b>
          <strong>Last 1 Y</strong>
        </div>

        {["Moosapet", "Somajiguda", "Lakdikapul", "Kothaguda", "Kavadiguda"].map(
          (name, index) => (
            <p key={name}>
              <span>#{index + 1} {name}</span>
              <b>{[47.5, 41.9, 33.1, 29.6, 28.6][index]}% YoY</b>
            </p>
          )
        )}

        <button type="button">View more localities</button>
      </div>

      <button type="button" className="mobile-outline-btn-99">
        See Price Trends in any Locality
      </button>
    </section>

    <section className="mobile-insights-section-99">
      <h2>Check Transaction Prices</h2>
      <p>and see actual transaction prices of properties</p>

      <div className="mobile-rank-card-99">
        <div>
          <b>TOP 5 IN {mobileInsightCity.toUpperCase()}</b>
          <strong>Last 1 Y</strong>
        </div>

        {["Bachupally", "Narsingi", "Miyapur", "Kondapur", "Kompally"].map(
          (name, index) => (
            <p key={name}>
              <span>#{index + 1} {name}</span>
              <b>{[1273, 853, 784, 572, 560][index]} Transactions</b>
            </p>
          )
        )}

        <button type="button">View more localities</button>
      </div>

      <button type="button" className="mobile-outline-btn-99">
        View Transaction Prices in any locality
      </button>
    </section>

    <section className="mobile-feedback-box-99">
      <button type="button">×</button>
      <strong>Are you finding these Insights helpful?</strong>
      <div>
        <button type="button">Yes</button>
        <button type="button">No</button>
      </div>
    </section>

    <section className="mobile-insights-section-99">
      <h2>Start with another goal</h2>
      <p>Explore more insights and discover new opportunities</p>

      {[
        ["🏠", "Buy a Property", "Understand localities, societies, budget"],
        ["🔧", "Rent a Property", "Find localities, understand lifestyle & cost"],
        ["📐", "Sell/Rent out a Property", "Analyse property worth & demand in your area"],
      ].map(([icon, title, text]) => (
        <button key={title} type="button" className="mobile-goal-row-99">
          <span>{icon}</span>
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
          <em>›</em>
        </button>
      ))}
    </section>

    <section className="mobile-insights-section-99">
      <h2>Discover Popular Cities</h2>
      <p>Explore different localities, price trends, reviews etc</p>

      <div className="mobile-city-row-99">
        {["Mumbai", "Navi Mumbai"].map((city) => (
          <button key={city} type="button">
            <span>📍</span>
            <strong>{city}</strong>
            <p>Maharashtra, India</p>
          </button>
        ))}
      </div>
    </section>

    <section className="mobile-tools-blue-99">
      <h2>Use popular tools</h2>
      <p>Go from browsing to buying</p>

      <div>
        <button type="button">
          🧮
          <strong>Budget Calculator →</strong>
          <p>Check your affordability range for buying home</p>
        </button>

        <button type="button">
          🏦
          <strong>EMI Calculator →</strong>
          <p>Calculate your home loan EMI</p>
        </button>
      </div>
    </section>

    <section className="mobile-own-property-99">
      <p>OWN A PROPERTY?</p>
      <h2>Check Insights about your Property</h2>
      <span>Property Prices, supply & demand in your area...</span>
      <button type="button">Add Property Details Now</button>
      <em>🏠</em>
    </section>

    <section className="mobile-insights-section-99">
      <h2>Start with these Guides</h2>
      <p>know all that you need to know before you start</p>

      <div className="mobile-guide-row-99">
        {["Home Buying Guide", "Home Selling Guide"].map((item) => (
          <button key={item} type="button">
            <span>{item.includes("Buying") ? "Buyer’s Guide" : "Seller’s Guide"}</span>
            <strong>{item}</strong>
          </button>
        ))}
      </div>
    </section>

    <section className="mobile-insights-section-99">
      <h2>Editor's Pick</h2>
      <p>Read stories from real estate & allied industries</p>

      {[
        "Ananda The Drizzle: Top reasons to buy a housing unit...",
        "Akshita Infra, Hyderabad: Turning sustainable ideas int...",
      ].map((title, index) => (
        <button key={title} type="button" className="mobile-editor-row-99">
          <span />
          <div>
            <strong>{title}</strong>
            <p>{index === 0 ? "Jun 12, 2026" : "Apr 17, 2026"}</p>
          </div>
        </button>
      ))}
    </section>

    <section className="mobile-insights-section-99 mobile-related-99">
      <h2>Related to your search</h2>
      <p>for fast & easy information regarding {mobileInsightCity}</p>

      <div>
        <strong>Property Insights</strong>
        <span>Property Rates in {mobileInsightCity} ↗</span>
      </div>

      <p className="mobile-breadcrumb-99">
        Home › Overview of Cities › {mobileInsightCity} Overview
      </p>

      <p className="mobile-disclaimer-99">
        The objective of this page is to assist property seekers in getting an
        insight into the residential options available in the Locality/Zone/City.
        Project details presented on this page are collected from public sources
        including the State RERA website. 99acres only presents this content in
        an easy format for user research and education...<button type="button">more</button>
      </p>

      <p className="mobile-copyright-99">
        A naukri.com group website<br />
        Copyright © 2022 Infoedge India Ltd. All rights reserved
      </p>
    </section>

    {mobileInsightsSheetOpen && (
      <div className="mobile-insights-sheet-overlay-99">
        <button
          type="button"
          className="mobile-insights-sheet-backdrop-99"
          onClick={() => setMobileInsightsSheetOpen(false)}
        />

        <div className="mobile-insights-sheet-99">
          <div className="mobile-insights-sheet-drag-99" />

          <div className="mobile-insights-sheet-icon-99">💡</div>

          <h2>All Insights</h2>
          <p>Tools & Utilities to help you...</p>

       {[
  ["💡", "Insights"],
  ["📈", "Price Trends"],
  ["🏠", "My Property Insights"],
  ["📰", "Articles"],
  ["🗞️", "News"],
  ["📖", "Guides"],
  ["🧮", "Budget Calculator"],
  ["🏠", "EMI Calculator"],
  ["🏡", "Home Loan Eligibility Calculator"],
  ["📐", "Area Convertor"],
].map(([icon, title]) => (
  <button
    key={title}
    type="button"
    onClick={() => {
      setMobileInsightsSheetOpen(false);

      if (title === "Price Trends") {
        setMobilePriceTrendsOpen(true);
        return;
      }

      if (title === "My Property Insights") {
        setMobileMyPropertyInsightsOpen(true);
        setMobileMyPropertyGoalOpen(false);
        return;
      }

      if (title === "Articles") {
        openMobileKnowledge("articles");
        return;
      }

      if (title === "News") {
        openMobileKnowledge("news");
        return;
      }
    }}
  >
    <span>{icon}</span>
    <strong>{title}</strong>
    <em>›</em>
  </button>
))}
        </div>
      </div>
    )}
  </div>
)}

{mobileKnowledgeOpen && (
  <section className="mobile-knowledge-page-99">
    <header className="mobile-knowledge-browser-99">
      <span>⌂</span>
      <div>99acres.com/article</div>
      <b>+</b>
      <strong>4</strong>
      <em>⋮</em>
    </header>

    <div className="mobile-knowledge-top-99">
      <button type="button" onClick={closeMobileKnowledge}>☰</button>

      <div className="mobile-knowledge-logo-99">
        <b>99acres</b>
        <span>Knowledge<br />Centre</span>
        <em>⌄</em>
      </div>

      <button type="button">⌕</button>
      <button type="button">⌖</button>
    </div>

    <main className="mobile-knowledge-main-99">
      <section className="mobile-knowledge-hero-99">
        <div className="mobile-knowledge-hero-icon-99">📰</div>
        <h1>News and Articles</h1>
        <p>Stay up-to-date with everything latest in real estate</p>

        <div className="mobile-knowledge-switch-99">
          <button
            type="button"
            className={mobileKnowledgeTab === "news" ? "active" : ""}
            onClick={() => setMobileKnowledgeTab("news")}
          >
            News
          </button>
          <button
            type="button"
            className={mobileKnowledgeTab === "articles" ? "active" : ""}
            onClick={() => setMobileKnowledgeTab("articles")}
          >
            Articles
          </button>
        </div>
      </section>

      <nav className="mobile-knowledge-tabs-99">
        {mobileKnowledgeTab === "articles" ? (
          <>
            <button type="button" className="active">All</button>
            <button type="button">Infrastructure</button>
            <button type="button">Home Loan</button>
            <button type="button">Technology</button>
            <button type="button">Investment</button>
          </>
        ) : (
          <>
            <button type="button" className="active">All</button>
            <button type="button">Infrastructure</button>
            <button type="button">Commercial</button>
            <button type="button">Home Loan</button>
            <button type="button">Technology</button>
          </>
        )}
      </nav>

      <section className="mobile-knowledge-list-99">
        {(mobileKnowledgeTab === "articles"
          ? [
              {
                img: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?auto=format&fit=crop&w=300&q=80",
                type: "HOME LOAN",
                title: "What is repo rate and how does it impact home loans in India?",
                date: "Jun 09, 2026",
              },
              {
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
                type: "POLICY CHANGE",
                title: "RBI keeps repo rate unchanged: How does it impact borrowers?",
                date: "Jun 05, 2026",
              },
              {
                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=300&q=80",
                type: "HELP GUIDE",
                title: "What is joint ownership of property? Know its pros and cons",
                date: "Jun 05, 2026",
              },
              {
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80",
                type: "HELP GUIDE",
                title: "How to calculate the market value of your property in India?",
                date: "May 19, 2026",
              },
              {
                img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
                type: "LEGAL",
                title: "An overview of the property mutation process in Haryana",
                date: "May 15, 2026",
              },
            ]
          : [
              {
                img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80",
                type: "REAL ESTATE NEWS",
                title: "Noida lifts 5-year ban on Sports City projects: What it means for homebuyers",
                date: "Apr 08, 2026",
              },
              {
                img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=300&q=80",
                type: "POLICY CHANGE",
                title: "Repo rate remains unchanged: What does it means for homebuyers?",
                date: "Apr 08, 2026",
              },
              {
                img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=300&q=80",
                type: "PMAY",
                title: "UP cabinet approves new Affordable Housing Policy under PMAY",
                date: "Mar 12, 2026",
              },
              {
                img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=300&q=80",
                type: "REAL ESTATE NEWS",
                title: "What is title-based property registry in Uttar Pradesh?",
                date: "Dec 17, 2025",
              },
              {
                img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=300&q=80",
                type: "REAL ESTATE NEWS",
                title: "Chintels Paradiso update: Haryana RERA directs developers",
                date: "Dec 10, 2025",
              },
              {
                img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80",
                type: "POLICY CHANGE",
                title: "Noida’s FAR Policy Update: What’s in it for homebuyers here?",
                date: "Sep 17, 2025",
              },
            ]
        ).map((item, index) => (
          <button type="button" className="mobile-knowledge-item-99" key={`${item.title}-${index}`}>
            <img src={item.img} alt={item.title} />
            <div>
              <span>{item.type}</span>
              <strong>{item.title}</strong>
              <p>{item.date}</p>
            </div>
          </button>
        ))}
      </section>

      <div className="mobile-knowledge-pagination-99">
        <strong>Page 1 of 100</strong>
        <div>
          <button type="button" disabled>‹ Prev</button>
          <button type="button">Next ›</button>
        </div>
      </div>

      <section className="mobile-knowledge-trending-99">
        <h2>Popular And Trending</h2>
        <p>Stories on 99acres</p>

        <div className="mobile-knowledge-trending-list-99">
          {[
            {
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80",
              title: "What is the cost of constructing a house in India?",
              date: "June 8, 2026",
            },
            {
              img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
              title: "Stamp duty and registration charges in Punjab in 2024",
              date: "June 3, 2026",
            },
          ].map((item) => (
            <button type="button" key={item.title}>
              <img src={item.img} alt={item.title} />
              <div>
                <strong>{item.title}</strong>
                <p>{item.date}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mobile-knowledge-explore-99">
        <h2>Explore More on Real Estate</h2>
        <div>
          <button type="button">Quarterly Realty Reports ↗</button>
          <button type="button">Yearly Realty Reports ↗</button>
        </div>
      </section>

      <section className="mobile-knowledge-tools-99">
        <div className="mobile-knowledge-tools-head-99">
          <span>💡</span>
          <div>
            <h2>Use popular tools</h2>
            <p>Go from browsing to buying</p>
          </div>
          <button type="button">View All</button>
        </div>

        <div className="mobile-knowledge-tool-scroll-99">
          <button type="button">
            <span>🧮</span>
            <strong>Budget Calculator →</strong>
            <p>Check your affordability range for buying home</p>
          </button>
          <button type="button">
            <span>🏦</span>
            <strong>EMI Calculator →</strong>
            <p>Calculate your home loan EMI easily</p>
          </button>
        </div>
      </section>

      <section className="mobile-knowledge-cities-99">
        <h2>Browse Popular Cities</h2>
        <p>Explore different localities, price trends, reviews etc</p>

        <div>
          {[
            ["Mumbai", "Maharashtra, India", "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=300&q=80"],
            ["Delhi", "India", "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=300&q=80"],
            ["Noida", "Uttar Pradesh, India", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80"],
          ].map(([city, state, img]) => (
            <button type="button" key={city}>
              <img src={img} alt={city} />
              <strong>{city}</strong>
              <span>{state}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mobile-knowledge-related-99">
        <h2>Related to your search</h2>
        <p>for fast & easy information</p>

        <div className="mobile-knowledge-related-grid-99">
          <div>
            <strong>Properties to Buy</strong>
            <button type="button">Property in Delhi / NCR ↗</button>
            <button type="button">Property in Mumbai ↗</button>
            <button type="button">Property in Bangalore ↗</button>
            <button type="button">View 5 More</button>
          </div>
          <div>
            <strong>Property Insights</strong>
            <button type="button">Property Rates in Hyderabad ↗</button>
            <button type="button">Popular Localities ↗</button>
            <button type="button">View More</button>
          </div>
        </div>

        <p className="mobile-knowledge-breadcrumb-99">
          Home › Knowledge Centre › {mobileKnowledgeTab === "news" ? "Real Estate News" : "Articles"}
        </p>

        <div className="mobile-knowledge-disclaimer-99">
          The objective of this page is to assist property seekers in getting an insight into the residential options available in the Locality/Zone/City. Project details presented on this page are collected from public sources including the State RERA website wherever applicable. <button type="button">...more</button>
        </div>

        <p className="mobile-knowledge-footer-text-99">A naukri.com group website</p>
        <p className="mobile-knowledge-footer-text-99">Copyright © 2026 Infoedge India Ltd. All rights reserved</p>
      </section>
    </main>
  </section>
)}
{mobilePlotLandSheetOpen && (
  <div className="mobile-plot-sheet-overlay-99">
    <button
      type="button"
      className="mobile-plot-sheet-backdrop-99"
      onClick={() => setMobilePlotLandSheetOpen(false)}
      aria-label="Close plot land sheet"
    />

    <div className="mobile-plot-sheet-99">
      <button
        type="button"
        className="mobile-plot-sheet-close-99"
        onClick={() => setMobilePlotLandSheetOpen(false)}
      >
        ×
      </button>

      <h2>Type of Plot / Land</h2>

      <div className="mobile-plot-type-row-99">
        <button
          type="button"
          className={mobilePlotLandType === "residential" ? "active" : ""}
          onClick={() => setMobilePlotLandType("residential")}
        >
          Residential
        </button>

        <button
          type="button"
          className={mobilePlotLandType === "commercial" ? "active" : ""}
          onClick={() => setMobilePlotLandType("commercial")}
        >
          Commercial
        </button>
      </div>

      <h3>City name</h3>

      {mobilePlotLandCity ? (
        <button
          type="button"
          className="mobile-plot-city-chip-99"
          onClick={openMobilePlotCitySearch}
        >
          {mobilePlotLandCity}
          <span>✎</span>
        </button>
      ) : (
        <button
          type="button"
          className="mobile-plot-city-input-fake-99"
          onClick={openMobilePlotCitySearch}
        >
          <span>Where?</span>
          <b>⌕</b>
        </button>
      )}

      {!mobilePlotLandCity && (
        <button
          type="button"
          className="mobile-plot-detect-99"
          onClick={() => setMobilePlotLandCity("Hyderabad")}
        >
          ⦿ Detect my current city
        </button>
      )}

      <button
        type="button"
        className="mobile-plot-explore-99"
        onClick={openMobilePlotLandPage}
      >
        Explore
      </button>
    </div>
  </div>
)}

{/* STEP 5: PLOT / LAND CITY SEARCH PAGE */}
{mobilePlotLandCitySearchOpen && (
  <section className="mobile-plot-city-search-page-99">
    <div className="mobile-plot-city-search-head-99">
      <button type="button" onClick={() => setMobilePlotLandCitySearchOpen(false)}>
        ←
      </button>

      <div>
        <input
          autoFocus
          value={mobilePlotLandSearchText}
          onChange={(e) => setMobilePlotLandSearchText(e.target.value)}
          placeholder="City name"
        />
        <span>⌕</span>
      </div>
    </div>

    <div className="mobile-plot-city-list-99">
      {(filteredMobilePlotCities.length ? filteredMobilePlotCities : mobilePlotCityOptions).map(
        (city) => (
          <button
            type="button"
            key={city}
            onClick={() => selectMobilePlotCity(city)}
          >
            <span>↗</span>
            <strong>
              {city}
              <small>City</small>
            </strong>
          </button>
        )
      )}
    </div>
  </section>
)}


{/* STEP 6: PLOT / LAND RESULT PAGE */}
{mobilePlotLandPageOpen && (
  <section className="mobile-plot-page-99">
    <header className="mobile-plot-page-header-99">
      <button type="button" onClick={() => setMobilePlotLandPageOpen(false)}>
        ←
      </button>

      <button type="button" onClick={openMobilePlotCitySearch}>
        Search city, locality, projects...
        <span>⌕</span>
      </button>
    </header>

    <main className="mobile-plot-page-body-99">
      <h1>
        Plots/Land in <span>{mobilePlotDisplayCity}</span>
      </h1>
      <p>Properties in and around the city</p>

      <div className="mobile-plot-buy-tabs-99">
        <button
          type="button"
          className={mobilePlotLandType === "residential" ? "active" : ""}
          onClick={() => setMobilePlotLandType("residential")}
        >
          Residential Buy
        </button>

        <button
          type="button"
          className={mobilePlotLandType === "commercial" ? "active" : ""}
          onClick={() => setMobilePlotLandType("commercial")}
        >
          Commercial Buy
        </button>
      </div>

      <h2>Plots/Land Collections</h2>
      <p className="mobile-plot-muted-99">
        Showing for properties in {mobilePlotDisplayCity}
      </p>

      <div className="mobile-plot-collection-row-99">
        {(mobilePlotLandType === "commercial"
          ? [
              ["Agricultural / Farm Lands", "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80"],
              ["Industrial Plots/Land", "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=500&q=80"],
              ["Commercial Plots", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"],
            ]
          : [
              ["Plots in Gated Society", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80"],
              ["Residential Plots", "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?auto=format&fit=crop&w=500&q=80"],
              ["Owner Plots", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=500&q=80"],
            ]
        ).map(([title, img]) => (
          <article key={title}>
            <strong>{title}</strong>
            <img src={img} alt={title} />
          </article>
        ))}
      </div>

      <h2>Popular Localities</h2>
      <p className="mobile-plot-muted-99">
        Most searched localities for Plots/land in {mobilePlotDisplayCity}
      </p>

      <div className="mobile-plot-localities-99">
        <button type="button">
          <span>📍</span>
          <strong>
            Dwarka <em>4.4 ★</em>
            <small>
              Prices starting from :{" "}
              {mobilePlotLandType === "commercial" ? "₹50 Lac" : "₹30,000"}
            </small>
          </strong>
          <b>›</b>
        </button>

        <button type="button">
          <span>📍</span>
          <strong>
            {mobilePlotLandType === "commercial" ? "Yamuna Expressway" : "Vasundhara"}{" "}
            <em>4.1 ★</em>
            <small>
              Prices starting from :{" "}
              {mobilePlotLandType === "commercial" ? "₹38,000" : "₹30 Lac"}
            </small>
          </strong>
          <b>›</b>
        </button>

        <button type="button" className="mobile-plot-view-all-localities-99">
          View all Popular localities →
        </button>
      </div>

      <h2>Plots/Land in {mobilePlotDisplayCity}</h2>
      <p className="mobile-plot-muted-99">Curated especially for you</p>

      <div className="mobile-plot-card-grid-99">
        {activeMobilePlotCards.map((card) => (
          <article key={`${card.title}-${card.price}`}>
            <div>
              <img src={card.img} alt={card.title} />
              <button type="button">♡</button>
              <span>{card.price}</span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.place}</p>
          </article>
        ))}
      </div>

      <section className="mobile-plot-posted-section-99">
        <div className="mobile-plot-posted-scroll-99">
          <article className="big">
            <span>🏠</span>
            <h2>Plots/Land posted by</h2>
          </article>

          <article>
            <span>👨‍💼</span>
            <h3>Dealer</h3>
            <p>{mobilePlotLandType === "commercial" ? "2000+" : "10000+"} Properties</p>
          </article>

          <article>
            <span>👤</span>
            <h3>Owner</h3>
            <p>{mobilePlotLandType === "commercial" ? "700+" : "5000+"} Properties</p>
          </article>
        </div>
      </section>

      <section className="mobile-plot-sell-section-99">
        <h2>Sell or Lease out your Plots/Land faster with 99acres</h2>
        <p>Get 2 free postings when you register with us</p>

        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
          alt="Post your property"
        />

        <button type="button">
          Post your property for FREE →
          <small>Get 2 free postings when you register with us</small>
        </button>
      </section>

      <section className="mobile-plot-articles-99">
        <h2>Top articles on Plots/Land</h2>

        <article>
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80"
            alt="Tips for buying plot"
          />
          <div>
            <h3>Tips for buying a plot in India</h3>
            <p>Feb 16, 2022</p>
          </div>
        </article>
      </section>

      <section className="mobile-plot-cities-99">
        <h2>Explore Plots/Land in Popular Indian Cities</h2>
        <p>Top cities</p>

        <div>
          {["Delhi / NCR", "Mumbai", "Bangalore"].map((city) => (
            <button type="button" key={city} onClick={() => setMobilePlotLandCity(city)}>
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=300&q=80"
                alt={city}
              />
              <strong>{city}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="mobile-plot-offerings-99">
        <h2>Check out our other offerings</h2>
        <p>Explore 99acres</p>

        {[
          ["Buy a home", "Apartments, land, builder floors, villas and more"],
          ["Rent a home", "Apartments, builder floors, villas and more"],
          ["PG and co-living", "Organised, owner and broker listed PGs"],
          ["Buy Plots/Land", "Residentials Plots"],
          ["Lease a commercial property", "Shops, offices, land, factories, warehouses and more"],
        ].map(([title, desc]) => (
          <button type="button" key={title}>
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=220&q=80"
              alt={title}
            />
            <strong>
              {title}
              <small>{desc}</small>
            </strong>
            <span>›</span>
          </button>
        ))}
      </section>

      <section className="mobile-plot-app-card-99">
        <h2>Don't miss out</h2>
        <p>Be the first one to know about new listings and responses with 99acres mobile app</p>
        <button type="button">Get mobile app</button>
      </section>
    </main>
  </section>
)}

{mobileNewProjectOpen && (
  <section className="mobile-new-project-page-99">
    <header className="mobile-np-header-99">
      <div className="mobile-np-search-row-99">
        <button
          type="button"
          onClick={() => setMobileNewProjectOpen(false)}
          className="mobile-np-back-99"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => {
            setMobileNewProjectOpen(false);
            openMobileSearch("buy");
          }}
          className="mobile-np-search-box-99"
        >
          <span>Search City/Locality/Proj...</span>
          <Search size={26} strokeWidth={2.1} />
        </button>

        <button type="button" className="mobile-np-heart-99">
          ♡
        </button>
      </div>

   <div className="mobile-np-filter-row-99">
  <button
    type="button"
    className="mobile-np-filter-icon-99"
    onClick={() => {
      setMobileNewProjectSortOpen(false);
      setMobileNewProjectFilterOpen(true);
    }}
  >
    ☷
  </button>

  <button
    type="button"
    onClick={() => {
      setMobileNewProjectFilterOpen(false);
      setMobileNewProjectSortOpen(true);
    }}
  >
    Sort <span>⌄</span>
  </button>

  <button type="button" className="active">
    New Launch
  </button>

 <button type="button" onClick={openMobileOwnerResults}>
  Owner
</button>
  <button
  type="button"
  onClick={() => {
    setMobileNewProjectSortOpen(false);
    setMobileNewProjectFilterTab("Budget");
    setMobileNewProjectFilterOpen(true);
  }}
>
  Budget <span>⌄</span>
</button>

<button
  type="button"
  onClick={() => {
    setMobileNewProjectSortOpen(false);
    setMobileNewProjectFilterTab("BHK");
    setMobileNewProjectFilterOpen(true);
  }}
>
  BHK <span>⌄</span>
</button>
</div>
    </header>

    <main className="mobile-np-list-99">
      <p className="mobile-np-result-count-99">
        <b>452 RESULTS</b> <span>| New Property in Hyderabad for Sale</span>
      </p>

      {mobileNewProjectCards.map((item, index) => {
        const firstImage = properties[index % properties.length]?.image;
        const secondImage = properties[(index + 1) % properties.length]?.image;
        const thirdImage = properties[(index + 2) % properties.length]?.image;

        return (
          <article key={item.title} className="mobile-np-card-99">
            <div className="mobile-np-image-wrap-99">
              <div className="mobile-np-image-strip-99">
                {[firstImage, secondImage, thirdImage].map((img, imgIndex) => (
                  <div
                    key={`${item.title}-${imgIndex}`}
                    className="mobile-np-image-slide-99"
                  >
                    <img src={img} alt={item.title} />
                  </div>
                ))}
              </div>

              <div className="mobile-np-badges-99">
                <span>No Brokerage</span>
                <span>✓ RERA</span>
              </div>

              <button type="button" className="mobile-np-like-99">
                ♡
              </button>

              <button type="button" className="mobile-np-share-99">
                ⤴
              </button>

              <div className="mobile-np-dots-99">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="mobile-np-status-bar-99">
                <span>{item.status}</span>
                <b>{item.count}</b>
              </div>
            </div>

            <div className="mobile-np-info-99">
              <div className="mobile-np-title-row-99">
                <h2>{item.title}</h2>
                <em>{item.badge}</em>
              </div>

              <p className="mobile-np-subtitle-99">{item.subtitle}</p>

              <div className="mobile-np-price-row-99">
                <div>
                  <span>{item.config1}</span>
                  <strong>{item.price1}</strong>
                </div>

                {item.config2 && (
                  <div>
                    <span>{item.config2}</span>
                    <strong>{item.price2}</strong>
                  </div>
                )}
              </div>

              <p className="mobile-np-rate-99">▣ {item.rate}</p>

              <p className="mobile-np-desc-99">
                {item.desc}
                <span>⌄</span>
              </p>

              <div className="mobile-np-actions-99">
                <button type="button">⇩ Brochure</button>
                <button type="button" onClick={openMobileContactLogin}>
  View Number
</button>
              </div>
            </div>
          </article>
        );
      })}

      <section className="mobile-np-faq-99">
        <h2>Frequently Asked Questions</h2>

        {[
          "How many new launch projects are available in Hyderabad?",
          "Which are the top localities for new projects in Hyderabad?",
          "Can I contact builders directly on 99acres?",
          "Are RERA approved properties available?",
        ].map((faq) => (
          <details key={faq}>
            <summary>{faq}</summary>
            <p>
              You can explore verified new launch projects, compare prices,
              view brochures and contact sellers directly.
            </p>
          </details>
        ))}
      </section>
    </main>
    {mobileNewProjectSortOpen && (
  <div className="mobile-np-sheet-overlay-99">
    <button
      type="button"
      className="mobile-np-sheet-backdrop-99"
      onClick={() => setMobileNewProjectSortOpen(false)}
      aria-label="Close sort"
    />

    <section className="mobile-np-sort-sheet-99">
      <button
        type="button"
        className="mobile-np-sheet-close-99"
        onClick={() => setMobileNewProjectSortOpen(false)}
      >
        ×
      </button>

      <h2>Sort by</h2>

      <div className="mobile-np-sort-options-99">
        {mobileNewProjectSortOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setMobileNewProjectSort(option)}
          >
            <span className={mobileNewProjectSort === option ? "active" : ""} />
            <strong>{option}</strong>
            {option === "Newest first" && <em>🔒 Login to Unlock</em>}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="mobile-np-sort-done-99"
        onClick={() => setMobileNewProjectSortOpen(false)}
      >
        Done
      </button>
    </section>
  </div>
)}

{mobileNewProjectFilterOpen && (
  <div className="mobile-np-sheet-overlay-99">
    <button
      type="button"
      className="mobile-np-sheet-backdrop-99"
      onClick={() => setMobileNewProjectFilterOpen(false)}
      aria-label="Close filters"
    />

    <section className="mobile-np-filter-sheet-99">
      <div className="mobile-np-filter-drag-99" />

    <header className="mobile-np-filter-head-99">
  <h2>
    {mobileSelectedBhk.length > 0
      ? `Filters (${mobileSelectedBhk.length})`
      : "Filters"}
  </h2>

  <button
    type="button"
    onClick={() => setMobileNewProjectFilterOpen(false)}
  >
    ×
  </button>
</header>

{mobileSelectedBhk.length > 0 && mobileNewProjectFilterTab === "BHK" && (
  <div className="mobile-np-filter-chip-row-99">
    <button type="button" onClick={clearMobileBhk}>
      {getMobileBhkChipText()} <span>×</span>
    </button>
  </div>
)}

<div
  className={`mobile-np-filter-body-99 ${
    mobileSelectedBhk.length > 0 && mobileNewProjectFilterTab === "BHK"
      ? "has-filter-chips"
      : ""
  }`}
>
        <aside className="mobile-np-filter-tabs-99">
          {mobileNewProjectFilterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setMobileNewProjectFilterTab(tab)}
              className={mobileNewProjectFilterTab === tab ? "active" : ""}
            >
              {tab}
            </button>
          ))}
        </aside>

      <main className="mobile-np-filter-options-99">
  {mobileNewProjectFilterTab === "Quick Filters (1)" && (
    <>
      {[
        "Verified Properties",
        "New Launches",
        "Gated Society (0)",
        "Zero Brokerage",
        "With Photos",
      ].map((item) => (
        <button
          key={item}
          type="button"
          className={item === "New Launches" ? "checked" : ""}
        >
          <span>{item === "New Launches" ? "✓" : ""}</span>
          <strong>{item}</strong>
          {item === "Verified Properties" && <em>ⓘ</em>}
        </button>
      ))}
    </>
  )}

  {mobileNewProjectFilterTab === "Budget" && (
    <div className="mobile-budget-filter-99">
      <h3>Budget in ₹</h3>

      <div className="mobile-budget-selected-99">
        <button type="button">{mobileBudgetMin}</button>
        <span>to</span>
        <button type="button">{mobileBudgetMax}</button>
      </div>

      <div className="mobile-budget-picker-99">
        <div className="mobile-budget-col-99">
          {mobileBudgetValues.map((value) => (
            <button
              key={`new-launch-budget-min-${value}`}
              type="button"
              onClick={() => setMobileBudgetMin(value)}
              className={mobileBudgetMin === value ? "active" : ""}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="mobile-budget-col-99">
          {mobileBudgetMaxValues.map((value) => (
            <button
              key={`new-launch-budget-max-${value}`}
              type="button"
              onClick={() => setMobileBudgetMax(value)}
              className={mobileBudgetMax === value ? "active" : ""}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  )}

  {mobileNewProjectFilterTab !== "Quick Filters (1)" &&
    mobileNewProjectFilterTab !== "Budget" && (
      <div className="mobile-np-filter-placeholder-99">
        <h3>{mobileNewProjectFilterTab}</h3>

        {["Option 1", "Option 2", "Option 3", "Option 4"].map((item) => (
          <button key={item} type="button">
            <span />
            <strong>{item}</strong>
          </button>
        ))}
      </div>
    )}
</main>

      </div>

      <footer className="mobile-np-filter-footer-99">
   <button
  type="button"
  onClick={() => {
    setMobileNewProjectFilterTab("Quick Filters (1)");
    setMobileBudgetMin("No min");
    setMobileBudgetMax("No max");
    setMobileSelectedBhk([]);
  }}
>
  Clear all
</button>

<button
  type="button"
  onClick={() => {
    setMobileNewProjectFilterOpen(false);
    setMobileNewProjectOpen(true);
  }}
>
  See All {mobileSelectedBhk.length > 0 ? "1.3K" : "1.4K"} Properties
</button>
      </footer>
    </section>
  </div>
)}
  </section>
)}

{mobileInvestModalOpen && (
  <div className="mobile-invest-overlay-99">
    <button
      type="button"
      className="mobile-invest-backdrop-99"
      onClick={() => {
        setMobileInvestModalOpen(false);
        setMobileInvestBudgetDropdown(null);
      }}
      aria-label="Close investment popup"
    />

    <section className="mobile-invest-sheet-99">
      <button
        type="button"
        className="mobile-invest-close-99"
        onClick={() => {
          setMobileInvestModalOpen(false);
          setMobileInvestBudgetDropdown(null);
        }}
      >
        ×
      </button>

      <h2>Looking to invest in</h2>

      {!mobileInvestCity ? (
        <button
          type="button"
          className="mobile-invest-city-placeholder-99"
          onClick={() => {
            setMobileInvestSearchOpen(true);
            setMobileInvestModalOpen(false);
            setMobileInvestCitySearch("");
          }}
        >
          eg: Delhi
        </button>
      ) : (
        <button
          type="button"
          className="mobile-invest-city-chip-99"
          onClick={() => {
            setMobileInvestSearchOpen(true);
            setMobileInvestModalOpen(false);
            setMobileInvestCitySearch(mobileInvestCity);
          }}
        >
          {mobileInvestCity} <span>✎</span>
        </button>
      )}

      <h3>Your Budget</h3>

      <div className="mobile-invest-budget-row-99">
        <div className="mobile-invest-budget-wrap-99">
          <button
            type="button"
            onClick={() =>
              setMobileInvestBudgetDropdown((prev) =>
                prev === "min" ? null : "min"
              )
            }
          >
            {formatInvestBudget(mobileInvestMinBudget)} <span>⌄</span>
          </button>

          {mobileInvestBudgetDropdown === "min" && (
            <div className="mobile-invest-budget-menu-99 left">
              {mobileBudgetValues.map((value) => (
                <button
                  key={`invest-min-${value}`}
                  type="button"
                  className={mobileInvestMinBudget === value ? "active" : ""}
                  onClick={() => {
                    setMobileInvestMinBudget(value === "No min" ? "0" : value);
                    setMobileInvestBudgetDropdown(null);
                  }}
                >
                  {formatInvestBudget(value === "No min" ? "0" : value)}
                  {mobileInvestMinBudget === value && <span>✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        <span>to</span>

        <div className="mobile-invest-budget-wrap-99">
          <button
            type="button"
            onClick={() =>
              setMobileInvestBudgetDropdown((prev) =>
                prev === "max" ? null : "max"
              )
            }
          >
            {formatInvestBudget(mobileInvestMaxBudget)} <span>⌄</span>
          </button>

          {mobileInvestBudgetDropdown === "max" && (
            <div className="mobile-invest-budget-menu-99 right">
              {mobileBudgetMaxValues
                .filter((value) => value !== "No max")
                .map((value) => (
                  <button
                    key={`invest-max-${value}`}
                    type="button"
                    className={mobileInvestMaxBudget === value ? "active" : ""}
                    onClick={() => {
                      setMobileInvestMaxBudget(value);
                      setMobileInvestBudgetDropdown(null);
                    }}
                  >
                    {formatInvestBudget(value)}
                    {mobileInvestMaxBudget === value && <span>✓</span>}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        className="mobile-invest-submit-99"
        onClick={openMobileInvestPage}
      >
        Explore Investments
      </button>
    </section>
  </div>
)}

{mobileInvestSearchOpen && (
  <section className="mobile-invest-city-page-99">
    <header className="mobile-invest-city-head-99">
      <button
        type="button"
        onClick={() => {
          setMobileInvestSearchOpen(false);
          setMobileInvestModalOpen(true);
        }}
      >
        ←
      </button>
    </header>

    <form
      className="mobile-invest-city-search-99"
      onSubmit={(e) => {
        e.preventDefault();

        const firstCity = getFilteredInvestCities()[0];

        if (firstCity) {
          setMobileInvestCity(firstCity);
          setMobileInvestSearchOpen(false);
          setMobileInvestModalOpen(true);
        }
      }}
    >
      <input
        autoFocus
        value={mobileInvestCitySearch}
        onChange={(e) => setMobileInvestCitySearch(e.target.value)}
        placeholder="City name"
      />

      <button type="submit">
        <Search size={38} strokeWidth={2.2} />
      </button>
    </form>

    <main className="mobile-invest-city-list-99">
      {getFilteredInvestCities().map((city) => (
        <button
          key={city}
          type="button"
          onClick={() => {
            setMobileInvestCity(city);
            setMobileInvestSearchOpen(false);
            setMobileInvestModalOpen(true);
          }}
        >
          <span>↗</span>

          <div>
            <strong>{city}</strong>
            <p>City</p>
          </div>
        </button>
      ))}
    </main>
  </section>
)}

{mobileInvestPageOpen && (
  <section className="mobile-invest-page-99">
    <header className="mobile-invest-page-top-99">
      <button
        type="button"
        onClick={() => {
          setMobileInvestPageOpen(false);
          setMobileInvestModalOpen(true);
        }}
      >
        ☰
      </button>

      <button
        type="button"
        onClick={() => {
          setMobileInvestPageOpen(false);
          setMobileInvestModalOpen(true);
        }}
      >
        Invest in <b>{mobileInvestCity}</b>,{" "}
        {formatInvestBudget(mobileInvestMinBudget)} to{" "}
        {formatInvestBudget(mobileInvestMaxBudget)}⌄
      </button>

      <button
        type="button"
        onClick={() => {
          setMobileInvestPageOpen(false);
          setMobileInvestSearchOpen(true);
          setMobileInvestCitySearch(mobileInvestCity);
        }}
      >
        <Search size={36} strokeWidth={2.2} />
      </button>
    </header>

    <main className="mobile-invest-page-scroll-99">
      <section className="mobile-invest-hero-99">
        <div className="mobile-invest-main-head-99">
          <button type="button">☰</button>
          <strong>99acres</strong>
          <button type="button">
            <Search size={34} />
          </button>
        </div>

        <h1>
          Investacres <span>NEW</span>
        </h1>

        <p>Get unbiased information & curated options for investment</p>

        <button
          type="button"
          onClick={() => {
            setMobileInvestPageOpen(false);
            setMobileInvestModalOpen(true);
          }}
        >
          Invest in <b>{mobileInvestCity}</b>,{" "}
          {formatInvestBudget(mobileInvestMinBudget)} to{" "}
          {formatInvestBudget(mobileInvestMaxBudget)}⌄
        </button>
      </section>

      <section className="mobile-invest-options-99">
        <h2>Choose from below Investment options</h2>

        <div>
          {[
            ["Preleased Shops & Offices", "Rentals from day 1", "Popular"],
            ["New Launch Deals", "High appreciation", ""],
            ["Invest in Land", "Get long term gains", "Long term"],
            ["Shops in High Footfall Areas", "Attractive rentals", ""],
            ["Offices in Commercial Hub", "Steady rentals", ""],
            ["Attractive Payment Plans", "Book now pay later", ""],
            ["Special Offers by Builders", "For limited time", ""],
            ["Invest with trusted builders", "Low risk", ""],
          ].map(([title, sub, tag]) => (
            <button key={title} type="button">
              {tag && <em>{tag}</em>}
              <strong>{title}</strong>
              <span>{sub}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mobile-invest-videos-99">
        <h2>New to investment? Start with basics</h2>
        <p>Know what is right for you from experts</p>

        <div>
          {[
            "Why commercial investment gives better returns?",
            "Why invest in Commercial Real-estate ?",
            "Why invest in Pre-Leased properties?",
          ].map((title) => (
            <button key={title} type="button">
              <strong>{title}</strong>
              <span>▶</span>
            </button>
          ))}
        </div>

        <p>
          Also see <button type="button">📘 Investor&apos;s Guide 2023</button>
        </p>
      </section>

      <section className="mobile-invest-list-section-99">
        <div className="mobile-invest-section-head-99">
          <div>
            <h2>Get best returns in long run</h2>
            <p>Enjoy high appreciation</p>
          </div>
          <button type="button">View all</button>
        </div>

        <div className="mobile-invest-property-row-99">
          {[
            ["The Omaxe State", "Sector 19B Dwarka", "₹ 77.5 L Onwards"],
            ["Saket Commercial", `Saket, ${mobileInvestCity}`, "₹ 25 Cr Onwards"],
          ].map(([title, place, price]) => (
            <button key={title} type="button">
              <div />
              <strong>{title}</strong>
              <span>{place}</span>
              <b>{price}</b>
            </button>
          ))}
        </div>
      </section>

      <section className="mobile-invest-roi-99">
        <button type="button">×</button>
        <strong>ROI: Returns On Investment</strong>
        <p>
          ROI is a measurement of how much money, or profit, you have earned on
          an investment as a percentage of its total cost.
        </p>
      </section>

      <section className="mobile-invest-list-section-99">
        <div className="mobile-invest-section-head-99">
          <div>
            <h2>Build secondary income</h2>
            <p>With great monthly rentals</p>
          </div>
          <button type="button">View all</button>
        </div>

        <div className="mobile-invest-tabs-99">
          <button type="button" className="active">All</button>
          <button type="button">Shops</button>
          <button type="button">Offices</button>
        </div>

        <div className="mobile-invest-property-row-99">
          {[
            ["Commercial Showrooms in Omaxe...", `Chandni Chowk, ${mobileInvestCity}`, "₹ 95 L"],
            ["Commercial Shops", `Chandni Chowk, ${mobileInvestCity}`, "₹ 51 L"],
          ].map(([title, place, price]) => (
            <button key={title} type="button">
              <div />
              <em>Pre Leased</em>
              <strong>{title}</strong>
              <span>{place}</span>
              <b>{price}</b>
            </button>
          ))}
        </div>
      </section>

      <section className="mobile-invest-list-section-99">
        <h2>Hot investment areas in {mobileInvestCity}</h2>
        <p>Ideal for you to invest</p>

        <div className="mobile-invest-rank-card-99">
          <h3>FOR SHOPS</h3>

          {["Patel Nagar", "South Extension", "Karol Bagh"].map((area, index) => (
            <p key={area}>
              <span>#{index + 1} {area}</span>
              <b>{[10, 8, 7][index]}% Rental Yield</b>
            </p>
          ))}
        </div>
      </section>

      <section className="mobile-invest-related-99">
        <h2>Related to your search</h2>

        <h3>Property Options in {mobileInvestCity}</h3>

        {[
          "New Projects",
          `Shop for sale in ${mobileInvestCity}`,
          `Showroom for sale in ${mobileInvestCity}`,
          `Agricultural land for sale in ${mobileInvestCity}`,
          `Industrial land for sale in ${mobileInvestCity}`,
        ].map((item) => (
          <button key={item} type="button">{item}</button>
        ))}

        <h3>Real Estate Investments in {mobileInvestCity}</h3>
        <button type="button">Investment in Land in {mobileInvestCity}</button>

        <p>
          Home / Real Estate Investments / Real Estate Investments in{" "}
          {mobileInvestCity}
        </p>

        <div>
          Disclaimer : Project details presented on this page are collected from
          public sources including State RERA websites wherever applicable,
          project websites created by builder and authorized channel partners and
          official documentation shared by these authorized advertisers. 99acres
          only presents this content in easy format for user research and user
          education...<button type="button">more</button>
        </div>
      </section>
    </main>
  </section>
)}

{mobileLocalitiesPageOpen && (
  <section className="mobile-localities-page-99">
    <header className="mobile-localities-header-99">
      <button type="button" onClick={() => setMobileLocalitiesPageOpen(false)}>
        ←
      </button>

      <div>
        <h1>Localities you may like</h1>
        <p>in Hyderabad</p>
      </div>
    </header>

    <main className="mobile-localities-list-99">
      {[
        {
          name: "Habsiguda",
          rating: "4.4",
          price: "₹6,150/ sqft",
          yoy: "7.5% YoY",
          tag: "Mid-Segment",
          img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=80",
          up: false,
        },
        {
          name: "Beeramguda",
          rating: "4.1",
          price: "₹4,400/ sqft",
          yoy: "7.4% YoY",
          tag: "Affordable",
          img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=300&q=80",
          up: false,
        },
        {
          name: "Peerzadiguda",
          rating: "4.2",
          price: "₹4,700/ sqft",
          yoy: "4.1% YoY",
          tag: "Mid-Segment",
          img: "",
          up: false,
        },
        {
          name: "Kukatpally",
          rating: "4.4",
          price: "₹7,650/ sqft",
          yoy: "10.9% YoY",
          tag: "Mid-Segment",
          img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=300&auto=format&fit=crop",
          up: true,
        },
        {
          name: "Chandanagar",
          rating: "4.2",
          price: "₹6,750/ sqft",
          yoy: "0.7% YoY",
          tag: "Mid-Segment",
          img: "",
          up: true,
        },
        {
          name: "Hayathnagar",
          rating: "4.3",
          price: "₹5,550/ sqft",
          yoy: "2.8% YoY",
          tag: "Mid-Segment",
          img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=300&q=80",
          up: true,
        },
      ].map((item) => (
        <article key={item.name} className="mobile-locality-list-card-99">
          {item.img ? (
            <img src={item.img} alt={item.name} />
          ) : (
            <div className="mobile-locality-placeholder-99">📍</div>
          )}

          <div>
            <h2>
              {item.name} <em>{item.rating} ★</em>
            </h2>

            <p>
              {item.price}
              <span className={item.up ? "up" : "down"}>
                {item.up ? "▲" : "▼"}
              </span>
              {item.yoy}
            </p>

            <small>{item.tag}</small>

            <div>
              <button type="button">View Properties</button>
              <i />
              <button type="button">View Insights</button>
            </div>
          </div>
        </article>
      ))}
    </main>
  </section>
)}

{mobileShortlistOpen && (
  <section className="mobile-shortlist-page-99">
    <header className="mobile-shortlist-header-99">
      <div>
        <button type="button" onClick={() => setMobileShortlistOpen(false)}>
          ☰
        </button>

        <strong>99acres</strong>
      </div>

      <button type="button">
        <Search size={34} strokeWidth={2.2} />
      </button>
    </header>

    <main className="mobile-shortlist-body-99">
      <h1>Shortlists</h1>
      <p>Find all your shortlists at one place...</p>

      <div className="mobile-shortlist-tabs-99">
        <button type="button" className="active">
          Properties (0)
        </button>
        <button type="button">Projects (0)</button>
        <button type="button">Localities (0)</button>
      </div>

      <section className="mobile-shortlist-empty-99">
        <div className="mobile-shortlist-empty-art-99">
          🏠
          <span>★</span>
        </div>

        <h2>
          You haven’t Shortlisted
          <br />
          any properties yet!
        </h2>

        <p>
          Tap on the star icon on property / project
          <br />
          / locality you like to see them here...
        </p>
      </section>
    </main>
  </section>
)}

{mobilePostPropertyOpen && (
  <MobilePostPropertyPage
    onBack={() => setMobilePostPropertyOpen(false)}
  />
)}

    {mobileSearchOpen && (
      <section className="mobile-search-page-99">

 <header className="mobile-search-top-99">
  <div className="mobile-search-tab-row-99">
    <div className="mobile-search-tabs-99">
      <button
  type="button"
  onClick={() => {
    setMobileSearchTab("buy");
    setMobileSearchStep("suggestions");
    setMobileSearchLocation("");
  }}
  className={mobileSearchTab === "buy" ? "active" : ""}
>
  Buy
</button>

<button
  type="button"
  onClick={() => {
    setMobileSearchTab("rent");
    setMobileSearchStep("suggestions");
    setMobileSearchLocation("");
  }}
  className={mobileSearchTab === "rent" ? "active" : ""}
>
  Rent/PG
</button>

<button
  type="button"
  onClick={() => {
    setMobileSearchTab("commercial");
    setMobileSearchStep("suggestions");
    setMobileSearchLocation("");
  }}
  className={mobileSearchTab === "commercial" ? "active" : ""}
>
  Commercial
</button>
    </div>

    <button
      type="button"
      onClick={() => {
        setMobileSearchOpen(false);
        setMobileSearchStep("suggestions");
        setMobileSearchLocation("");
      }}
      className="mobile-search-close-99"
    >
      ×
    </button>
  </div>
</header>

        {mobileSearchStep === "suggestions" && (
          <main className="mobile-search-content-99">
         <div className="mobile-search-input-card-99">
<input
  value={mobileSearchLocation}
  onFocus={() => setMobileSearchStep("typing")}
  onChange={(e) => {
    setMobileSearchLocation(e.target.value);
    setMobileSearchStep("typing");
  }}
  placeholder={getMobileSearchPlaceholder()}
/>

 <button
  type="button"
  onClick={handleMobileUseCurrentLocation}
  className="mobile-search-location-btn-99"
>
  ◎
</button>

<button
  type="button"
  onClick={handleMobileVoiceSearch}
  className="mobile-search-mic-btn-99"
>
  🎙
</button>
</div>

         {mobileSearchTab === "buy" && (
  <div className="mobile-last-search-99">
    <h3>Last searched..</h3>

    <button
      type="button"
      onClick={() => {
        setMobileSearchLocation("Hyderabad");
        setMobileSearchStep("selected");
      }}
    >
      <span>↺</span>
      Buy in null +9 localities
      <em>↖</em>
    </button>
  </div>
)}

            <div className="mobile-popular-card-99">
              <h3>
                Popular Localities in <b>{getMobileSelectedCity()}</b>
              </h3>

              <div>
                {mobilePopularHyderabadLocalities.slice(0, 6).map((locality) => (
                  <button
                    key={locality}
                    type="button"
                    onClick={() => {
                      setMobileSearchLocation("Hyderabad");
                      setMobileSearchStep("selected");
                    }}
                  >
                    <span>＋</span>
                    {locality}
                  </button>
                ))}
              </div>
            </div>
          </main>
        )}

        {mobileSearchStep === "typing" && (
          <main className="mobile-search-content-99 mobile-search-typing-99">
            <div className="mobile-search-input-card-99 mobile-search-input-filled-99">
             <input
  autoFocus
  value={mobileSearchLocation}
  onChange={(e) => {
    setMobileSearchLocation(e.target.value);
  }}
  placeholder="Add Locality/Project/Landmark"
/>

              <button
                type="button"
                onClick={() => {
                  setMobileSearchLocation("");
                  setMobileSearchStep("suggestions");
                }}
              >
                ×
              </button>
            </div>

            <div className="mobile-suggestion-list-99">
            {getMobileCitySuggestions(mobileSearchLocation).map((item) => (
  <button
    key={item.title}
    type="button"
    onClick={() => {
      const selectedCity = item.title.split(" - ")[0].split(" Metropolitan")[0];
      setMobileSearchLocation(selectedCity);
      setMobileSearchStep("selected");
    }}
  >
    <span>↗</span>

    <div>
      <strong>{item.title}</strong>
      {item.subtitle && <p>{item.subtitle}</p>}
    </div>
  </button>
))}
            </div>
          </main>
        )}

        {mobileSearchStep === "selected" && (
          <main className="mobile-search-content-99">
            <div className="mobile-selected-location-box-99">
              <div className="mobile-selected-input-99">
                <input placeholder="Add Locality/Project/Landmark" readOnly />
                <div>
                 <span>{mobileSearchLocation || "Hyderabad"}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileSearchLocation("");
                      setMobileSearchStep("suggestions");
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>

            <div className="mobile-popular-card-99">
              <h3>
               Popular Localities in <b>{mobileSearchLocation || "Hyderabad"}</b>
              </h3>

              <div>
                {mobilePopularHyderabadLocalities.slice(0, 6).map((locality) => (
                  <button key={locality} type="button">
                    <span>＋</span>
                    {locality}
                  </button>
                ))}
              </div>
            </div>

            <div className="mobile-search-footer-99">
              <button
                type="button"
                onClick={() => {
                  setMobileSearchLocation("");
                  setMobileSearchStep("suggestions");
                }}
              >
                Clear All
              </button>

              <button
                type="button"
                onClick={() => setMobileSearchStep("filters")}
              >
                Next <span>→</span>
              </button>
            </div>
          </main>
        )}

        {mobileSearchStep === "filters" && (
          <main className="mobile-filter-content-99">
            <div className="mobile-filter-selected-card-99">
              <button
                type="button"
                onClick={() => setMobileSearchStep("typing")}
              >
                Add
              </button>

             <span>
  {getMobileSelectedCity()}
  <button
    type="button"
    onClick={() => {
      setMobileSearchLocation("");
      setMobileSearchStep("suggestions");
    }}
  >
    ×
  </button>
</span>
            </div>

            <div className="mobile-filter-card-99">
              <h3>Budget in ₹</h3>

              <div className="mobile-budget-row-99">
                <button type="button">No Min⌄</button>
                <span>to</span>
                <button type="button">No Max⌄</button>
              </div>

              <h3>Property types</h3>

              <div className="mobile-filter-grid-99">
                {[
                  "Flat/Apartment",
                  "House/Villa",
                  "Serviced Apartment",
                  "Plot/Land",
                  "Builder Floor",
                  "1 RK/ Studio Apartment",
                ].map((item) => (
                  <button key={item} type="button">
                    <span>▦</span>
                    {item}
                  </button>
                ))}
              </div>

              <div className="mobile-commercial-box-99">
                <h3>Or, See commercial</h3>

                <div>
                  {["Office", "Shop", "Plot/Land", "Factory"].map((item) => (
                    <button key={item} type="button">
                      <span>▦</span>
                      {item}
                      <em>↗</em>
                    </button>
                  ))}
                </div>
              </div>

              <h3>No. of Bedrooms</h3>

              <div className="mobile-chip-row-99">
                {["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"].map(
                  (item) => (
                    <button key={item} type="button">
                      {item}
                    </button>
                  )
                )}
              </div>

              <h3>Construction status</h3>

              <div className="mobile-filter-grid-99 mobile-status-grid-99">
             {["Ready to move", "New Launch", "Under Construction"].map((item) => (
  <button
    key={item}
    type="button"
    onClick={() => setMobileSelectedConstruction(item)}
    className={mobileSelectedConstruction === item ? "active" : ""}
  >
    <span>◎</span>
    {item}
  </button>
))}
              </div>
            </div>
<div className={`mobile-advanced-card-99 ${mobileAdvancedOpen ? "open" : ""}`}>
  <button
    type="button"
    onClick={() => setMobileAdvancedOpen((prev) => !prev)}
  >
    <strong>Advanced Filters</strong>
    <span>{mobileAdvancedOpen ? "⌃" : "⌄"}</span>
  </button>

  {!mobileAdvancedOpen ? (
    <p>Posted by, Purchase Type, Area, Amenities &amp; 6 more</p>
  ) : (
    <div className="mobile-advanced-body-99">
      <h3>Posted by</h3>

      <div className="mobile-chip-row-99">
        {["Owner", "Dealer", "Builder"].map((item) => (
          <button key={item} type="button">
            {item}
          </button>
        ))}
      </div>

      <h3>Purchase Type</h3>

      <div className="mobile-chip-row-99">
        {["Resale", "New Bookings"].map((item) => (
          <button key={item} type="button">
            {item}
          </button>
        ))}
      </div>

      <h3>
        Area <span>sqft⌄</span>
      </h3>

      <div className="mobile-budget-row-99">
        <button type="button">No Min⌄</button>
        <span>to</span>
        <button type="button">No Max⌄</button>
      </div>

      <div className="mobile-bath-row-99">
        <strong>Minimum No. of Bathrooms</strong>
        <button type="button">−</button>
        <span>0</span>
        <button type="button">＋</button>
      </div>

      <h3>Furnishing status</h3>

      <div className="mobile-chip-row-99">
        {["Furnished", "Semi-furnished", "Unfurnished"].map((item) => (
          <button key={item} type="button">
            {item}
          </button>
        ))}
      </div>

      <h3>Amenities</h3>

      <div className="mobile-chip-row-99 mobile-chip-wrap-99">
        {[
          "Parking",
          "Power Backup",
          "Park",
          "Swimming Pool",
          "Lift",
          "Gas Pipeline",
          "Gymnasium",
          "Club House",
        ].map((item) => (
          <button key={item} type="button">
            {item}
          </button>
        ))}
      </div>

      <div className="mobile-rera-toggle-99">
        <strong>Show Only RERA Approved Properties</strong>
        <span />
      </div>
    </div>
  )}
</div>

            <div className="mobile-search-footer-99">
              <button
                type="button"
                onClick={() => setMobileSearchStep("suggestions")}
              >
                Clear All
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileSearchOpen(false);
                  navigate("/search");
                }}
              >
                See all {getMobilePropertyCount()} properties
              </button>
            </div>
          </main>
        )}
      </section>
    )}

        {loginModalOpen && (
      <div className="mobile-login-overlay-99">
        <button
          type="button"
          aria-label="Close login"
          className="mobile-login-backdrop-99"
          onClick={() => {
            setLoginModalOpen(false);
            setLoginError(false);
            setOtpError("");
          }}
        />

        <section className="mobile-login-sheet-real-99">
          <div className="mobile-login-drag-99" />

          {loginStep === "phone" && (
            <>
              <h2>Login / Register</h2>
              <p>Please enter your Phone Number</p>

              <div className="mobile-login-phone-box-99">
                <label>Phone Number</label>

                <div>
                  <button
                    type="button"
                    onClick={() => setCountryDropdownOpen((prev) => !prev)}
                  >
                    {loginCountryCode}⌄
                  </button>

                  <span />

                  <input
                    autoFocus
                    value={loginPhone}
                    onChange={(e) => {
                      const onlyNumbers = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

                      setLoginPhone(onlyNumbers);
                      setLoginPhoneTouched(true);
                      setLoginError(false);
                      setOtpError("");
                    }}
                    inputMode="numeric"
                  />
                </div>

                {countryDropdownOpen && (
                  <div className="mobile-country-dropdown-99">
                    {countryCodes.map((code) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => {
                          setLoginCountryCode(code);
                          setCountryDropdownOpen(false);
                        }}
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {(loginError || otpError) && (
                <p className="mobile-login-error-99">
                  {otpError || "Please enter valid 10 digit mobile number."}
                </p>
              )}

              <button
                type="button"
                disabled={!isValidLoginPhone || authLoading}
                onClick={handleSendOtp}
                className="mobile-login-continue-99"
              >
                {authLoading ? "Please wait..." : "Continue"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setLoginStep("email");
                  setLoginError(false);
                  setOtpError("");
                }}
                className="mobile-login-email-99"
              >
                <span>or </span>Continue with Email/Username
              </button>
            </>
          )}

          {loginStep === "otp" && (
            <>
              <h2>Verify your number</h2>

              <p className="mobile-login-number-99">
                {loginCountryCode}-{loginPhone}
                <button type="button" onClick={() => setLoginStep("phone")}>
                  ✎
                </button>
              </p>

              <h3>Enter your 4 digit OTP</h3>

              <div className="mobile-otp-row-99">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    value={value}
                    id={`mobile-otp-${index}`}
                    onChange={(e) => {
                      const digit = e.target.value.replace(/\D/g, "").slice(0, 1);

                      setOtpValues((prev) => {
                        const next = [...prev];
                        next[index] = digit;
                        return next;
                      });

                      if (digit) {
                        document.getElementById(`mobile-otp-${index + 1}`)?.focus();
                      }
                    }}
                    inputMode="numeric"
                  />
                ))}
              </div>

              {otpError && <p className="mobile-login-error-99">{otpError}</p>}

              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={authLoading || otpValues.join("").length !== 4}
                className="mobile-login-continue-99"
              >
                {authLoading ? "Verifying..." : "Verify & Continue"}
              </button>
            </>
          )}

          {loginStep === "email" && (
            <>
              <button
                type="button"
                onClick={() => setLoginStep("phone")}
                className="mobile-login-back-99"
              >
                ‹
              </button>

              <h2>Login with Email</h2>
              <p>Please enter your login details</p>

              <input
                className="mobile-login-input-99"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Email Id/Username"
              />

              <input
                className="mobile-login-input-99"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
              />

             {(loginError || otpError) && (
  <p className="mobile-login-error-99">
    {otpError ||
      "Incorrect Credentials. Kindly Register or Click Forgot password to reset."}
  </p>
)}

<button
  type="button"
  onClick={handleRealEmailLogin}
  disabled={authLoading}
  className="mobile-login-continue-99"
>
  {authLoading ? "Logging in..." : "Continue"}
</button>
            </>
          )}
        </section>
      </div>
    )}
   </section>
);

const MobileBottomNav = (
  <nav className="mobile-bottom-nav-99">
    <button
      type="button"
      className={
        !mobileInsightsOpen &&
        !mobilePostPropertyOpen &&
        !mobileShortlistOpen &&
        mobilePageOpen !== "profile"
          ? "active"
          : ""
      }
      onClick={() => {
        setMobileSearchOpen(false);
        setMobileOwnerPageOpen(false);
        setMobileNewProjectOpen(false);
        setMobilePostPropertyOpen(false);
        setMobileShortlistOpen(false);
        setMobileInsightsOpen(false);
        setMobilePageOpen(null);
        setSideMenuOpen(false);
        setLoginModalOpen(false);
      }}
    >
      <span>⌂</span>
      <strong>Home</strong>
    </button>

    <button
      type="button"
      className={mobileInsightsOpen ? "active" : ""}
      onClick={openMobileInsightsPage}
    >
      <span>💡</span>
      <strong>Insights</strong>
    </button>

    <button
      type="button"
      className={mobilePostPropertyOpen ? "active" : ""}
      onClick={openMobilePostPropertyPage}
    >
      <span>⊞</span>
      <strong>Sell/Rent</strong>
    </button>

    <button
      type="button"
      className={mobileShortlistOpen ? "active" : ""}
      onClick={openMobileShortlistPage}
    >
      <span>♥</span>
      <strong>Shortlist</strong>
    </button>

    <button
      type="button"
      className={mobilePageOpen === "profile" ? "active" : ""}
      onClick={() => {
        setMobileInsightsOpen(false);
        setMobilePostPropertyOpen(false);
        setMobileShortlistOpen(false);
        setMobileSearchOpen(false);
        setMobileOwnerPageOpen(false);
        setMobileNewProjectOpen(false);
        setSideMenuOpen(false);
        setLoginModalOpen(false);
        setMobilePageOpen("profile");
      }}
    >
      <span>♙</span>
      <strong>Profile</strong>
    </button>
  </nav>
);

return (
  <>

    {MobileHomeView}
     {MobileBottomNav}

    <main className="desktop-99-home min-h-screen overflow-x-hidden bg-white text-[#06152e]">
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

   <section className="relative h-[360px] overflow-visible bg-[#050918] text-white md:h-[430px]">
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
{(activeMenu || cityPopupOpen || viewNumberPopupOpen || loginModalOpen) && (
  <div
    className={`fixed inset-0 transition-opacity duration-200 ${
      viewNumberPopupOpen || loginModalOpen
        ? "z-[180] bg-black/70"
        : "z-[80] bg-black/35"
    }`}
    onClick={() => {
      closeMenu();
      setCityPopupOpen(false);
      setViewNumberPopupOpen(false);
      setLoginModalOpen(false);
      setLoginError(false);
    }}
  />
)}

{loginModalOpen && (
<div
  className="login-modal-mobile-99 fixed left-1/2 top-1/2 z-[220] w-[94vw] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-6 py-7 text-[#06152e] shadow-2xl md:px-7 md:py-8"
  onClick={(e) => e.stopPropagation()}
>
    {loginStep === "phone" ? (

  <>
  <button
    type="button"
    onClick={() => {
      setLoginModalOpen(false);
      setLoginError(false);
      setCountryDropdownOpen(false);
      setLoginPhoneTouched(false);
    }}
    className="absolute right-6 top-6 text-slate-600 hover:text-[#06152e]"
  >
    <X size={28} strokeWidth={2.3} />
  </button>

  <h2 className="text-[30px] font-extrabold leading-tight md:text-[34px]">
    Login / Register
  </h2>

  <p className="mt-3 text-[18px] text-slate-500">
    Please enter your Phone Number
  </p>

  <div
    className={`relative mt-10 h-[78px] border px-3 py-2 ${
      showLoginPhoneError
        ? "border-red-500"
        : loginPhone.length > 0
        ? "border-blue-500"
        : "border-slate-200"
    }`}
  >
    <p
      className={`text-[13px] font-bold ${
        showLoginPhoneError ? "text-red-600" : "text-slate-400"
      }`}
    >
      {showLoginPhoneError ? "That looks like an invalid number" : "Phone Number"}
    </p>

    <div className="mt-2 flex items-center">
      <div className="relative border-r border-slate-200 pr-4">
        <button
          type="button"
          onClick={() => setCountryDropdownOpen((prev) => !prev)}
          className="flex items-center gap-2 text-[17px] text-[#06152e]"
        >
          {loginCountryCode}
          <ChevronDown size={15} className="text-slate-400" />
        </button>

        {countryDropdownOpen && (
          <div className="absolute left-[-12px] top-[30px] z-[260] max-h-[250px] w-[88px] overflow-y-auto border border-slate-200 bg-white text-[16px] shadow-lg">
            {countryCodes.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLoginCountryCode(code);
                  setCountryDropdownOpen(false);
                }}
                className={`block w-full px-3 py-2 text-left hover:bg-slate-100 ${
                  loginCountryCode === code
                    ? "bg-slate-600 text-white hover:bg-slate-600"
                    : "text-[#06152e]"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        )}
      </div>

      <input
        autoFocus
        value={loginPhone}
        onChange={(e) => {
          const onlyNumbers = e.target.value.replace(/\D/g, "").slice(0, 10);
          setLoginPhone(onlyNumbers);
          setLoginPhoneTouched(true);
        }}
        onBlur={() => setLoginPhoneTouched(true)}
        className="ml-5 w-full text-[19px] outline-none"
        inputMode="numeric"
      />
    </div>
  </div>

 <button
  type="button"
  disabled={!isValidLoginPhone || authLoading}
  onClick={handleSendOtp}
  className={`mt-24 h-[58px] w-full rounded text-[22px] font-extrabold text-white shadow ${
    isValidLoginPhone
      ? "bg-[#0b84df] hover:bg-[#0878cc]"
      : "cursor-not-allowed bg-[#7dbbeb]"
  }`}
>
  {authLoading ? "Please wait..." : "Continue"}
</button>

  <button
    type="button"
    onClick={() => {
      setLoginStep("email");
      setLoginError(false);
      setCountryDropdownOpen(false);
    }}
    className="mt-4 flex h-[58px] w-full items-center justify-center gap-3 border border-slate-300 text-[19px] font-extrabold text-[#06152e]"
  >
    <span className="text-[22px]">✉️</span>
    Login with Email
  </button>

  <p className="mt-4 text-[13px] text-slate-500">
    By clicking you agree to{" "}
    <button type="button" className="font-bold text-blue-600">
      Terms and Conditions
    </button>
  </p>
</>
      ) : loginStep === "otp" ? (
      <>
        <button
          type="button"
          onClick={() => {
            setLoginModalOpen(false);
            setLoginError(false);
          }}
          className="absolute right-6 top-6 text-slate-600 hover:text-[#06152e]"
        >
          <X size={28} strokeWidth={2.3} />
        </button>

        <h2 className="text-[31px] font-extrabold leading-tight md:text-[36px]">
          Verify your number
        </h2>

        <div className="mt-2 flex items-center gap-3 text-[30px] font-extrabold text-[#06152e] md:text-[34px]">
          <span>
            {loginCountryCode}-{loginPhone}
          </span>

          <button
            type="button"
            onClick={() => setLoginStep("phone")}
            className="text-blue-600"
          >
            ✎
          </button>
        </div>

        <p className="mt-20 text-[20px] font-bold text-[#06152e]">
          Enter your 4 digit OTP
        </p>

        <div className="mt-5 flex gap-6">
          {otpValues.map((value, index) => (
            <input
              key={index}
              value={value}
              onChange={(e) => {
                const digit = e.target.value.replace(/\D/g, "").slice(0, 1);
                setOtpValues((prev) => {
                  const next = [...prev];
                  next[index] = digit;
                  return next;
                });

                if (digit) {
                  const nextInput = document.getElementById(`otp-${index + 1}`);
                  nextInput?.focus();
                }
              }}
              id={`otp-${index}`}
              inputMode="numeric"
              className={`h-[78px] w-[78px] rounded border text-center text-[28px] font-bold outline-none ${
                index === 0
                  ? "border-2 border-[#06152e]"
                  : "border border-slate-200"
              }`}
            />
          ))}
        </div>

        <p className="mt-5 text-[18px] text-slate-500">
          Haven&apos;t received yet?{" "}
          <button type="button" className="font-bold text-blue-600">
            Resend OTP
          </button>
        </p>

       {otpError && (
  <p className="mt-4 text-[15px] font-semibold text-red-600">
    {otpError}
  </p>
)}

<button
  type="button"
  onClick={handleVerifyOtp}
  disabled={authLoading || otpValues.join("").length !== 4}
  className={`mt-8 h-[58px] w-full rounded text-[18px] font-extrabold text-white ${
    otpValues.join("").length === 4
      ? "bg-[#0b84df]"
      : "cursor-not-allowed bg-[#78b9ea]"
  }`}
>
  {authLoading ? "Verifying..." : "Verify & Continue"}
</button>

        <button
          type="button"
          onClick={() => setLoginStep("call")}
          className="mt-5 h-[58px] w-full rounded border border-blue-600 text-[21px] font-extrabold text-blue-600"
        >
          Or, Verify via Missed Call
        </button>
      </>
    ) : loginStep === "call" ? (
      <>
        <button
          type="button"
          onClick={() => {
            setLoginModalOpen(false);
            setLoginError(false);
          }}
          className="absolute right-6 top-6 text-slate-600 hover:text-[#06152e]"
        >
          <X size={28} strokeWidth={2.3} />
        </button>

        <h2 className="text-[31px] font-extrabold leading-tight md:text-[36px]">
          Verify your number
        </h2>

        <div className="mt-2 flex items-center gap-3 text-[30px] font-extrabold text-[#06152e] md:text-[34px]">
          <span>
            {loginCountryCode}-{loginPhone}
          </span>

          <button
            type="button"
            onClick={() => setLoginStep("phone")}
            className="text-blue-600"
          >
            ✎
          </button>
        </div>

        <p className="mt-24 text-[24px] leading-9 text-slate-500">
          By giving a missed call to
          <br />
          <span className="text-[30px] font-bold text-slate-600">
            +91-9870284735
          </span>
        </p>
<div className="mt-16 h-[8px] overflow-hidden rounded-full bg-slate-200">
  <div
    className="h-full rounded-full bg-blue-600 transition-all duration-1000"
    style={{
      width: `${((118 - missedCallSeconds) / 118) * 100}%`,
    }}
  />
</div>

<p className="mt-2 text-[16px] text-slate-500">
  Session expires in <b>{missedCallTimeText} mins</b>
</p>

<button
  type="button"
  onClick={() => setLoginStep("otp")}
  className="mt-7 h-[56px] w-full rounded bg-[#0b84df] text-[18px] font-extrabold text-white"
>
  Cancel
</button>
      </>
    ) : (
      <>
        <div className="mb-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
             setLoginStep("phone");
setLoginError(false);
setLoginPhoneTouched(false);
setCountryDropdownOpen(false);
            }}
            className="text-slate-600 hover:text-[#06152e]"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            onClick={() => {
              setLoginModalOpen(false);
              setLoginError(false);
            }}
            className="text-slate-600 hover:text-[#06152e]"
          >
            <X size={28} strokeWidth={2.3} />
          </button>
        </div>

        <h2 className="text-[28px] font-extrabold leading-tight md:text-[30px]">
          Multiple email ids linked
        </h2>

        <p className="mt-3 text-[17px] leading-6 text-slate-500">
          Your mobile number is linked with multiple email ids.
          <br />
          Please login with the below details.
        </p>

        <div className="mt-1 h-[68px] border border-slate-200 px-3 py-2">
          <p className="text-[12px] font-bold text-slate-400">
            Email Id/Username
          </p>

          <input
            autoFocus
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className="mt-1 w-full text-[17px] outline-none"
          />
        </div>

        <div className="mt-4 flex h-[68px] items-center border border-slate-200 px-3 py-2 focus-within:border-blue-500">
          <div className="flex-1">
            <p className="text-[12px] font-bold text-slate-400">
              Password
            </p>

            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="mt-1 w-full text-[17px] outline-none"
            />
          </div>

          <span className="text-[24px] text-slate-500">◉</span>
        </div>

        <button
          type="button"
          onClick={() =>
            window.open(
              "/forgotPassword/showForm",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="mt-4 block w-full text-right text-[17px] font-extrabold text-blue-600"
        >
          Forgot Password
        </button>

        {loginError && (
          <p className="mt-4 text-[16px] font-semibold leading-5 text-red-600">
            Incorrect Credentials. Kindly Register or Click Forgot
            <br />
            password to reset
          </p>
        )}

        <label className="mt-5 flex items-center gap-2 text-[16px] text-slate-500">
          <span className="flex h-5 w-5 items-center justify-center bg-blue-600 text-[14px] text-white">
            ✓
          </span>
          Get updates via
          <span className="font-bold text-green-600">WhatsApp</span>
        </label>

        <button
          type="button"
          onClick={() => setLoginError(true)}
          className="mt-7 h-[56px] w-full rounded bg-[#0b84df] text-[20px] font-extrabold text-white"
        >
          Continue
        </button>
      </>
    )}
  </div>
)}

{/* ADD THIS CITY CLICK POPUP HERE */}
{cityPopupOpen && (
  <div className="fixed left-1/2 top-[90px] z-[140] max-h-[82vh] w-[94vw] -translate-x-1/2 overflow-y-auto rounded-lg bg-white text-[#06152e] shadow-2xl md:left-[30px] md:top-[130px] md:w-[900px] md:translate-x-0 md:overflow-hidden">
    <div className="px-5 py-6 md:px-10 md:py-9">
      <h2 className="text-[26px] font-extrabold md:text-[34px]">
        Explore real estate in...
      </h2>

   <div className="mt-8 flex items-center gap-7 overflow-x-auto whitespace-nowrap text-[15px] font-semibold text-slate-400 md:gap-11 md:text-[16px]">
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

     <div className="mt-8 flex min-h-[62px] flex-col rounded bg-white shadow-lg md:h-[62px] md:flex-row md:items-center">
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

   <div className="mt-10 flex flex-col gap-5 rounded-b-lg bg-slate-50 px-5 py-5 text-[15px] text-slate-600 md:mt-20 md:flex-row md:items-center md:justify-between md:px-10 md:text-[16px]">
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

      <header className="relative z-[120] flex h-[64px] items-center justify-between px-4 md:h-[72px] md:px-[78px]">
  <div className="flex h-full items-center gap-6">
    <button
      type="button"
      onClick={() => navigate("/")}
     className="whitespace-nowrap text-[28px] font-extrabold leading-none tracking-[-1px] text-white md:text-[34px]"
    >
      99acres
    </button>

    {/* All India */}
    <div
  className="relative hidden h-full md:block"
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

          <div className="relative z-[121] ml-2 flex items-center gap-2 md:ml-4 md:gap-3">
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
  className="relative hidden sm:block"
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
  className="relative block"
  onMouseEnter={() => openMenu("profile")}
  onMouseLeave={closeMenu}
>
  <button
    type="button"
    onClick={() => setActiveMenu(activeMenu === "profile" ? null : "profile")}
    className={`relative flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10 md:h-10 md:w-10 ${
      activeMenu === "profile" ? "bg-white/10" : ""
    }`}
  >
    <UserCircle size={23} />

    <span className="absolute -right-0.5 top-0 h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-[#071026]" />
  </button>

  {activeMenu === "profile" && (
    <>
           <div className="hidden sm:block absolute right-[-72px] top-[40px] z-[130] h-5 w-[288px]" />

         <div
        onMouseEnter={() => openMenu("profile")}
        onMouseLeave={closeMenu}
        className="fixed left-1/2 top-[78px] z-[300] w-[88vw] max-w-[288px] -translate-x-1/2 rounded-xl bg-white px-7 py-6 text-[#06152e] shadow-2xl sm:absolute sm:right-[-72px] sm:left-auto sm:top-[52px] sm:w-[288px] sm:translate-x-0 sm:px-8 sm:py-7"
      >
      <button
  type="button"
  onClick={() => {
    closeMenu();
    setLoginModalOpen(true);
    setLoginStep("phone");
    setLoginError(false);
  }}
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

{loginError && otpError && (
  <p className="mt-3 text-[14px] font-semibold text-red-600">
    {otpError}
  </p>
)}

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
<div className="grid h-[62px] grid-cols-3 items-center overflow-x-auto border-b text-center text-[14px] font-bold text-slate-500 md:h-[76px] md:grid-cols-[1fr_1fr_1.35fr_1.2fr_1.15fr_1fr_185px] md:text-[17px]">
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
  className={`grid h-auto min-w-0 items-center overflow-visible md:h-[58px] ${
    activeSearchTab === "commercial"
      ? "grid-cols-1 md:grid-cols-[120px_200px_minmax(0,1fr)_56px_56px_110px]"
      : activeSearchTab === "projects"
      ? "grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)_56px_110px]"
      : "grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)_56px_56px_110px]"
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
<div className="group relative z-[200] mx-auto hidden h-11 w-11 items-center justify-center overflow-visible md:flex">
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
      className="mx-4 mb-4 rounded-md bg-blue-600 px-5 py-2.5 text-[16px] font-bold text-white shadow hover:bg-blue-700 md:mx-0 md:mr-3 md:mb-0"
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
<section className="relative px-4 pb-10 pt-[120px] md:px-10 md:pb-[150px] md:pt-[26px]">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
    <div className="overflow-hidden rounded-xl bg-slate-100">
      <img
        src={buyHomeImage}
        alt="Modern living room"
       className="h-[260px] w-full object-cover md:h-[430px]"
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

<div className="relative z-[20] mx-auto mt-6 w-full overflow-hidden rounded-xl bg-white shadow-[0_2px_18px_rgba(15,23,42,0.12)] ring-1 ring-blue-100 md:absolute md:left-1/2 md:bottom-[-95px] md:w-[76%] md:max-w-[1080px] md:-translate-x-1/2">
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
     <div className="flex gap-8 overflow-x-auto whitespace-nowrap border-b border-slate-100 text-[14px] text-slate-400 md:gap-12">
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

     <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
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

<div className="relative z-[20] mx-auto mt-6 w-full overflow-hidden rounded-xl bg-white shadow-[0_2px_18px_rgba(15,23,42,0.12)] ring-1 ring-blue-100 md:absolute md:left-1/2 md:bottom-[-95px] md:w-[76%] md:max-w-[1080px] md:-translate-x-1/2">
  <div className="grid grid-cols-1 md:grid-cols-[245px_1fr]">
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
  onClick={() => {
    setSideMenuOpen(false);
    setLoginModalOpen(true);
    setLoginStep("phone");
    setLoginError(false);
  }}
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
     </>
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
 className={`absolute top-[88px] z-[130] hidden w-[980px] grid-cols-[235px_1fr_260px] overflow-hidden rounded-lg bg-white text-[#06152e] shadow-2xl lg:grid ${className}`}
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
 className={`absolute top-[88px] z-[130] hidden h-[380px] w-[1040px] grid-cols-[270px_1fr_285px] overflow-hidden rounded-lg bg-white text-[#06152e] shadow-2xl lg:grid ${className}`}
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