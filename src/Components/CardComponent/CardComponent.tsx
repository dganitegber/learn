import {
  Button,
  Card,
  CardContent,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "240px",
    marginLeft: "40px",
    marginBottom: "40px",
    "&&_MuiCardContent": {
      display: "flex",
    },
  },

  firstComponent: {},
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    height: "280px",
    padding: "20px",
  },
  topSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    maxWidth: "320px",
  },
  infoItem: {
    whiteSpace: "nowrap",
  },
  separator: {
    marginLeft: 4,
    marginRight: 4,
  },
  remainingBudget: {
    color: "green",
  },
  recentExpense: {
    alignSelf: "center",
    alignContent: "center",
    maxWidth: "70%",
  },
  subContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const CardComponent = (props: any) => {
  const classes = useStyles();
  console.log("ExpenseContext", ExpenseContext);
  const [newSumBudget, setNewSumBudget] = useState(props.monthlyBudget);
  const ichanged = (event: any) => {
    if (event.key === "Enter") {
      if (!isNaN(event.target.value)) {
        console.log(props, event.target.value);
        setNewSumBudget(props.monthlyBudget - event.target.value);
      } else {
        setNewSumBudget(newSumBudget - event.target.value);
      }
      event.preventDefault();
      console.log(props);
      event.target.value = "";
    }
  };
  return (
    <>
      <Grid className={classes.root}>
        <Card className={classes.cardContent}>
          <div className={classes.topSection}>
            <Icon>{props.icon}</Icon>
            <Typography gutterBottom variant="h4" component="div">
              <span>{props.budgetName}</span>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <span>Monthly budget: {props.monthlyBudget} </span>
              <span className={classes.remainingBudget}>
                Remaining budget: {newSumBudget}
              </span>
            </Typography>
          </div>
          <span> {props.budget}</span>
          <div className={classes.actions}>
            <TextField
              className={classes.recentExpense}
              id="recentExpense"
              label="Recent Expense"
              onKeyPress={ichanged}
              variant="standard"
            />
          </div>
        </Card>
      </Grid>
    </>
  );
};
