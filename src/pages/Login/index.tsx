import heroBackgroundImage from "../../assets/images/planto-background.jpeg";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <main className="bg-brand-green relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0">
        <img
          src={heroBackgroundImage}
          alt="Nursery image background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
        <div className="text-white text-center lg:text-left lg:w-1/2">
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl">
            Planto.
          </h1>
          <p className="hidden sm:block mt-4 text-xl lg:text-2xl text-gray-300 max-w-lg mx-auto lg:mx-0">
            Explore a world of green. Find the perfect plants to decorate your
            personal home garden.
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
