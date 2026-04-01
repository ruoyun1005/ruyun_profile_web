import Image from "next/image";
import BackHomeButton from "../components/BackHomeButton";

export default function Math() {
  return (
    <>
      <div className="h-full w-full flex relative ">
        <img src="/media/math-bg.svg" alt="background" className="absolute inset-0 max-h-full max-w-full"/>
        
        <div className = "w-full h-full flex flex-col sm:flex-row gap-4 p-8 absolute inset-0">
          <BackHomeButton/>
          
          <div>
             {/* 大標題欄位 */}
          <section className="">
            <div>
            <div className="section-title uppercase mb-2">Mathematical Structure and Geometric Foundations of Bézier Curves</div>
            <div className="font-en sub-text mb-2">This project explores the mathematical ideas behind Bézier curves and shows how smooth forms can be built through geometry and visual construction.</div>
            <div className="flex flex-row justify-end items-center gap-4 mr-4">
              <div className="font-en text font-bold uppercase bg-[#C9D4EE] text-[#FBFCFE] rounded-full px-6 py-1">Geometry</div>
              <div className="font-en text font-bold uppercase bg-[#C9D4EE] text-[#FBFCFE] rounded-full px-6 py-1">curves</div>
              <div className="font-en text font-bold uppercase bg-[#C9D4EE] text-[#FBFCFE] rounded-full px-6 py-1">Visualization</div>
            </div>

            <div className="grid grid-cols-5 gap-6 mt-8">
              {/* 左邊 */}
              <div className="col-span-2">
                <section className="">
                <div className="bg-[#FBFCFE] rounded-2xl box-shadow p-8 flex flex-col justify-center gap-4">
                  <div className="font-en text-[20px] flex justify-center uppercase tracking-widest">Applied Mathematics</div>
                  <div className="flex justify-center ">
                    <img src="/media/X.svg" alt="X" className="w-[24px] h-[24px]"/>
                  </div>
                  <div className="font-en text-[20px] flex justify-center uppercase tracking-widest">Computational Geometry</div>
                </div>
              </section>

              <section>
                <div className="bg-[#FBFCFE] rounded-2xl box-shadow p-8 flex flex-col justify-center mt-4 ">
                    <div className="section-title">CONCECT FLOW</div>
                    <div className="flex flex-col gap-4 ml-4 mt-2 relative">
                        <div className="flex flex-row gap-8 items-center">
                          <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full"/>
                          <div className="font-en text-[16px] font-bold uppercase tracking-widest">Affine Geometry</div>
                        </div>
                        <div className="flex flex-row gap-8 items-center">
                          <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full"/>
                          <div className="font-en text-[16px] font-bold uppercase tracking-widest">Important Properties</div>
                        </div>
                        <div className="flex flex-row gap-8 items-center">
                          <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full"/>
                          <div className="font-en text-[16px] font-bold uppercase tracking-widest]">de Casteljau Algorithm</div>
                        </div>
                        <div className="flex flex-row gap-8 items-center">
                          <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full"/>
                          <div className="font-en text-[16px] font-bold uppercase tracking-widest">General Bézier Curve</div>
                        </div>
                        <div className="flex flex-row gap-8 items-center">
                          <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full"/>
                          <div className="font-en text-[16px] font-bold uppercase tracking-widest">Visualization</div>
                        </div>
                        <div className="absolute inset-0 w-[2px] bg-[#C9D4EE] translate-x-1.5 my-2"/>
                    </div>
                  </div>
              </section>

              {/* 按鈕 */}
              <section></section>
              </div>
              
              {/* 右邊 */}
              <div className="col-span-3">
                <section className="bg-[#FBFCFE] rounded-2xl box-shadow h-[600px]"></section>
              </div>
              
            </div>
          </div>
          </section>


          </div>
         
        </div>    
      </div>
       
  
    </>
  );
}