import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full bg-white shadow-inner py-6 mt-10'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
        <p>© 2025 Diet Recipe App. All rights reserved.</p>
        <div className='flex gap-4 mt-2 md:mt-0'>
          <Link href='/' className='hover:text-black'>
            Home
          </Link>
          <Link href='/recipe' className='hover:text-black'>
            レシピ一覧
          </Link>
        </div>
      </div>
    </footer>
  );
};
