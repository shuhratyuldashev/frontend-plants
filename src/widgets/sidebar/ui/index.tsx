import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Leaf,
  PlusCircle,
  Sparkles,
  UserCircle,
  Sprout,
  ChevronRight,
  Sun,
  Moon,
  BookOpen,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { useTheme } from "@/app/providers/theme-providers";

const NAVIGATION_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Plants Guide", href: "/plants-guide", icon: BookOpen },
  { label: "My Plants", href: "/plants", icon: Leaf },
  { label: "Add Plant", href: "/add", icon: PlusCircle },
  { label: "AI Assistant", href: "/assistant", icon: Sparkles },
  { label: "Profile", href: "/profile", icon: UserCircle },
];

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 70 : 256 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex flex-col h-screen border-r sticky top-0 bottom-0 bg-background"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 h-6 w-6 rounded-full border bg-background shadow-sm z-10 hover:bg-accent"
      >
        <motion.div
          animate={{ rotate: isCollapsed ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={14} />
        </motion.div>
      </Button>

      <div
        className={cn(
          "p-4 mb-4 flex items-center",
          isCollapsed ? "justify-center" : "gap-3",
        )}
      >
        <div className="p-2 rounded-lg bg-primary text-primary-foreground shrink-0">
          <Sprout size={24} />
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-semibold text-xl text-primary tracking-tight whitespace-nowrap"
            >
              CarePlant
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            title={isCollapsed ? item.label : ""}
            className={({ isActive }) =>
              cn(
                "flex items-center rounded-full text-sm font-medium transition-colors outline-none",
                isCollapsed
                  ? "justify-center h-10 w-10 mx-auto"
                  : "px-3 py-2 gap-3",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )
            }
          >
            <item.icon size={20} className="shrink-0" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-3">
        <Button
          variant="ghost"
          onClick={toggleTheme}
          title={isCollapsed ? "Change Theme" : ""}
          className={cn(
            "w-full flex items-center rounded-full transition-colors",
            isCollapsed
              ? "justify-center h-10 w-10 p-0"
              : "px-3 py-2 gap-3 justify-start",
          )}
        >
          {theme === "light" ? (
            <Moon size={20} className="shrink-0 text-slate-700" />
          ) : (
            <Sun size={20} className="shrink-0 text-yellow-400" />
          )}
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden whitespace-nowrap text-sm font-medium"
              >
                Change Theme
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </motion.aside>
  );
};
