import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, TreePine, Shield, Users, Compass, Star } from "lucide-react";

import imgRibbonCutting from "@/assets/samburu-ribbon-cutting.jpg";
import imgSignage from "@/assets/samburu-signage.jpg";
import imgTreePlanting from "@/assets/samburu-tree-planting.jpg";

const SamburuLodgeDmcPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Samburu Elephant Lodge located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Samburu Elephant Lodge is located in Samburu County, Kenya, within one of the most iconic wildlife regions in East Africa."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Samburu Elephant Lodge unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The lodge combines luxury eco-tourism with active conservation, offering guests an authentic wildlife experience while supporting elephant preservation and community development initiatives."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a stay at Samburu Elephant Lodge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact the Creek Oxley DMC team at +254 110 463 062 or email dmc@creekoxley.com for bookings, group rates, and partnership enquiries."
        }
      },
      {
        "@type": "Question",
        "name": "Does Creek Oxley manage Samburu Elephant Lodge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Creek Oxley's Destination Management Company (DMC) division manages and promotes Samburu Elephant Lodge on international hospitality platforms."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        favicon="/dmc-favicon.png"
        title="Samburu Elephant Lodge | Creek Oxley DMC Kenya"
        description="Samburu Elephant Lodge - an exclusive eco-tourism wildlife lodge in Samburu, Kenya. Luxury accommodation, conservation, and authentic safari experiences managed by Creek Oxley DMC."
        canonical="https://creekoxley.com/dmc/samburu"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative">
          <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img
              src={imgRibbonCutting}
              alt="Samburu Elephant Lodge opening ceremony in Samburu County, Kenya"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto">
                <nav className="text-sm text-white/70 mb-4" aria-label="Breadcrumb">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <Link to="/destination-management" className="hover:text-white transition-colors">DMC</Link>
                  <span className="mx-2">/</span>
                  <span className="text-white">Samburu</span>
                </nav>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  Samburu Elephant Lodge
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span>Samburu, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">An Exclusive Wildlife Experience</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Samburu Elephant Lodge is an exclusive wildlife lodge nestled in the heart of Samburu County, one of Kenya's most celebrated safari destinations. The lodge offers guests a rare opportunity to immerse themselves in the untamed beauty of northern Kenya while enjoying world-class hospitality and comfort.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Managed by Creek Oxley's Destination Management Company (DMC) division, Samburu Elephant Lodge represents the perfect blend of luxury eco-tourism, community engagement, and wildlife conservation. The property was developed with a strong commitment to environmental stewardship, ensuring that tourism directly benefits the local Samburu community and the region's diverse ecosystem.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From game drives across expansive savannahs to cultural encounters with the Samburu people, every experience at the lodge is designed to create lasting memories while supporting sustainable tourism practices in East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Why Samburu Elephant Lodge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Eco-Tourism</h3>
                  <p className="text-gray-600">Built with sustainability at its core, minimizing environmental impact while maximizing guest experience.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Conservation</h3>
                  <p className="text-gray-600">Active elephant and wildlife conservation programs that guests can participate in during their stay.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Community</h3>
                  <p className="text-gray-600">Partnerships with the local Samburu community ensure tourism benefits reach those who need it most.</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Compass className="h-7 w-7 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Safari Excellence</h3>
                  <p className="text-gray-600">Expert-guided game drives and bush walks through one of Kenya's most biodiverse regions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DMC Management */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Managed by Creek Oxley DMC</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Creek Oxley's DMC division brings professional hospitality management expertise to Samburu Elephant Lodge. Our team handles international marketing and promotion, ensuring the lodge reaches discerning travelers worldwide through global exhibitions, trade shows, and strategic digital campaigns.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As part of our <Link to="/destination-management" className="text-teal-700 hover:underline font-semibold">Destination Management</Link> portfolio, we provide end-to-end support including brand positioning, tour operator partnerships, and promotional material development. Our goal is to elevate Samburu Elephant Lodge as a must-visit destination for international travelers seeking authentic Kenyan safari experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Learn more about our consulting approach on our <Link to="/services" className="text-teal-700 hover:underline font-semibold">services page</Link>, or explore our <Link to="/blog" className="text-teal-700 hover:underline font-semibold">latest industry insights</Link> on hospitality management in Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <img src={imgRibbonCutting} alt="Samburu Elephant Lodge ribbon cutting ceremony" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
              <img src={imgSignage} alt="Samburu Elephant Lodge signage at the entrance" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
              <img src={imgTreePlanting} alt="Tree planting ceremony at Samburu Elephant Lodge for conservation" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Where is Samburu Elephant Lodge located?</h3>
                  <p className="text-gray-600">Samburu Elephant Lodge is located in Samburu County, Kenya, within one of the most iconic wildlife regions in East Africa known for its unique species and stunning landscapes.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">What makes Samburu Elephant Lodge unique?</h3>
                  <p className="text-gray-600">The lodge combines luxury eco-tourism with active conservation, offering guests an authentic wildlife experience while supporting elephant preservation and community development initiatives in Samburu County.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">How do I book a stay at Samburu Elephant Lodge?</h3>
                  <p className="text-gray-600">Contact the Creek Oxley DMC team at +254 110 463 062 or email dmc@creekoxley.com for bookings, group rates, and partnership enquiries.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Does Creek Oxley manage Samburu Elephant Lodge?</h3>
                  <p className="text-gray-600">Yes, Creek Oxley's Destination Management Company (DMC) division manages and promotes Samburu Elephant Lodge on international hospitality platforms, handling marketing, trade show representation, and brand positioning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 mb-6">Interested in visiting Samburu Elephant Lodge or partnering with us? Reach out to the Creek Oxley DMC team.</p>
              <div className="bg-white p-8 rounded-lg shadow-sm">
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

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <Footer />
      </div>
    </>
  );
};

export default SamburuLodgeDmcPage;
