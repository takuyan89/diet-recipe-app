import Link from 'next/link';

export const Header = () => {
  return (
    <header className='fixed top-0 w-full z-50 bg-white shadow px-4 py-3 h-16'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* ロゴ */}
        <div className='text-2xl font-bold text-gray-800'>
          <Link href='/'>ダイエットレシピ集</Link>
        </div>

        {/* ナビゲーション */}
        <nav className='hidden md:flex gap-3 text-gray-600'>
          <Link href='/' className='hover:text-black'>
            Home
          </Link>
          <Link href='/recipe' className='hover:text-black'>
            レシピ一覧
          </Link>
          <Link href='/category' className='hover:text-black'>
            カテゴリー一覧
          </Link>
        </nav>

        {/* ログイン */}
        <div className='space-x-4'>
          <Link href='/login' className='px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-500 transition'>
            レシピを書く
          </Link>
          <Link href='/login' className='px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-500 transition'>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};
