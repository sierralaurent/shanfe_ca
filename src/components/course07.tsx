import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course07() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-Eggshell items-center w-80 p-10 gap-10 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo20.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-2xl font-bold'>Acrylics Technician</h1>
                    <h2 className='text-lg font-bold'>August 26</h2>
                    <h2 className='text-lg'>In Person</h2>
                    <Button backgroundColor="Sky">See Syllabus</Button>
                </div>
        </div>
    );
}
