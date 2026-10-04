import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, CheckCircle, Target, Eye, Settings, Handshake } from "lucide-react";
import warwickHeroImage from "@/assets/warwick-hotel.jpg.asset.json";

const WarwickHotelPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Warwick Hotel located?",
        "acceptedAnswer": { "@type": "Answer", "text": "Warwick Hotel is located in Nanyuki, Laikipia County, Kenya, at the foothills of Mount Kenya." }
      },
      {
        "@type": "Question",
        "name": "What makes Nanyuki a popular destination?",
        "acceptedAnswer": { "@type": "Answer", "text": "Nanyuki is a gateway to Mount Kenya, home to the British Army Training Unit Kenya (BATUK), numerous wildlife conservancies, and a thriving tourism and agricultural economy." }
      },
      {
        "@type": "Question",
        "name": "What work did Creek Oxley complete at Warwick Hotel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Creek Oxley completed a successful hospitality turnaround engagement at Warwick Hotel, supporting stronger operations, market positioning and property performance." }
      },
      {
        "@type": "Question",
        "name": "Does Creek Oxley currently manage Warwick Hotel?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Creek Oxley's management engagement ended after the successful completion of the Warwick Hotel turnaround. The property is presented here as a past project and success story." }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Warwick Hotel Turnaround Success Story | Creek Oxley"
        description="See how Creek Oxley completed a successful turnaround engagement at Warwick Hotel Nanyuki, strengthening operations, positioning and property performance."
        canonical="https://creekoxley.com/dmc/nanyuki"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative">
          <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img
              src={warwickHeroImage}
              alt="Warwick Hotel exterior with swimming pool in Nanyuki"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/70" />

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
                  Warwick Hotel Turnaround
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span>Past Project / Nanyuki, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <p className="eyebrow mb-4">Past Project / Success Story</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">A successful hospitality turnaround</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Warwick Hotel is a distinguished hospitality property located in Nanyuki, a vibrant town at the foothills of Mount Kenya in Laikipia County. Known for its temperate climate, stunning highland scenery, and proximity to world-class wildlife conservancies, Nanyuki has become one of Kenya's most sought-after destinations for both business and leisure travelers.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Creek Oxley was engaged to support a turnaround at Warwick Hotel. The work focused on strengthening the property's operating foundations, sharpening its market position and helping the business move toward more sustainable performance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The engagement was completed successfully, and Creek Oxley no longer manages Warwick Hotel. We retain this page as a record of our past work and the practical turnaround experience we bring to underperforming hospitality properties.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Turnaround priorities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Property Positioning</h3>
                  <p className="text-gray-600">Clarifying the hotel's place in the Nanyuki hospitality market.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Market Visibility</h3>
                  <p className="text-gray-600">Strengthening how the property reached relevant business and leisure guests.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Operating Discipline</h3>
                  <p className="text-gray-600">Supporting clearer systems and more consistent day-to-day execution.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sustainable Handover</h3>
                  <p className="text-gray-600">Completing the engagement after a successful turnaround and transition.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Completed engagement */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The engagement is complete</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Creek Oxley's work with Warwick Hotel concluded after the successful turnaround. We do not currently manage or represent the property, and booking enquiries should be directed to Warwick Hotel itself.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                If your hotel, lodge or resort is underperforming, explore our <Link to="/hotel-turnaround" className="text-teal-700 hover:underline font-semibold">hotel turnaround service</Link> or request a confidential property assessment.
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
                  <p className="text-gray-600">Warwick Hotel is located in Nanyuki, Laikipia County, Kenya, at the foothills of Mount Kenya.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">What makes Nanyuki a popular destination?</h3>
                  <p className="text-gray-600">Nanyuki is a gateway to Mount Kenya, home to the British Army Training Unit Kenya (BATUK), numerous wildlife conservancies, and a thriving tourism and agricultural economy.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">What work did Creek Oxley complete at Warwick Hotel?</h3>
                  <p className="text-gray-600">Creek Oxley completed a successful turnaround engagement focused on operations, positioning and property performance.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Does Creek Oxley currently manage Warwick Hotel?</h3>
                  <p className="text-gray-600">No. Creek Oxley's management engagement ended after the successful completion of the turnaround.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Owner CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Is your property underperforming?</h2>
              <p className="text-gray-600 mb-6">Talk to Creek Oxley about a confidential property assessment and practical turnaround plan.</p>
              <div className="bg-gray-50 p-8 rounded-lg">
                <CheckCircle className="h-8 w-8 text-teal-700 mx-auto mb-4" />
                <Link to="/hotel-turnaround" className="btn-primary gap-2">
                  Explore Hotel Turnaround <ArrowRight className="h-4 w-4" />
                </Link>
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
