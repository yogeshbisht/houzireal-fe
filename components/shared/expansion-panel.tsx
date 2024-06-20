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
  backgroundColor: string;
  children: React.ReactNode;
};

const ExpansionPanel = ({
  icon: Icon,
  title,
  numberOfRows,
  backgroundColor,
  children,
}: ExpansionPanelProps) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger
        className="mb-2 rounded-t-2xl px-4 hover:no-underline"
        style={{ backgroundColor }}
      >
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="size-6" />}
            <span>{title}</span>
          </div>
          <div className="mr-4 flex size-10 items-center justify-center rounded-full bg-secondary">
            {numberOfRows}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};

export default ExpansionPanel;
