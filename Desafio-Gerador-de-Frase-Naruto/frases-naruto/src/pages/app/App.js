import narutoimg from "../../images/naruto.png"
import styled from "styled-components";
import Quotes from "../../components/quotes/Quotes";

function App() {
  return (
    <Content>
      <Quotes Quote='Quotes' Speaker='Speaker'/>
      <Naturoimg src={narutoimg} alt="Naruto holding a Kunai"/>
    </Content>
  );
}

const Content = styled.div`
    heigth: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Naturoimg = styled.img`
   max-width: 50vw;
   align-self: flex-end;
`

export default App;
