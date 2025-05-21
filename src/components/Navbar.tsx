
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/484943ae-2c20-4228-8536-7081b6c91bbd.png" 
              alt="Creek Oxley" 
              className="h-10 md:h-12" 
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-gray-700 hover:text-creekoxley">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-creekoxley">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-creekoxley">Services</Link>
            
            {/* Connected Brands Dropdown */}
            <div className="dropdown relative group">
              <span className="flex items-center text-gray-700 cursor-default">
                Connected Brands <ChevronDown className="ml-1 h-4 w-4" />
              </span>
              <div className="dropdown-menu hidden absolute z-50 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                <Link
                  to="/destination-management"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-creekoxley hover:text-white"
                >
                  Destination Management Company
                </Link>
                <Link
                  to="/smart-staffing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-creekoxley hover:text-white"
                >
                  Smart Staffing
                </Link>
              </div>
            </div>
            
            <Link to="/contact" className="text-gray-700 hover:text-creekoxley">Contact</Link>
          </div>

          {/* Get Started Button - Now Right Aligned */}
          <div className="hidden md:block">
            <Button className="bg-creekoxley hover:bg-creekoxley-medium">Get Started</Button>
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
              <Link to="/" className="text-gray-700 hover:text-creekoxley px-2">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-creekoxley px-2">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-creekoxley px-2">Services</Link>
              
              {/* Connected Brands Mobile */}
              <div>
                <div className="text-gray-700 font-medium px-2">Connected Brands</div>
                <div className="ml-4 mt-1 space-y-2">
                  <Link
                    to="/destination-management"
                    className="block text-gray-700 hover:text-creekoxley text-sm"
                  >
                    Destination Management Company
                  </Link>
                  <Link
                    to="/smart-staffing"
                    className="block text-gray-700 hover:text-creekoxley text-sm"
                  >
                    Smart Staffing
                  </Link>
                </div>
              </div>
              
              <Link to="/contact" className="text-gray-700 hover:text-creekoxley px-2">Contact</Link>
              <Button className="bg-creekoxley hover:bg-creekoxley-medium w-full mt-2">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
