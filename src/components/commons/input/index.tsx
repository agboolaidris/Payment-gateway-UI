import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

const inputStyle = cva(
  "h-12 rounded w-full border focus-within:border-2 duration-100 transition-all flex items-center overflow-hidden",
  {
    defaultVariants: { intent: "primary" },
    variants: {
      intent: {
        primary: "border-gray-300 focus-within:border-blue-700 bg-transparent",
      },
    },
  }
);

type Props = VariantProps<typeof inputStyle> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    error?: string;
    inputClassName?: string;
  };

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { intent, className, rightIcon, leftIcon, error, inputClassName, ...props },
    ref
  ) => {
    return (
      <div className="w-full">
        <div className={inputStyle({ className, intent })}>
          {leftIcon && <div className="text-gray-400 px-2">{leftIcon}</div>}
          <input
            className={classNames(
              "h-full w-full border-0 bg-transparent px-2 text-sm outline-0 placeholder:text-sm font-semibold text-gray-700 focus:text-blue-700",
              inputClassName
            )}
            {...props}
            ref={ref}
          />
          {rightIcon && <div className="text-gray-400 px-2">{rightIcon}</div>}
        </div>
        {error && <p className="text-xs text-rose-700">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
