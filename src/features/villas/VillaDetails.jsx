import { useParams } from "react-router-dom";

import { getVillaDetails } from "../../services/apiVillas";

function VillaDetails() {
  const { villaId } = useParams();

  console.log(villaId);

  const { villa } = getVillaDetails();

  console.log(villa);

  return <div></div>;
}

export default VillaDetails;
