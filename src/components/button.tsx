import { motion } from "framer-motion";
import Image from 'next/image';

interface ButtonProps {
  backgroundColor: string;
  children: string;
  onClick?: () => void; // Add onClick prop
}

export default function Button({ backgroundColor, children, onClick }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick} // Attach onClick handler
      className={`flex flex-row items-center gap-3 min-w-min text-Chocolate max-w-fit p-3 text-2xl rounded-xl font-bold cursor-pointer bg-${backgroundColor}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image
        className=''
        src="/Icons/Arrow.svg"
        width={20}
        height={20}
        alt=''
      />
      {children}
    </motion.button>
  );
}