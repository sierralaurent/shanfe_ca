import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();

    // Function to determine if a link is active
    const isLinkActive = (href: string) => {
        return router.pathname === href;
    };

    return (
        <>
            <div className={'w-full flex flex-row justify-between items-center p-5 text-Chocolate'}>
                <Image
                    className='hover:scale-110 transition-transform'
                    src='/LogoMark300ppi.png'
                    width={150}
                    height={150}
                    alt=''
                />
                <div className={'flex flex-row gap-10'}>
                    <Link href="/">
                        <h1 className={`text-xl font-bold hover:scale-110 transition-transform ${isLinkActive('/') ? 'underline' : ''}`}>Services</h1>
                    </Link>
                    <Link href="/about">
                        <h1 className={`text-xl font-bold hover:scale-110 transition-transform ${isLinkActive('/about') ? 'underline' : ''}`}>About</h1>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}