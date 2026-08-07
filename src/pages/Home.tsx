import VideoSection from "../components/VideoSection";                               import Sidebar from "../components/Sidebar";

import Hero from "../components/Hero";
import Categories from "../components/Categories";   
function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 text-white">

        <Hero />
        <Categories />

       <VideoSection title="🔥 Trending" />
<VideoSection title="🎮 Gaming" />
<VideoSection title="🎌 Anime" />
<VideoSection title="💻 Coding" />
<VideoSection title="🤖 AI Picks" />

      </main>
    </div>
  );
}

export default Home; 
