import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Phone, Wifi, Clock, Globe, Waves, TreePine, Palette } from "lucide-react";

// Import all villa images
import imgSitting from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.30.jpeg";
import imgLivingWide from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.30 (1).jpeg";
import imgLivingAngle from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.30 (2).jpeg";
import imgBarLounge from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.30 (3).jpeg";
import imgHallway from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.31.jpeg";
import imgEntrance from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.31 (1).jpeg";
import imgFrontPorch from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.31 (2).jpeg";
import imgBedroom1 from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.31 (3).jpeg";
import imgBedroom2 from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.31 (4).jpeg";
import imgBedroom3 from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.32.jpeg";
import imgBedroom4 from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.32 (1).jpeg";
import imgBar from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.32 (2).jpeg";
import imgPool from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.32 (3).jpeg";
import imgGuestRoom from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.32 (4).jpeg";
import imgKitchen from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.33.jpeg";
import imgBeach from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.33 (1).jpeg";
import imgOceanView from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.33 (2).jpeg";
import imgGate from "@/assets/new dmc watamu images/WhatsApp Image 2026-02-14 at 18.41.33 (3).jpeg";

const WatamuVillaPage = () => {
  const galleryImages = [
    { src: imgPool, alt: "Swimming pool overlooking the Indian Ocean at Kilulu Villa" },
    { src: imgBeach, alt: "Pristine white sandy beach near Kilulu Villa, Watamu" },
    { src: imgOceanView, alt: "Ocean pathway view from Kilulu Villa gardens" },
    { src: imgLivingWide, alt: "Spacious living room with arched doorways and marble floors" },
    { src: imgLivingAngle, alt: "Living area with elegant safari-print furnishings" },
    { src: imgBarLounge, alt: "Lounge area with wooden bar and high ceilings" },
    { src: imgBar, alt: "Handcrafted wooden bar counter at Kilulu Villa" },
    { src: imgBedroom2, alt: "Master suite with four-poster canopy bed" },
    { src: imgBedroom1, alt: "Elegant bedroom with canopy bed and seating area" },
    { src: imgBedroom3, alt: "Bedroom suite with zebra-print rug and vanity" },
    { src: imgBedroom4, alt: "Second master bedroom with four-poster bed" },
    { src: imgGuestRoom, alt: "Guest room with twin beds and lounge seating" },
    { src: imgHallway, alt: "Marble-floored hallway with arched architecture" },
    { src: imgEntrance, alt: "Villa entrance corridor with African art decor" },
    { src: imgFrontPorch, alt: "Grand front porch with lion statues and Swahili door" },
    { src: imgGate, alt: "Private gated entrance to Kilulu Villa" },
    { src: imgKitchen, alt: "Fully equipped kitchen with professional gas range" },
    { src: imgSitting, alt: "Intimate sitting area with vintage furnishings" },
  ];

  return (
    <>
      <SEOHead
        title="Kilulu Luxury Island Villa, Watamu | Creek Oxley DMC"
        description="Experience Kilulu Luxury Island Villa — a 372 m² coastal retreat in Watamu. 4 bedrooms, private pool, beach access. Managed by Creek Oxley DMC."
        canonical="https://creekoxley.com/dmc/watamu"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative">
          <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img
              src={imgPool}
              alt="Kilulu Luxury Island Villa swimming pool with ocean view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto">
                <nav className="text-sm text-white/70 mb-4">
                  <Link to="/destination-management" className="hover:text-white transition-colors">DMC</Link>
                  <span className="mx-2">/</span>
                  <span className="text-white">Watamu</span>
                </nav>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  Kilulu Luxury Island Villa
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                  Where Hospitality Meets Paradise
                </p>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                   <MapPin className="h-5 w-5" />
                   <span>Watamu, Kilifi County, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                 Experience the ultimate coastal retreat at Kilulu Luxury Island Villa, a rare treasure nestled in 
                Watamu. This 372 m² luxury sanctuary offers exclusive privacy for those seeking 
                tranquility, stillness, and a deep connection with nature.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="h-6 w-6 text-teal-700 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">4 Bedrooms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="h-6 w-6 text-creekoxley mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">5 Bathrooms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-creekoxley mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">372 m²</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Wifi className="h-6 w-6 text-creekoxley mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Free WiFi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Accommodation */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">The Accommodation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Designed for families, groups, and solo travelers alike, the villa provides a spacious and opulent "home away from home".
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-creekoxley">Sleeping Arrangements</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-gray-900">Master Suites:</span> Three bedrooms with large double beds
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-gray-900">Guest Room:</span> One bedroom with two single beds
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-gray-900">Flexibility:</span> Extra-long beds, sofa beds, and fold-up beds available
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-creekoxley">Living Features</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>High-end interiors with tile and marble floors</li>
                    <li>Soundproofed rooms for ultimate comfort</li>
                    <li>Private entrances to select suites</li>
                    <li>Handcrafted Swahili-style wooden furnishings</li>
                  </ul>
                </div>
              </div>

              {/* Bedroom gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src={imgBedroom2} alt="Master suite with four-poster canopy bed" className="rounded-lg w-full h-48 object-cover" loading="lazy" />
                <img src={imgBedroom3} alt="Bedroom suite with zebra-print rug" className="rounded-lg w-full h-48 object-cover" loading="lazy" />
                <img src={imgGuestRoom} alt="Guest room with twin beds" className="rounded-lg w-full h-48 object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Amenities & Wellness */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Exceptional Amenities & Wellness</h2>
              <p className="text-lg text-gray-600 mb-8">
                Indulge in a curated experience where every detail is designed for your comfort.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Pool & Beach</h3>
                  <p className="text-gray-600">Outdoor swimming pool with ocean view, sun loungers, and a private beach area.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Signature Wellness</h3>
                  <p className="text-gray-600">Full-body, couples, and specialized massage packages.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Fitness</h3>
                  <p className="text-gray-600">On-site yoga and fitness classes.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Dining & Bar</h3>
                  <p className="text-gray-600">Bar, room service, and breakfast options from Continental to Full English/Irish.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img src={imgPool} alt="Swimming pool overlooking the Indian Ocean" className="rounded-lg w-full h-56 object-cover" loading="lazy" />
                <img src={imgBar} alt="Handcrafted wooden bar" className="rounded-lg w-full h-56 object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Prime Watamu Location</h2>
              <p className="text-lg text-gray-600 mb-8">
                Located in the vibrant heart of Kilifi County, the villa is perfectly positioned for both relaxation and adventure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold mb-2 text-gray-900">Nearby Beaches</h3>
                  <p className="text-gray-600">5 m from Mapango Beach, 40 m from Turtle Bay Beach</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold mb-2 text-gray-900">Local Attractions</h3>
                  <p className="text-gray-600">Gedi Ruins (7 km), Arabuko Sokoke National Park (18 km)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold mb-2 text-gray-900">Easy Access</h3>
                  <p className="text-gray-600">Only 20 km from Malindi Airport</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img src={imgBeach} alt="White sandy beach near Kilulu Villa" className="rounded-lg w-full h-56 object-cover" loading="lazy" />
                <img src={imgOceanView} alt="Ocean view from villa gardens" className="rounded-lg w-full h-56 object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Unforgettable Activities</h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover the magic of the African coast with our bespoke activity offerings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-14 w-14 bg-creekoxley/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Waves className="h-7 w-7 text-creekoxley" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Marine Adventure</h3>
                  <p className="text-gray-600">Dolphin watching, snorkeling, scuba diving, and kite surfing</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-creekoxley/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="h-7 w-7 text-creekoxley" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Nature Exploration</h3>
                  <p className="text-gray-600">Boat trips through Mida Creek mangroves and game drives</p>
                </div>
                <div className="text-center">
                  <div className="h-14 w-14 bg-creekoxley/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-7 w-7 text-creekoxley" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Culture</h3>
                  <p className="text-gray-600">Local culture tours, walking tours, and temporary art galleries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guest Information */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Guest Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-creekoxley mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Check-in / Check-out</h3>
                    <p className="text-gray-600">Check-in: 09:00 – 12:00 | Check-out: 10:00 – 12:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Wifi className="h-6 w-6 text-creekoxley mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Connectivity</h3>
                    <p className="text-gray-600">Free high-speed WiFi throughout the property</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-creekoxley mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Languages</h3>
                    <p className="text-gray-600">English, Italian, and German</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-creekoxley mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quiet Hours</h3>
                    <p className="text-gray-600">22:00 to 08:00 for your serenity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg aspect-square">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Book Your Stay</h2>
              <p className="text-lg text-gray-600 mb-8">
                For reservations and inquiries, contact Creek Oxley's Destination Management team.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center gap-2 mb-4">
                   <Phone className="h-5 w-5 text-teal-700" />
                   <a href="tel:+254110463062" className="text-lg font-semibold text-gray-900 hover:text-teal-700 transition-colors">
                     +254 110 463 062
                   </a>
                 </div>
                 <p className="text-gray-600 mb-6">Email: dmc@creekoxley.com</p>
                <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-6 text-lg">
                  <Link to="/contact" className="text-white">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WatamuVillaPage;
