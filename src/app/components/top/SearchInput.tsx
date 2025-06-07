type Props = {
  value?: string;
  handler?: (value: string) => void;
  onEnter?: () => void;
};

export const SearchInput = ({ value, handler, onEnter }: Props) => {
  return (
    <input
      className='border border-gray-500 rounded-2xl px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500'
      type='text'
      placeholder='Search...'
      value={value}
      onChange={(e) => handler?.(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onEnter) onEnter();
      }}
    />
  );
};
