import { Button } from "./ui/button";

const PopHero = () => {
  return (
    <section className="relative min-h-screen pop-dots-large overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 pop-gradient-2 opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8">
            <div className="comic-border bg-pop-yellow p-6 transform -rotate-2 bounce-in">
              <h2 className="pop-title text-6xl md:text-8xl text-black leading-tight">
                BOOM!
              </h2>
            </div>
            
            <div className="comic-border bg-white p-8 transform rotate-1">
              <h3 className="handwritten text-3xl md:text-4xl text-black mb-4">
                Explosive Fashion & Art Collection!
              </h3>
              <p className="handwritten text-xl text-gray-700 mb-6">
                Get ready to make a statement with our bold, vibrant pieces that scream personality!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="pop" size="pop">
                  Shop Now!
                </Button>
                <Button variant="popSecondary" size="pop">
                  View Collection
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="comic-border bg-white p-4 transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop&crop=center" 
                alt="Pop Art Fashion"
                className="w-full h-96 object-cover rounded"
              />
            </div>
            
            {/* Decorative speech bubbles */}
            <div className="absolute -top-4 -left-4 comic-border bg-pop-pink p-4 rounded-full transform -rotate-12 float">
              <span className="pop-title text-white text-2xl">WOW!</span>
            </div>
            
            <div className="absolute -bottom-4 -right-4 comic-border bg-pop-orange p-4 rounded-full transform rotate-12 float" style={{animationDelay: '1.5s'}}>
              <span className="pop-title text-white text-xl">POW!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pop-blue rounded-full comic-border float"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-pop-yellow rounded-full comic-border float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pop-pink rounded-full comic-border float" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default PopHero;