import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import type { UserProfile } from "@/shared/types/user";
import { LogOut, Pencil } from "lucide-react";

interface ProfileHeaderProps {
  user: UserProfile;
  onEditClick?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  user,
  onEditClick,
}) => {
  const initials = user.username.slice(0, 2).toUpperCase();

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 border bg-card rounded-lg mb-6">
      <Avatar className="w-24 h-24 border-2 border-primary/10">
        <AvatarImage src={user.avatarUrl} alt={user.username} />
        <AvatarFallback className="text-xl">{initials}</AvatarFallback>
      </Avatar>

      <div className="flex-1 text-center md:text-left space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">{user.username}</h1>
        <p className="text-muted-foreground">{user.email}</p>
      </div>

      <Button variant="outline" onClick={onEditClick} className="gap-2">
        <Pencil className="w-4 h-4" />
        Edit Profile
      </Button>
      <Button variant="destructive">
        <LogOut />
        Log Out
      </Button>
    </div>
  );
};
