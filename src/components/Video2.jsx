import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides2 } from "../constants";
import { pauseImg, playImg, replayImg } from "../utills";

gsap.registerPlugin(ScrollTrigger);

const Video2 = () => {
  const videoRefs = useRef([]);
  const progressBarRefs = useRef([]);
  const progressFillRefs = useRef([]);
  const sliderRef = useRef(null);

  const [videoState, setVideoState] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = videoState;

 
  useGSAP(() => {
    gsap.to(sliderRef.current, {
      x: `-${100 * videoId}%`,
      duration: 1.5,
      ease: "power2.inOut",
    });

    const currentVideo = videoRefs.current[videoId];
    if (currentVideo) {
      gsap.to(currentVideo, {
        scrollTrigger: {
          trigger: currentVideo,
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
    }
  }, [videoId]);

  
  useEffect(() => {
    let currentProgress = 0;
    const span = progressFillRefs.current[videoId];
    const video = videoRefs.current[videoId];
    const duration = hightlightsSlides2[videoId].videoDuration;

    if (span && video && duration) {
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
              backgroundColor: "white", // Progress fill color
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(progressBarRefs.current[videoId], { width: "12px" });
            gsap.to(span, { backgroundColor: "#afafaf" }); // After completion color
          }
        },
      });

      const updateProgress = () => {
        anim.progress(video.currentTime / duration);
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
    if (loadedData.length >= hightlightsSlides2.length && video) {
      if (isPlaying && startPlay) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);


  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideoState((prev) => ({
          ...prev,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideoState((prev) => ({
          ...prev,
          isLastVideo: true,
        }));
        break;
      case "video-reset":
        setVideoState({
          isEnd: false,
          startPlay: false,
          videoId: 0,
          isLastVideo: false,
          isPlaying: false,
        });
        break;
      case "play":
      case "pause":
        setVideoState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        break;
    }
  };

  const handleLoadedMetaData = (i, e) => {
    setLoadedData((prev) => [...prev, e]);
  };

  return (
    <>
      <div className="overflow-hidden ">
        <div className="flex transition-wrapper" ref={sliderRef}>
          {hightlightsSlides2.map((list, i) => (
            <div
              key={list.id}
              // Changed justify-end to justify-start for left alignment
              // Added pl-8 (padding-left) to control spacing from left edge
              className="min-w-full sm:pr-20 pr-10 video-carousel_container flex justify-start items-center p-4" //
            >
              <div className="w-full h-full flex-center rounded-[30px] overflow-hidden bg-black relative">
                <video
                  className={`${
                    list.id === 2 ? "translate-x-44" : ""
                  } w-full h-full object-contain pointer-events-none`}
                  playsInline
                  preload="auto"
                  muted
                  ref={(el) => (videoRefs.current[i] = el)}
                  onEnded={() =>
                    i !== hightlightsSlides2.length - 1
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideoState((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>

                {/* Text overlay needs to be absolutely positioned relative to its parent .video-carousel_container or the black box */}
                {/* Positioned to left edge with padding */}
                <div className="absolute top-12 md:top-20 lg:top-24 left-[10%] text-left z-10 w-full"> {/* Adjusted to left edge, and text-left */}
                  {list.textLists.map((text, idx) => (
                    <p key={idx} className="md:text-4xl text-2xl font-bold text-white mb-2">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-white backdrop-blur rounded-full shadow-lg"> {/* Changed background to white, added shadow */}
          {hightlightsSlides2.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-400 rounded-full relative cursor-pointer" // Base dot color changed to gray-400
              ref={(el) => (progressBarRefs.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full bg-black" // Fill color changed to black
                ref={(el) => (progressFillRefs.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn bg-white rounded-full p-3 shadow-lg ml-4"> {/* Control button style update */}
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={() =>
              isLastVideo
                ? handleProcess("video-reset")
                : handleProcess(isPlaying ? "pause" : "play")
            }
            className="w-7 h-" // Ensure image size
          />
        </button>
      </div>
    </>
  );
};

export default Video2;