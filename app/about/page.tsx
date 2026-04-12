import BackHomeButton from "../components/BackHomeButton";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full overflow-y-auto p-8">
      <BackHomeButton />

      <div className="h-full w-full flex flex-col gap-10">

        {/* ABOUT ME */}
        <section>
          <div className="section-title">ABOUT ME</div>
          <div className="mt-3">
            <p className="font-zh text-2xl font-bold text-[#3D4A6B] leading-tight tracking-wide">
              喜歡數學 也熱愛設計
            </p>
            <p className="font-zh text-3xl font-bold text-[#3D4A6B] leading-tight tracking-tight">
              
            </p>
            <p className="font-zh text-sm text-[#A7B2CC] mt-3 leading-relaxed tracking-wide">
              期待在理性與美感之間 找到屬於自己的火花
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="font-en text-[10px] tracking-[0.3em] text-[#7C8BB3] border border-[#C9D4EE] rounded-full px-3 py-1">#MATH</span>
            <span className="font-en text-[10px] tracking-[0.3em] text-[#7C8BB3] border border-[#C9D4EE] rounded-full px-3 py-1">#DESIGN</span>
            <span className="font-en text-[10px] tracking-[0.3em] text-[#7C8BB3] border border-[#C9D4EE] rounded-full px-3 py-1">#AI</span>
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <div className="section-title">EDUCATION</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
            <div className="group rounded-xl border border-[#C9D4EE] px-6 py-4 bg-transparent hover:bg-[#F2F6FF] hover:border-[#A7B2CC] transition-all duration-300 hover:scale-[1.02] cursor-default">
              <div className="font-en text-[9px] tracking-[0.4em] text-[#A7B2CC] mb-2">MAJOR</div>
              <div className="font-zh font-bold text-xl text-[#3D4A6B]">應用數學系</div>
              <div className="font-en text-xs text-[#A7B2CC] tracking-widest mt-1">NCCU MATH</div>
            </div>
            <div className="group rounded-xl border border-[#C9D4EE] px-6 py-4 bg-transparent hover:bg-[#F2F6FF] hover:border-[#A7B2CC] transition-all duration-300 hover:scale-[1.02] cursor-default">
              <div className="font-en text-[9px] tracking-[0.4em] text-[#A7B2CC] mb-2">SECOND MAJOR</div>
              <div className="font-zh font-bold text-xl text-[#3D4A6B]">數位內容學位學程</div>
              <div className="font-en text-xs text-[#A7B2CC] tracking-widest mt-1">NCCU DCT</div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <div className="section-title">EXPERIENCE</div>
          <div className="mt-3 flex flex-col">
            {[
              { title: 'SITCON學生計算機年會 設計組組長', date: 'Jan 2022 – Sep 2022' },
              { title: '應用數學系 系學會美宣', date: 'Feb 2024 – Jan 2025' },
              { title: 'AI普羅米修斯計劃：型塑政大教育的未來構圖 研究獎助生', date: 'Mar 2025 – Jun 2026' },
              { title: '生成式AI：文字與圖像生成的原理與實務 教學助理', date: 'Sep 2022 – Jan 2026' },
              { title: '生活中的未來語言：數學、Python與AI 教學助理', date: 'Mar 2026 – Jun 2026' },
              { title: '設計思考與人工智慧 教學助理', date: 'Mar 2026 – Jun 2026' },
            ].map((item, i) => (
              <div
                key={i}
                className="group grid grid-cols-[1fr_auto] items-center gap-6 py-3 border-b border-[#E8EDF7] hover:bg-[#F2F6FF] hover:px-3 transition-all duration-200 cursor-default rounded"
              >
                <div className="flex items-center gap-3">
                  <span className="font-en text-[9px] text-[#C9D4EE] tracking-widest tabular-nums w-4 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-zh text-sm text-[#4A5568]">{item.title}</span>
                </div>
                <span className="font-en text-[10px] text-[#A7B2CC] tracking-wider whitespace-nowrap">{item.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="pb-8">
          <div className="section-title">SKILLS</div>
          <div className="mt-4 flex flex-col gap-5">
            <div>
              <div className="sub-section-title mb-3">TOOL USED</div>
              <div className="flex flex-wrap gap-6">
                {['illustrator','photoshop','aftereffect','affinity','figma','blender','unity','vscode','procreate'].map(tool => (
                  <div key={tool} className="group relative">
                    <img src={`/${tool}.svg`} className="w-9 h-9 transition-all duration-200 hover:scale-110 hover:-translate-y-1" />
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-en text-[9px] text-[#A7B2CC] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px bg-[#E8EDF7] mt-2" />
            <div>
              <div className="sub-section-title mb-3">LANGUAGES</div>
              <div className="flex gap-4">
                {['python','cplusplus'].map(lang => (
                  <div key={lang} className="group relative">
                    <img src={`/${lang}.svg`} className="w-9 h-9 transition-all duration-200 hover:scale-110 hover:-translate-y-1" />
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-en text-[10px] text-[#A7B2CC] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {lang}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}