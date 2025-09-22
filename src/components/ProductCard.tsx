import { Button } from "./ui/button";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ image, title, price, originalPrice, isNew, isSale }: ProductCardProps) => {
  return (
    <div className="comic-border bg-white p-4 transform hover:scale-105 hover:rotate-1 transition-all duration-300 bounce-in relative group">
      {/* Badge */}
      {(isNew || isSale) && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className={`comic-border px-3 py-1 transform rotate-12 ${
            isNew ? 'bg-pop-yellow text-black' : 'bg-pop-pink text-white'
          }`}>
            <span className="handwritten font-bold text-sm">
              {isNew ? 'NEW!' : 'SALE!'}
            </span>
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 comic-border">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Button variant="popAccent" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="pop" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="handwritten text-xl font-bold text-black group-hover:text-pop-orange transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="pop-title text-2xl text-pop-orange">{price}</span>
            {originalPrice && (
              <span className="handwritten text-lg text-gray-500 line-through">{originalPrice}</span>
            )}
          </div>
          
          <Button variant="pop" size="sm" className="handwritten">
            Add to Cart!
          </Button>
        </div>
      </div>

      {/* Pop art dots decoration */}
      <div className="absolute bottom-2 left-2 w-4 h-4 bg-pop-blue rounded-full opacity-30"></div>
      <div className="absolute top-16 right-2 w-3 h-3 bg-pop-pink rounded-full opacity-30"></div>
    </div>
  );
};

export default ProductCard;