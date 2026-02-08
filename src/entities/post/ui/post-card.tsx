import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import type { Post } from "@/shared/types/post";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden mb-6">
      {post.imageUrl && (
        <div className="w-full h-64 overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-hover hover:scale-105 duration-300"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <span className="font-semibold text-foreground">@{post.author}</span>
          <span>•</span>
          <span>{post.createdAt.toLocaleDateString()}</span>
        </div>
        <Link to={`/post/${post.id}`} className="text-xl font-bold leading-none hover:underline">{post.title}</Link>
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
  );
}
