
import React from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What consulting services does Creek Oxley offer?",
        "acceptedAnswer": { "@type": "Answer", "text": "Creek Oxley offers management problem resolution, strategy development, business process optimization, people management, management information systems, and marketing consulting services." }
      },
      {
        "@type": "Question",
        "name": "Does Creek Oxley work with businesses outside Kenya?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, Creek Oxley serves businesses across the East African Community including Kenya, Rwanda, Uganda, Tanzania, and beyond." }
      },
      {
        "@type": "Question",
        "name": "How do I engage Creek Oxley for consulting?",
        "acceptedAnswer": { "@type": "Answer", "text": "Contact us at +254 725 276 757 or email info@creekoxley.com. We begin with a discovery consultation to understand your needs before proposing a tailored engagement." }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Business Consulting Services | Creek Oxley Management"
        description="Explore Creek Oxley's consulting services: strategic planning, destination management, smart staffing, business process optimization, and organizational transformation for businesses in East Africa."
        canonical="https://creekoxley.com/services"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              We offer comprehensive consulting solutions to help your business thrive in today's competitive landscape.
            </p>
          </div>
        </div>
        <Services />

        {/* Service Divisions */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-creekoxley">Our Service Divisions</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Beyond core consulting, Creek Oxley operates specialized divisions to serve specific industry needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/destination-management" className="block bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-creekoxley">Destination Management (DMC)</h3>
                  <p className="text-gray-600 mb-4">Our DMC division promotes hospitality businesses on international platforms through exhibition marketing, brand development, and strategic networking at global trade shows.</p>
                  <span className="text-creekoxley font-medium">Learn more →</span>
                </Link>
                <Link to="/smart-staffing" className="block bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-creekoxley">Smart Staffing</h3>
                  <p className="text-gray-600 mb-4">Strategic talent acquisition, contract staffing, workforce analytics, and executive search services designed to build winning teams across East Africa.</p>
                  <span className="text-creekoxley font-medium">Learn more →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-creekoxley">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">What consulting services does Creek Oxley offer?</h3>
                  <p className="text-gray-600">Creek Oxley offers management problem resolution, strategy development, business process optimization, people management, management information systems, and marketing consulting services.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Does Creek Oxley work with businesses outside Kenya?</h3>
                  <p className="text-gray-600">Yes, Creek Oxley serves businesses across the East African Community including Kenya, Rwanda, Uganda, Tanzania, and beyond. Read our article on <Link to="/blog/eac-cross-border-operations" className="text-creekoxley hover:underline">mastering cross-border operations in the EAC</Link>.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">How do I engage Creek Oxley for consulting?</h3>
                  <p className="text-gray-600">Contact us at +254 725 276 757 or email info@creekoxley.com. We begin with a discovery consultation to understand your needs before proposing a tailored engagement. Visit our <Link to="/contact" className="text-creekoxley hover:underline">contact page</Link> to get started.</p>
                </div>
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

export default ServicesPage;
