import ExpansionPanel from "@/components/shared/expansion-panel";
import { Accordion } from "@/components/ui/accordion";
import React from "react";

const ClientDashboardPage = () => {
  return (
    <div className="max-w-4xl">
      <Accordion type="multiple">
        <ExpansionPanel title="Saved Favorites" numberOfRows={2}>
          Table data
        </ExpansionPanel>
      </Accordion>
    </div>
  );
};

export default ClientDashboardPage;
