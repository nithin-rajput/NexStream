import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="relative w-full h-[500px] rounded-3xl overflow-hidden">

      <img
        src={hero}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-xl">

        <h1 className="text-6xl font-extrabold text-white leading-tight">
          Welcome to
          <span className="text-red-500"> NexStream</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Watch millions of videos, upload your creations,
          and enjoy an immersive streaming experience.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition">
            ▶ Start Watching
          </button>

          <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 py-4 rounded-xl transition">
            Browse
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;