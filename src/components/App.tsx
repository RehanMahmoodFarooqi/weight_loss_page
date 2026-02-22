import { TabletVideo } from "./components/tablet-video";

/* Free sample videos from Google */
const VIDEO_LEFT =
  "https://weight-loss-page-kfxz.vercel.app/assets/doctor-bcnQ79KC.mp4";
const VIDEO_RIGHT =
  "https://weight-loss-page-kfxz.vercel.app/assets/patient-bcj8IITA.mp4";
const PIP_LEFT =
  "https://weight-loss-page-kfxz.vercel.app/assets/patient-bcj8IITA.mp4";
const PIP_RIGHT =
  "https://weight-loss-page-kfxz.vercel.app/assets/doctor-bcnQ79KC.mp4";

export default function App() {
  return (
    <div className="size-full flex flex-col items-center justify-center bg-[#f5f5f7] min-h-screen overflow-hidden px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        
        
      </div>

      {/* Tablets side by side */}
      <div className="flex items-center justify-center gap-1 md:gap-8 scale-[0.3] sm:scale-[0.42] md:scale-[0.55] lg:scale-[0.7] xl:scale-[0.9] 2xl:scale-100 transition-transform">
        <TabletVideo videoSrc={VIDEO_LEFT} pipVideoSrc={PIP_LEFT} />
        <TabletVideo videoSrc={VIDEO_RIGHT} pipVideoSrc={PIP_RIGHT} mirror />
      </div>
    </div>
  );
}