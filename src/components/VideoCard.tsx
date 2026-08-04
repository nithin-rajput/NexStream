type VideoCardProps = {
  title: string;
  channel: string;
  views: string;
  image: string;
};

function VideoCard({ title, channel, views, image }: VideoCardProps) {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg text-white line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-400 mt-2">
          {channel}
        </p>

        <p className="text-gray-500 text-sm">
          {views}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;