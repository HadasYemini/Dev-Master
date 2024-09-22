import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

// Define the type for the video object
interface Video {
  src: string;
  title: string;
}

export default function VideoPage() {
  const location = useLocation();
  const { videos } = location.state || { videos: [] as Video[] };
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    // If there's only one video, set it as selected automatically
    if (videos.length === 1) {
      setSelectedVideo(videos[0].src);
    }
  }, [videos]);

  const handleOpen = (src: string) => {
    setSelectedVideo(src);
  };

  const handleClose = () => {
    console.log("Closing video");
    setSelectedVideo(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Choose a Video</h2>
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video: Video) => ( 
          <button 
            key={video.src} 
            className="bg-gray-200 p-4 rounded shadow hover:bg-gray-300"
            onClick={() => handleOpen(video.src)}
          >
            {video.title}
          </button>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <div
              className="absolute top-2 right-2 flex items-center justify-center cursor-pointer w-12 h-12 z-10" 
              onClick={handleClose}
            >
              <button className="bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition w-full h-full flex items-center justify-center">
                X
              </button>
            </div>
            <VideoPlayer src={selectedVideo} autoPlay controls />
          </div>
        </div>
      )}
    </div>
  );
}
