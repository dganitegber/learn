import { Box, Grid } from "@mui/material";
import React from "react";
import "./App.css";
import { CardComponent } from "./Components/CardComponent";
import { myCards } from "./utils/myCards";

function App() {
  const CardsList = myCards.map((card) => {
    return (
      console.log(card),
      (
        <CardComponent
          mt={2}
          monthlyBudget={card.monthlyBudget}
          budgetName={card.budgetName}
          icon={card.icon}
        />
      )
    );
  });

  return (
    <div className="App">
      <Grid pt={2} className="App-header" container>
        {CardsList}
      </Grid>
    </div>
  );
}

export default App;
