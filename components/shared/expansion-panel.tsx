import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ExpansionPanelProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  numberOfRows: number;
  children: React.ReactNode;
};

const ExpansionPanel = ({
  icon: Icon,
  title,
  numberOfRows,
  children,
}: ExpansionPanelProps) => {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="size-6" />}
            <span>{title}</span>
          </div>
          <div>{numberOfRows}</div>
        </div>
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};

export default ExpansionPanel;
