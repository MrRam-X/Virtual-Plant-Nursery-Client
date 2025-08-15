import useContactForm from "../hooks/useContactForm";

const ContactForm = () => {
  const {
    contactFormData,
    contactFormInputFieldsHandler,
    contactFormSubmitHandler,
  } = useContactForm();
  return (
    <div className="w-full max-w-lg lg:w-2/3">
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-brand-green mb-6">
          Send us a Message
        </h2>
        <form onSubmit={contactFormSubmitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              value={contactFormData.name}
              onChange={contactFormInputFieldsHandler}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              value={contactFormData.email}
              onChange={contactFormInputFieldsHandler}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              value={contactFormData.subject}
              onChange={contactFormInputFieldsHandler}
              type="text"
              name="subject"
              id="subject"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              value={contactFormData.message}
              onChange={contactFormInputFieldsHandler}
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-brand-green bg-brand-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
