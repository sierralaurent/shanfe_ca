import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course01() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-white shadow-2xl items-center w-80 p-6 gap-5 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo19.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-xl font-bold'>#110 Hyperbaric Core Competencies</h1>
                    <div className='flex flex-col items-center'>
                    <h2 className='text-lg font-bold text-center'>April 8-9</h2>
                    </div>
                    <h2 className='text-lg'>In Person</h2>
                </div>
                <div>
                <Link href="/hyperbariccorecompetency"><Button backgroundColor="Sky">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
