import { Drawer } from "antd";
import { DollarSign, GitGraph, Home, User2, Video } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AdminSidebar = ({
  setShowAdminSidebar,
  showAdminSidebar,
}: {
  showAdminSidebar: boolean;
  setShowAdminSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const iconSize = 16;
  const router = useRouter();
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Home",
      icon: <Home size={iconSize} />,
      onClick: () => router.push("/"),
      isActive: pathname === "/",
    },
    {
      name: "Users",
      icon: <User2 size={iconSize} />,
      onClick: () => router.push("/admin/users"),
      isActive: pathname === "/admin/users",
    },
    {
      name: "Shows",
      icon: <Video size={iconSize} />,
      onClick: () => router.push("/admin/shows"),
      isActive: pathname === "/admin/shows",
    },
    {
      name: "Subscriptions",
      icon: <DollarSign size={iconSize} />,
      onClick: () => router.push("/admin/subscriptions"),
      isActive: pathname === "/admin/subscriptions",
    },
    {
      name: "Reports",
      icon: <GitGraph size={iconSize} />,
      onClick: () => router.push("/admin/reports"),
      isActive: pathname === "/admin/reports",
    },
  ];
  return (
    <Drawer
      open={showAdminSidebar}
      onClick={() => setShowAdminSidebar(false)}
      title={"Amir Admin-panel"}
    >
      <div className="flex flex-col gap-10 mt-10 cursor-pointer">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex gap-3 items-center p-3 ${
              item.isActive ? "bg-black text-white rounded" : ""
            }`}
            onClick={item.onClick}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default AdminSidebar;
