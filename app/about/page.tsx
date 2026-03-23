import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" h-full w-full pl-4 flex flex-col">
        <section>
            <div className="w-full h-[40px] flex justify-start content-center font-en font-bold text-xl text-center tracking-[0.15em]">ABOUT ME</div>
            <div className="font-zh text-sm">喜歡數學  也熱愛設計</div>
            <div className="font-zh text-sm">期待在理性與美感之間 找到屬於自己的火花</div>
        {/* <div className="flex justify-end">
            <div className="flex flex-wrap items-center gap-8 font-en text-[10px] font-semibold tracking-[0.5em] leading-[2] mt-2 ml-2">
                <div className="bg-[#7C8BB3] text-white rounded-md px-2 flex justify-center items-center">#MATH</div>
                <div className="bg-[#7C8BB3] text-white rounded-md px-2 flex justify-center items-center">#DESIGN</div>
                <div className="bg-[#7C8BB3] text-white rounded-md px-2 flex justify-center items-center">#AI EDUCATION</div>
        </div>
        </div> */}
        </section>
        
        <section>
            <div className="w-full h-[40px] mt-8 flex justify-start content-center font-en font-bold text-xl text-center tracking-[0.15em]">EDUCATION</div>
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-lg border-2 border-[#C9D4EE] px-8 py-2 bg-transparent">
                  <div className="w-full flex items-center gap-4">
                    <div className="font-en font-bold text-xs text-[#8A97BF] tracking-[0.5em] whitespace-nowrap">MAJOR</div>
                    <div className="h-px flex-1 bg-[#A7B2CC] translate-y-[4px]" />
                  </div>

                  <div className="w-full flex items-end justify-center gap-4 mt-1">
                    <div className="font-zh font-bold text-xl text-[#5C5C77] tracking-[0.1em]">應用數學系</div>
                    <div className="font-en font-bold text-sm text-[#A7B2CC] tracking-[0.2em] whitespace-nowrap">NCCU MATH</div>
                  </div>
                </div>
              
                <div className="rounded-lg border-2 border-[#C9D4EE] px-8 py-2 bg-transparent">
                  <div className="w-full flex items-center gap-4">
                    <div className="font-en font-bold text-xs text-[#8A97BF] tracking-[0.5em] whitespace-nowrap">SECOND MAJOR</div>
                    <div className="h-px flex-1 bg-[#A7B2CC] translate-y-[4px]" />
                  </div>

                  <div className="w-full flex items-end justify-center gap-4 mt-1">
                    <div className="font-zh font-bold text-xl text-[#5C5C77] tracking-[0.1em]">數位內容學位學程</div>
                    <div className="font-en font-bold text-sm text-[#A7B2CC] tracking-[0.2em] whitespace-nowrap">NCCU DCT</div>
                  </div>
                </div>
              
              </div>
        </section>
        
        <section className="flex flex-col gap-4"> 
            <div className="w-full h-[40px] mt-8 flex justify-start content-center font-en font-bold text-xl text-center  tracking-[0.15em]">EXPERIMENCE</div>
            <div className="flex justify-center">
                <div className="flex flex-col mt-1 border-t border-[#C9D4EE]">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-[#C9D4EE]">
                      <div className="justify-start font-zh text-sm leading-[2.5] tracking-[0.1em] ">SITCON學生計算機年會 設計組組長</div>
                      <div className="justify-end font-en text-xs text-[#8A97BF] tracking-wide whitespace-nowrap">Jan 2022 - Sep 2022</div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-[#C9D4EE] ">
                      <div className="justify-start font-zh text-sm leading-[2.5] tracking-[0.1em]">應用數學系 系學會美宣</div>
                      <div className="justify-end font-en text-xs text-[#8A97BF] tracking-wide whitespace-nowrap">Jan 2022 - Sep 2022</div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] items-center gap-32 border-b border-[#C9D4EE] ">
                      <div className="justify-start font-zh text-sm leading-[2.5] tracking-[0.1em]">AI普羅米修斯計劃：型塑政大教育的未來構圖 研究獎助生</div>
                      <div className="justify-end font-en text-xs text-[#8A97BF] tracking-wide whitespace-nowrap">Mar 2025 - Jun 2026</div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-[#C9D4EE] ">
                      <div className="justify-start font-zh text-sm leading-[2.5] tracking-[0.1em]">生成式AI：文字與圖像生成的原理與實務 教學助理</div>
                      <div className="justify-end font-en text-xs text-[#8A97BF] tracking-wide whitespace-nowrap">Sep 2022 - Jan 2026</div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] items-center  border-b border-[#C9D4EE] ">
                      <div className="justify-start font-zh text-sm leading-[2.5] tracking-[0.1em]">生活中的未來語言：數學、Python與AI 教學助理</div>
                      <div className="justify-end font-en text-xs text-[#8A97BF] tracking-wide whitespace-nowrap">Mar 2026 - Jun 2026</div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-[#C9D4EE] ">
                      <div className="justify-start font-zh text-sm leading-[2.5] tracking-[0.1em]">設計思考與人工智慧 教學助理</div>
                      <div className="justify-end font-en text-xs text-[#8A97BF] tracking-wide whitespace-nowrap">Mar 2026 - Jun 2026</div>
                    </div>
            </div>  
            </div>
        </section>
        
        <div className="w-full h-[40px] mt-8 flex justify-start content-center font-en font-bold text-xl text-center tracking-[0.15em]">SKILLS</div>
        <div className="w-full flex items-center justify-center gap-5 mt-2 ml-8 px-8 translate-x-[-30px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-center gap-16">
            <div className="font-en font-bold text-base tracking-[0.15em]">TOOL USED</div>
                <div className="flex flex-wrap items-center gap-4">
                    <img src="/illustrator.svg" className="w-[36px] h-[36px]"/>
                    <img src="/photoshop.svg" className="w-[36px] h-[36px]"/>
                    <img src="/aftereffect.svg" className="w-[36px] h-[36px]"/>
                    <img src="/affinity.svg" className="w-[36px] h-[36px]"/>
                    <img src="/figma.svg" className="w-[36px] h-[36px]"/>
                    <img src="/blender.svg" className="w-[36px] h-[36px]"/>
                    <img src="/unity.svg" className="w-[36px] h-[36px]"/>
                    <img src="vscode.svg" className="w-[36px] h-[36px]"/>
                    <img src="procreate.svg" className="w-[36px] h-[36px]"/>
                </div>
          </div>
          <div className="h-px bg-[#C9D4EE]" />
          <div className="flex flex-row justify-center">
            <div className="w-full flex items-center justify-start gap-15">
          <div className="font-en font-bold text-base tracking-[0.15em]">LANGUAGES</div>
          <div className="flex flex-wrap  items-center gap-4">
                      <img src="/python.svg" className="w-[36px] h-[36px]"/>
                      <img src="/cplusplus.svg" className="w-[36px] h-[36px]"/>
                  </div>
        </div>
        </div>
        </div>
        
          
        </div>
        
          
        
        

      </div>
      

      
      
      
      
    </>
  );
}