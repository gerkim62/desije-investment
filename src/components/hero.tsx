// components/home/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';

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

      {/* Logo */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-6 sm:top-6 z-20">
        <div className="bg-white/90 p-1 rounded-full shadow-lg">
          <Image
            src="/logo.jpg" // Make sure to add your logo file in the public folder
            alt="Company Logo"
            width={120}
            height={120}
            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain rounded-full"
          />
        </div>
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
            href="#contact"
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
