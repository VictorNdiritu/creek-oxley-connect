
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ConnectedBrands = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Service Divisions</h2>
          <p className="text-lg text-gray-600">
            Creek Oxley operates specialized service divisions to provide comprehensive solutions in destination management and staffing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Destination Management Division */}
          <Card id="destination-management" className="border-0 shadow-lg overflow-hidden">
            <div className="h-2 bg-creekoxley"></div>
            <CardHeader className="bg-gradient-to-r from-creekoxley/5 to-creekoxley-light/5">
              <CardTitle className="text-2xl font-bold text-creekoxley">Creek Oxley Destination Management</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Expert travel and event coordination services
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Our Destination Management division specializes in creating exceptional experiences for corporate events, 
                incentive trips, and conferences. We handle everything from venue selection to full itinerary planning.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creekoxley mr-2"></div>
                  <span className="text-gray-700">Corporate Event Planning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creekoxley mr-2"></div>
                  <span className="text-gray-700">Incentive Trip Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creekoxley mr-2"></div>
                  <span className="text-gray-700">Venue Selection & Logistics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creekoxley mr-2"></div>
                  <span className="text-gray-700">Local Experience Curation</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="border-creekoxley text-creekoxley hover:bg-creekoxley/10">
                <Link to="/destination-management" className="text-creekoxley">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Smart Staffing Division */}
          <Card id="smart-staffing" className="border-0 shadow-lg overflow-hidden">
            <div className="h-2 bg-creekoxley-medium"></div>
            <CardHeader className="bg-gradient-to-r from-creekoxley-medium/5 to-creekoxley-light/5">
              <CardTitle className="text-2xl font-bold text-creekoxley-medium">Creek Oxley Smart Staffing</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Intelligent workforce solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Our Smart Staffing division delivers innovative human resource solutions to help businesses find the right talent, 
                optimize their workforce, and enhance productivity through data-driven staffing strategies.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creekoxley-medium mr-2"></div>
                  <span className="text-gray-700">Executive Recruitment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creekoxley-medium mr-2"></div>
                  <span className="text-gray-700">Temporary & Contract Staffing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creekoxley-medium mr-2"></div>
                  <span className="text-gray-700">Workforce Optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creekoxley-medium mr-2"></div>
                  <span className="text-gray-700">HR Consulting Services</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="border-creekoxley-medium text-creekoxley-medium hover:bg-creekoxley-medium/10">
                <Link to="/smart-staffing" className="text-creekoxley-medium">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConnectedBrands;
