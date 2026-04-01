import Image from "next/image";
import BackHomeButton from "../components/BackHomeButton";

export default function Home() {
  return (
    <>
      <div className="h-full w-full flex relative">
        
        <div className = "w-full h-full flex flex-row gap-10 p-8 absolute inset-0">
          <BackHomeButton/>
          <section className="">
            <div>
            <div className="section-title uppercase">Mathematical Structure and Geometric Foundations of Bézier Curves</div>
          </div>
          </section>
        </div>    
      </div>   
  </>
  );
}