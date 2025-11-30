import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course09() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-white shadow-2xl items-center w-80 p-6 gap-5 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo26.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-xl font-bold'>#100 Introduction to Hyperbaric Medicine</h1>
                    <h2 className='text-lg font-bold'>Monthly</h2>
                    <h2 className='text-lg'>Online</h2>
                </div>
                <div>
                <Link href="/introhyperbaricmedicine"><Button backgroundColor="Eggshell">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
