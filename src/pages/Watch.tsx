import { useNavigate, useParams } from "react-router-dom";
import videos from "../data/videos";
import demoVideo from "../assets/videos/demo.mp4";
import { FaThumbsUp, FaShareAlt, FaBookmark } from "react-icons/fa";
import {useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";

function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
const [saved, setSaved] = useState(false);
const [comment, setComment] = useState("");
 const [comments, setComments] = useState<
  Record<number, { text: string }[]>
>(() => {
  const savedComments = localStorage.getItem("nexstream-comments");

  if (savedComments) {
    return JSON.parse(savedComments);
  }

  return {};
});

const [commentsLoaded, setCommentsLoaded] = useState(false);

useEffect(() => {
  setCommentsLoaded(true);
}, []);

useEffect(() => {
  if (!commentsLoaded) return;

  localStorage.setItem(
    "nexstream-comments",
    JSON.stringify(comments)
  );
}, [comments, commentsLoaded]);

  const video = videos.find((video) => video.id === Number(id));
  const relatedVideos = videos.filter(
  (item) => item.id !== Number(id)
);

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
{/* Comments */}
<div className="mt-10">

  <h2 className="text-2xl font-bold mb-6">
    Comments
  </h2>

  {/* Comment Input */}
  <div className="flex gap-3">

    <input
      type="text"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder="Add a comment..."
      className="flex-1 bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition"
    />

    <button
  onClick={() => {
    if (comment.trim() === "") return;

    setComments({
  ...comments,
  [video.id]: [...(comments[video.id] || []), { text: comment }]
});
    setComment("");
  }}
  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition"
>
  Comment
</button> 

<div className="mt-6 space-y-4">

  {(comments[video.id] || []).map((item, index) => (
  <div
    key={index}
    className="bg-[#181818] rounded-xl p-4 border border-white/5 flex items-center justify-between gap-4"
  >

    <div>
      <p className="text-gray-500 text-xs mb-1">
        You
      </p>

      <p className="text-gray-300">
        {item.text}
      </p>
    </div>

    <button
      onClick={() => {
        const updatedComments = (comments[video.id] || []).filter(
          (_, commentIndex) => commentIndex !== index
        );

        setComments({
          ...comments,
          [video.id]: updatedComments,
        });
      }}
      className="text-gray-500 hover:text-red-500 transition"
    >
      Delete
    </button>

  </div>
))}

</div>
  </div>

</div>

      </div>
      
{/* Related Videos */}
<div className="mt-12">

  <h2 className="text-2xl font-bold mb-6">
    Up Next
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {relatedVideos.map((item) => (
      <div
        key={item.id}
        onClick={() => navigate(`/watch/${item.id}`)}
        className="cursor-pointer"
      >
        <VideoCard
          id={item.id}
          title={item.title}
          channel={item.channel}
          views={item.views}
          image={item.image}
          duration={item.duration}
          avatar={item.avatar}
        />
      </div>
    ))}

  </div>

</div>

    </div>
  );
}

export default Watch;