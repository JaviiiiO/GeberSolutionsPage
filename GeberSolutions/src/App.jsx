import Contenedores from "./components/Cards/Contenedores/Contenedores";
import Header from "./components/Header/Header";
import Footer from "./Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "12px", margin: "12px" }}>
        <Contenedores width="100%">About us</Contenedores>
        <Contenedores width="50%">Section</Contenedores>
        <Contenedores width="50%">Section2</Contenedores>
        <Contenedores>Form</Contenedores>
      </div>
      <Footer />
    </>
  );
};

export default App;
