import Banner from "./commponents/banner/page";
import ProductCard2 from "./commponents/bigcard/page";
import ProductsPage from "./commponents/cards/page";
import Footer from "./commponents/footer/page";

export default function Home() {
  return (
    <div>

      
      <Banner />
      <ProductsPage />
      <ProductCard2 />
      <Footer />

    </div>
  );
}