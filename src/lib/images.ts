/**
 * Asset paths and helper utilities for local images in Ocean Kitchen & Interior.
 * All image assets under public/ are served from the root path '/images/...'.
 */

export const ASSET_PATHS = {
  logo: '/images/logo',
  projects: '/images/projects',
  services: '/images/services',
} as const;

export function getLogoPath(filename: string): string {
  return `${ASSET_PATHS.logo}/${filename.replace(/^\/+/, '')}`;
}

export function getProjectPath(filename: string): string {
  return `${ASSET_PATHS.projects}/${filename.replace(/^\/+/, '')}`;
}

export function getServicePath(filename: string): string {
  return `${ASSET_PATHS.services}/${filename.replace(/^\/+/, '')}`;
}
