type TextBlock = {
  id: string;
  type: "paragraph" | "heading" | "subheading";
  content: string;
  order: number;
};

type VideoBlock = {
  id: string;
  type: "video";
  videoUrl: string;
  order: number;
};

type PlaylistBlock = {
  id: string;
  type: "playlist";
  playlistId: string;
  order: number;
};

type Block = TextBlock | VideoBlock | PlaylistBlock;
