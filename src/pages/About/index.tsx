import heroBackgroundImage from "../../assets/images/planto-background.jpeg";
import journeySectionImage from '../../assets/images/planto-about-us-journey-image.jpeg'

const About = () => {
  return (
    <main className="flex-grow">
      <section className="relative bg-brand-green h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Nursery image background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            Rooted in Passion
          </h1>
          <p className="max-w-2xl mt-4 text-lg md:text-xl">
            We believe that every home deserves a touch of nature. Planto was
            born from a love for all things green and a desire to share that joy
            with the world.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl text-brand-green leading-tight">
                Our Journey to Greenery
              </h2>
              <p className="mt-4 text-lg">
                Founded in 2023, Planto started as a small project in a backyard
                greenhouse. Our founders, a pair of lifelong botany enthusiasts,
                wanted to make high-quality, healthy houseplants accessible to
                everyone, from seasoned plant parents to curious beginners.
              </p>
              <p className="mt-4 text-lg">
                We've since grown into a thriving online nursery, but our core
                mission remains the same: to deliver healthy, beautiful plants
                directly to your door and to provide the knowledge and support
                you need to help them flourish.
              </p>
            </div>
            <div className="order-1 lg:order-2 h-80 lg:h-auto rounded-lg overflow-hidden shadow-xl">
              <img
                src={journeySectionImage}
                alt="Journey Section Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-brand-green">
              What We Stand For
            </h2>
            <p className="text-lg mt-2 max-w-xl mx-auto">
              Our values guide every decision we make, from sourcing our plants
              to serving our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 bg-brand-green rounded-full mx-auto mb-4">
                <i className="fas fa-leaf text-2xl text-white"></i>
              </div>
              <h3 className="font-serif text-2xl text-brand-green mb-2">
                Premium Quality
              </h3>
              <p>
                Every plant is hand-selected, carefully nurtured, and inspected
                for health and quality before it begins its journey to you.
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 bg-brand-green rounded-full mx-auto mb-4">
                <i className="fas fa-seedling text-2xl text-white"></i>
              </div>
              <h3 className="font-serif text-2xl text-brand-green mb-2">
                Sustainable Practice
              </h3>
              <p>
                We are committed to eco-friendly packaging and sustainable
                growing practices to protect the planet we love.
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 bg-brand-green rounded-full mx-auto mb-4">
                <i className="fas fa-headset text-2xl text-white"></i>
              </div>
              <h3 className="font-serif text-2xl text-brand-green mb-2">
                Expert Support
              </h3>
              <p>
                Your journey with our plants doesn't end at checkout. We're here
                to offer guidance and support for all your plant care needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
