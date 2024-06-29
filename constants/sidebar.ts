import {
  Calendar,
  Heart,
  Home,
  MessageSquareQuote,
  MessagesSquare,
  Search,
  Share,
  User,
} from "lucide-react";
import { SidebarItemType } from "@/types";

const CLIENT_SIDEBAR: SidebarItemType[] = [
  {
    icon: Home,
    title: "Dashboard",
    link: "/client/dashboard",
  },
  {
    icon: Search,
    title: "Search",
    link: "/client/search",
  },
  {
    icon: Heart,
    title: "Favorites",
    link: "/client/favorites",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    link: "/client/communication",
  },
  {
    icon: Calendar,
    title: "Schedule",
    link: "/client/schedule",
  },
  {
    icon: MessageSquareQuote,
    title: "Feedback",
    link: "/client/feedback",
  },
  {
    icon: User,
    title: "Account",
    link: "/client/account",
  },
  {
    icon: Share,
    title: "Refer a Friend",
    link: "/client/refer",
  },
];

const AGENT_SIDEBAR: SidebarItemType[] = [
  {
    icon: Home,
    title: "Dashboard",
    link: "/client/dashboard",
  },
];

export { CLIENT_SIDEBAR, AGENT_SIDEBAR };
