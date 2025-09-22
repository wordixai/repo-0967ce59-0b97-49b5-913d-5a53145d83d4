import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const PopFooter = () => {
  return (
    <footer className="pop-gradient-2 pop-dots border-t-4 border-black relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="pop-title text-4xl text-white transform -rotate-1">
              POP SHOP!
            </h3>
            <p className="handwritten text-lg text-white opacity-90">
              Making fashion fun and explosive since 2024!
            </p>
            <div className="flex space-x-4">
              <Button variant="popAccent" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="popAccent" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="popAccent" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="handwritten text-2xl text-white font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="handwritten text-lg text-white hover:text-pop-yellow transition-colors">Home</a></li>
              <li><a href="#" className="handwritten text-lg text-white hover:text-pop-yellow transition-colors">Shop</a></li>
              <li><a href="#" className="handwritten text-lg text-white hover:text-pop-yellow transition-colors">About</a></li>
              <li><a href="#" className="handwritten text-lg text-white hover:text-pop-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="handwritten text-2xl text-white font-bold">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="handwritten text-lg text-white hover:text-pop-yellow transition-colors">Clothing</a></li>
              <li><a href="#" className="handwritten text-lg text-white hover:text-pop-yellow transition-colors">Accessories</a></li>
              <li><a href="#" className="handwritten text-lg text-white hover:text-pop-yellow transition-colors">Art Prints</a></li>
              <li><a href="#" className="handwritten text-lg text-white hover:text-pop-yellow transition-colors">Collectibles</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="handwritten text-2xl text-white font-bold">Stay Updated!</h4>
            <p className="handwritten text-lg text-white opacity-90">
              Get the latest pop culture trends!
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="w-full p-3 comic-border handwritten text-lg"
              />
              <Button variant="popAccent" className="w-full">
                <Mail className="h-5 w-5 mr-2" />
                Subscribe!
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-white mt-12 pt-8 text-center">
          <p className="handwritten text-lg text-white">
            © 2024 Pop Shop! All rights reserved. Made with ❤️ and lots of colors!
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-pop-yellow rounded-full comic-border float opacity-30"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 bg-pop-orange rounded-full comic-border float opacity-30" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-pop-blue rounded-full comic-border float opacity-30" style={{animationDelay: '2s'}}></div>
    </footer>
  );
};

export default PopFooter;