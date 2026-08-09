import VideoCard from "./VideoCard";
import videos from "../data/videos";

type VideoSectionProps = {
  title: string;
};

function VideoSection({ title }: VideoSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            channel={video.channel}
            views={video.views}
            image={video.image}      duration={video.duration}    avatar={video.avatar}
          />
        ))}
      </div>
    </section>
  );
}

export default VideoSection;