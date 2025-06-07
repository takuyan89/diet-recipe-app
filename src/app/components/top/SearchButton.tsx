'use client';
import { useRouter } from 'next/navigation';

type Props = {
  keyword?: string;
};

export const SearchButton = ({ keyword }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    const trimmed = keyword?.trim();
    if (trimmed) {
      router.push(`/recipe?query=${encodeURIComponent(trimmed)}`);
    }
  };
  return (
    <button
      onClick={handleClick}
      className='bg-yellow-300 text-black px-4 py-2 rounded-2xl hover:bg-yellow-500 transition-colors hover:cursor-pointer'
    >
      検索
    </button>
  );
};
