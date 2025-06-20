import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utills";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const progressBarRefs = useRef([]);
  const progressFillRefs = useRef([]);
  const sliderRef = useRef(null);

  const [videoState, setVideoState] = useState({
    videoId: 0,
    isPlaying: false,
    isEnd: false,
    isLastVideo: false,
    startPlay: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { videoId, isPlaying, isLastVideo, startPlay } = videoState;

  
  useGSAP(() => {
    gsap.to(sliderRef.current, {
      x: `-${100 * videoId}%`,
      duration: 1,
      ease: "power2.inOut",
    });

    
    gsap.to(videoRefs.current[videoId], {
      scrollTrigger: {
        trigger: videoRefs.current[videoId],
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideoState((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [videoId]);


  useEffect(() => {
    let currentProgress = 0;
    const span = progressFillRefs.current[videoId];

    if (span) {
      const video = videoRefs.current[videoId];
      const duration = hightlightsSlides[videoId].videoDuration;

      const anim = gsap.to(span, {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(progressBarRefs.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span, {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(progressBarRefs.current[videoId], { width: "12px" });
            gsap.to(span, { backgroundColor:"white" });
          }
        },
      });

      const updateProgress = () => {
        if (video && duration) {
          anim.progress(video.currentTime / duration);
        }
      };

      if (isPlaying) {
        gsap.ticker.add(updateProgress);
      } else {
        gsap.ticker.remove(updateProgress);
      }
    }
  }, [videoId, startPlay]);


  useEffect(() => {
    const video = videoRefs.current[videoId];
    if (loadedData.length > 3) {
      if (!isPlaying) {
        video.pause();
      } else {
        startPlay && video.play();
      }
    }
  }, [videoId, isPlaying, startPlay, loadedData]);

  const handleVideoProcess = (type, index) => {
    switch (type) {
      case "video-end":
        setVideoState((prev) => ({
          ...prev,
          isEnd: true,
          videoId: index + 1,
        }));
        break;
      case "video-last":
        setVideoState((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideoState({ videoId: 0, isPlaying: false, isEnd: false, isLastVideo: false, startPlay: false });
        break;
      case "play":
      case "pause":
        setVideoState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        break;
    }
  };

  const handleLoadedMetadata = (i, e) => {
    setLoadedData((prev) => [...prev, e]);
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex transition-wrapper" ref={sliderRef}>
          {hightlightsSlides.map((slide, i) => (
            <div
              key={slide.id}
              className="slider-item min-w-full sm:pr-20 pr-10 video-carousel_container "
            >
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  className={`${
                    slide.id === 2 ? "translate-x-44" : ""
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  playsInline
                  ref={(el) => (videoRefs.current[i] = el)}
                  onEnded={() =>
                    i !== hightlightsSlides.length - 1
                      ? handleVideoProcess("video-end", i)
                      : handleVideoProcess("video-last")
                  }
                  onPlay={() =>
                    setVideoState((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map((text, index) => (
                  <p key={index} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-black backdrop-blur rounded-full">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-blue rounded-full relative cursor-pointer"
              ref={(el) => (progressBarRefs.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (progressFillRefs.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
  
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={() =>
              isLastVideo
                ? handleVideoProcess("video-reset")
                : handleVideoProcess(isPlaying ? "pause" : "play")
            }
  
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
