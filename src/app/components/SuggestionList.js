export default function Suggestions({ suggestions, onSelect }) {
  return (
    <div className="absolute top-[140px] left-[40px] bg-[white] border order-solid border-[#ccc] rounded-[30px] z-2 pt-[16px] pb-20px w-[567px] text-[28px] gap-[25px] max-h-[216px] overflow-scroll font-[700]">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="flex p-[10px] cursor-pointer gap-[16px] hover:bg-[#f0f0f0] opacity-[90%]"
          onClick={() => onSelect(suggestion)}
        >
          <img src="/Images/rooms.png" className="w-[40px] h-[40px]" />
          {suggestion.city}, {suggestion.country}
        </div>
      ))}
    </div>
  );
}
