import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvdpzqz";

const inputClass =
  "w-full px-4 py-3 border border-silver bg-white text-sm text-ink placeholder:text-silver focus:outline-none focus:border-creekoxley transition-colors";
const labelClass =
  "block text-xs uppercase tracking-[0.12em] font-medium text-ink/70 mb-2";
const sectionTitle = "font-display text-3xl text-creekoxley mb-1";
const sectionSub = "text-sm text-ink/60 mb-6";

const RadioYesNo = ({ name }: { name: string }) => (
  <div className="flex gap-6">
    {["Yes", "No"].map((v) => (
      <label
        key={v}
        className="flex items-center gap-2 text-sm text-ink cursor-pointer"
      >
        <input
          type="radio"
          name={name}
          value={v}
          className="accent-creekoxley"
        />
        {v}
      </label>
    ))}
  </div>
);

const PreCheckInPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      if (response.ok && !data.errors) {
        setSuccess(true);
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <SEOHead
        favicon="/dmc-favicon.png"
        title="Student Pre-Check-In | Creek Oxley DMC"
        description="Complete your student trip pre-check-in with Creek Oxley Destination Management. Share your dietary needs, medical requirements and media consent for a safe and seamless trip."
        canonical="https://creekoxley.com/dmc/pre-check-in"
      />
      <div className="min-h-screen bg-bone">
        <Navbar />

        {/* Header */}
        <section className="border-b border-silver/40 bg-white">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lavender mb-4">
              Destination Management / Creek Oxley
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-creekoxley leading-tight mb-6">
              Student Pre-Check-In
            </h1>
            <p className="text-ink/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Help us prepare for your student trip. Share your dietary needs,
              medical requirements and media consent so our team can plan a safe
              and enjoyable experience.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            {success ? (
              <div className="bg-white border border-silver/60 p-10 md:p-14 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-lavender mb-4">
                  Received
                </p>
                <h2 className="font-display text-3xl text-creekoxley mb-4">
                  Pre-Check-In Received
                </h2>
                <p className="text-ink/70 mb-8 leading-relaxed">
                  Thank you. Our destination team has received your details and
                  will reach out if anything further is needed before departure.
                </p>
                <Link
                  to="/dmc"
                  className="inline-block bg-creekoxley border border-creekoxley px-6 py-3 text-sm uppercase tracking-[0.15em] text-white hover:bg-ink hover:border-ink transition-colors"
                >
                  Back to DMC
                </Link>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-12 bg-white border border-silver/60 p-6 md:p-12"
              >
                {/* Honeypot for spam */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Student Pre-Check-In / Creek Oxley DMC"
                />

                {/* Basic Information */}
                <div>
                  <h2 className={sectionTitle}>Basic Information</h2>
                  <p className={sectionSub}>
                    So we can match you to your trip reservation.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        name="fullName"
                        type="text"
                        required
                        maxLength={120}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Contact Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        maxLength={30}
                        placeholder="+254 700 000 000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        maxLength={255}
                        placeholder="your.email@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Trip / Destination</label>
                      <select
                        name="property"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select trip
                        </option>
                        <option value="Kilulu Villa, Watamu">
                          Kilulu Villa, Watamu
                        </option>
                        <option value="Samburu Elephant Lodge, Samburu">
                          Samburu Elephant Lodge, Samburu
                        </option>
                        <option value="Luxora Hotel, Lodwar">
                          Luxora Hotel, Lodwar
                        </option>
                        <option value="Warwick Hotel, Nanyuki">
                          Warwick Hotel, Nanyuki
                        </option>
                        <option value="TradeMark Hotel, Nairobi">
                          TradeMark Hotel, Nairobi
                        </option>
                        <option value="Other / Not sure">
                          Other / Not sure
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Medical Requirements */}
                <div>
                  <h2 className={sectionTitle}>Medical Requirements</h2>
                  <p className={sectionSub}>
                    Help us keep every student safe and supported during the trip.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <label className={labelClass}>
                        Any medical conditions, allergies or medication we should know about?
                      </label>
                      <RadioYesNo name="medicalConcerns" />
                      <textarea
                        name="medicalDetails"
                        rows={3}
                        maxLength={800}
                        placeholder="If yes, please provide details (condition, medication, emergency contact if different from above)"
                        className={`${inputClass} mt-3 resize-none`}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Any mobility or accessibility needs?
                      </label>
                      <RadioYesNo name="accessibility" />
                      <input
                        name="accessibilityDetails"
                        type="text"
                        maxLength={300}
                        placeholder="If yes, please specify"
                        className={`${inputClass} mt-3`}
                      />
                    </div>
                  </div>
                </div>

                {/* Dietary Requirements */}
                <div>
                  <h2 className={sectionTitle}>Dietary Requirements</h2>
                  <p className={sectionSub}>
                    So the kitchen and trip organisers can prepare appropriately.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <label className={labelClass}>Food allergies?</label>
                      <RadioYesNo name="foodAllergies" />
                      <input
                        name="foodAllergyDetails"
                        type="text"
                        maxLength={300}
                        placeholder="If yes, please specify"
                        className={`${inputClass} mt-3`}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Dietary preferences (select all that apply)
                      </label>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {["Vegetarian", "Vegan", "Halal", "Gluten-Free"].map(
                          (v) => (
                            <label
                              key={v}
                              className="flex items-center gap-2 text-sm text-ink cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                name="dietary"
                                value={v}
                                className="accent-creekoxley"
                              />
                              {v}
                            </label>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Other dietary requirements
                      </label>
                      <input
                        name="dietaryOther"
                        type="text"
                        maxLength={300}
                        placeholder="e.g. lactose intolerant, nut allergy, religious restrictions"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Media Consent */}
                <div>
                  <h2 className={sectionTitle}>Photo & Video Consent</h2>
                  <p className={sectionSub}>
                    Our team and partner properties occasionally capture photos and video during trips for marketing, social media and editorial use.
                  </p>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 text-sm text-ink cursor-pointer">
                      <input
                        type="checkbox"
                        name="mediaConsent"
                        value="Yes"
                        className="accent-creekoxley mt-1"
                      />
                      <span>
                        I consent to Creek Oxley and its partner properties collecting and using photos and video featuring me for promotional, marketing and editorial purposes across websites, print and social media.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 text-sm text-ink cursor-pointer">
                      <input
                        type="checkbox"
                        name="mediaConsentDecline"
                        value="Yes"
                        className="accent-creekoxley mt-1"
                      />
                      <span>
                        I do not consent. Please do not feature me in any photos or video.
                      </span>
                    </label>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-700 border border-red-200 bg-red-50 px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-creekoxley text-white text-sm uppercase tracking-[0.15em] hover:bg-ink transition-colors disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Complete Pre-Check-In"}
                </button>

                <p className="text-xs text-ink/50 text-center">
                  For assistance contact{" "}
                  <a
                    href="tel:+254110463062"
                    className="underline hover:text-creekoxley"
                  >
                    +254 110 463 062
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:dmc@creekoxley.com"
                    className="underline hover:text-creekoxley"
                  >
                    dmc@creekoxley.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PreCheckInPage;
