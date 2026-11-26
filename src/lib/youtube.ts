/**
 * NOVA VERA — YOUTUBE VIDEOS
 * Videos shown on the /publications page.
 * Just paste the YouTube video ID (the part after v=).
 */

export interface YouTubeVideo {
  /** YouTube video ID — e.g. "XU_wc6NmkFw" */
  id: string;
  /** Title shown under the video */
  title: string;
  /** Optional description */
  description?: string;
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "XU_wc6NmkFw",
    title: "Latest video",
  },
  {
    id: "qVajP9UM1ak",
    title: "Technical demonstration",
  },
  {
    id: "fJyzshFX4Hw",
    title: "Project overview",
  },
];