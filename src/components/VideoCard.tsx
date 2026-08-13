type VideoCardProps = {
  id: number;
  title: string;
  channel: string;
  views: string;
  image: string;
  duration: string;
  avatar: string;
};import { useNavigate } from "react-router-dom";

function VideoCard({ id, title, channel, views, image,duration, avatar }:
  
  VideoCardProps) {const navigate = useNavigate();
  return (
    <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
      {/* Thumbnail */}
      <div
  className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
  onClick={() => navigate(`/watch/${id}`)}
>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
{/* Play Button */}
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl transition-all duration-200 group-hover:scale-110">
    <span className="text-black text-xl ml-1">▶</span>
  </div>
</div>
        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
  {duration}
</span>
      </div>

      {/* Info */}
      <div className="flex gap-3 mt-3">
        {/* Avatar */}
        <img
          src={avatar}
          alt={channel}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="min-w-0">
          <h3 className="font-semibold text-white line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            {channel}
          </p>

          <p className="text-gray-500 text-sm">
            {views}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;