import React, { useState } from 'react';
import { Youtube, Play, Star, Sparkles, Tv, Bell, Award, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { videos } from '../data';

export default function YouTube() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handleVisitChannel = () => {
    window.open('https://www.youtube.com/c/rajsirdelhi', '_blank', 'noopener,noreferrer');
  };

  const featuredVideo = videos[0];
  const sideVideos = videos.slice(1);

  return (
    <div id="youtube-page-container">
      {/* 1. HERO SECTION */}
      <section id="youtube-hero" className="bg-gradient-to-b from-blue-50/50 via-white to-bg-main py-16 text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-6">
          <span
            id="youtube-badge"
            className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-600 border border-red-200/50"
          >
            <Youtube className="h-4 w-4" />
            Official Channel
          </span>
          <h1 id="youtube-title" className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Learn for Free on <span className="text-red-600">YouTube</span>
          </h1>
          <p id="youtube-subtext" className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Join over 500,000+ students mastering Spoken English, Goethe German, and Chinese conversational grammar keys without paying a single rupee.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              id="youtube-channel-visit-btn"
              variant="dark"
              onClick={handleVisitChannel}
              className="bg-red-600 hover:bg-red-700 text-white hover:shadow-red-500/10"
            >
              <Youtube className="h-4 w-4 fill-white shrink-0" />
              <span>Visit Channel ↗</span>
            </Button>
          </div>

          {/* Trust Row */}
          <div id="youtube-trust" className="flex items-center justify-center gap-3 pt-4">
            <div className="flex -space-x-2">
              <img className="h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop" alt="Student" />
              <img className="h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop" alt="Student" />
              <img className="h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop" alt="Student" />
            </div>
            <span className="text-xs text-text-secondary font-semibold">Trusted by 500k+ free learners globally</span>
          </div>
        </div>
      </section>

      {/* 2. LATEST LESSONS SECTION (Immersive Dark Layout) */}
      <section id="lessons-dark-section" className="bg-dark-inverse text-dark-text py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          
          <div className="text-left space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">Latest Lessons</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
              High-Impact Video Lectures
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Click any lesson card to play the complete video class directly inside your browser player.
            </p>
          </div>

          {/* Asymmetrical Layout: 1 Large Featured Card + Side Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            
            {/* 1 Large Featured Video Card (Left side) */}
            <div
              id="featured-video-card"
              onClick={() => setActiveVideoId(featuredVideo.youtubeId)}
              className="lg:col-span-7 bg-dark-inverse-alt rounded-3xl overflow-hidden border border-gray-800 hover:border-red-600/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-video w-full bg-gray-900 relative overflow-hidden">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-75 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 fill-white ml-1" />
                  </span>
                </div>
                <span className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 text-xs font-bold rounded-md text-white">
                  {featuredVideo.duration}
                </span>
                <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded shadow-md">
                  Featured Lecture
                </span>
              </div>
              
              <div className="p-8 text-left space-y-4">
                <h3 className="font-sans text-xl font-bold text-white leading-snug group-hover:text-red-400 transition-colors">
                  {featuredVideo.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Learn how to construct native-like tenses in spoken situations without committing translation pauses. Specially formulated grammar keys for bilingual Hindi learners.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80 text-xs text-gray-500">
                  <span>{featuredVideo.views}</span>
                  <span>•</span>
                  <span>Published {featuredVideo.uploadedAt}</span>
                </div>
              </div>
            </div>

            {/* Side Grid of Medium Cards (Right side) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {sideVideos.map((vid) => (
                <div
                  id={`side-video-row-${vid.id}`}
                  key={vid.id}
                  onClick={() => setActiveVideoId(vid.youtubeId)}
                  className="bg-dark-inverse-alt rounded-2xl p-4 border border-gray-800 hover:border-red-600/30 transition-all duration-300 cursor-pointer group flex gap-4 items-center"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video w-32 bg-gray-900 rounded-lg overflow-hidden relative shrink-0">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow">
                        <Play className="h-3 w-3 fill-white ml-0.5" />
                      </span>
                    </div>
                  </div>
                  {/* Meta */}
                  <div className="text-left space-y-1">
                    <h4 className="font-sans font-semibold text-white text-xs sm:text-sm line-clamp-2 leading-snug group-hover:text-red-400 transition-colors">
                      {vid.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                      <span>{vid.views}</span>
                      <span>•</span>
                      <span>{vid.uploadedAt}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Extra placeholder info box */}
              <div className="bg-red-600/5 rounded-2xl p-6 border border-red-600/10 text-left space-y-3">
                <div className="flex items-center gap-2.5 text-red-500">
                  <Bell className="h-5 w-5 animate-bounce-slow" />
                  <h4 className="font-sans font-bold text-sm text-white">Turn on Notifications</h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We publish new translation drills, Goethe preparation checklists, and vocabulary lists every Monday and Friday. Subscribe and hit the bell icon!
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. STYLIZED ROUNDED CTA BANNER CARD */}
      <section id="youtube-cta-banner" className="bg-bg-main py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="bg-primary text-white rounded-3xl py-12 px-8 md:px-16 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Left side: Heading & Stats */}
            <div className="space-y-8 max-w-xl">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                Never miss a lesson. Subscribe for daily updates.
              </h3>
              
              {/* Stats Block */}
              <div className="flex flex-row gap-8 justify-center md:justify-start items-center">
                <div className="text-left">
                  <p className="text-3xl font-extrabold text-white tracking-tight">520K+</p>
                  <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mt-0.5">Subscribers</p>
                </div>
                <div className="h-8 w-px bg-blue-400/30"></div>
                <div className="text-left">
                  <p className="text-3xl font-extrabold text-white tracking-tight">1,200+</p>
                  <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mt-0.5">Videos Published</p>
                </div>
              </div>
            </div>

            {/* Right side: Button & Subtext */}
            <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
              <Button
                id="youtube-subscribe-bottom-btn"
                variant="solid-white"
                onClick={handleVisitChannel}
                className="rounded-full px-8 py-3.5 text-primary hover:bg-blue-50 transition-all font-bold flex items-center gap-2 text-sm shadow-md"
              >
                <span>Subscribe Now</span>
                <span className="text-base">🔔</span>
              </Button>
              <p className="text-blue-200 text-xs tracking-wide">
                Join the fastest growing language community
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Play Video modal */}
      {activeVideoId && (
        <div
          id="youtube-player-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-gray-800" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors border border-gray-700 font-bold cursor-pointer"
            >
              ✕
            </button>
            <iframe
              title="Raj Sir YouTube Video Player"
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
