import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import JobContainer from "./components/JobContainer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <JobContainer/>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
