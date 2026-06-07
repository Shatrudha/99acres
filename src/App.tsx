import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MobileApps from "./pages/MobileApps";
import Testimonials from "./pages/Testimonials";
import OwnerServices from "./pages/OwnerServices";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import SearchResults from "./pages/SearchResults";
import PropertyDetails from "./pages/PropertyDetails";
import PostProperty from "./pages/PostProperty";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NewLaunch from "./pages/NewLaunch";
import Commercial from "./pages/Commercial";
import PlotsLand from "./pages/PlotsLand";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SavedProperties from "./pages/SavedProperties";
import CompareProperties from "./pages/CompareProperties";
import Agents from "./pages/Agents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobile-apps" element={<MobileApps />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/owner-services" element={<OwnerServices />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/post-property" element={<PostProperty />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/new-launch" element={<NewLaunch />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/plots-land" element={<PlotsLand />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/saved-properties" element={<SavedProperties />} />
      <Route path="/compare" element={<CompareProperties />} />
      <Route path="/agents" element={<Agents />} />
    </Routes>
  );
}

export default App;