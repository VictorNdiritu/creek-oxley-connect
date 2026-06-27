import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Building, Star, Briefcase, Globe, Users } from "lucide-react";

const LuxoraHotelPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Luxora Hotel located?",
        "acceptedAnswer": { "@type": "Answer", "text": "Luxora Hotel is located in Lodwar, Turkana County, Kenya - a growing economic hub in northern Kenya." }
      },
      {
        "@type": "Question",
        "name": "What services does Creek Oxley provide for Luxora Hotel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Creek Oxley's DMC division manages international marketing, trade show representation, brand promotion, and strategic partnerships for Luxora Hotel." }
      },
      {
        "@type": "Question",
        "name": "How can I contact Luxora Hotel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Contact the Creek Oxley DMC team at +254 110 463 062 or email dmc@creekoxley.com for bookings and partnership enquiries." }
      },
      {
        "@type": "Question",
        "name": "Is Lodwar a good destination for business travel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, Lodwar is an emerging economic centre driven by oil exploration, infrastructure development, and cross-border trade with South Sudan and Ethiopia, making it increasingly important for business travelers." }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Luxora Hotel Lodwar | Creek Oxley DMC Kenya"
        description="Luxora Hotel in Lodwar, Turkana County - a premier hospitality destination in northern Kenya. Managed and promoted internationally by Creek Oxley DMC for business and leisure travelers."
        canonical="https://creekoxley.com/dmc/lodwar"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative">
          <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80&auto=format&fit=crop"
              alt="Luxora Hotel exterior in Lodwar, Turkana County"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto">
                <nav className="text-sm text-white/70 mb-4" aria-label="Breadcrumb">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <Link to="/destination-management" className="hover:text-white transition-colors">DMC</Link>
                  <span className="mx-2">/</span>
                  <span className="text-white">Lodwar</span>
                </nav>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  Luxora Hotel
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span>Lodwar, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">A Premier Destination in Northern Kenya</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Luxora Hotel stands as a premier hospitality destination in Lodwar, the administrative capital of Turkana County. As northern Kenya continues to grow as an economic hub driven by energy exploration, infrastructure projects, and cross-border trade, Luxora Hotel is positioned to serve the increasing demand for quality accommodation in the region.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Managed by Creek Oxley's Destination Management Company (DMC) division, Luxora Hotel benefits from professional hospitality management and international marketing expertise. Our team ensures the property reaches business travelers, NGO workers, government officials, and leisure tourists seeking comfortable, reliable accommodation in Turkana County.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lodwar's strategic position near the borders of South Sudan and Ethiopia makes it a natural gateway for regional commerce. Luxora Hotel serves as the ideal base for professionals working in the growing Turkana economy, offering modern amenities and warm Kenyan hospitality in one of the country's most dynamic frontier regions.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Why Luxora Hotel</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Quality Hospitality</h3>
                  <p className="text-gray-600">Comfortable rooms and modern amenities designed for both business and leisure guests.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Business Ready</h3>
                  <p className="text-gray-600">Conference facilities and connectivity for professionals working in the Turkana region.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Strategic Location</h3>
                  <p className="text-gray-600">Gateway to Turkana's economic opportunities near South Sudan and Ethiopia borders.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Professional Management</h3>
                  <p className="text-gray-600">Managed by Creek Oxley DMC with international hospitality standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DMC Management */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Creek Oxley DMC Partnership</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As part of the Creek Oxley <Link to="/destination-management" className="text-teal-700 hover:underline font-semibold">Destination Management</Link> portfolio, Luxora Hotel receives comprehensive support in international marketing, trade show representation, and brand development. Our team connects the property with tour operators, corporate travel managers, and NGO logistics coordinators across the globe.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our other managed properties including <Link to="/dmc/watamu" className="text-teal-700 hover:underline font-semibold">Kilulu Villa in Watamu</Link>, <Link to="/dmc/samburu" className="text-teal-700 hover:underline font-semibold">Samburu Elephant Lodge</Link>, <Link to="/dmc/nanyuki" className="text-teal-700 hover:underline font-semibold">Warwick Hotel in Nanyuki</Link>, and <Link to="/dmc/nairobi" className="text-teal-700 hover:underline font-semibold">TradeMark Hotel in Nairobi</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Where is Luxora Hotel located?</h3>
                  <p className="text-gray-600">Luxora Hotel is located in Lodwar, Turkana County, Kenya - a growing economic hub in northern Kenya driven by energy exploration and cross-border trade.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">What services does Creek Oxley provide for Luxora Hotel?</h3>
                  <p className="text-gray-600">Creek Oxley's DMC division manages international marketing, trade show representation, brand promotion, and strategic partnerships for Luxora Hotel.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">How can I contact Luxora Hotel?</h3>
                  <p className="text-gray-600">Contact the Creek Oxley DMC team at +254 110 463 062 or email dmc@creekoxley.com for bookings and partnership enquiries.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Is Lodwar a good destination for business travel?</h3>
                  <p className="text-gray-600">Yes, Lodwar is an emerging economic centre driven by oil exploration, infrastructure development, and cross-border trade with South Sudan and Ethiopia, making it increasingly important for business travelers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 mb-6">Interested in Luxora Hotel for business or leisure? Contact the Creek Oxley DMC team today.</p>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Phone className="h-5 w-5 text-teal-700" />
                  <a href="tel:+254110463062" className="text-gray-700 hover:text-teal-700">+254 110 463 062</a>
                </div>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Mail className="h-5 w-5 text-teal-700" />
                  <a href="mailto:dmc@creekoxley.com" className="text-gray-700 hover:text-teal-700">dmc@creekoxley.com</a>
                </div>
                <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                  <Link to="/contact" className="text-white">Contact Creek Oxley</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Footer />
      </div>
    </>
  );
};

export default LuxoraHotelPage;
