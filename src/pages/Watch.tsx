import { useParams } from "react-router-dom";
import videos from "../data/videos";

function Watch() {
  const { id } = useParams();

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
      <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden">
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Video Info */}
      <div className="mt-6">

        <h1 className="text-3xl font-bold">
          {video.title}
        </h1>

        {/* Channel */}
        <div className="flex items-center gap-4 mt-4">

          <img
            src={video.avatar}
            alt={video.channel}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold">
              {video.channel}
            </p>

            <p className="text-gray-500 text-sm">
              {video.views}
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="mt-6 bg-[#181818] rounded-xl p-5">

          <p className="text-gray-300 leading-7">
            Enjoy this video on NexStream.
            More amazing content is coming soon.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Watch;