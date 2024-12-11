import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-screen bg-[#F3F4F6]">
        <div className="w-[567px] h-[80px] bg-[#FFFFFF] rounded-[48px] fixed top-[30px] left-[130px] flex">
          <div className="mt-[20px] ml-[30px]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5098 22.5098H23.9298L23.3698 21.9698C25.3298 19.6898 26.5098 16.7298 26.5098 13.5098C26.5098 6.32977 20.6898 0.509766 13.5098 0.509766C6.32977 0.509766 0.509766 6.32977 0.509766 13.5098C0.509766 20.6898 6.32977 26.5098 13.5098 26.5098C16.7298 26.5098 19.6898 25.3298 21.9698 23.3698L22.5098 23.9298V25.5098L32.5098 35.4898L35.4898 32.5098L25.5098 22.5098ZM13.5098 22.5098C8.52977 22.5098 4.50977 18.4898 4.50977 13.5098C4.50977 8.52977 8.52977 4.50977 13.5098 4.50977C18.4898 4.50977 22.5098 8.52977 22.5098 13.5098C22.5098 18.4898 18.4898 22.5098 13.5098 22.5098Z"
              fill="#000000" className="opacity-30"
            />
          </svg>
          </div>
          <input type="inpit" placeholder="Search" className="h-full w-[430px] text-black  ml-[20px] text-xl focus:outline-0 "></input>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="h-2/3 w-1/2 bg-[#894141] rounded-[48px]"></div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-[#0F141E] rounded-3xl flex items-center justify-center">
        <div className="h-2/3 w-1/2 bg-[#111827BF] rounded-[48px] bg-gradient-to-b from-[#1F2937] to-[#111827BF] "></div>
      </div>
    </div>
  );
}
