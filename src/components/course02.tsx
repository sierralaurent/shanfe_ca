import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course02() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-Sky items-center w-80 p-10 gap-10 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo01.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-3xl font-bold'>HCO - Clinical Hyperbaric Medicine</h1>
                    <h2 className='text-xl font-bold'>Run Monthly</h2>
                    <h2 className='text-xl'>Online</h2>
                    <Link href="/chamber-core-competency"><Button backgroundColor="Eggshell">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
