import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Hero from "../components/Hero";
function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 text-white">

        <Hero />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            🔥 Trending
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <VideoCard
              title="Build a Modern Streaming Website"
              channel="NexStream"
              views="120K views • 2 days ago"
              image="https://picsum.photos/600/400?random=1"
            />

            <VideoCard
              title="React + TypeScript Crash Course"
              channel="Code Master"
              views="84K views • 1 week ago"
              image="https://picsum.photos/600/400?random=2"
            />

            <VideoCard
              title="Top 10 AI Tools in 2026"
              channel="Tech World"
              views="230K views • 5 days ago"
              image="https://picsum.photos/600/400?random=3"
            />

            <VideoCard
              title="Create Netflix UI from Scratch"
              channel="Frontend Pro"
              views="310K views • 3 weeks ago"
              image="https://picsum.photos/600/400?random=4"
            />

          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;