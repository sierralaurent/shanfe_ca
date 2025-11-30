import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Link from 'next/link';

export default function Course07() {
    
    return (
        <div className="text-Chocolate flex flex-col gap bg-white shadow-2xl items-center w-80 p-6 gap-5 rounded-3xl">
            <Image
                className="rounded-3xl"
                src='/images/photo20.png'
                width={200}
                height={200}
                alt=''
            />

                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-xl font-bold'>#190 Inspection and Maintenance of Acrylics</h1>
                    <h2 className='text-lg font-bold'>February 15</h2>
                    <h2 className='text-lg'>In Person</h2>
                </div>
                <div>
                <Link href="/acrylicsinspectionandmaintenance"><Button backgroundColor="Sky">See Syllabus</Button></Link>
                </div>
        </div>
    );
}
