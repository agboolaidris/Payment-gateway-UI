import { Input } from "../commons/input";
import { Button } from "../commons/button";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FiEdit2 } from "react-icons/fi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { SubmitHandler, useFormContext } from "react-hook-form";

export type AtmDetail = {
  password: string;
  atm_number: string;
  ccv_number: string;
  expire_date_month: string;
  expire_date_year: string;
};

type Props = {
  onSubmit: SubmitHandler<AtmDetail>;
};

export const AddAtmCardForm = ({ onSubmit }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext<AtmDetail>();
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="">
            <h6 className="text-sm text-gray-700 font-semibold">CCV Number</h6>
            <p className="text-xs text-gray-500">
              Enter 3 or 4 number in this card
            </p>
          </div>
          <Button size="sm" variants="normal" leftIcon={FiEdit2} type="button">
            Edit
          </Button>
        </div>
        <Input
          leftIcon={<img src="/mastercard.svg" className="w-7 h-7" />}
          rightIcon={<VscVerifiedFilled className="text-sky-500" />}
          placeholder="2345 - 7672 - 3767 - 3776"
          error={errors.atm_number?.message}
          {...register("atm_number")}
        />
      </div>
      <div className="flex gap-2 md:gap-4 flex-col lg:flex-row">
        <div className="flex-1">
          <h6 className="text-sm text-gray-700 font-semibold">CCV Number</h6>
          <p className="text-xs text-gray-500">
            Enter 3 or 4 number in this card
          </p>
        </div>
        <div className="flex-1">
          <Input
            rightIcon={<TfiLayoutGrid3Alt />}
            inputClassName="text-center"
            placeholder="452"
            error={errors.ccv_number?.message}
            {...register("ccv_number")}
          />
        </div>
      </div>
      <div className="flex gap-2 md:gap-4  flex-col lg:flex-row">
        <div className="flex-1">
          <h6 className="text-sm text-gray-700 font-semibold">Expiry Date</h6>
          <p className="text-xs text-gray-500">
            Enter the expiration date of this card
          </p>
        </div>
        <div className="flex-1 flex gap-4 items-center text-gray-700">
          <Input
            placeholder="MM"
            inputClassName="text-center"
            error={errors.expire_date_month?.message}
            {...register("expire_date_month")}
          />
          /
          <Input
            placeholder="YY"
            inputClassName="text-center"
            error={errors.expire_date_year?.message}
            {...register("expire_date_year")}
          />
        </div>
      </div>
      <div className="flex gap-2 md:gap-4  flex-col lg:flex-row">
        <div className="flex-1">
          <h6 className="text-sm text-gray-700 font-semibold">Password</h6>
          <p className="text-xs text-gray-500">Enter your dynamic password</p>
        </div>
        <div className="flex-1">
          <Input
            type="password"
            rightIcon={<TfiLayoutGrid3Alt />}
            placeholder="*********"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
      </div>
      <Button block>Pay Now</Button>
    </form>
  );
};
