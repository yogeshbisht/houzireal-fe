"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CLIENT_SIDEBAR, AGENT_SIDEBAR } from "@/constants";

const Sidebar = ({ type }: { type: "client" | "agent" }) => {
  const pathname = usePathname();
  const menuItems = type === "client" ? CLIENT_SIDEBAR : AGENT_SIDEBAR;
  return (
    <>
      <div className="flex h-80 items-center justify-center">brand logo</div>
      <div className="flex flex-col ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex cursor-pointer items-center justify-start px-8 py-4 transition duration-300 hover:bg-secondary",
              {
                "bg-primary text-secondary": pathname === item.link,
              }
            )}
          >
            <item.icon className="size-6" />
            <span className="ml-4">{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
