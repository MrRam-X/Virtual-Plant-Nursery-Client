import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const Footer: React.FC = () => {
  const { showComingSoonToaster } = useGlobalContext();
  return (
    <footer className="bg-brand-green text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl mb-4">Planto.</h3>
            <p className="mb-4">
              We sell beautiful and healthy plants for your home.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => showComingSoonToaster("Facebook")}
                className="text-white hover:text-brand-accent"
              >
                <i className="fab fa-facebook-f fa-lg"></i>
              </button>
              <button
                onClick={() => showComingSoonToaster("Instagram")}
                className="text-white hover:text-brand-accent"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </button>
              <button
                onClick={() => showComingSoonToaster("Pinterest")}
                className="text-white hover:text-brand-accent"
              >
                <i className="fab fa-pinterest-p fa-lg"></i>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-brand-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-brand-accent">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-accent">
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => showComingSoonToaster("FAQs")}
                  className="hover:text-brand-accent"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>123 Random
                St, Random City, Random State, India
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>hello@planto.com
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3"></i>+91 8986848588
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-xl mb-4">Join Our Newsletter</h4>
            <p className="mb-4">
              Get plant care tips and exclusive offers directly to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-2 px-3 text-brand-green focus:outline-none"
              />
              <button
                onClick={() => showComingSoonToaster("Newsletter")}
                className="bg-brand-accent text-brand-green font-bold py-2 px-4 hover:bg-opacity-90"
              >
                Sub
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-green-light py-6">
        <p className="text-center text-gray-400">
          © 2025 Planto. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
