import React from "react";

type PropertySectionProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
};

const PropertySection = ({
  icon: Icon,
  title,
  children,
}: PropertySectionProps) => {
  return (
    <>
      <div className="space-y-3">
        <h2 className="flex items-center text-xl font-semibold">
          {Icon && <Icon className="mr-2 size-6" />}
          {title}
        </h2>
        {children}
      </div>
      <hr />
    </>
  );
};

export default PropertySection;
