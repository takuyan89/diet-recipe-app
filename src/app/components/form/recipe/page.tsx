'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type RecipeFormValues = {
  title: string;
  imageUrl: string;
  description: string;
  calories: number;
};

type StepFormValues = {
  order: number;
  content: string;
};

type IngredientFormValues = {
  name: string;
  quantity: string;
};

type FullRecipeFormValues = {
  recipe: RecipeFormValues;
  steps: StepFormValues[];
  ingredients: IngredientFormValues[];
};

export default function RecipeForm() {
  const router = useRouter();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FullRecipeFormValues>({});

  const {
    fields: ingredientFields,
    append: addIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const {
    fields: stepFields,
    append: addStep,
    remove: removeStep,
  } = useFieldArray({
    control,
    name: 'steps',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      setValue('recipe.imageUrl', objectUrl);
    }
  };

  async function onSubmit(values: FullRecipeFormValues) {
    const payload: FullRecipeFormValues = {
      ...values,

      recipe: {
        ...values.recipe,
      },

      ingredients: values.ingredients.map((ingredient, index) => ({
        ...ingredient,
      })),
      steps: values.steps.map((step, index) => ({
        ...step,
        order: index + 1,
      })),
    };

    try {
      const response = await fetch('/api/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('レシピの保存に失敗しました');
      }

      const data = await response.json();
      router.push(`/recipe/${data.id}`);
    } catch (error) {
      console.error('Error saving recipe:', error);
      // Optionally, show error message to the user
      alert('レシピの保存に失敗しました。もう一度お試しください。');
      console.error(error);
      // Reset the form or handle error state as needed
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-4'>
      <h1 className='text-2xl font-bold text-center'>レシピ作成</h1>

      {/* Recipe Basic Info */}
      <div className='w-full max-w-md space-y-4'>
        <div>
          <label htmlFor='title' className='block font-semibold'>
            料理名
          </label>
          <input
            {...register('recipe.title', { required: '料理名を入力してください' })}
            id='title'
            className='border rounded p-2 w-full'
            placeholder='例: ふわふわパンケーキ'
          />
          {errors.recipe?.title && <p className='text-red-500 text-sm'>{errors.recipe.title.message}</p>}
        </div>

        {/* Image Upload + Preview */}
        {/* Image Upload with Custom Button */}
        <div>
          <label className='block font-semibold mb-1'>画像アップロード</label>

          <div className='flex items-start gap-4'>
            {/* Hidden file input */}
            <input type='file' accept='image/*' id='imageInput' onChange={handleImageChange} className='hidden' />

            {/* Upload Button */}
            <button
              type='button'
              onClick={() => document.getElementById('imageInput')?.click()}
              className='bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 px-4 py-2 rounded shadow'
            >
              画像を選択
            </button>

            {/* Preview */}
            {previewUrl && (
              <img src={previewUrl} alt='プレビュー' className='max-w-xs h-auto object-contain rounded shadow' />
            )}
          </div>
        </div>

        {/* Image URL (hidden if using upload only) */}
        <input type='hidden' {...register('recipe.imageUrl')} />

        <div>
          <label className='block font-semibold'>説明</label>
          <textarea
            {...register('recipe.description')}
            className='border rounded p-2 w-full'
            placeholder='レシピの説明を入力してください'
          />
        </div>

        <div>
          <label className='block font-semibold'>カロリー</label>
          <input
            type='number'
            {...register('recipe.calories', { valueAsNumber: true })}
            className='border rounded p-2 w-full'
            placeholder='例: 450'
          />
        </div>
      </div>

      <div className='flex'>
        {/* 材料 */}
        <div>
          <label className='block font-bold text-lg mb-2'>材料</label>
          {ingredientFields.map((field, index) => (
            <div key={field.id} className='flex gap-2 mb-2'>
              <input
                {...register(`ingredients.${index}.name`, { required: '材料名を入力してください' })}
                placeholder='例：小麦粉'
                className='border rounded p-2 w-1/2'
              />
              <input
                {...register(`ingredients.${index}.quantity`, { required: '分量を入力してください' })}
                placeholder='例：100g'
                className='border rounded p-2 w-1/2'
              />
              <button type='button' onClick={() => removeIngredient(index)} className='text-red-500 hover:underline'>
                削除
              </button>
            </div>
          ))}
          <button
            type='button'
            onClick={() => addIngredient({ name: '', quantity: '' })}
            className='text-blue-600 hover:underline'
          >
            材料を追加
          </button>
        </div>

        {/* 手順 */}
        <div>
          <label className='block font-bold text-lg mb-2'>手順</label>
          {stepFields.map((field, index) => (
            <div key={field.id} className='mb-4'>
              <label className='block font-semibold'>手順 {index + 1}</label>
              <textarea
                {...register(`steps.${index}.content`)}
                placeholder='手順を入力してください'
                className='border rounded p-2 w-full'
              />
              <button
                type='button'
                onClick={() => removeStep(index)}
                className='text-red-500 text-sm mt-1 hover:underline'
              >
                削除
              </button>
            </div>
          ))}
          <button
            type='button'
            onClick={() => addStep({ order: stepFields.length + 1, content: '' })}
            className='text-blue-600 hover:underline'
          >
            手順を追加
          </button>
        </div>
      </div>

      {/* 保存 */}
      <div className='text-center'>
        <button type='submit' className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
          保存する
        </button>
      </div>
    </form>
  );
}
