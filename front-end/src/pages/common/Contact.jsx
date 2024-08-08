import React from "react";
import "./Contact.css";
import svg1 from "../../assets/SVG/1 (1).svg";
import svg2 from "../../assets/SVG/1 (2).svg";

const Contact = () => {
    const [result, setResult] = React.useState("");

  const showMessage = (message) => {
    setResult(message);
    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    showMessage("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ce2e85f6-d1f9-46af-9c14-21affbadaaa5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      showMessage("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      showMessage(data.message);
    }
  };
  return (
    <div className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center mb-10 fade-in-up">
          <span className="text-3xl font-zilla text-center mr-4 text-yellow-300">
            Contact{" "}
          </span>
          <span className="text-6xl font-freckle text-white">WolfWalk</span>
        </div>

        <div className="space-y-12">
          <div
            className="flex flex-col md:flex-row md:space-x-8 fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-yellow-300 font-ceviche">
                Get in Touch
              </h3>
              <p className="leading-relaxed font-Caveat">
                We'd love to hear from you! Whether you have a question about
                our products, pricing, or anything else, our team is ready to
                answer all your questions.
              </p>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-gray-900 rounded-lg"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-gray-900 rounded-lg"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 text-gray-900 rounded-lg"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
              <span class="block text-center mt-4 text-lg font-semibold text-green-600 border-green-300 rounded-lg p-3">
                {result}
              </span>
            </div>
            <div className="md:w-1/2">
              <img
                src={svg2}
                alt="Customer Service"
                className="rounded-lg mt-20 ms-12"
              />
            </div>
          </div>

          <div
            className="space-y-4 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-3xl font-ceviche text-yellow-300 text-center">
              Frequently Asked Questions
            </h3>
            <div className="space-y-2 max-w-2xl mx-auto">
              <details className="bg-gray-800 p-4 rounded-lg">
                <summary className="font-bold text-yellow-300">
                  What is the return policy?
                </summary>
                <p className="mt-2">
                  You can return any unworn and unwashed items within 30 days of
                  purchase for a full refund. For more details, visit our return
                  policy page.
                </p>
              </details>
              <details className="bg-gray-800 p-4 rounded-lg">
                <summary className="font-bold text-yellow-300">
                  How do I track my order?
                </summary>
                <p className="mt-2">
                  Once your order has shipped, you will receive an email with a
                  tracking number and a link to track your order. You can also
                  track your order in your account on our website.
                </p>
              </details>
              <details className="bg-gray-800 p-4 rounded-lg">
                <summary className="font-bold text-yellow-300">
                  Do you offer international shipping?
                </summary>
                <p className="mt-2">
                  Yes, we offer international shipping to most countries.
                  Shipping costs and delivery times will vary depending on your
                  location. For more information, please visit our shipping
                  page.
                </p>
              </details>
            </div>
          </div>

          <div
            className="space-y-4 fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-3xl font-ceviche text-yellow-300 text-center">
              Subscribe to Our Newsletter
            </h3>
            <p className="leading-relaxed text-center max-w-2xl mx-auto font-Caveat">
              Stay updated with the latest news and exclusive offers from
              WolfWalk. Subscribe to our newsletter by entering your email
              below.
            </p>
            <form className="max-w-xl mx-auto space-y-4">
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="newsletter-email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-900 rounded-lg"
                  type="email"
                  id="newsletter-email"
                  placeholder="Your Email"
                />
              </div>
              <button
                className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div
            className="space-y-4 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-3xl font-ceviche text-yellow-300 text-center">
              Customer Testimonials
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-Caveat text-xl italic">
                  "WolfWalk shoes are the best I've ever owned. They're stylish,
                  comfortable, and durable. I highly recommend them!"
                </p>
                <p className="mt-2 text-right font-bold">- Alex Johnson</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-Caveat text-xl italic">
                  "The customer service at WolfWalk is outstanding. They helped
                  me find the perfect pair of shoes and ensured I was completely
                  satisfied with my purchase."
                </p>
                <p className="mt-2 text-right font-bold">- Sarah Williams</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-Caveat text-xl italic">
                  "I love that WolfWalk is committed to sustainability. Their
                  eco-friendly practices make me feel good about supporting
                  their brand."
                </p>
                <p className="mt-2 text-right font-bold">- Emily Davis</p>
              </div>
            </div>
          </div>

          <div
            className="space-y-4 fade-in-up flex flex-col items-center"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-3xl font-ceviche text-yellow-300 text-center">
              Our Location
            </h3>
            <p className="leading-relaxed text-center max-w-2xl mx-auto font-Caveat">
              Visit us at our office for a cup of coffee and a fantastic
              consulting team. We are located in the heart of the city and
              always open to meet our valuable customers.
            </p>
            <div className="flex items-center justify-center w-full">
              <img src={svg1} alt="Customer Service" className="mr-12 w-1/4" />
              <iframe
                className="w-2/4 h-64 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2029715967415!2d-122.40641768468145!3d37.78563617975657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818d29c36537%3A0x9c7e2dd13ff9a7a0!2sGoogle%20San%20Francisco!5e0!3m2!1sen!2sus!4v1596720431700!5m2!1sen!2sus"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
