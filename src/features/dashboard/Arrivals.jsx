import { useStays } from "../../hooks/useStays";

function Arrivals() {
  const { stays } = useStays();
  console.log(stays);
  return <div>ergtergtredhgbthg</div>;
}

export default Arrivals;
