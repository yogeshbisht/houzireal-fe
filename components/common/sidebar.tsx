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
      <div className="flex h-40 items-center justify-center text-center">
        HOUZIREAL
      </div>
      <div>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              className={cn(
                "flex h-12 cursor-pointer items-center lg:justify-start sm:justify-center justify-start lg:pl-8 py-3 sm:pl-0 pl-8 transition duration-300 hover:bg-secondary",
                {
                  "bg-primary text-secondary hover:bg-primary hover:text-secondary":
                    pathname === item.link,
                }
              )}
            >
              <item.icon className="size-4" />
              <span className="ml-2 block sm:hidden lg:block">
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
