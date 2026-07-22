import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Building, Briefcase, Globe, Star, Users } from "lucide-react";
import heroImage from "@/assets/trademark-hotel.jpg.asset.json";

const TradeMarkHotelPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is TradeMark Hotel located?",
        "acceptedAnswer": { "@type": "Answer", "text": "TradeMark Hotel is located in Nairobi, Kenya's capital city and the commercial hub of East Africa." }
      },
      {
        "@type": "Question",
        "name": "What type of guests does TradeMark Hotel serve?",
        "acceptedAnswer": { "@type": "Answer", "text": "TradeMark Hotel caters to business travelers, conference attendees, diplomats, corporate clients, and tourists visiting Nairobi for both business and leisure." }
      },
      {
        "@type": "Question",
        "name": "How can I make a reservation at TradeMark Hotel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Contact Creek Oxley DMC at +254 110 463 062 or email dmc@creekoxley.com for reservations, corporate bookings, and event enquiries." }
      },
      {
        "@type": "Question",
        "name": "What does Creek Oxley DMC do for TradeMark Hotel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Creek Oxley's DMC division handles international marketing, trade show representation, tour operator partnerships, and brand management for TradeMark Hotel Nairobi." }
      }
    ]
  };

  return (
    <>
      <SEOHead
        favicon="/dmc-favicon.png"
        title="TradeMark Hotel Nairobi | Creek Oxley DMC Kenya"
        description="TradeMark Hotel in Nairobi - a premier city hospitality experience in Kenya's capital. Managed by Creek Oxley DMC for international business and leisure travelers."
        canonical="https://creekoxley.com/dmc/nairobi"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative">
          <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img
              src={heroImage.url}
              alt="TradeMark Hotel - premier Nairobi city hospitality"
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
                  <span className="text-white">Nairobi</span>
                </nav>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  TradeMark Hotel
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Premier City Hospitality in Nairobi</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TradeMark Hotel is a premier hospitality property in the heart of Nairobi, Kenya's vibrant capital and the commercial gateway to East Africa. As the region's largest economy and a hub for international organizations, Nairobi attracts millions of business travelers, conference attendees, and tourists each year-and TradeMark Hotel is designed to serve them all.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Managed by Creek Oxley's Destination Management Company (DMC) division, TradeMark Hotel benefits from strategic international marketing, trade show visibility, and professional hospitality management. The property serves corporate clients, diplomats, NGO workers, and leisure travelers seeking quality accommodation with excellent connectivity to Nairobi's business districts, conference centres, and tourist attractions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nairobi's position as the "Silicon Savannah" and headquarters for UN agencies, regional banks, and multinational corporations ensures a steady demand for high-quality hospitality. TradeMark Hotel meets this demand with modern amenities, professional service, and the warm Kenyan hospitality that Creek Oxley properties are known for.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Why TradeMark Hotel Nairobi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Business Hub</h3>
                  <p className="text-gray-600">Ideally positioned for corporate travelers with access to Nairobi's key business districts.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">International Gateway</h3>
                  <p className="text-gray-600">Easy access from JKIA, Nairobi's international airport connecting to destinations worldwide.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Modern Amenities</h3>
                  <p className="text-gray-600">Contemporary rooms, conference facilities, and dining for the discerning traveler.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Events & Conferences</h3>
                  <p className="text-gray-600">Flexible spaces for corporate events, product launches, and professional gatherings.</p>
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
                As the flagship urban property in Creek Oxley's <Link to="/destination-management" className="text-teal-700 hover:underline font-semibold">Destination Management</Link> portfolio, TradeMark Hotel receives comprehensive marketing support including global trade show representation, digital campaigns, and corporate travel partnerships. Our <Link to="/services" className="text-teal-700 hover:underline font-semibold">consulting expertise</Link> ensures the property maintains the highest standards of hospitality management.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our other managed properties: <Link to="/dmc/watamu" className="text-teal-700 hover:underline font-semibold">Kilulu Villa in Watamu</Link>, <Link to="/dmc/samburu" className="text-teal-700 hover:underline font-semibold">Samburu Elephant Lodge</Link>, <Link to="/dmc/lodwar" className="text-teal-700 hover:underline font-semibold">Luxora Hotel in Lodwar</Link>, and <Link to="/dmc/nanyuki" className="text-teal-700 hover:underline font-semibold">Warwick Hotel in Nanyuki</Link>.
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
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Where is TradeMark Hotel located?</h3>
                  <p className="text-gray-600">TradeMark Hotel is located in Nairobi, Kenya's capital city and the commercial hub of East Africa.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">What type of guests does TradeMark Hotel serve?</h3>
                  <p className="text-gray-600">TradeMark Hotel caters to business travelers, conference attendees, diplomats, corporate clients, and tourists visiting Nairobi for both business and leisure.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">How can I make a reservation at TradeMark Hotel?</h3>
                  <p className="text-gray-600">Contact Creek Oxley DMC at +254 110 463 062 or email dmc@creekoxley.com for reservations, corporate bookings, and event enquiries.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">What does Creek Oxley DMC do for TradeMark Hotel?</h3>
                  <p className="text-gray-600">Creek Oxley's DMC division handles international marketing, trade show representation, tour operator partnerships, and brand management for TradeMark Hotel Nairobi.</p>
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
              <p className="text-gray-600 mb-6">Interested in TradeMark Hotel for your next Nairobi stay or corporate event? Contact the Creek Oxley DMC team.</p>
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

export default TradeMarkHotelPage;
