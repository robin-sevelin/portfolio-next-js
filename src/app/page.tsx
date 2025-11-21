import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='h-full flex flex-col items-center justify-center p-8 text-center'>
      <h2 className='text-4xl font-bold mb-6'>
        Välkommen till min porfolio sida
      </h2>
      <p className='text-lg text-gray-600 max-w-xl mb-8'>
        Här kan du läsa om vem jag är och tidigare projekt.
      </p>
      <Link
        href={'/about'}
        className='px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition'
      >
        Läs mer om mig
      </Link>
      <Image
        className='py-3'
        src={'/images/Trollface.png'}
        width={100}
        height={100}
        alt='trollface image'
        loading='lazy'
      />
    </section>
  );
}
