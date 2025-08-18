import { Link } from "react-router-dom";
import heroBackgroundImage from "../../assets/images/planto-background.jpeg";
import { APP_ROUTE_NAMES } from "../../appConstant";

const NotFound = () => {
  return (
    <main className="bg-brand-green relative min-h-screen flex items-center justify-center p-8 text-center text-white">
      <div className="absolute inset-0">
        <img
          src={heroBackgroundImage}
          alt="Nursery image background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10">
        <h1 className="font-serif text-8xl sm:text-9xl font-bold text-brand-accent">
          404
        </h1>
        <h2 className="font-serif text-4xl sm:text-5xl mt-4">
          Lost in the Leaves?
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-md mx-auto">
          It seems the page you're looking for has been replanted or has
          wandered off the garden path.
        </p>
        <div className="mt-10">
          <Link
            to={APP_ROUTE_NAMES.HOME}
            className="inline-block bg-brand-green text-white font-bold py-3 px-8 text-lg hover:bg-brand-green-light border-2 border-white/50 hover:border-white transition-all duration-300 rounded-md"
          >
            <i className="fas fa-home mr-2"></i>
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
