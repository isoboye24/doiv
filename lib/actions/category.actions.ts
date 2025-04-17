'use server';

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
    console.log('Data sent to prisma.category.create:', validatedData);

    const nameExists = await prisma.category.findFirst({
      where: { name: validatedData.name },
    });

    if (nameExists) {
      throw new Error('Category name already exists');
    }

    await prisma.category.create({
      data: {
        name: validatedData.name,
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

// Update Category
export async function updateCategory(
  data: z.infer<typeof updateCategorySchema>
) {
  try {
    const categoryItem = updateCategorySchema.parse(data);

    const categoryExists = await prisma.category.findFirst({
      where: { id: categoryItem.id },
    });

    if (!categoryExists) throw new Error('Category not found');

    const nameExists = await prisma.category.findFirst({
      where: { name: categoryItem.name },
    });

    if (nameExists) {
      throw new Error('Category name already exists');
    }

    await prisma.category.update({
      where: { id: categoryItem.id },
      data: {
        name: categoryItem.name,
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
