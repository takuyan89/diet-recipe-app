'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../supabase/supabase';
import { FullRecipeFormValues } from '@/types/top/types';

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

  const handlePictureUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const pictureName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from('recipes').upload(pictureName, file);

    if (error) {
      console.error(error);
      alert('画像アップロードに失敗しました');
      return;
    }

    const { data: urlData } = supabase.storage.from('recipes').getPublicUrl(pictureName);
    if (urlData?.publicUrl) {
      setPreviewUrl(urlData.publicUrl);
      setValue('recipe.imageUrl', urlData.publicUrl);
    }
  };

  async function onSubmit(values: FullRecipeFormValues) {
    const payload: FullRecipeFormValues = {
      ...values,

      recipe: {
        ...values.recipe,
      },

      ingredients: values.ingredients.map((ingredient) => ({
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
      console.error(error);
      alert('レシピの保存に失敗しました。');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-4 py-10 px-4'>
      <h1 className='text-3xl font-bold text-center'>レシピ作成</h1>

      <div className='w-full max-w-md space-y-4'>
        <div>
          <label htmlFor='title' className='block font-semibold'>
            料理名
          </label>
          <input
            {...register('recipe.title', { required: '料理名を入力してください' })}
            id='title'
            className='border rounded p-2 w-full'
            placeholder='例: ローストビーフ'
          />
          {errors.recipe?.title && <p className='text-red-500 text-sm'>{errors.recipe.title.message}</p>}
        </div>

        <div>
          <label htmlFor='description' className='block font-semibold'>
            説明
          </label>
          <input
            id='description'
            type='text'
            {...register('recipe.description')}
            className='border rounded p-2 w-full'
            placeholder='例: 簡単に作れるローストビーフです。'
          />
          {errors.recipe?.description && <p className='text-red-500 text-sm'>{errors.recipe.description.message}</p>}
        </div>

        <div>
          <label className='block font-semibold mb-1'>画像アップロード</label>
          <div className='flex flex-col items-start'>
            <label className='cursor-pointer bg-yellow-300 hover:bg-yellow-500 transition px-4 py-2 rounded shadow'>
              画像を選択
              <input type='file' onChange={handlePictureUpload} className='hidden' />
            </label>

            {!previewUrl && <p className='text-sm text-gray-500 mt-1'>※ 選択されていません</p>}

            {previewUrl && <img src={previewUrl} alt='preview' className='mt-2 w-full rounded' />}
          </div>
        </div>

        <div>
          <label htmlFor='amount' className='block font-semibold'>
            料理の重さ
          </label>
          <input
            id='amount'
            type='number'
            {...register('recipe.amount', { valueAsNumber: true })}
            className='border rounded p-2 w-full'
            placeholder='例: 450'
          />
          {errors.recipe?.amount && <p className='text-red-500 text-sm'>{errors.recipe.amount.message}</p>}
        </div>

        <div>
          <label htmlFor='calories' className='block font-semibold'>
            カロリー
          </label>
          <input
            id='calories'
            type='number'
            {...register('recipe.calories', { valueAsNumber: true })}
            className='border rounded p-2 w-full'
            placeholder='例: 450'
          />
          {errors.recipe?.calories && <p className='text-red-500 text-sm'>{errors.recipe.calories.message}</p>}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row space-x-5'>
        <div>
          <label className='block font-bold text-lg mb-2'>材料</label>
          {ingredientFields.map((field, index) => (
            <div key={field.id} className='flex flex-col  mb-2'>
              <label className='block font-semibold'>材料 {index + 1}</label>
              <div className='flex flex-row gap-2 items-center'>
                <input
                  {...register(`ingredients.${index}.name`)}
                  placeholder='例：小麦粉'
                  className='border rounded p-2 w-1/2'
                />
                <input
                  {...register(`ingredients.${index}.quantity`)}
                  placeholder='例：100'
                  className='border rounded p-2 w-1/2'
                />
                <p>g</p>
              </div>
              <button
                type='button'
                onClick={() => removeIngredient(index)}
                className='text-red-500 mr-auto cursor-pointer text-sm mt-1 hover:underline'
              >
                削除
              </button>
            </div>
          ))}
          <button
            type='button'
            onClick={() => addIngredient({ name: '', quantity: '' })}
            className='text-blue-600 hover:underline cursor-pointer'
          >
            材料を追加
          </button>
        </div>

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
                className='text-red-500 text-sm mt-1 cursor-pointer hover:underline'
              >
                削除
              </button>
            </div>
          ))}
          <button
            type='button'
            onClick={() => addStep({ order: stepFields.length + 1, content: '' })}
            className='text-blue-600 hover:underline cursor-pointer'
          >
            手順を追加
          </button>
        </div>
      </div>

      <div className='text-center'>
        <button
          type='submit'
          className='bg-yellow-300 hover:bg-yellow-500 transition text-black px-4 py-2 rounded cursor-pointer text-2xl'
        >
          保存する
        </button>
      </div>
    </form>
  );
}
