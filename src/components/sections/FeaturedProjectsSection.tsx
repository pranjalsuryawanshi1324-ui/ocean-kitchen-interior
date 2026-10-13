'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getFeaturedProjects, getProjectImages, ProjectItem } from '@/lib/projects';
import AppImage from '@/components/ui/AppImage';
import Lightbox, { LightboxItem } from '@/components/ui/Lightbox';

export function FeaturedProjectsSection() {
  const featured = getFeaturedProjects();
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const activePhotos = activeProject ? getProjectImages(activeProject) : [];

  const currentLightboxItem: LightboxItem | null = activeProject
    ? {
        image: activePhotos[activePhotoIndex] || activeProject.image,
        images: activePhotos,
        currentIndex: activePhotoIndex,
        title: activeProject.title,
        category: activeProject.category || activeProject.serviceCategory,
        description: activeProject.description,
      }
    : null;

  const handleNext = () => {
    if (activePhotoIndex < activePhotos.length - 1) {
      setActivePhotoIndex(activePhotoIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activePhotoIndex > 0) {
      setActivePhotoIndex(activePhotoIndex - 1);
    }
  };

  const handleSelectIndex = (idx: number) => {
    if (idx >= 0 && idx < activePhotos.length) {
      setActivePhotoIndex(idx);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#E8DED0]/35 text-[#171717] border-b border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-2.5 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
              Our Projects
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#171717]/75 font-light">
              A glimpse of the spaces we&apos;ve created across Dhayari and Pune.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#171717] text-[#171717] hover:text-white text-xs sm:text-sm font-semibold border border-[#E8DED0] hover:border-transparent transition-all duration-200 card-elevation hover:-translate-y-0.5"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4 text-[#C46A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Responsive Grid with Subtle 3D Card Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => {
            const allPhotos = getProjectImages(project);
            const photoCount = allPhotos.length;

            return (
              <div
                key={project.id}
                onClick={() => {
                  setActiveProject(project);
                  setActivePhotoIndex(0);
                }}
                className="group cursor-pointer bg-white border border-[#E8DED0] rounded-3xl overflow-hidden card-elevation flex flex-col hover:border-[#C46A3A]/40 transition-all duration-300"
              >
                {/* Image Frame */}
                <div className="relative w-full h-72 sm:h-80 bg-[#171717] overflow-hidden">
                  <AppImage
                    src={project.image}
                    alt={project.title || 'Ocean Kitchen & Interior project work'}
                    categoryLabel={project.category || project.serviceCategory}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Multi-photo indicator badge */}
                  {photoCount > 1 && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171717]/80 backdrop-blur-md text-white border border-white/20 text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                      <svg className="w-3.5 h-3.5 text-[#C46A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{photoCount} Photos</span>
                    </div>
                  )}

                  {/* Subtle Enlarge Prompt */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-[#171717] shadow-md">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Information */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {(project.category || project.serviceCategory) && (
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C46A3A] block mb-1.5">
                        {project.category || project.serviceCategory}
                      </span>
                    )}
                    {project.title && (
                      <h3 className="text-lg font-serif font-bold text-[#171717] tracking-tight group-hover:text-[#C46A3A] transition-colors">
                        {project.title}
                      </h3>
                    )}
                    {project.description && (
                      <p className="mt-2 text-xs sm:text-sm text-[#171717]/70 line-clamp-2 leading-relaxed font-light">
                        {project.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#E8DED0]/70 flex items-center justify-between text-xs text-[#171717]/60">
                    <span className="font-light">Ocean Kitchen &amp; Interior</span>
                    <span className="text-[#C46A3A] font-semibold group-hover:underline">
                      {photoCount > 1 ? `View ${photoCount} Photos` : 'Preview'} &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        item={currentLightboxItem}
        onClose={() => {
          setActiveProject(null);
          setActivePhotoIndex(0);
        }}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={activePhotoIndex < activePhotos.length - 1}
        hasPrev={activePhotoIndex > 0}
        onSelectIndex={handleSelectIndex}
      />
    </section>
  );
}

export default FeaturedProjectsSection;
