import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course03() {
    
    return (
        <div className="text-Chocolate flex flex-col justify-between gap bg-Sky items-center w-80 p-6  gap-10 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo20.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-2xl font-bold'>HCO - Diving Operations Support</h1>
                    <h2 className='text-lg font-bold'>On Demand</h2>
                    <h2 className='text-lg'>Online / In Person</h2>
                </div>
                <div>
                <Link href="/diving-operations"><Button backgroundColor="Eggshell">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
