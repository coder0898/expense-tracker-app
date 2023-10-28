import styled from "styled-components";
import Header from "./components/Header";
import './App.css';

const Container = styled.div`
margin: 30px auto;
width: 350px;
`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
