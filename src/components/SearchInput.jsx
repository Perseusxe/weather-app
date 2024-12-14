import { SearchIcon } from "./SearchIcon"

export const SearchInput = ({search, onChangeText, onPressEnter})=>{
    return (<div className="w-[800px] h-[80px] bg-[#FFFFFF] rounded-[48px] fixed top-[30px] left-[160px] flex">
        <div className="mt-[20px] ml-[30px]">
          <SearchIcon />
        </div>
        <input
          type="search"
          placeholder="Search"
          className="h-full w-[500px] text-black  ml-[20px] text-xl focus:outline-0 "
          search={search}
          onChange={onChangeText}
          onKeyDown={onPressEnter}
        ></input>
      </div>)
}