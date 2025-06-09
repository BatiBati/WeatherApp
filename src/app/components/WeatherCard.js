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
      class={`flex absolute top-[200px] pt-[56px] pl-[40px] pr-[40px] pb-[56px] rounded-[20px] flex-col justify-center ${
        isNight
          ? "right-[300px] bg-[#111827bf] backdrop-blur-[10px]"
          : "left-[400px] bg-[white]"
      }`}
    >
      <div class="text-[18px] text-[#9ca3af] font-[500]">{currentDate}</div>
      <div class="flex justify-between items-center gap-[112px]">
        <div
          class={`text-[48px] font-[800] ${
            isNight ? "text-[white]" : "text-[#111827]"
          }`}
        >
          {location}
        </div>
        {Icon ? (
          <Icon class="w-[32px] h-[32px]" />
        ) : (
          <img src="/Images/localization_icon.jpg" class="w-[32px] h-[32px]" />
        )}
      </div>
      <div class="flex justify-center">
        <img
          src={isNight ? "/Images/moon.png" : "/Images/sun.png"}
          class="w-[274px] h-[274px]"
        />
      </div>
      <div
        class={`text-[144px] font-bold bg-clip-text font-[800] ${
          isNight
            ? "bg-linear-[#6b7280,#111827]"
            : "bg-linear-[#111827,#6b7280]"
        }`}
        style={{ WebkitTextFillColor: "transparent" }}
      >
        {temperature}°
      </div>
      <div
        class={`text-[24px] font-[800] ${
          isNight ? "text-[#777cce]" : "text-[#ff8e27]"
        }`}
      >
        {condition}
      </div>
      <div class="flex mt-[48px] gap-[63.33px]">
        <img
          src={isNight ? "/Images/night-home.png" : "/Images/Home.png"}
          class="w-[32px] h-[32px]"
        />
        <img src="/Images/Pin.png" class="w-[32px] h-[32px]" />
        <img src="/Images/Heart.png" class="w-[32px] h-[32px]" />
        <img src="/Images/User.png" class="w-[32px] h-[32px]" />
      </div>
    </div>
  );
}
