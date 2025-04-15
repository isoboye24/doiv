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
        categoryName: validatedData.categoryName,
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
    const categoryItem = updateCategorySchema.parse(data);

    const productExists = await prisma.category.findFirst({
      where: { id: categoryItem.id },
    });

    if (!productExists) throw new Error('Product not found');

    await prisma.category.update({
      where: { id: categoryItem.id },
      data: {
        categoryName: categoryItem.categoryName,
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
