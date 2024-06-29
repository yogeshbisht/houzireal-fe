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
    <AccordionItem value={title} className="mb-4 border-none">
      <AccordionTrigger
        className="rounded-t-lg px-8 hover:no-underline"
        style={{ backgroundColor }}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="size-6" />}
            <span className="h-8 rounded-full bg-secondary px-8 text-sm leading-8">
              {title}
            </span>
          </div>
          <div className="mr-4 flex size-8 items-center justify-center rounded-full bg-secondary text-sm">
            {numberOfRows}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent
        className="rounded-b-3xl border-t-0 px-8 py-4 shadow-none"
        style={{
          borderColor: backgroundColor,
          borderWidth: "2px",
          borderBottomLeftRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
        }}
      >
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default ExpansionPanel;
