// Do I want to have proper Date Types? i.e. strings based on structure.

export type Link = {
  title: string;
  link: string;
};

export type Segment = {
  title: string;
  gist: string;
  notes: string;
};

export type EpisodeData = {
  episode_number: number;
  slug: string;
  title: string;
  content: string;
  description: string;
  notes: string;
  segments: Segment[];
  castboxEmbedUrl: string;
  featured_image: string;
  background_image: string;
  draft: boolean;
  date: string;
  publishDate: string;
  links: Link[];
  socials: Link[];
  tags: string[];
  categories: string[];
};
