'use client';

import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertCategorySchema, updateCategorySchema } from '@/lib/validator';
import { ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { toast } from 'sonner';
import { createCategory, updateCategory } from '@/lib/actions/category.actions';

const CategoryFom = ({
  type,
  categoryId,
}: {
  type: 'Create' | 'Update';
  categoryId?: string;
}) => {
  const router = useRouter();

  type CategoryFormType =
    | z.infer<typeof updateCategorySchema>
    | z.infer<typeof insertCategorySchema>;

  const form = useForm<CategoryFormType>({
    resolver: zodResolver(
      type === 'Update' ? updateCategorySchema : insertCategorySchema
    ),
  });

  const onSubmit: SubmitHandler<z.infer<typeof insertCategorySchema>> = async (
    values
  ) => {
    if (type === 'Create') {
      const res = await createCategory(values);

      if (!res.success) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        router.push(`/admin/categories`);
      }
    }
    if (type === 'Update') {
      if (!categoryId) {
        router.push(`/admin/categories`);
        return;
      }

      const res = await updateCategory({ ...values, id: categoryId });
      if (!res.success) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        router.push(`/admin/categories`);
      }
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          method="post"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Category name */}
            <FormField
              control={form.control}
              name="categoryName"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof insertCategorySchema>,
                  'categoryName'
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <Button
              type="submit"
              size="lg"
              disabled={form.formState.isSubmitting}
              className="button col-span-2 w-full"
            >
              {form.formState.isSubmitting ? 'Submitting' : `${type} Category`}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CategoryFom;
