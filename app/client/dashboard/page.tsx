import ExpansionPanel from "@/components/shared/expansion-panel";
import { Accordion } from "@/components/ui/accordion";
import { COLORS_ARRAY } from "@/constants/colors";

const ClientDashboardPage = () => {
  return (
    <div className="max-w-4xl">
      <Accordion type="single" collapsible>
        {Array.from([1, 2, 3, 4]).map((item) => (
          <ExpansionPanel
            key={item}
            title={`Saved Favorites ${item}`}
            numberOfRows={item}
            backgroundColor={COLORS_ARRAY[item]}
          >
            data
          </ExpansionPanel>
        ))}
      </Accordion>
    </div>
  );
};

export default ClientDashboardPage;
