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

type RecipeFormValues = {
  title: string;
  imageUrl?: string;
  description: string;
  calories: number;
  amount: number;
};

type StepFormValues = {
  order: number;
  content: string;
};

type IngredientFormValues = {
  name: string;
  quantity: string;
};

export type FullRecipeFormValues = {
  recipe: RecipeFormValues;
  steps: StepFormValues[];
  ingredients: IngredientFormValues[];
};

export type ingredientType = {
  name: string;
  quantity: string;
};

export type stepType = {
  content: string;
  order: number;
};
