import GlobleStyles from "./styles/GlobleStyles";

import Input from "./ui/Forms/Input";
import Button from "./ui/Buttons/Button";
import Heading from "./ui/GenralUi/Heading";
import Row from "./ui/GenralUi/Row";
function App() {
  return (
    <>
      <Heading as="h1">H1</Heading>
      <Heading as="h2">H2</Heading>
      <Heading as="h3">H3</Heading>
      <Button onClick={() => console.log("Baly is amazing")}>Check in</Button>
      <Button onClick={() => console.log("Baly is amazing")}>Check out</Button>
      <Input />
      <GlobleStyles />
    </>
  );
}

export default App;
