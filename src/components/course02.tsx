import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course02() {
    
    return (
        <div className="text-Chocolate flex justify-between flex-col gap bg-Eggshell items-center w-80 p-6 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo16.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-2xl font-bold'>HCO - Clinical Hyperbaric Medicine</h1>
                    <h2 className='text-lg font-bold'>Monthly</h2>
                    <h2 className='text-lg'>Online</h2>
                </div>
                <div>
                <Link href="/hyperbaric-medicine"><Button backgroundColor="Sky">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
