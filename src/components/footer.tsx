import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
    
    return (
        <>
           <div className={'text-Chocolate rounded-3xl w-full flex flex-col items-center p-8 gap-8 bg-Sky divide-y-4 divide-Chocolate max-w-7xl'}>
            <div className={'flex flex-row items-end justify-between gap-8 tablet:flex-col'}>
                <div className={'w-8/12 flex flex-col gap-8 tablet:w-full'}>
                    <h1 className='text-5xl font-bold tablet:text-3xl mobile:text-xl'>Ready to elevate your hyperbaric safety standards and training programs?</h1>
                    <h1 className='text-2xl tablet:text-xl mobile:text-lg'>Connect with Shanfe today to ensure your organization's safety and compliance goals are exceeded.</h1>
                </div>
                <div className='items-end text-right'>
                    <h1 className='text-xl'>Shanfe Research and Consulting Ltd.</h1>
                    <h1 className='text-xl'>North Vancouver, B.C.</h1>
                    <h1 className='text-xl'>info@shanfe.ca</h1>
                    <h1 className='text-xl'>(604) 802-7069</h1>
                </div>
            </div>
                <div className={'flex flex-row justify-between pt-10 w-full items-center mobile:flex-col mobile:gap-8'}>
                <Image
                    src='/Icons/LogoMark-Brown.png'
                    width={200}
                    height={200}
                    alt=''
                    />
                    <div className={'flex flex-col items-end'}>
                        <h1 className='items-end text-right'>© Shanfe Research and Consulting, 2024</h1>
                        <h1 className='items-end text-right'>All Rights Reserved</h1>
                    </div>
                </div>
           </div>
        </>
    )
}