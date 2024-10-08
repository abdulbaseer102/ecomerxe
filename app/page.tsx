import Banner from "./commponents/banner/page";
import ProductCard2 from "./commponents/bigcard/page";
import ProductsPage from "./commponents/cards/page";
import Footer from "./commponents/footer/page";
import Navbar from "./commponents/nav/page";
import Header from "./commponents/topheader/page";

export default function Home() {
  return (
    <div>

      <Header />
      <Navbar />
      <Banner />
      <ProductsPage />
      <ProductCard2 />
      <Footer />

    </div>
  );
}