import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Creek Oxley"
        description="The page you're looking for doesn't exist. Return to Creek Oxley's homepage or explore our services, blog, and destination management pages."
        noIndex={true}
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-creekoxley mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved. Let us help you find what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/" className="bg-creekoxley hover:bg-creekoxley-medium text-white px-6 py-3 rounded-md font-medium transition-colors">
                Return to Homepage
              </Link>
              <Link to="/contact" className="border border-creekoxley text-creekoxley hover:bg-creekoxley/5 px-6 py-3 rounded-md font-medium transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="text-left bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Popular Pages</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="text-creekoxley hover:underline">About Creek Oxley</Link></li>
                <li><Link to="/services" className="text-creekoxley hover:underline">Our Services</Link></li>
                <li><Link to="/destination-management" className="text-creekoxley hover:underline">Destination Management</Link></li>
                <li><Link to="/smart-staffing" className="text-creekoxley hover:underline">Smart Staffing</Link></li>
                <li><Link to="/blog" className="text-creekoxley hover:underline">Blog & Insights</Link></li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
