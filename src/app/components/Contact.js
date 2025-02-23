const Contact = () => {
    return (
      <section id="contact" className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-300 mt-4">Get in touch for any inquiries or support.</p>
  
          <form className="mt-8 max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600"
            ></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  // ✅ Correct default export
  export default Contact;
  