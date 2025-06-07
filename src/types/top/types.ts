export type SearchInputProps = {
  value?: string;
  handler?: (value: string) => void;
  onEnter?: () => void;
};

export type SearchButtonProps = {
  keyword?: string;
};

export type RecipeListProps = {
  keyword?: string;
  category?: string;
};

export type ClientRecipeWrapperProps = {
  keyword?: string;
  category?: string;
};

export type RecipeContainerProps = {
  keyword?: string;
  category?: string;
};
