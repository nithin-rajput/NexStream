import hero from "../assets/hero.jpg";
import { FaPlay, FaCompass } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
        src={hero}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-12">

        <div className="max-w-2xl">

          <p className="text-red-500 uppercase tracking-[0.3em] font-semibold">
            Welcome to
          </p>

          <h1 className="mt-4 text-6xl font-black leading-tight">
            NexStream
          </h1>

          <p className="mt-6 text-xl text-gray-300 leading-8">
            Watch amazing videos, upload your own creations,
            and explore content from creators around the world.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-bold hover:bg-red-700 transition-all duration-300 hover:scale-105">
              Watch Now
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 font-bold hover:bg-white/20 transition">
              <FaCompass />
              Explore
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;