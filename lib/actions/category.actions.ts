import { z } from 'zod';
import { insertCategorySchema, updateCategorySchema } from '../validator';
import { formatError } from '../utils';
import { prisma } from '@/db/prisma';

// Create Category
export async function createCategory(
  data: z.infer<typeof insertCategorySchema>
) {
  try {
    const validatedData = insertCategorySchema.parse(data);

    await prisma.category.create({
      data: {
        name: validatedData.categoryName,
      },
    });

    return {
      success: true,
      message: 'Category created successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function updateCategory(
  data: z.infer<typeof updateCategorySchema>
) {
  try {
    const validatedData = updateCategorySchema.parse(data);

    await prisma.category.update({
      where: { id: validatedData.id },
      data: {
        name: validatedData.categoryName,
      },
    });

    return {
      success: true,
      message: 'Category updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
