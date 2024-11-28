/* eslint-disable react/no-unescaped-entities */
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
    id='contact'
     className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our construction services. 
            We're here to help bring your construction projects to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Numbers */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaPhone className="text-yellow-500 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Main: 0705831435</p>
                  <p className="text-gray-600">Alt: 0745799990</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-yellow-500 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 break-words">
                    dasijeinvestmentltd@gmail.com
                  </p>
                 
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-yellow-500 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
                </div>
                <p className="text-gray-600">
                  PO Box 57-20400,<br />
                  Chebunyo, Bomet
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaClock className="text-yellow-500 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Monday - Friday: 8AM - 5PM</p>
                  <p className="text-gray-600">Saturday: 9AM - 2PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you're planning a new construction project or need renovation 
                services, our team is here to help. Contact us today to discuss your 
                construction needs and get a free consultation.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <svg 
                    className="w-5 h-5 text-green-500 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-gray-700">Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <svg 
                    className="w-5 h-5 text-green-500 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-gray-700">Project Estimates</span>
                </div>
                <div className="flex items-center">
                  <svg 
                    className="w-5 h-5 text-green-500 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-gray-700">Expert Advice</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=chebunyo+eldoret&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
