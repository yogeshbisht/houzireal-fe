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
    <AccordionItem value={title} className="mb-2 border-none">
      <AccordionTrigger
        className="rounded-t-3xl px-8 hover:no-underline"
        style={{ backgroundColor }}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="size-6" />}
            <span>{title}</span>
          </div>
          <div className="mr-4 flex size-10 items-center justify-center rounded-full bg-secondary">
            {numberOfRows}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="rounded-b-3xl border border-t-0 px-8 py-4 shadow-none">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default ExpansionPanel;
