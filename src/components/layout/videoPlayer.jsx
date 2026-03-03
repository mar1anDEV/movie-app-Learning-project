import { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const HlsPlayer = ({ src, width = "100%", height = "100%", autoPlay = true, loop = true, controls = false, muted = false }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.currentLevel = hls.levels.length - 1;
        if (autoPlay) {
          video.play().catch(console.error);
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, [src, autoPlay]);

  return (
    <video
      className='videoBanner h-full object-cover object-center scale-100 relative z-[1]'
      ref={videoRef}
      width={width}
      height={height}
      controls={controls}
      muted={muted}
      loop={loop}
    />
  );
};

export default HlsPlayer;