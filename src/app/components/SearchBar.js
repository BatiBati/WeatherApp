export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex z-10 items-center absolute w-[567px] h-[80px] pl-[24px] pt-[16px] pb-[16px] border order-solid border-[#ccc] rounded-[40px] text-[20px] bg-[white] left-[40px] top-[40px] font-[700]">
      <img src="Images/search (1).png" className="flex w-[32px] h-[32px]" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="divide-none outline-none text-[20px] pl-[16px] bg-transparent w-full pr-6"
      />
    </div>
  );
}
