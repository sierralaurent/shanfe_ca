import { motion } from "framer-motion";
import Image from 'next/image'

interface ButtonProps {
  backgroundColor: string;
  onClick?: () => void; // Add onClick prop
  children: string;
}

export default function Button({ backgroundColor, onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick} // Attach onClick handler
      className={`flex flex-row items-center gap-3 w-fit text-Chocolate p-3 text-2xl rounded-xl font-bold cursor-pointer bg-${backgroundColor}`}
    >
      <Image
        className=''
        src="/Icons/Arrow.svg"
        width={20}
        height={20}
        alt=''
      />
      {children}
    </button>
  );
}