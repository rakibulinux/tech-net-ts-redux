import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-2 items-center mt-2">
      <button
        onClick={() => dispatch(increment())}
        className="border-solid border-2 px-2 py-3 rounded-md border-green-500"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(7))}
        className="border-solid border-2 px-2 py-3 rounded-md border-green-500"
      >
        IncrementByAmount
      </button>
      <div>{count}</div>
      <button
        onClick={() => dispatch(decrement())}
        className="border-solid border-2 px-2 py-3 rounded-md border-rose-500"
      >
        Decrement
      </button>
    </div>
  );
};

export default Home;
