import { FC } from "react";
import { CarProps } from "@/types/index";

interface Props {
  car: CarProps;
}

const CarInfoSection: FC<Props> = ({ car }) => {
  return (
    <div className="flex flex-col px-4 mt-4 mb-4 gap-2">
      <h1 className="font-semibold capitalize text-xl">
        {car.make} {car.model}
      </h1>

      <div className="mt-3 flex flex-wrap gap-4">
        {Object.entries(car).map(([key, value]) => (
          <div
            className="flex justify-between gap-5 w-full text-right"
            key={key}
          >
            <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
            <p className="text-black-100 font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-gray-500">City Mpg</p>
        <p className="text-black">21</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-gray-500">Class</p>
        <p className="text-black">midsize car</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-gray-500">Combination Mpg</p>
        <p className="text-black">24</p>
      </div>
    </div>
  );
};

export default CarInfoSection;
