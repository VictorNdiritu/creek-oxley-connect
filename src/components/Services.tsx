
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Resolving Management Problems",
    description: "Identify and solve complex management challenges through diagnostic approaches and proven methodologies tailored to your organization's specific needs.",
    icon: "🔧"
  },
  {
    title: "Developing and Reviving Strategies",
    description: "Create comprehensive strategic plans and revitalize existing strategies to guide your business toward sustainable growth and competitive advantage.",
    icon: "📋"
  },
  {
    title: "Business Process Optimization",
    description: "Streamline operations, eliminate inefficiencies, and optimize workflows to maximize productivity and reduce operational costs.",
    icon: "⚙️"
  },
  {
    title: "People Management",
    description: "Enhance organizational behavior, improve employee productivity, and develop effective management practices for better team performance.",
    icon: "👥"
  },
  {
    title: "Management Information Systems",
    description: "Implement and optimize information systems to support decision-making processes and improve organizational efficiency.",
    icon: "💻"
  },
  {
    title: "Marketing",
    description: "Develop effective marketing strategies and campaigns to enhance brand visibility, reach target audiences, and drive business growth.",
    icon: "📈"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-creekoxley">
            Core Services
          </h2>
          <p className="text-lg text-gray-600">
            Creek Oxley provides practical, custom-made solutions for management problems faced by 
            business owners and executives through our comprehensive range of core services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-creekoxley/50 transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-creekoxley">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
