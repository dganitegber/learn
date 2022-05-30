import { Button } from "@mui/material";
const dganit: string = "this is me";
export const MyFirstComponent = ({ dganit: any }) => {
  //   console.log("dganit", dganit);
  const dothis = () => {
    console.log("click");
  };
  return (
    <>
      <Button onClick={dothis} color="secondary">
        hello from component
      </Button>
    </>
  );
};
