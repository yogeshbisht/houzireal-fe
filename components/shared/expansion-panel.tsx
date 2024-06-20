import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ExpansionPanelProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon className="size-6" />
              <span>{title}</span>
            </div>
            <div>{numberOfRows}</div>
          </div>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExpansionPanel;
