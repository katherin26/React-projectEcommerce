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
    <div className="App">
      <Header />
      <Company />
      <ContactUs />
      <Products />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
