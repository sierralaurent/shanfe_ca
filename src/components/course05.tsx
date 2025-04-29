import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course05() {
    
    return (
        <div className="text-Chocolate flex justify-between flex-col bg-Eggshell items-center w-80 p-6 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo15.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-5 mobile:pt-10 mobile:pb-5'>
                    <h1 className='text-2xl font-bold'>HCO – Tunnel Operations Support</h1>
                    <h2 className='text-lg font-bold'>On Demand</h2>
                    <h2 className='text-lg'>Online</h2>
                </div>
                <div>
                <Link href="/tunnel-operations"><Button backgroundColor="Sky">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
