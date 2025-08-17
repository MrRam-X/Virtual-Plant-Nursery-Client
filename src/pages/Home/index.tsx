import heroBackgroundImage from "../../assets/images/planto-background.jpeg";
import guideSectionImage from '../../assets/images/planto-homepage-section.jpeg'
import { useGlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import useHomePageData from "./hooks/useHomePageData";
import FeaturedProducts from "./components/FeaturedProducts";

const Home = () => {
  const { showComingSoonToaster } = useGlobalContext();
  const { featuredProducts } = useHomePageData();

  return (
    <main className="flex-grow bg-brand-off-white">
      <section className="relative bg-brand-green h-[calc(100vh-80px)] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Nursery image background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            Bring Serenity
          </h1>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-4">
            to Your Home
          </h2>
          <p className="max-w-md mb-8 text-lg">
            Discover our exclusive collection of houseplants and bring the
            beauty of nature into your daily life.
          </p>
          <Link
            to="/shop"
            className="bg-brand-accent text-brand-green font-bold py-3 px-8 text-lg hover:bg-opacity-90 transition-transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-6 shadow-sm text-center">
              <img
                src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg"
                alt="Indoor Plants Icon"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="font-serif text-xl text-brand-green">
                Indoor Plants
              </h3>
            </div>
            <div className="bg-white p-6 shadow-sm text-center">
              <img
                src="https://images.pexels.com/photos/33095875/pexels-photo-33095875.jpeg"
                alt="Outdoor Plants Icon"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="font-serif text-xl text-brand-green">
                Outdoor Plants
              </h3>
            </div>
            <div className="bg-white p-6 shadow-sm text-center">
              <img
                src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg"
                alt="Pots & Planters Icon"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="font-serif text-xl text-brand-green">
                Pots & Planters
              </h3>
            </div>
            <div className="bg-white p-6 shadow-sm text-center">
              <img
                src="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg"
                alt="Plant Care Icon"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="font-serif text-xl text-brand-green">
                Plant Care
              </h3>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts featuredProducts={featuredProducts} />

      <section className="container mx-auto px-4 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white shadow-lg">
          <div className="order-2 lg:order-1 p-8 md:p-12">
            <h2 className="font-serif text-4xl text-brand-green leading-tight">
              We help you choose the most suitable plants for you
            </h2>
            <p className="mt-4 mb-6 text-lg">
              Our plant experts are here to guide you in finding the perfect
              green companion for your home and lifestyle.
            </p>
            <button
              onClick={() => showComingSoonToaster("Sign Up")}
              className="bg-brand-green text-white font-bold py-3 px-8 text-lg hover:bg-brand-green-light"
            >
              Explore Guide
            </button>
          </div>
          <div className="order-1 lg:order-2 h-64 lg:h-full min-h-[300px]">
            <img
              src={guideSectionImage}
              alt="Woman tending to plants"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
