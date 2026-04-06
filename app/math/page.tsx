import Image from "next/image";
import BackHomeButton from "../components/BackHomeButton";

export default function Math() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/media/math-bg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1200px",
        }}
      ></div>
      
  <div className="relative z-0 min-h-full w-full flex min-w-[250px] overflow-y-auto p-8">
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
     
        <BackHomeButton />
     
      <div className="w-full">
        
        {/* 最上方標題 */}
        <section>
          <div>
            <div className="section-title uppercase mb-2">
              Mathematical Structure and Geometric Foundations of Bézier Curves
            </div>

            <div className="font-en sub-text mb-2">
              This project explores the mathematical ideas behind Bézier curves and shows how smooth forms can be built through geometry and visual construction.
            </div>

            <div className="flex flex-wrap sm:justify-end items-center gap-4 mr-4">
              <div className="font-en text font-bold uppercase bg-[#C9D4EE] text-[#FBFCFE] rounded-full px-6 py-1">
                Geometry
              </div>
              <div className="font-en text font-bold uppercase bg-[#C9D4EE] text-[#FBFCFE] rounded-full px-6 py-1">
                curves
              </div>
              <div className="font-en text font-bold uppercase bg-[#C9D4EE] text-[#FBFCFE] rounded-full px-6 py-1">
                Visualization
              </div>
            </div>

            {/* 下面一堆框框區 */}
            <div className="w-full grid gap-4 sm:gap-6 min-w-0 mt-8
                            grid-cols-1  min-[500px]:grid-cols-2  min-[950px]:grid-cols-[280px_minmax(0,1fr)] min-[950px]:items-start">
              {/* 左邊框框 */}
                {/* 按鈕 */}
                <section className="min-w-0 order-1 min-[500px]:col-start-1  min-[500px]:row-start-1">
                  <div className="bg-[#FBFCFE] rounded-2xl box-shadow p-8 flex flex-col justify-center ">
                  </div>
                </section>
  
                {/* 左上框框 */}
                <section className="min-w-0 order-2 
                    min-[500px]:order-3  min-[500px]:col-start-1  min-[500px]:row-start-2
                    min-[950px]:order-2  min-[950px]:col-start-auto  min-[950px]:row-start-auto">
                  <div className="bg-[#FBFCFE] rounded-2xl box-shadow p-8 flex flex-col justify-center gap-4">
                    <div className="font-en text-[20px] text-center flex justify-center uppercase tracking-widest">
                      Applied Mathematics
                    </div>
                    <div className="flex justify-center">
                      <img src="/media/X.svg" alt="X" className="w-[24px] h-[24px]"/>
                    </div>
                    <div className="font-en text-[20px]  text-center flex justify-center uppercase tracking-widest">
                      Computational Geometry
                    </div>
                  </div>
                </section>

                
                {/* 左下框框 */}
                <section className=" min-w-0 order-3
                  min-[500px]:order-2 min-[500px]:col-start-2  min-[500px]:row-start-1  min-[500px]:row-span-2
                  min-[950px]:order-3  min-[950px]:col-start-auto  min-[950px]:row-start-auto  min-[950px]:row-span-2">
                  <div className="bg-[#FBFCFE] rounded-2xl box-shadow p-8 flex flex-col justify-center ">
                    <div className="section-title">CONCEPT FLOW</div>

                    <div className="flex flex-col gap-4 ml-4 mt-2 relative">
                      <div className="absolute left-[6px] top-2 bottom-2 w-[2px] bg-[#C9D4EE]" />

                      <div className="flex flex-row gap-8 items-center relative z-10">
                        <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full" />
                        <div className="font-en text-[16px] font-bold uppercase tracking-widest">
                          Affine Geometry
                        </div>
                      </div>

                      <div className="flex flex-row gap-8 items-center relative z-10">
                        <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full" />
                        <div className="font-en text-[16px] font-bold uppercase tracking-widest">
                          Important Properties
                        </div>
                      </div>

                      <div className="flex flex-row gap-8 items-center relative z-10">
                        <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full" />
                        <div className="font-en text-[16px] font-bold uppercase tracking-widest">
                          de Casteljau Algorithm
                        </div>
                      </div>

                      <div className="flex flex-row gap-8 items-center relative z-10">
                        <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full" />
                        <div className="font-en text-[16px] font-bold uppercase tracking-widest">
                          General Bézier Curve
                        </div>
                      </div>

                      <div className="flex flex-row gap-8 items-center relative z-10">
                        <div className="h-[14px] w-[14px] bg-[#C9D4EE] rounded-full" />
                        <div className="font-en text-[16px] font-bold uppercase tracking-widest">
                          Visualization
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
            

              {/* 右邊 */}
              <div className="flex mb-8 
                              min-[500px]:col-span-2  min-[500px]:col-start-1 min-[500px]:row-start-3  
                              min-[950px]:col-span-1  min-[950px]:row-span-3  min-[950px]:col-start-2  min-[950px]:row-start-1">
                <section className="bg-[#FBFCFE] rounded-2xl box-shadow h-[600px] w-full "></section>
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