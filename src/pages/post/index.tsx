import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { MOCK_COMMENTS, MOCK_POSTS } from "@/shared/mock/posts";

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const post = MOCK_POSTS.find((p) => p.id === id);
  const comments = MOCK_COMMENTS.filter((c) => c.postId === id);

  if (!post) {
    return (
      <main className="container mx-auto max-w-4xl py-8">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Post not found</h2>
          </CardHeader>
          <CardContent>
            <Link to="/">
              <Button variant="secondary">Back to posts</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="container mx-auto max-w-4xl py-8">
      <Card className="overflow-hidden mb-6">
        {post.imageUrl && (
          <div className="w-full h-72 overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <span className="font-semibold text-foreground">@{post.author}</span>
            <span>•</span>
            <span>{post.createdAt.toLocaleDateString()}</span>
          </div>
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{post.body}</p>
        </CardContent>

        <CardFooter className="border-t pt-4 flex gap-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="w-4 h-4" /> Like
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageCircle className="w-4 h-4" /> Comment
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="w-4 h-4" /> Share
          </Button>
        </CardFooter>
      </Card>

      {/* Comments */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Comments</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {comments.length === 0 && (
            <p className="text-sm text-muted-foreground">No comments yet</p>
          )}
          {comments.map((c) => (
            <div key={c.id} className="border-b pb-3">
              <div className="text-sm font-semibold">@{c.author}</div>
              <div className="text-sm text-muted-foreground mb-1">
                {c.createdAt.toLocaleDateString()}
              </div>
              <p className="text-sm">{c.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
