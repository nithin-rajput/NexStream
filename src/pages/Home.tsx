import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Hero from "../components/Hero";
import Categories from "../components/Categories";   import videos from "../data/videos";
function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 text-white">

        <Hero />
        <Categories />

        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-8">
            🔥 Trending
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {videos.map((video, index) => (
  <VideoCard
    key={index}
    title={video.title}
    channel={video.channel}
    views={video.views}
    image={video.image}
  />
))}

          </div>
        </section>

      </main>
    </div>
  );
}

export default Home; 
