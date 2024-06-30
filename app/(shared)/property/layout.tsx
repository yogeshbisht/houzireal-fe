import React from "react";

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen w-full p-4">{children}</div>;
};

export default PropertyLayout;
