import Contenedores from "./components/Cards/Contenedores/Contenedores";
import Header from "./components/Header/Header";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "12px", margin: "12px" }}>
        <Contenedores width="50%" />
        <Contenedores width="50%" />
        <Contenedores />
        <Contenedores />
      </div>
      <Footer />
    </>
  );
};

export default App;
