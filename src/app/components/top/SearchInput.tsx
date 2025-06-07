import { SearchInputProps } from '@/types/top/types';

export const SearchInput = ({ value, handler, onEnter }: SearchInputProps) => {
  return (
    <input
      className='border border-black rounded-2xl px-4 py-2 lg:w-80 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:w-60'
      type='text'
      placeholder='例: オムライス'
      value={value}
      onChange={(e) => handler?.(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onEnter) {
          onEnter();
        }
      }}
    />
  );
};
