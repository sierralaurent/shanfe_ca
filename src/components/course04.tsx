import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course04() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-Sky items-center w-80 p-6 gap-5 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo19.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-2xl font-bold'>#120 Multiplace Chamber Operator</h1>
                    <div className='flex flex-col items-center'>
                    <h2 className='text-lg font-bold'>October 30-31</h2>
                    <h2 className='text-lg font-bold'>Nov 20-22</h2>
                    </div>
                    <h2 className='text-lg'>In Person</h2>
                </div>
                <div>
                <Link href="/multiplaceoperations"><Button backgroundColor="Eggshell">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
