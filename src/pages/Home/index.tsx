import heroBackgroundImage from "../../assets/images/planto-background.jpeg";
import { useGlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { showComingSoonToaster } = useGlobalContext();
  return (
    <main>
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

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-brand-green">
              Featured Products
            </h2>
            <p className="text-lg mt-2">Check out our most popular plants</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Monstera Deliciosa"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="bg-white text-brand-green py-2 px-4 font-semibold"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">Monstera Deliciosa</h3>
                <p className="text-lg text-brand-accent font-bold mt-1">
                  $45.00
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1383044/pexels-photo-1383044.jpeg"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Snake Plant"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="bg-white text-brand-green py-2 px-4 font-semibold"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">Snake Plant</h3>
                <p className="text-lg text-brand-accent font-bold mt-1">
                  $35.00
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7245625/pexels-photo-7245625.jpeg"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Fiddle Leaf Fig"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="bg-white text-brand-green py-2 px-4 font-semibold"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">Fiddle Leaf Fig</h3>
                <p className="text-lg text-brand-accent font-bold mt-1">
                  $75.00
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/824572/pexels-photo-824572.jpeg"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="ZZ Plant"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="bg-white text-brand-green py-2 px-4 font-semibold"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">ZZ Plant</h3>
                <p className="text-lg text-brand-accent font-bold mt-1">
                  $40.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=2874&auto=format&fit=crop"
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
