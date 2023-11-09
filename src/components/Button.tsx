import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className: string;
  onClick: () => void;
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center font-bold text-md response:text-lg p-4",
        "ease-in-out duration-200 select-none active:duration-100",
        "border border-solid rounded-xl mb-2",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
