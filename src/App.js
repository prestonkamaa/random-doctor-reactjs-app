import DetailsCard from "./components/DetailsCard"; 
import Header from "./components/Header";

// import Footer from "./components/Footer";

export default function App() {
  return (
    <section className=" bg-[#ECEFF8] min-h-screen flex"> 
      <div className="lg:w-1/4 bg-[#F6F7FB] mx-auto ">
        {/* <Footer /> */}
        <Header />
        <DetailsCard /> 
      </div> 
     </section>
  );
}
