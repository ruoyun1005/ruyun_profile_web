import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className = "bg-gray-200 h-screen w-full flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg flex justify-center items-center flex-col inline-block">
          <img src="/next.svg" alt="avator" width={100} height={100}/>
          <div>羅如妘</div>
          <div>Ruyun Luo</div>

        </div>
      </div>
      
    </>
  );
}
