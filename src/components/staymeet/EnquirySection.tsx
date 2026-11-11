import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  contact,
  enquiryProperties,
  getProperty,
  type EnquiryMode,
} from "@/data/stayMeet";

// Same Formspree endpoint the main Creek Oxley contact form uses,
// so enquiries land in the existing Creek Oxley channel.
const ENQUIRY_ENDPOINT = "https://formspree.io/f/mdkdgpgg";

const fieldCls =
  "w-full bg-transparent rounded-none border-0 border-b border-rule px-0 py-3 text-[16px] text-body-ink placeholder:text-muted-ink focus:outline-none focus:border-creekoxley";
const labelCls = "eyebrow block mb-1";

const eventTypes = [
  "Conference",
  "Meeting",
  "Workshop / seminar",
  "Corporate retreat",
  "Training",
  "Corporate event",
  "Other",
];

interface Props {
  defaultMode?: EnquiryMode;
  defaultProperty?: string;
  /** Limit the toggle, e.g. a motel profile only needs the stay form. */
  modes?: EnquiryMode[];
  heading?: React.ReactNode;
  intro?: string;
}

const today = () => new Date().toISOString().split("T")[0];

const EnquirySection = ({
  defaultMode = "stay",
  defaultProperty = "",
  modes = ["stay", "conference"],
  heading,
  intro,
}: Props) => {
  const { toast } = useToast();
  const [mode, setMode] = useState<EnquiryMode>(
    modes.includes(defaultMode) ? defaultMode : modes[0]
  );
  const [property, setProperty] = useState(defaultProperty);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  // Follow query-string changes (e.g. "Enquire" clicked on a card)
  useEffect(() => {
    if (modes.includes(defaultMode)) setMode(defaultMode);
    setProperty(defaultProperty);
    setSent(false);
  }, [defaultMode, defaultProperty]); // eslint-disable-line react-hooks/exhaustive-deps

  const options = enquiryProperties(mode);
  // Keep the selected property valid when switching form type
  useEffect(() => {
    if (property && !options.some((o) => o.slug === property)) setProperty("");
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    if (data._gotcha) return; // honeypot

    if (mode === "stay" && data.checkOut && data.checkIn >= data.checkOut) {
      toast({
        title: "Check the dates",
        description: "Check-out must be after check-in.",
        variant: "destructive",
      });
      return;
    }

    const propertyName = getProperty(data.preferredProperty)?.name ?? "No preference";
    const payload = {
      ...data,
      preferredProperty: propertyName,
      _subject:
        mode === "stay"
          ? `Stay & Meet accommodation enquiry — ${propertyName}`
          : `Stay & Meet conference enquiry — ${propertyName}`,
      enquiryType:
        mode === "stay" ? "Accommodation enquiry" : "Conference & events enquiry",
      source: "Creek Oxley website · Stay & Meet",
    };

    setSubmitting(true);
    try {
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      form.reset();
      toast({ title: "Enquiry sent", description: "We'll be in touch shortly." });
    } catch {
      toast({
        title: "We couldn't send your enquiry",
        description: `Please try again or email ${contact.email}.`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const propertySelect = (
    <div>
      <label htmlFor="sm-property" className={labelCls}>
        {mode === "stay" ? "Preferred property" : "Preferred venue"}
      </label>
      <select
        id="sm-property"
        name="preferredProperty"
        value={property}
        onChange={(e) => setProperty(e.target.value)}
        className={fieldCls}
      >
        <option value="">No preference — advise me</option>
        {options.map((o) => (
          <option key={o.slug} value={o.slug}>
            {o.name} — {o.location.replace(", Kenya", "")}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section id="enquire" className="bg-bone border-t border-rule scroll-mt-24">
      <div className="container-x section-pad">
        <div className="grid grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 lg:gap-x-16">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">Enquire</p>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[1.05] text-creekoxley">
              {heading ?? (
                <>
                  Plan your
                  <br />
                  <em className="italic">stay or event.</em>
                </>
              )}
            </h2>
            <p className="mt-8 text-[17px] text-muted-ink max-w-md leading-[1.75]">
              {intro ??
                "Tell us what you need and the Creek Oxley team will come back to you directly — no redirects, no third-party booking pages."}
            </p>
            <dl className="mt-12 space-y-6">
              <div className="grid grid-cols-3 gap-4 border-t border-rule pt-5">
                <dt className="eyebrow col-span-1">Phone</dt>
                <dd className="col-span-2 text-[16px] text-body-ink">
                  <a href={contact.phoneHref} className="hover:text-creekoxley">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-rule pt-5">
                <dt className="eyebrow col-span-1">Email</dt>
                <dd className="col-span-2 text-[16px] text-body-ink">
                  <a href={`mailto:${contact.email}`} className="hover:text-creekoxley">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="border border-rule bg-white p-8 md:p-10">
              {modes.length > 1 && (
                <div
                  role="tablist"
                  aria-label="Enquiry type"
                  className="grid grid-cols-2 border border-rule mb-8"
                >
                  {modes.map((m) => (
                    <button
                      key={m}
                      type="button"
                      role="tab"
                      aria-selected={mode === m}
                      onClick={() => {
                        setMode(m);
                        setSent(false);
                      }}
                      className={`py-3 text-[13px] font-medium tracking-wide transition-colors ${
                        mode === m
                          ? "bg-creekoxley text-white"
                          : "bg-white text-body-ink hover:bg-bone"
                      }`}
                    >
                      {m === "stay" ? "Accommodation" : "Conference & events"}
                    </button>
                  ))}
                </div>
              )}

              {sent ? (
                <div className="py-10 text-center" role="status">
                  <p className="font-display text-[32px] text-creekoxley">Thank you.</p>
                  <p className="mt-3 text-muted-ink">
                    Your enquiry has reached Creek Oxley. We'll respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-[14px] text-creekoxley underline underline-offset-4"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" key={mode}>
                  {/* honeypot */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {mode === "conference" && (
                    <div>
                      <label htmlFor="sm-org" className={labelCls}>Organisation name</label>
                      <input id="sm-org" name="organisation" required className={fieldCls} />
                    </div>
                  )}

                  <div>
                    <label htmlFor="sm-name" className={labelCls}>
                      {mode === "stay" ? "Guest name" : "Contact person"}
                    </label>
                    <input id="sm-name" name="name" required autoComplete="name" className={fieldCls} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sm-email" className={labelCls}>Email address</label>
                      <input id="sm-email" type="email" name="email" required autoComplete="email" className={fieldCls} />
                    </div>
                    <div>
                      <label htmlFor="sm-phone" className={labelCls}>Phone number</label>
                      <input id="sm-phone" type="tel" name="phone" required autoComplete="tel" className={fieldCls} />
                    </div>
                  </div>

                  {propertySelect}

                  {mode === "stay" ? (
                    <>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="sm-in" className={labelCls}>Check-in date</label>
                          <input id="sm-in" type="date" name="checkIn" min={today()} required className={fieldCls} />
                        </div>
                        <div>
                          <label htmlFor="sm-out" className={labelCls}>Check-out date</label>
                          <input id="sm-out" type="date" name="checkOut" min={today()} required className={fieldCls} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="sm-guests" className={labelCls}>Number of guests</label>
                        <input id="sm-guests" type="number" name="guests" min={1} required className={fieldCls} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="sm-date" className={labelCls}>Event date</label>
                          <input id="sm-date" type="date" name="eventDate" min={today()} required className={fieldCls} />
                        </div>
                        <div>
                          <label htmlFor="sm-delegates" className={labelCls}>Number of delegates</label>
                          <input id="sm-delegates" type="number" name="delegates" min={1} required className={fieldCls} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="sm-type" className={labelCls}>Event type</label>
                          <select id="sm-type" name="eventType" required defaultValue="" className={fieldCls}>
                            <option value="" disabled>Select…</option>
                            {eventTypes.map((t) => (
                              <option key={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="sm-acc" className={labelCls}>Accommodation required?</label>
                          <select id="sm-acc" name="accommodationRequired" defaultValue="Not sure yet" className={fieldCls}>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Not sure yet</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label htmlFor="sm-notes" className={labelCls}>Additional requirements</label>
                    <textarea id="sm-notes" name="requirements" rows={3} className={`${fieldCls} resize-none`} />
                  </div>

                  <button type="submit" disabled={submitting} className="btn-primary w-full md:w-auto disabled:opacity-60">
                    {submitting
                      ? "Sending…"
                      : mode === "stay"
                      ? "Enquire about accommodation"
                      : "Request conference quotation"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
