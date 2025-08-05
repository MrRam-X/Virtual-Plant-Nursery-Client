import useLoginForm from "../hooks/useLoginForm";
import { useGlobalContext } from "../../../context/GlobalContext";

const LoginForm = () => {
  const { showComingSoonToaster } = useGlobalContext();
  const { loginFormData, loginFormInputFieldsHandler, loginFormSubmitHandler } =
    useLoginForm();

  return (
    <div className="w-full max-w-md">
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brand-green">Welcome Back</h2>
          <p className="text-gray-500">Please enter your details to sign in.</p>
        </div>

        <form onSubmit={loginFormSubmitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              onChange={loginFormInputFieldsHandler}
              value={loginFormData.email}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={loginFormInputFieldsHandler}
              value={loginFormData.password}
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded accent-brand-green focus:ring-brand-accent"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <button
                onClick={() => showComingSoonToaster("Forgot password")}
                className="font-medium text-brand-green hover:text-brand-accent"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-brand-green hover:bg-brand-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green transition-all duration-200"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => showComingSoonToaster("Sign Up")}
              className="font-medium text-brand-green hover:text-brand-accent"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
