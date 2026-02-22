import { useRef, useEffect } from "react";
import { Video, Phone, Mic } from "lucide-react";
import imgTablet from "figma:asset/7f01018859caf81f97f96641a370d4856ae31904.png";

interface TabletVideoProps {
  videoSrc: string;
  pipVideoSrc?: string;
  mirror?: boolean;
}

export function TabletVideo({ videoSrc, pipVideoSrc, mirror = false }: TabletVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pipRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
    pipRef.current?.play().catch(() => {});
  }, []);

  /*
   * The tablet image is a perspective view of a tablet (left side closer).
   * We overlay a video on the white screen area and use mix-blend-mode: multiply
   * on the tablet frame so:
   *  - White screen pixels → video shows through (1 × color = color)
   *  - Dark bezel pixels  → video is hidden     (0 × color = 0)
   *
   * The video also gets a slight 3D transform to give the content
   * a natural perspective matching the tablet's angle.
   */

  return (
    <div
      className="relative shrink-0"
      style={{
        width: 950,
        height: 525,
        transform: mirror ? "scaleX(-1)" : undefined,
      }}
    >
      {/* Video layer — positioned over the screen area */}
      <video
        ref={videoRef}
        className="absolute object-cover rounded-md"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          /* Inset values to align with the white screen of the tablet */
          top: "13%",
          left: "26%",
          width: "52%",
          height: "69%",
          zIndex: 1,
          /* Perspective tilt to match the tablet's viewing angle */
          transform: "perspective(5000px) rotateY(30deg) rotateX(32deg)",
          transformOrigin: "50% 65%",
        }}
      />

      {/* PiP self-view — small video in the top-right of the screen */}
      {pipVideoSrc && (
        <video
          ref={pipRef}
          className="absolute object-cover rounded-sm"
          src={pipVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            top: "24%",
            left: "59%",
            width: "8%",
            height: "10%",
            zIndex: 1,
            transform: "perspective(1200px) rotateY(28deg) rotateX(32deg)",
            transformOrigin: "50% 50%",
            borderRadius: 4,
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        />
      )}

      {/* Call action buttons — positioned at bottom of screen area */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: "69%",
          left: "29%",
          width: "52%",
          height: "auto",
          zIndex: 3,
          transform: "perspective(5000px) rotateY(30deg) rotateX(32deg)",
          transformOrigin: "50% 65%",
          gap: 10,
        }}
      >
        <button
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            backgroundColor: "rgba(31,41,55,0.8)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transform: mirror ? "scaleX(-1)" : undefined,
          }}
        >
          <Video size={16} color="#ffffff" />
        </button>
        <button
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            backgroundColor: "rgba(239,68,68,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transform: mirror ? "scaleX(-1)" : undefined,
          }}
        >
          <Phone size={16} color="#ffffff" />
        </button>
        <button
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            backgroundColor: "rgba(31,41,55,0.8)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transform: mirror ? "scaleX(-1)" : undefined,
          }}
        >
          <Mic size={16} color="#ffffff" />
        </button>
      </div>

      {/* Tablet frame on top — multiply blend lets video shine through white screen */}
      <img
        src={imgTablet}
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
        style={{
          zIndex: 2,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}