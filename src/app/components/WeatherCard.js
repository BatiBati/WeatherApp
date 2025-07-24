export default function WeatherCard({
  variant,
  location,
  currentDate,
  temperature,
  condition,
  Icon,
}) {
  const isNight = variant === "night";

  return (

    <div
      className={`flex absolute top-[100px] w-fit h-fit p-5 rounded-[20px] flex-col justify-center ${isNight
        ? "right-[300px] bg-[#111827bf] backdrop-blur-[10px]"
        : "left-[400px] bg-[white]"
        }`}
    >
      <div className="text-[18px] text-[#9ca3af] font-[500]">{currentDate}</div>
      <div className="flex justify-between items-center gap-[112px]">
        <div
          className={`text-[48px] font-[800] ${isNight ? "text-[white]" : "text-[#111827]"
            }`}
        >
          {location}
        </div>
        {Icon ? (
          <Icon className="w-[32px] h-[32px]" />
        ) : (
          <img src="/Images/localization_icon.jpg" className="w-[32px] h-[32px]" />
        )}
      </div>
      <div className="flex justify-center">
        <img
          src={isNight ? "/Images/moon.png" : "/Images/sun.png"}
          className="w-[274px] h-[274px]"
        />
      </div>
      <div
        className={`text-[144px] bg-clip-text font-[800] ${isNight
          ? "bg-linear-[#6b7280,#111827]"
          : "bg-linear-[#111827,#6b7280]"
          }`}
        style={{ WebkitTextFillColor: "transparent" }}
      >
        {temperature}°
      </div>
      <div
        className={`text-[24px] font-[800] ${isNight ? "text-[#777cce]" : "text-[#ff8e27]"
          }`}
      >
        {condition}
      </div>
      <div className="flex mt-[48px] gap-[63.33px]">
        <img
          src={isNight ? "/Images/night-home.png" : "/Images/Home.png"}
          className="w-[32px] h-[32px]"
        />
        <img src="/Images/Pin.png" className="w-[32px] h-[32px]" />
        <img src="/Images/Heart.png" className="w-[32px] h-[32px]" />
        <img src="/Images/User.png" className="w-[32px] h-[32px]" />
      </div>
    </div>

  );
}
