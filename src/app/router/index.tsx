import MainLayout from "@/layouts/main";
import AuthLayout from "@/layouts/auth";
import AddPlantPage from "@/pages/add-plant";
import AiAssistantPage from "@/pages/ai-assistant";
import AuthPage from "@/pages/auth";
import HomePage from "@/pages/home";
import PlantsGuidePage from "@/pages/plants-guide";
import { MyPlantsPage } from "@/pages/my-plants";
import ProfilePage from "@/pages/profile";
import { Route, Routes } from "react-router-dom";
import MyPlantPage from "@/pages/my-plant";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="plants" element={<MyPlantsPage />} />
        <Route path="plants/:id" element={<MyPlantPage />} />

        <Route path="plants-guide" element={<PlantsGuidePage />} />
        <Route path="assistant" element={<AiAssistantPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/add" element={<AddPlantPage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
