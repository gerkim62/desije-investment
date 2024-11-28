// components/home/ServicesSection.tsx
import { FaHome, FaBuilding, FaTools, FaRoad } from "react-icons/fa"; // Example icons, replace as needed

const services = [
  {
    id: 1,
    title: "Residential Construction",
    description:
      "Custom homes and residential projects built to your specifications",
    icon: <FaHome size={40} className="text-yellow-500" />,
  },
  {
    id: 2,
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, and industrial facilities",
    icon: <FaBuilding size={40} className="text-yellow-500" />,
  },
  {
    id: 3,
    title: "Renovations",
    description: "Modernize and upgrade existing structures",
    icon: <FaTools size={40} className="text-yellow-500" />,
  },
  {
    id: 4,
    title: "Infrastructure Projects",
    description: "Roads, bridges, and public facility construction",
    icon: <FaRoad size={40} className="text-yellow-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive construction services tailored to meet your
            specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow 
                         duration-300 text-center"
            >
              <div className="inline-block p-4 rounded-full bg-yellow-100 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
