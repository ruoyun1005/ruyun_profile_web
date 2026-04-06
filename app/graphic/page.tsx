import Image from "next/image";
import BackHomeButton from "../components/BackHomeButton";

export default function Home() {
  return (
    <>
      <div className="h-full w-full flex relative">
        
        <div className = "flex  flex-col lg:flex-row gap-6 lg:gap-10 p-8 w-full overflow-y-auto">
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