"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CLIENT_SIDEBAR, AGENT_SIDEBAR } from "@/constants/sidebar";

const Sidebar = ({ type }: { type: "client" | "agent" }) => {
  const pathname = usePathname();
  const menuItems = type === "client" ? CLIENT_SIDEBAR : AGENT_SIDEBAR;
  return (
    <>
      <div className="flex h-40 items-center justify-center">brand logo</div>
      <div className="flex flex-col ">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              className={cn(
                "flex cursor-pointer items-center justify-start px-8 py-3 transition duration-300 hover:bg-secondary",
                {
                  "bg-primary text-secondary hover:bg-primary hover:text-secondary":
                    pathname === item.link,
                }
              )}
            >
              <item.icon className="size-4" />
              <span className="ml-2">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
