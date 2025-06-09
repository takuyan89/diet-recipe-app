import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#FAFAF5] text-black'>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動された可能性があります。</p>
      <Link href='/' className='text-blue-500 hover:underline'>
        ホームページに戻る
      </Link>
    </div>
  );
}
