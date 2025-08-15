import heroBackgroundImage from "../../assets/images/planto-background.jpeg";
import { GOOGLE_MAPS_EMBEDDED_URL } from "../../appConstant";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <main>
      <section className="relative bg-brand-green flex items-center justify-center h-[calc(100vh-80px)] min-h-[900px] sm:min-h-[800px] lg:min-h-[700px] p-4">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Nursery image background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="text-white text-center lg:text-left lg:w-1/3">
            <h1 className="font-serif text-5xl md:text-6xl">Get In Touch</h1>
            <p className="mt-4 text-lg">
              Have a question, comment, or just want to talk about plants? We'd
              love to hear from you!
            </p>
            <div className="mt-8 space-y-4 text-lg hidden lg:block">
              <p className="flex items-center">
                <i className="fas fa-envelope mr-3 text-brand-accent"></i>
                hello@planto.com
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone mr-3 text-brand-accent"></i> +91
                8986848588
              </p>
              <p className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-brand-accent"></i>
                123 Random St, Random City, Random State, India
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-brand-green">Find Us Here</h2>
          <p className="text-lg mt-2">
            Come visit our physical nursery and say hello!
          </p>
        </div>
        <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
          {/* Replace this iframe with actual Google Maps embed code */}
          <iframe
            src={GOOGLE_MAPS_EMBEDDED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contact;
