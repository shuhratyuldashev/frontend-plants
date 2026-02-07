import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import type { UpdateProfileDTO, UserProfile } from "@/shared/types/user";

// ---------------- Schema
const profileFormSchema = z.object({
  username: z.string().min(2).max(30),
  email: z.string().email(),
  password: z.string().min(6).optional().or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ProfileSettingsFormProps {
  user: UserProfile;
  onSubmit: (data: UpdateProfileDTO) => Promise<void>;
  isLoading?: boolean;
}

export const ProfileSettingsForm: React.FC<ProfileSettingsFormProps> = ({
  user,
  onSubmit,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: user.username,
      email: user.email,
      password: "",
    },
  });

  const submit = (data: ProfileFormValues) => {
    const payload: UpdateProfileDTO = {
      username: data.username,
      email: data.email,
      ...(data.password ? { password: data.password } : {}),
    };

    onSubmit(payload);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Update your account preferences</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Input {...register("username")} />
            <FieldDescription>Public display name</FieldDescription>
            <FieldError>{errors.username?.message}</FieldError>
          </Field>

          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input {...register("email")} />
            <FieldError>{errors.email?.message}</FieldError>
          </Field>

          <Field>
            <FieldLabel>New password</FieldLabel>
            <Input
              type="password"
              placeholder="Leave empty to keep current"
              {...register("password")}
            />
            <FieldError>{errors.password?.message}</FieldError>
          </Field>

          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
