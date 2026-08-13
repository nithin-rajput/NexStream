import { useParams } from "react-router-dom";
import videos from "../data/videos";
import demoVideo from "../assets/videos/demo.mp4";
import { FaThumbsUp, FaShareAlt, FaBookmark } from "react-icons/fa";
import { useState } from "react";

function Watch() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
const [saved, setSaved] = useState(false);

  const video = videos.find((video) => video.id === Number(id));

  if (!video) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Video not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">

      {/* Video Player */}
<div className="w-full bg-black rounded-2xl overflow-hidden shadow-2xl">

  {/* Player Header */}
  <div className="flex items-center justify-between bg-gradient-to-r from-[#181818] to-[#222] px-5 py-3 border-b border-white/10">
    <span className="text-white font-bold tracking-wider text-lg">
  Nex<span className="text-red-500">Stream</span>
</span>

    <span className="text-gray-500 text-sm">
      Now Playing
    </span>
  </div>

  {/* Video */}
  <div className="w-full aspect-video">
    <video
      src={demoVideo}
      controls
      poster={video.image}
      className="w-full h-full object-contain"
    />
  </div>

</div>
      {/* Video Info */}
      <div className="mt-8">

        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
  {video.title}
</h1>

        {/* Channel */}
        <div className="flex items-center gap-4">


           <img
    src={video.avatar}
    alt={video.channel}
    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
  />

  <div>
    <p className="font-semibold text-lg">
      {video.channel}
    </p>

    <p className="text-gray-500 text-sm">
      {video.views}
    </p>
  </div>   <div className="flex items-center gap-3">

  <button
  onClick={() => setLiked(!liked)}
  className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
    liked
      ? "bg-red-600 text-white"
      : "bg-[#222] hover:bg-[#333] text-white"
  }`}
>
  <FaThumbsUp />
  <span>{liked ? "Liked" : "Like"}</span>
</button>

  <button
  onClick={() => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: `Watch "${video.title}" on NexStream`,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Video link copied!");
    }
  }}
  className="flex items-center gap-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-full transition"
>
  <FaShareAlt />
  <span>Share</span>
</button>

 <button
  onClick={() => setSaved(!saved)}
  className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
    saved
      ? "bg-yellow-500 text-black"
      : "bg-[#222] hover:bg-[#333] text-white"
  }`}
>
  <FaBookmark />
  <span>{saved ? "Saved" : "Save"}</span>
</button>

</div>

</div>

        {/* Description */}
        <div className="mt-6 bg-[#181818] rounded-xl p-5 border border-white/5">
  <p className="text-gray-300 leading-7">
    Enjoy this video on NexStream. Discover amazing content,
    learn something new, and explore more videos from creators
    around the world.
  </p>
</div>

      </div>

    </div>
  );
}

export default Watch;