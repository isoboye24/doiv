import { z } from 'zod';
import { insertCategorySchema } from '../validator';
import { formatError } from '../utils';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/db/prisma';

// Create Category
export async function createCategory(
  data: z.infer<typeof insertCategorySchema>
) {
  try {
    const validatedData = insertCategorySchema.parse(data);

    // Create category in DB
    await prisma.category.create({
      data: {
        name: validatedData.categoryName,
      },
    });

    revalidatePath('/admin/categories');

    return {
      success: true,
      message: 'Category created successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
