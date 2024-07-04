import { MouseEventHandler, ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
  onClick?: MouseEventHandler;
}

function Buttons(props: Props) {
  return (
    <button
      className="px-6 py-4 bg-[#4285f4] rounded-xl text-white font-bold"
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </button>
  );
}

export default Buttons;
