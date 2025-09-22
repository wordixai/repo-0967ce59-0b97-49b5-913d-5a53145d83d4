import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const PopHeader = () => {
  return (
    <header className="pop-gradient-1 pop-dots border-b-4 border-black relative overflow-hidden">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="pop-title text-4xl md:text-5xl text-white transform -rotate-1">
              POP SHOP!
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="handwritten text-white text-xl font-bold hover:scale-110 transition-transform">
              Home
            </a>
            <a href="#" className="handwritten text-white text-xl font-bold hover:scale-110 transition-transform">
              Clothes
            </a>
            <a href="#" className="handwritten text-white text-xl font-bold hover:scale-110 transition-transform">
              Art
            </a>
            <a href="#" className="handwritten text-white text-xl font-bold hover:scale-110 transition-transform">
              About
            </a>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Input 
                placeholder="Search..." 
                className="comic-border bg-white handwritten text-lg w-48"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
            </div>
            <Button variant="popAccent" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-pop-pink text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-pop-yellow rounded-full comic-border float"></div>
      <div className="absolute bottom-4 left-8 w-8 h-8 bg-pop-blue rounded-full comic-border float" style={{animationDelay: '1s'}}></div>
    </header>
  );
};

export default PopHeader;