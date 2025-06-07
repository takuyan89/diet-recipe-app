'use client';
import { SearchButtonProps } from '@/types/top/types';
import { useRouter } from 'next/navigation';

export const SearchButton = ({ keyword }: SearchButtonProps) => {
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/recipe?query=${keyword}`);
  };

  return (
    <button
      onClick={handleSearch}
      className='bg-yellow-300 text-black px-4 py-2 rounded-2xl hover:bg-yellow-500 transition-colors hover:cursor-pointer'
    >
      検索
    </button>
  );
};
