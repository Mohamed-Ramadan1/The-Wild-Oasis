import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/GenralUi/Heading";
import Row from "../ui/GenralUi/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / sort</p>
      </Row>
      <Row type="horizontal">
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
