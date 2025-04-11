import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Card003() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  const router = useRouter();
  
      // Function to determine if a link is active
      const isLinkActive = (href: string) => {
          return router.pathname === href;
      };

  return (
    <div className="text-Chocolate flex flex-row w-full gap bg-Eggshell items-center p-10 gap-10 rounded-3xl relative mobile:flex-col">
      <Image
        className="rounded-3xl"
        src="/images/photo03.png"
        width={350}
        height={350}
        alt=""
      />

      <div className="gap-5 flex flex-col">
        <h1 className="text-5xl font-bold">Training</h1>
        
          <div className="flex flex-col gap-4">
            <p className='text-lg'>
                    Shanfe provides comprehensive training in hyperbaric safety and operation such as training and education for: 
                    </p>
                    <div className='flex flex-col gap-6'>
                        <Link href="/courses"><Button backgroundColor="Sky">Hyperbaric Courses</Button></Link>
                        <Button backgroundColor="Sky">High Altitude Courses - Coming Soon</Button>
                        </div>

          </div>
      </div>
    </div>
  );
}
