import "./App.css";
import {
  Header,
  Company,
  ContactUs,
  Products,
  Services,
  Footer,
} from "./components/Index";

function App() {
  return (
    <div className="App border-2  ">
      <Header />
      <Services />
      <Products />
      <Company />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
