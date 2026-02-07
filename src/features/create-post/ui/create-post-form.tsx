import { useState } from "react";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import type { CreatePostDTO } from "@/shared/types/post";

interface CreatePostFormProps {
  onSubmit: (data: CreatePostDTO) => void;
  onCancel: () => void;
}

export function CreatePostForm({ onSubmit, onCancel }: CreatePostFormProps) {
  const [formData, setFormData] = useState<CreatePostDTO>({
    title: "",
    body: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CreatePostDTO, string>>
  >({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (formData.title.length < 3)
      newErrors.title = "Title must be at least 3 characters";
    if (formData.body.length < 10)
      newErrors.body = "Body must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel>Title</FieldLabel>
          <Input
            placeholder="Enter post title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          {errors.title && (
            <p className="text-sm font-medium text-destructive">
              {errors.title}
            </p>
          )}
        </Field>

        <Field>
          <FieldLabel>Image URL (Optional)</FieldLabel>
          <Input
            placeholder="https://images.unsplash.com/..."
            value={formData.imageUrl}
            onChange={(e) =>
              setFormData({ ...formData, imageUrl: e.target.value })
            }
          />
        </Field>

        <Field>
          <FieldLabel>Content</FieldLabel>
          <Textarea
            placeholder="What's on your mind?"
            rows={4}
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
          {errors.body && (
            <p className="text-sm font-medium text-destructive">
              {errors.body}
            </p>
          )}
          <FieldDescription>
            Share your thoughts with the community.
          </FieldDescription>
        </Field>
      </FieldGroup>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Create Post</Button>
      </div>
    </form>
  );
}
