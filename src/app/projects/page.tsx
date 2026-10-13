'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getProjects, getProjectImages, ProjectItem } from '@/lib/projects';
import AppImage from '@/components/ui/AppImage';
import Lightbox, { LightboxItem } from '@/components/ui/Lightbox';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export default function ProjectsPage() {
  const projects = getProjects();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;
  const projectPhotos = activeProject ? getProjectImages(activeProject) : [];

  const currentLightboxItem: LightboxItem | null = activeProject
    ? {
        image: projectPhotos[activePhotoIndex] || activeProject.image,
        images: projectPhotos,
        currentIndex: activePhotoIndex,
        title: activeProject.title,
        category: activeProject.category || activeProject.serviceCategory,
        description: activeProject.description,
      }
    : null;

  // Browse photographs belonging to the opened project
  const handleNext = () => {
    if (activePhotoIndex < projectPhotos.length - 1) {
      setActivePhotoIndex(activePhotoIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activePhotoIndex > 0) {
      setActivePhotoIndex(activePhotoIndex - 1);
    }
  };

  const handleSelectIndex = (idx: number) => {
    if (idx >= 0 && idx < projectPhotos.length) {
      setActivePhotoIndex(idx);
    }
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <main className="bg-[#F7F3EC] text-[#171717] min-h-screen py-18 sm:py-26 selection:bg-[#C46A3A]/20 selection:text-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#171717]/60 hover:text-[#C46A3A] transition-colors"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-3 block">
              Completed Work
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#171717] tracking-tight">
              Our Completed Projects
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#171717]/75 leading-relaxed font-light">
              Explore authentic interior craftsmanship and furniture executed for homeowners in
              Dhayari, Pune. Click any project to open and browse all its photographs.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C46A3A] hover:bg-[#b05c30] text-white text-xs sm:text-sm font-semibold button-elevation self-start md:self-auto"
          >
            <span>Discuss a Similar Project</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Projects Grid with Tactile White Cards and Soft Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const allPhotos = getProjectImages(project);
            const photoCount = allPhotos.length;

            return (
              <div
                key={project.id}
                onClick={() => {
                  setActiveProjectIndex(index);
                  setActivePhotoIndex(0);
                }}
                className="group cursor-pointer bg-white border border-[#E8DED0] rounded-3xl overflow-hidden card-elevation flex flex-col hover:border-[#C46A3A]/40 transition-all duration-300"
              >
                {/* Image Frame */}
                <div className="relative w-full h-72 sm:h-80 bg-[#171717] overflow-hidden">
                  <AppImage
                    src={project.image}
                    alt={project.title || 'Ocean Kitchen & Interior completed project'}
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

                  {/* Hover Inspect Icon */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-[#171717] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Information */}
                <div className="p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {(project.category || project.serviceCategory) && (
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C46A3A] block mb-1.5">
                        {project.category || project.serviceCategory}
                      </span>
                    )}
                    {project.title && (
                      <h2 className="text-xl font-serif font-bold text-[#171717] tracking-tight group-hover:text-[#C46A3A] transition-colors">
                        {project.title}
                      </h2>
                    )}
                    {project.description && (
                      <p className="mt-2.5 text-xs sm:text-sm text-[#171717]/70 line-clamp-2 leading-relaxed font-light">
                        {project.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8DED0]/70 flex items-center justify-between text-xs text-[#171717]/60">
                    <span className="font-light">Ocean Kitchen &amp; Interior</span>
                    <span className="text-[#C46A3A] font-semibold group-hover:underline flex items-center gap-1">
                      {photoCount > 1 ? `View All ${photoCount} Photos` : 'View Project'} &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Real Work */}
        <div className="mt-16 p-7 rounded-3xl bg-white border border-[#E8DED0] text-center max-w-2xl mx-auto card-elevation">
          <p className="text-xs sm:text-sm text-[#171717]/75 font-light">
            More completed site photographs are regularly added as projects finish.
            Follow our Instagram{' '}
            <a
              href="https://instagram.com/ocean_kitchen_and_interior"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C46A3A] font-semibold hover:underline"
            >
              @ocean_kitchen_and_interior
            </a>{' '}
            for our latest site updates.
          </p>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <Lightbox
        item={currentLightboxItem}
        onClose={() => {
          setActiveProjectIndex(null);
          setActivePhotoIndex(0);
        }}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={activePhotoIndex < projectPhotos.length - 1}
        hasPrev={activePhotoIndex > 0}
        onSelectIndex={handleSelectIndex}
      />
    </main>
  );
}
