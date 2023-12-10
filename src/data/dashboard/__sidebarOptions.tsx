import {
  Home,
  Workflow,
  PenSquare,
  Bookmark,
  Activity,
  Briefcase,
  Bell,
  UserCircle,
} from "lucide-react";

export const sidebarOptions = [
  {
    index: 1,
    title: "Home",
    key: "home",
    icon: <Home />,
    link: "/dashboard/home",
  },
  {
    index: 2,
    title: "Integrations",
    key: "integrations",
    icon: <Workflow />,
    link: "/dashboard/integrations",
  },
  {
    index: 3,
    title: "Drafts",
    key: "drafts",
    icon: <PenSquare />,
    link: "/dashboard/drafts",
  },
  {
    index: 4,
    title: "Bookmarks",
    key: "bookmarks",
    icon: <Bookmark />,
    link: "/dashboard/bookmarks",
  },
  {
    index: 5,
    title: "Analytics",
    key: "analytics",
    icon: <Activity />,
    link: "/dashboard/analytics",
  },
  {
    index: 6,
    title: "Jobs",
    key: "jobs",
    icon: <Briefcase />,
    link: "/dashboard/jobs",
  },
  {
    index: 7,
    title: "Notifications",
    key: "notifications",
    icon: <Bell />,
    link: "/dashboard/notifications",
  },
  {
    index: 8,
    title: "Profile",
    key: "profile",
    icon: <UserCircle />,
    link: "/dashboard/profile",
  },
];
