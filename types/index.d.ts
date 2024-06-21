import React from "react";

export type SidebarItemType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  link: string;
};

export type PropertySearchType = "sale" | "rent";
