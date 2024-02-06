import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectCounter,
} from "../../app/store/counterSlice";

export const CounterWidget = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      <Button onClick={handleDecrement} variant="contained">
        <RemoveIcon />
      </Button>
      <Typography variant="h4">{count}</Typography>
      <Button onClick={handleIncrement} variant="contained">
        <AddIcon />
      </Button>
    </Stack>
  );
};
