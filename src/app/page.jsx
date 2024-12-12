import Image from "next/image";
import { LocationIcon } from "../components/LocationIcon";
import { SearchIcon } from "@/components/SearchIcon";
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-screen bg-[#F3F4F6]">
        <SearchInput />
        <div>
          <div className="w-[200px] h-[200px] m-0 top-[550px] left-[1180px] flex absolute rounded-full bg-[#F3F4F6] z-20"></div>
          <div className="w-[140px] h-[140px] absolute bg-transparent top-[580px] left-[1210px] border-[1px] border-[#000000] rounded-full opacity-[10%] z-20"></div>
          <div className="w-[340px] h-[340px] absolute bg-transparent top-[480px] left-[1110px] border-[1px] border-[#000000] rounded-full opacity-[10%] z-20"></div>
          <div className="w-[540px] h-[540px] absolute bg-transparent top-[380px] left-[1010px] border-[1px] border-[#000000] rounded-full opacity-[10%] z-20"></div>
          <div className="w-[940px] h-[940px] absolute bg-transparent top-[180px] left-[810px] border-[1px] border-[#000000] rounded-full opacity-[10%] z-20"></div>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="h-2/3 w-1/2 bg-[#FFFFFF] rounded-[48px] z-30">
            <div className="flex items-center justify-around">
              <div>
                <div className="text-[#111827] font-[500] text-[18px] leading-[25px] mt-[50px]">
                  September 10, 2021
                </div>
                <div className="text-[#111827] font-[800] text-[48px] leading-[66px] mt-0">
                  Kraków
                </div>
              </div>
              <div className="mt-[30px]">
                <LocationIcon />
              </div>
            </div>
            <div className="flex justify-center mt-[80px]">
            <Image src="/Sun.png" width={262} height={262} alt="" className="absolute"/>
            </div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#a9afbb] text-[144px] font-[800] leading-[197px] flex ml-[50px] mt-[300px]">26°</h1>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-[#0F141E] rounded-3xl flex items-center justify-center relative z-10">
        <div className="h-2/3 w-1/2 rounded-[48px] bg-gradient-to-b from-[#1F2937] to-[#111827BF] z-10">
        <div className="flex items-center justify-around">
              <div>
                <div className="text-[#FFFFFF] font-[500] text-[18px] leading-[25px] mt-[50px]">
                  September 10, 2021
                </div>
                <div className="text-[#FFFFFF] font-[800] text-[48px] leading-[66px] mt-0">
                  Kraków
                </div>
              </div>
              <div className="mt-[30px]">
                <LocationIcon/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
