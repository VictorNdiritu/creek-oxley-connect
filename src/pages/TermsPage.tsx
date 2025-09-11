import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Creek Oxley | Business Consulting Terms</title>
        <meta name="description" content="Read Creek Oxley's terms of service covering our business consulting services, user responsibilities, and legal agreements for our management solutions." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://creekoxley.com/terms" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Terms of Service - Creek Oxley" />
        <meta property="og:description" content="Read Creek Oxley's terms of service covering our business consulting services and legal agreements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creekoxley.com/terms" />
        <meta property="og:image" content="https://creekoxley.com/creek-oxley-logo.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - Creek Oxley" />
        <meta name="twitter:description" content="Read Creek Oxley's terms of service covering our business consulting services and legal agreements." />
        <meta name="twitter:image" content="https://creekoxley.com/creek-oxley-logo.png" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-xl text-gray-600">
                Effective Date: September 11, 2025
              </p>
            </header>

            <article className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using Creek Oxley's services, you accept and agree to be bound by the terms and 
                  provision of this agreement. These Terms of Service apply to all users of our consulting services, 
                  website, and related offerings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Services Description</h2>
                <p className="mb-4">
                  Creek Oxley provides business consulting services including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Strategic business planning and management consulting</li>
                  <li>Destination management services through our specialized division</li>
                  <li>Smart staffing solutions and human resource consulting</li>
                  <li>Business structure advisory and implementation</li>
                  <li>Crisis management and turnaround strategies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                <p className="mb-4">
                  When engaging our services, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide accurate and complete information as required</li>
                  <li>Cooperate in good faith with our consulting recommendations</li>
                  <li>Respect intellectual property rights of Creek Oxley</li>
                  <li>Pay agreed-upon fees in a timely manner</li>
                  <li>Maintain confidentiality of proprietary methodologies shared</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="mb-4">
                  All content, methodologies, frameworks, and materials developed by Creek Oxley remain our intellectual 
                  property. Clients receive limited rights to use consulting deliverables for their internal business 
                  purposes only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
                <p className="mb-4">
                  We maintain strict confidentiality regarding all client information and business matters. Similarly, 
                  clients agree to maintain confidentiality regarding Creek Oxley's proprietary consulting methodologies 
                  and business practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  While we strive to provide excellent consulting services, Creek Oxley's liability is limited to the 
                  fees paid for our services. We are not liable for indirect, consequential, or incidental damages 
                  arising from our consulting engagement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                <p className="mb-4">
                  Payment terms are established in individual consulting agreements. Generally, payments are due within 
                  30 days of invoice date. Late payments may incur additional fees as specified in your service agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <p className="mb-4">
                  Either party may terminate consulting engagements with appropriate notice as specified in the service 
                  agreement. Termination does not relieve obligations for work completed or confidentiality commitments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="mb-4">
                  These terms are governed by the laws of Kenya. Any disputes will be resolved through arbitration 
                  in Nairobi, Kenya, following established commercial arbitration procedures.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="mb-4">
                  For questions regarding these Terms of Service, please contact us at:
                </p>
                <p className="mb-2">Email: legal@creekoxley.com</p>
                <p className="mb-2">Phone: +254 20 2100688</p>
                <p className="mb-2">Address: Nairobi, Kenya</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="mb-4">
                  Creek Oxley reserves the right to modify these terms at any time. Changes will be effective when 
                  posted on our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;