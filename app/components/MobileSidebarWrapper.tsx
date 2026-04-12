'use client';
import { useState } from 'react';
import SideBar from './SideBar';

export default function MobileSidebarWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 手機版頂部 bar */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-14 right-10 z-30 sm:hidden
          w-11 h-11 rounded-full bg-[#FBFCFE] shadow-md shadow-blue-500/20
          flex flex-col gap-[5px] items-center justify-center
          transition-all duration-300 hover:scale-105"
        aria-label="開關選單"
      >
        <span className={`block w-4 h-[1.5px] bg-gray-500 rounded transition-all duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
        <span className={`block w-4 h-[1.5px] bg-gray-500 rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block w-4 h-[1.5px] bg-gray-500 rounded transition-all duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
      </button>

      {/* 手機版遮罩 */}
      {open && (
        <div
          className="fixed inset-0 bg-black/25 z-10 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar：手機版 drawer，桌機版正常 */}
      <div className={`
        fixed  left-0 h-full z-20 transition-transform duration-300
        sm:static sm:translate-x-0 sm:z-auto sm:h-auto sm:flex
        bg-[#FBFCFE] rounded-2xl min-w-[250px] w-[250px]
        justify-start items-center flex flex-col p-[24px] pt-[24px]
        overflow-x-hidden
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-[100px] w-[100px] rounded-full outline-4 outline-[#A7B2CC] duration-300 hover:scale-95">
          <img src="/media/avatar.png" alt="avator" width={100} height={100} />
        </div>
        <div className="font-zh font-bold text-base mt-4">羅如妘</div>
        <div className="font-en text-sm tracking-wider">Ru yun, Luo</div>
        <div className="flex gap-3 my-4 items-center">
          <a href="https://www.instagram.com/ruoyun1005/" className="group">
            <div className="bg-[#FFFEFA] hover:bg-[#A7B2CC] w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors duration-300 hover:scale-110">
              <img src="/Instagram.svg" className="w-[20px] h-[20px] transition-all duration-100 group-hover:invert group-hover:brightness-0" />
            </div>
          </a>
          <a href="https://github.com/ruoyun1005" className="group">
            <div className="bg-[#FFFEFA] hover:bg-[#A7B2CC] w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors duration-300 hover:scale-110">
              <img src="/Github.svg" className="w-[20px] h-[20px] transition-all duration-100 group-hover:invert group-hover:brightness-0" />
            </div>
          </a>
        </div>
        <SideBar />
      </div>
    </>
  );
}