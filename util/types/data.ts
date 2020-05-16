// Do I want to have proper Date Types? i.e. strings based on structure.

export type Link = {
  title: string;
  link: string;
};

export type EpisodeData = {
  episode_number: number;
  slug: string;
  title: string;
  content: string;
  description: string;
  notes: string;
  castboxEmbedUrl: string;
  featured_image: string;
  background_image: string;
  draft: boolean;
  date: string;
  links: Link[];
  socials: Link[];
  tags: string[];
  categories: string[];
};