/* eslint-disable react/no-unescaped-entities */
// components/home/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";

const stats = [
  { id: 1, value: "25+", label: "Years Experience" },
  { id: 2, value: "500+", label: "Projects Completed" },
  { id: 3, value: "100%", label: "Client Satisfaction" },
  { id: 4, value: "50+", label: "Team Members" },
];

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[500px] lg:block hidden">
            <Image
              src="/construction-site.jpg" // You'll need to add this image
              alt="Construction site"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-100 mb-6">
              Building Excellence Since 1998
            </h2>

            <p className="text-gray-300 mb-6">
              With over two decades of experience in the construction industry,
              we've established ourselves as a leader in delivering high-quality
              construction projects. Our commitment to excellence, innovation,
              and customer satisfaction sets us apart from the competition.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-3xl font-bold text-yellow-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-800">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
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
                <span className="text-gray-200">Quality Craftsmanship</span>
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
                <span className="text-gray-200">Professional Team</span>
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
                <span className="text-gray-200">Timely Project Completion</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black 
                         rounded-md font-semibold hover:bg-yellow-400 
                         transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
