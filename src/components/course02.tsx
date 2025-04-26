import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course02() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-Sky items-center w-80 p-10 gap-10 rounded-3xl">
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
                    <Link href="/hyperbaric-medicine"><Button backgroundColor="Eggshell">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
