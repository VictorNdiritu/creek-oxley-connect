
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/creek-oxley-logo.png" 
              alt="Creek Oxley" 
              className="h-10 md:h-12" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-creekoxley">Home</a>
            <a href="#about" className="text-gray-700 hover:text-creekoxley">About</a>
            <a href="#services" className="text-gray-700 hover:text-creekoxley">Services</a>
            
            {/* Connected Brands Dropdown */}
            <div className="dropdown relative group">
              <button className="flex items-center text-gray-700 hover:text-creekoxley">
                Connected Brands <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu hidden absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1 divide-y divide-gray-100">
                  <a
                    href="#destination-management"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-creekoxley hover:text-white"
                  >
                    Destination Management Company
                  </a>
                  <a
                    href="#smart-staffing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-creekoxley hover:text-white"
                  >
                    Smart Staffing
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="text-gray-700 hover:text-creekoxley">Contact</a>
            <Button className="bg-creekoxley hover:bg-creekoxley-medium ml-4">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-creekoxley px-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-creekoxley px-2">About</a>
              <a href="#services" className="text-gray-700 hover:text-creekoxley px-2">Services</a>
              
              {/* Connected Brands Mobile */}
              <div>
                <div className="text-gray-700 font-medium px-2">Connected Brands</div>
                <div className="ml-4 mt-1 space-y-2">
                  <a
                    href="#destination-management"
                    className="block text-gray-700 hover:text-creekoxley text-sm"
                  >
                    Destination Management Company
                  </a>
                  <a
                    href="#smart-staffing"
                    className="block text-gray-700 hover:text-creekoxley text-sm"
                  >
                    Smart Staffing
                  </a>
                </div>
              </div>
              
              <a href="#contact" className="text-gray-700 hover:text-creekoxley px-2">Contact</a>
              <Button className="bg-creekoxley hover:bg-creekoxley-medium w-full mt-2">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
