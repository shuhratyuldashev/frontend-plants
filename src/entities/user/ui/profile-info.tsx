import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import type { UserProfile } from "@/shared/types/user";

interface ProfileInfoProps {
  user: UserProfile;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Personal details and application status.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-1">
          <Label className="text-muted-foreground">Username</Label>
          <div className="font-medium">{user.username}</div>
        </div>
        <div className="grid gap-1">
          <Label className="text-muted-foreground">Email</Label>
          <div className="font-medium">{user.email}</div>
        </div>
        <div className="grid gap-1">
          <Label className="text-muted-foreground">Member Since</Label>
          <div className="font-medium">{formatDate(user.joinedAt)}</div>
        </div>
      </CardContent>
    </Card>
  );
};
