import { z } from 'zod';

const projectSchema = z.object({
  id: z.number().int().min(1),
  title: z.string().min(1, 'Project title is required'),
});

const skillSchema = z.object({
  id: z.number().int().min(1),
  name: z.string().min(1, 'Skill name is required'),
});

export const insertCategorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  projects: z.array(projectSchema).optional(),
  skills: z.array(skillSchema).optional(),
});

export const updateCategorySchema = insertCategorySchema.extend({
  id: z.number().int().min(1, 'Id is required'),
});
