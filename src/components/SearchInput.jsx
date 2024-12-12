import { SearchIcon } from "./SearchIcon"

export const SearchInput = ()=>{
    return (<div className="w-[800px] h-[80px] bg-[#FFFFFF] rounded-[48px] fixed top-[30px] left-[160px] flex">
        <div className="mt-[20px] ml-[30px]">
          <SearchIcon />
        </div>
        <input
          type="inpit"
          placeholder="Search"
          className="h-full w-[500px] text-black  ml-[20px] text-xl focus:outline-0 "
        ></input>
      </div>)
}