import { useState } from "react";
import type { Post, CreatePostDTO } from "@/shared/types/post";
import { PostCard } from "@/entities/post/ui/post-card";
import { CreatePostModal } from "@/features/create-post/ui/create-post-modal";
import { MOCK_POSTS } from "@/shared/mock/posts";
import { ScrollArea } from "@/shared/ui/scroll-area";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);

  const handleAddPost = (data: CreatePostDTO) => {
    const newPost: Post = {
      id: Math.random().toString(36).substring(7),
      author: "current_user", // В реальности берем из Auth Context
      createdAt: new Date(),
      ...data,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <main className="container mx-auto py-10 max-w-4xl flex flex-col h-screen">
      <header className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Home</h1>
          <p className="text-muted-foreground">
            Check out what's happening now.
          </p>
        </div>
        <CreatePostModal onPostCreate={handleAddPost} />
      </header>

      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full">
          <section className="flex flex-col gap-2 p-2">
            {posts.length > 0 ? (
              posts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <div className="text-center py-20 border-2 border-dashed rounded-xl">
                <p className="text-muted-foreground">
                  No posts yet. Be the first!
                </p>
              </div>
            )}
          </section>
        </ScrollArea>
      </div>
    </main>
  );
}
