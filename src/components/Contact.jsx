import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    consent: false
  });

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontaktieren Sie uns</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Wir freuen uns darauf, von Ihnen zu hören
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Vorname
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Nachname
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Ihre Nachricht
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="ml-3">
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu
                </label>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-purple-600 py-3 px-8 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-purple-600 text-2xl mb-4">
              <i className="fas fa-phone"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="text-gray-600">+33 493 594393</p>
          </div>
          <div className="p-6">
            <div className="text-purple-600 text-2xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">help@gmail.com</p>
          </div>
          <div className="p-6">
            <div className="text-purple-600 text-2xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Öffnungszeiten</h3>
            <p className="text-gray-600">Mo-Fr: 8:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;