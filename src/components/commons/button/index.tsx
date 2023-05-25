import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { IconType } from "react-icons";

const buttonstyle = cva(
  "rounded  disabled:pointer-events-none disabled:opacity-70 font-medium focus:outline-none flex justify-center items-center focus:z-10 focus:ring-4",
  {
    defaultVariants: {
      size: "md",
      variants: "primary",
      block: false,
    },
    variants: {
      size: {
        md: "py-2.5 px-5 text-sm gap-2",
        sm: "p-2 text-xs gap-1",
      },
      variants: {
        normal: "text-blue-700 hover:bg-blue-700 hover:text-white ",
        primary:
          "bg-blue-700 text-white hover:bg-blue-600 focus:ring-blue-600 dark:focus:ring-blue-600",
      },
      block: {
        true: "w-full",
      },
    },
  }
);

type Props = VariantProps<typeof buttonstyle> &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    isloading?: boolean;
    leftIcon?: IconType;
  };

export const Button = ({
  variants,
  size,
  className,
  children,
  block,
  leftIcon: LeftIcon,
  ...rest
}: Props) => {
  const style = buttonstyle({ className, size, variants, block });
  return (
    <button className={style} {...rest}>
      {LeftIcon && <LeftIcon />}
      {children}
    </button>
  );
};
