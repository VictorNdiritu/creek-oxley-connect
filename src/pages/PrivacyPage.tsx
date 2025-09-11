import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Creek Oxley | Business Consulting & Management</title>
        <meta name="description" content="Read our privacy policy to understand how Creek Oxley collects, uses, and protects your personal information. We are committed to your privacy and data security." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://creekoxley.com/privacy" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Privacy Policy - Creek Oxley" />
        <meta property="og:description" content="Read our privacy policy to understand how Creek Oxley collects, uses, and protects your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creekoxley.com/privacy" />
        <meta property="og:image" content="https://creekoxley.com/creek-oxley-logo.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Creek Oxley" />
        <meta name="twitter:description" content="Read our privacy policy to understand how Creek Oxley collects, uses, and protects your personal information." />
        <meta name="twitter:image" content="https://creekoxley.com/creek-oxley-logo.png" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600">
                Effective Date: September 11, 2025
              </p>
            </header>

            <article className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="mb-4">
                  At Creek Oxley, we collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, company 
                  information, and any other information you choose to provide.
                </p>
                <p className="mb-4">
                  We also automatically collect certain information about your device and usage of our website, 
                  including your IP address, browser type, operating system, referral URLs, and pages viewed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your 
                  consent, except as described in this policy. We may share your information with trusted service 
                  providers who assist us in operating our website and conducting our business.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized 
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                  or electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="mb-4">
                  You have the right to access, update, or delete your personal information. You may also opt out of 
                  certain communications from us. To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mb-2">Email: info@creekoxley.com</p>
                <p className="mb-2">Phone: +254 20 2100688</p>
                <p className="mb-2">Address: Nairobi, Kenya</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the effective date.
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

export default PrivacyPage;