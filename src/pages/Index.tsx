import PopHeader from "@/components/PopHeader";
import PopHero from "@/components/PopHero";
import ProductGrid from "@/components/ProductGrid";
import PopFooter from "@/components/PopFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <PopHeader />
      <PopHero />
      <ProductGrid />
      <PopFooter />
    </div>
  );
};

export default Index;