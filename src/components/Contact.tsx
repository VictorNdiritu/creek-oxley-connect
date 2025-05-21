
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Get in <span className="text-creekoxley">Touch</span> With Our Experts
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business with expert management consulting? Contact us today to discuss how Creek Oxley can help you achieve your strategic objectives.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-creekoxley/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-creekoxley" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+254 725 276 757</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-creekoxley/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-creekoxley" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@creekoxley.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-creekoxley/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-creekoxley" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Office</h3>
                  <p className="text-gray-600">Riverside Close, Riverside Drive<br />Opposite Oyster Paradise</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" className="w-full min-h-[120px]" />
                </div>
                <Button className="w-full bg-creekoxley hover:bg-creekoxley-medium">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
