import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { ProfileHeader } from "@/entities/user/ui/profile-header";
import { ProfileInfo } from "@/entities/user/ui/profile-info";
import { ProfileSettingsForm } from "@/features/update-profile/ui";
import type { UpdateProfileDTO, UserProfile } from "@/shared/types/user";
import { MOCK_USER } from "@/shared/mock/user";

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile>(MOCK_USER);
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async (data: UpdateProfileDTO) => {
    setIsLoading(true);
    try {
      // Имитация API запроса
      console.log("Sending to API:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Оптимистичное обновление UI
      setUser((prev) => ({ ...prev, ...data }));
      // Переключаем обратно на просмотр после сохранения (опционально)
      // setActiveTab("profile");
    } catch (error) {
      console.error("Failed to update profile", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      {/* 1. Header Section */}
      <ProfileHeader user={user} onEditClick={() => setActiveTab("settings")} />

      {/* 2. Tabs Section */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* 3. Tab Contents */}
        <div className="animate-in fade-in-50 duration-300">
          <TabsContent value="profile" className="mt-0">
            <ProfileInfo user={user} />
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <ProfileSettingsForm
              user={user}
              onSubmit={handleUpdateProfile}
              isLoading={isLoading}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
