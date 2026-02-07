export interface Post {
  id: string;
  author: string;
  title: string;
  body: string;
  imageUrl?: string;
  createdAt: Date;
}

export interface CreatePostDTO {
  title: string;
  body: string;
  imageUrl?: string;
}
