
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Strategic Planning",
    description: "Develop comprehensive strategic plans to guide your business toward sustainable growth and market leadership.",
    icon: "📈"
  },
  {
    title: "Operational Efficiency",
    description: "Streamline your operations to eliminate waste, reduce costs, and maximize productivity across all departments.",
    icon: "⚙️"
  },
  {
    title: "Change Management",
    description: "Navigate organizational change effectively with expert guidance and proven methodologies for smooth transitions.",
    icon: "🔄"
  },
  {
    title: "Financial Advisory",
    description: "Optimize your financial performance with data-driven insights and expert recommendations for fiscal success.",
    icon: "💰"
  },
  {
    title: "Leadership Development",
    description: "Cultivate strong leadership within your organization through tailored training programs and executive coaching.",
    icon: "🚀"
  },
  {
    title: "Market Analysis",
    description: "Gain critical insights into market trends, customer behaviors, and competitive landscapes to inform strategic decisions.",
    icon: "🔍"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our <span className="text-creekoxley">Management Consulting</span> Services
          </h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive management consulting services tailored to meet the unique needs of your business,
            helping you overcome challenges and achieve your strategic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-creekoxley-light/50 transition-all duration-300">
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
