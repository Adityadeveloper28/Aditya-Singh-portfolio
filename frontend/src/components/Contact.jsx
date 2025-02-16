import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { toast } from "react-hot-toast";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

   toast.success("Message sent successfully!");

    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-[#130816] text-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-400" />
                    <span>singhadi280303@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-400" />
                    <span>7678029899</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-400" />
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-800 focus:border-blue-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-800 focus:border-blue-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-800 focus:border-blue-400 focus:outline-none transition-colors"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg font-medium cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
