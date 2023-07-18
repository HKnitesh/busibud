import Header from "./components/Header"
import Information from "./components/Information"
import Card from "./components/Cards"
import Course from './components/Course'
import Pricing from "./components/Pricing"
import Review from './components/Review';
import Footer from "./components/Footer";
import Company from "./components/Companys"

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-50">
      <Header />
      <main className=" flex flex-col mx-10 md:mx-36 bg-[#f8fafc]">
        <Information/>
        <Card/>
        <Course/>
        <Pricing/>
        <Review/>
        <Company/>
      </main>

      <Footer/>
      
    </div>
  );
}
