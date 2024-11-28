// components/home/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/construction-site.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Building Dreams, One Brick at a Time
          </h1>
          <p className="text-xl text-white mb-8">
            Quality construction services for residential and commercial projects
          </p>
          <Link 
            href="/contact"
            className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold 
                     hover:bg-yellow-400 transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
