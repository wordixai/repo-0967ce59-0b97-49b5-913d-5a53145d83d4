import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=400&fit=crop",
      title: "Retro Jacket",
      price: "$89",
      originalPrice: "$120",
      isSale: true
    },
    {
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      title: "Pop Art Tee",
      price: "$45",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&h=400&fit=crop",
      title: "Vintage Sunglasses",
      price: "$65",
      originalPrice: "$85",
      isSale: true
    },
    {
      image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop",
      title: "Colorful Sneakers",
      price: "$120",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      title: "Statement Bag",
      price: "$75",
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pop-dots opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="comic-border bg-pop-gradient-1 p-6 inline-block transform -rotate-1 mb-8">
            <h2 className="pop-title text-5xl md:text-6xl text-white">
              FEATURED ITEMS!
            </h2>
          </div>
          <p className="handwritten text-2xl text-gray-700 max-w-2xl mx-auto">
            Discover our most explosive collection of trendy fashion and unique art pieces!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="comic-border bg-pop-yellow p-8 inline-block transform rotate-2">
            <h3 className="handwritten text-3xl text-black mb-4">
              Want to see more awesome stuff?
            </h3>
            <Button variant="pop" size="pop">
              View All Products!
            </Button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pop-orange rounded-full comic-border float opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pop-pink rounded-full comic-border float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pop-blue rounded-full comic-border float opacity-20" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default ProductGrid;