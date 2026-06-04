import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mdkdgpgg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({ title: "Message sent.", description: "We'll be in touch shortly." });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else { throw new Error('Failed'); }
    } catch {
      toast({ title: "Error sending message", description: "Please try again or email us directly.", variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  return (
    <section id="contact" className="bg-bone border-t border-rule">
      <div className="container-x section-pad">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">06 — Engage</p>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[1.05] text-creekoxley">
              Begin a
              <br /><em className="italic">conversation.</em>
            </h2>
            <p className="mt-8 text-[17px] text-muted-ink max-w-md leading-[1.75]">
              Every engagement starts with a discovery conversation. Tell us where the
              business is now and where it needs to be — we'll come back with a frame.
            </p>

            <dl className="mt-12 space-y-8">
              <div className="grid grid-cols-3 gap-4 border-t border-rule pt-6">
                <dt className="eyebrow col-span-1">Phone</dt>
                <dd className="col-span-2 text-[16px] text-body-ink">+254 725 276 757</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-rule pt-6">
                <dt className="eyebrow col-span-1">Email</dt>
                <dd className="col-span-2 text-[16px] text-body-ink">info@creekoxley.com</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-rule pt-6">
                <dt className="eyebrow col-span-1">Office</dt>
                <dd className="col-span-2 text-[16px] text-body-ink">Riverside Close, Riverside Drive<br/>Nairobi, Kenya</dd>
              </div>
            </dl>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-6 border border-rule bg-white p-8 md:p-10">
              <p className="eyebrow mb-2">Send a brief</p>
              <Input className="rounded-none border-0 border-b border-rule px-0 focus-visible:ring-0 focus-visible:border-creekoxley h-12" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
              <Input className="rounded-none border-0 border-b border-rule px-0 focus-visible:ring-0 focus-visible:border-creekoxley h-12" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
              <Input className="rounded-none border-0 border-b border-rule px-0 focus-visible:ring-0 focus-visible:border-creekoxley h-12" type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
              <Textarea className="rounded-none border-0 border-b border-rule px-0 focus-visible:ring-0 focus-visible:border-creekoxley resize-none" name="message" placeholder="What are you trying to solve?" value={formData.message} onChange={handleInputChange} required rows={4} />
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full md:w-auto">
                {isSubmitting ? "Sending…" : "Send brief"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
