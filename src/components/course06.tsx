import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course06() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-Eggshell items-center w-80 p-6 gap-5 rounded-3xl ">
            <Image
                className="rounded-3xl"
                src='/images/photo17.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-2 justify-evenly'>
                    <h1 className='text-xl font-bold'>#180 Hyperbaric Safety</h1>
                    <h2 className='text-lg font-bold'>February 13-14</h2>
                    <h2 className='text-lg'>In Person</h2>
                </div>
                <div>
                <Link href="/safetyspecialist"><Button backgroundColor="Sky">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
