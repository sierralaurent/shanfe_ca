import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course02() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-Eggshell items-center w-80 p-6 gap-5 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo16.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col justifyitems-center gap-2'>
                    <h1 className='text-2xl font-bold'>#130 Monoplace Chamber Operator</h1>
                    <h2 className='text-lg font-bold'>February 8-9</h2>
                    <h2 className='text-lg'>In Person</h2>
                </div>
                <div>
                <Link href="/hyperbaricmedicine"><Button backgroundColor="Sky">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
