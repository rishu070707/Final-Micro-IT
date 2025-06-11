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

  // Animate slider and video on videoId change
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

  // Progress bar animation
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
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(progressBarRefs.current[videoId], { width: "12px" });
            gsap.to(span, { backgroundColor: "#afafaf" });
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

  // Play/pause video when state changes
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

  // Handle video state transitions
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
      <div className="overflow-hidden">
        <div className="flex transition-wrapper" ref={sliderRef}>
          {hightlightsSlides2.map((list, i) => (
            <div
              key={list.id}
              className="min-w-full sm:pr-20 pr-10 video-carousel_container"
            >
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  className={`${
                    list.id === 2 ? "translate-x-44" : ""
                  } pointer-events-none`}
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
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, idx) => (
                  <p key={idx} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {hightlightsSlides2.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
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
                ? handleProcess("video-reset")
                : handleProcess(isPlaying ? "pause" : "play")
            }
          />
        </button>
      </div>
    </>
  );
};

export default Video2;
