"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function VideoShowcase() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-bg-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent-light mb-2 block">
            {String(t("videoShowcase.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-white mb-3">
            {String(t("videoShowcase.title"))}
          </h2>
          <p className="text-white/80 text-base">
            {String(t("videoShowcase.subtitle"))}
          </p>
        </div>

        {/* Video Player Box */}
        <Reveal>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] shadow-2xl border border-white/10 bg-black">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={() => setIsPlaying(true)}>
                <img
                  src="https://images.pexels.com/videos/4490546/pexels-photo-4490546.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
                  alt="Instalaciones Clínica Dental Universitaria"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition" />
                
                {/* Play Action Text Button */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="px-6 py-3 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-widest shadow-xl group-hover:scale-105 transition">
                    ▶ {String(t("videoShowcase.playText"))}
                  </div>
                </div>
              </div>
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                <source src="https://videos.pexels.com/video-files/4490546/4490546-hd_1280_720_50fps.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
