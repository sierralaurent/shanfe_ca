import Image from "next/image";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Image
      src='/LogoMark300ppi.png'
      width={200}
      height={200}
      alt=''
      />
    </main>
  );
}
