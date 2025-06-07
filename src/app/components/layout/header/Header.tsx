import Link from 'next/link';

export const Header = () => {
  return (
    <header className='fixed top-0 w-full z-50 bg-white shadow px-4 py-3 h-16'>
      <div className='lg:max-w-7xl mx-auto flex items-center justify-between'>
        <div className='text-2xl font-bold text-black'>
          <Link href='/'>ダイエットレシピ集</Link>
        </div>

        <nav className='hidden md:flex gap-2 text-gray-600'>
          <Link href='/' className='font-bold hover:text-black'>
            Home
          </Link>
          <Link href='/recipe' className='font-bold hover:text-black'>
            レシピ一覧
          </Link>
        </nav>

        <div>
          <Link
            href='/recipe/new'
            className='px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-500 transition'
          >
            レシピを書く
          </Link>
        </div>
      </div>
    </header>
  );
};
