import { Button, Card } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  firstComponent: {
    width: "30%",
    backgroundColor: "red",
  },
  infoItem: {
    whiteSpace: "nowrap",
  },
  separator: {
    marginLeft: 4,
    marginRight: 4,
  },
}));

const dganit: string = "this is me";
// export interface budgetPtops: {
//   name: string,
//   budget: number
// }
export const MyFirstComponent = (props: any) => {
  console.log("props", props);
  const classes = useStyles();

  // const { budget: number, budgetName: string } = props;
  const dothis = () => {
    const { className } = props;

    console.log("click");
  };
  return (
    <>
      <Box mb={2}>
        <Card className={classes.firstComponent}>
          <div>
            <span> {props.budgetName}</span>
            <span> {props.budget}</span>
          </div>
          <Button onClick={dothis} color="secondary">
            hello from component
          </Button>
        </Card>
      </Box>
    </>
  );
};
