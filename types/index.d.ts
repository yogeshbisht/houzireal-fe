import React from "react";

export type SidebarItemType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  link: string;
};

export type PropertySearchType = "sale" | "rent";

export type SelectOptionType = {
  text: string;
  value: string;
};

export interface ResponseErrorParams {
  statusCode: number;
  message: string;
}
