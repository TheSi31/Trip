const Carousel_of_countries = ({ option }: { option: { value: string }[] }) => {
  return (
    <div className="flex flex-col h-[200px] w-full items-center justify-center bg-white text-black border-y-2 border-[#5200d9] my-5">
      <div className="flex items-center w-full h-1/2 overflow-hidden whitespace-nowrap border-y-2 border-[#5200d9]">
        <div className="inline-block animate-marquee">
          <div className="flex items-center ">
            {option.map((item, index) => (
                <div key={index} className="inline-block px-4">
                    <p className="text-6xl font-bold">{item.value}</p>
                </div>
            ))}
            {option.map((item, index) => (
                <div key={index + option.length} className="inline-block px-4">
                    <p className="text-6xl font-bold">{item.value}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex items-center w-full h-1/2 overflow-hidden whitespace-nowrap border-y-2 border-[#5200d9]">
        <div className="inline-block animate-marquee_reverse">
          <div className="flex items-center ">
            {option.map((item, index) => (
                <div key={index} className="inline-block px-4">
                    <p className="text-6xl font-bold">{item.value}</p>
                </div>
            ))}
            {option.map((item, index) => (
                <div key={index + option.length} className="inline-block px-4">
                    <p className="text-6xl font-bold">{item.value}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel_of_countries;
