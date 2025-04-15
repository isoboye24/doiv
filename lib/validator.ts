import { z } from 'zod';

export const insertCategorySchema = z.object({
  categoryName: z.string().min(2, 'Category must be at least 2 characters'),
});
