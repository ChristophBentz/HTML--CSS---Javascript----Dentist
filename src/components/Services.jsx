import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="bg-gray-50 py-20" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Unsere Dienstleistungen</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Vorsorgeuntersuchungen"
            description="Regelmäßige Kontrollen und professionelle Zahnreinigungen für Ihre Mundgesundheit."
            delay={0.2}
          />
          <ServiceCard
            title="Zahnerhaltung"
            description="Moderne Füllungstherapie und Wurzelbehandlungen mit höchster Präzision."
            delay={0.4}
          />
          <ServiceCard
            title="Implantologie"
            description="Hochwertige Zahnimplantate für eine natürliche und dauerhafte Lösung."
            delay={0.6}
          />
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kontaktieren Sie uns</h3>
              <p className="text-gray-600 mb-4">Für Terminvereinbarungen und Beratung:</p>
              <div className="space-y-2">
                <p className="text-gray-700">Tel: +33 493 594393</p>
                <p className="text-gray-700">E-mail: help@gmail.com</p>
              </div>
            </div>
            <div className="text-gray-600">
              <p className="mb-4">
                Unser freundliches und einfühlsames Team steht Ihnen zur Seite, um Ihre Bedenken zu zerstreuen und Ihnen ein angenehmes Behandlungserlebnis zu bieten.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Termin vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Services;