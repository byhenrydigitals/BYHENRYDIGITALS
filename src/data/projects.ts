export interface SelectedProject {
  id: string;
  index: string;
  name: string;
  category: string;
  originalRequirement: string;
  solutionDeveloped: string;
  technologies?: string[];
  previewImage?: {
    src: string;
    alt: string;
  };
  liveUrl?: string;
  liveLabel?: string;
}

/**
 * Selected Projects Registry
 *
 * Add completed, client-approved public projects here.
 * Do not add unfinished prototypes, speculative concepts, or unapproved client work.
 *
 * Example entry:
 * {
 *   id: 'project-slug',
 *   index: '01',
 *   name: 'Client or Project Name',
 *   category: 'Small Business Website',
 *   originalRequirement: 'Brief plain-language description of what the business needed.',
 *   solutionDeveloped: 'Clear explanation of the solution designed and implemented by BHD.',
 *   technologies: ['React', 'Tailwind CSS', 'Tally'],
 *   previewImage: {
 *     src: '/src/assets/images/project-preview.jpg',
 *     alt: 'Preview screenshot of the completed website',
 *   },
 *   liveUrl: 'https://example.com',
 *   liveLabel: 'View Live Project',
 * }
 */
export const SELECTED_PROJECTS: SelectedProject[] = [];
