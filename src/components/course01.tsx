import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course01() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-Eggshell items-center w-80 p-6 gap-5 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo22.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-2xl font-bold'>Chamber Core Competency</h1>
                    <div className='flex flex-col items-center'>
                    <h2 className='text-lg font-bold'>February 10-12</h2>
                    <h2 className='text-lg font-bold'>March 1-3</h2>
                    </div>
                    <h2 className='text-lg'>In Person</h2>
                </div>
                <div>
                <Link href="/chamber-core-competency"><Button backgroundColor="Sky">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
