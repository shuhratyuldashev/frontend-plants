import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import { CreatePostForm } from "./create-post-form";
import type { CreatePostDTO } from "@/shared/types/post";
import { useState } from "react";

interface CreatePostModalProps {
  onPostCreate: (data: CreatePostDTO) => void;
}

export function CreatePostModal({ onPostCreate }: CreatePostModalProps) {
  const [open, setOpen] = useState(false);

  const handleSuccess = (data: CreatePostDTO) => {
    onPostCreate(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Post Something
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <CreatePostForm
          onSubmit={handleSuccess}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
