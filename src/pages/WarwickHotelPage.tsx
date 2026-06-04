import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Building, Mountain, Compass, Star, Users } from "lucide-react";

const WarwickHotelPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Warwick Hotel located?",
        "acceptedAnswer": { "@type": "Answer", "text": "Warwick Hotel is located in Nanyuki, Laikipia County, Kenya — at the foothills of Mount Kenya, one of Africa's most iconic peaks." }
      },
      {
        "@type": "Question",
        "name": "What makes Nanyuki a popular destination?",
        "acceptedAnswer": { "@type": "Answer", "text": "Nanyuki is a gateway to Mount Kenya, home to the British Army Training Unit Kenya (BATUK), numerous wildlife conservancies, and a thriving tourism and agricultural economy." }
      },
      {
        "@type": "Question",
        "name": "How do I book at Warwick Hotel Nanyuki?",
        "acceptedAnswer": { "@type": "Answer", "text": "Contact Creek Oxley DMC at +254 110 463 062 or email dmc@creekoxley.com for reservations and corporate rates." }
      },
      {
        "@type": "Question",
        "name": "Is Creek Oxley the management company for Warwick Hotel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, Creek Oxley's DMC division provides international marketing, brand management, and hospitality consulting services for Warwick Hotel Nanyuki." }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Warwick Hotel Nanyuki | Creek Oxley DMC Kenya"
        description="Warwick Hotel in Nanyuki, Laikipia County — a distinguished highland hospitality property at the foothills of Mount Kenya. Managed by Creek Oxley DMC for business and leisure travelers."
        canonical="https://creekoxley.com/dmc/nanyuki"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative">
          <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80&auto=format&fit=crop"
              alt="Warwick Hotel grounds in Nanyuki at the foothills of Mount Kenya"
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
                  <span className="text-white">Nanyuki</span>
                </nav>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  Warwick Hotel
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span>Nanyuki, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">A Distinguished Highland Property</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Warwick Hotel is a distinguished hospitality property located in Nanyuki, a vibrant town at the foothills of Mount Kenya in Laikipia County. Known for its temperate climate, stunning highland scenery, and proximity to world-class wildlife conservancies, Nanyuki has become one of Kenya's most sought-after destinations for both business and leisure travelers.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Under the management of Creek Oxley's Destination Management Company (DMC) division, Warwick Hotel is positioned to serve the growing demand for quality accommodation in the Mount Kenya region. The hotel caters to safari enthusiasts, corporate retreat groups, military personnel stationed at nearby BATUK, and travelers exploring the stunning Laikipia plateau.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nanyuki's strategic location along the Nairobi-Isiolo highway makes it easily accessible while offering the tranquility and natural beauty that urban Kenya cannot match. Warwick Hotel provides the perfect base for exploring this remarkable region.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Why Warwick Hotel Nanyuki</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mount Kenya Views</h3>
                  <p className="text-gray-600">Set against the majestic backdrop of Africa's second-highest peak.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Compass className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Safari Gateway</h3>
                  <p className="text-gray-600">Easy access to Ol Pejeta Conservancy, Lewa Downs, and Mount Kenya National Park.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Highland Comfort</h3>
                  <p className="text-gray-600">Enjoy the cool climate and serene atmosphere of Laikipia County.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Corporate & Groups</h3>
                  <p className="text-gray-600">Ideal for corporate retreats, team-building events, and group travel.</p>
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
                Creek Oxley's <Link to="/destination-management" className="text-teal-700 hover:underline font-semibold">DMC division</Link> provides Warwick Hotel with international visibility through trade show representation, digital marketing campaigns, and tour operator partnerships. Our proven approach to hospitality brand management ensures the property reaches the right audiences worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover our full portfolio of managed properties: <Link to="/dmc/watamu" className="text-teal-700 hover:underline font-semibold">Kilulu Villa in Watamu</Link>, <Link to="/dmc/samburu" className="text-teal-700 hover:underline font-semibold">Samburu Elephant Lodge</Link>, <Link to="/dmc/lodwar" className="text-teal-700 hover:underline font-semibold">Luxora Hotel in Lodwar</Link>, and <Link to="/dmc/nairobi" className="text-teal-700 hover:underline font-semibold">TradeMark Hotel in Nairobi</Link>.
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
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Where is Warwick Hotel located?</h3>
                  <p className="text-gray-600">Warwick Hotel is located in Nanyuki, Laikipia County, Kenya — at the foothills of Mount Kenya, one of Africa's most iconic peaks.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">What makes Nanyuki a popular destination?</h3>
                  <p className="text-gray-600">Nanyuki is a gateway to Mount Kenya, home to the British Army Training Unit Kenya (BATUK), numerous wildlife conservancies, and a thriving tourism and agricultural economy.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">How do I book at Warwick Hotel Nanyuki?</h3>
                  <p className="text-gray-600">Contact Creek Oxley DMC at +254 110 463 062 or email dmc@creekoxley.com for reservations and corporate rates.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Is Creek Oxley the management company for Warwick Hotel?</h3>
                  <p className="text-gray-600">Yes, Creek Oxley's DMC division provides international marketing, brand management, and hospitality consulting services for Warwick Hotel Nanyuki.</p>
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
              <p className="text-gray-600 mb-6">Planning a visit to Nanyuki or seeking a corporate retreat venue? Contact the Creek Oxley DMC team.</p>
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

export default WarwickHotelPage;
