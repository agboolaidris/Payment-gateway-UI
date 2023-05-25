import { HiCreditCard } from "react-icons/hi2";

export const AceCoinLogo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-8 h-8 bg-blue-700 rounded-full flex justify-center items-center">
        <HiCreditCard className="text-white" />
      </div>
      <h3 className="font-semibold text-lg">
        AceCoin<span className="font-normal text-gray-700">Pay</span>
      </h3>
    </div>
  );
};
