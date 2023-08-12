import { styled } from "styled-components";
import GlobleStyles from "./styles/GlobleStyles";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;


const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobleStyles />
    </>
  );
}

export default App;
