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



export interface Comment {
  id: string;
  postId: string;
  author: string;
  body: string;
  createdAt: Date;
}