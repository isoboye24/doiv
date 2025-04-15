import { z } from 'zod';

export const insertCategorySchema = z.object({
  categoryName: z.string().min(2, 'Category must be at least 2 characters'),
});
export const updateCategorySchema = insertCategorySchema.extend({
  id: z.string().min(1, 'Id is required'),
});
