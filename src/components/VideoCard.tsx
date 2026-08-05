type VideoCardProps = {
  title: string;
  channel: string;
  views: string;
  image: string;
};

function VideoCard({ title, channel, views, image }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">

      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
        />

        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          12:45
        </span>

      </div>

      {/* Info */}
      <div className="flex gap-3 mt-3">

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/100?img=5"
          alt="channel"
          className="w-10 h-10 rounded-full"
        />

        <div>

          <h3 className="font-semibold text-white line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center gap-1 mt-1">
  <p className="text-gray-400 text-sm">
    {channel}
  </p>

  <span className="text-blue-500 text-xs">
    ✔
  </span>
</div>

          <p className="text-gray-500 text-sm">
            {views}
          </p>

        </div>

      </div>

    </div>
  );
}

export default VideoCard;