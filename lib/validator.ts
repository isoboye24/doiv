import { z } from 'zod';

export const projectSchema = z.object({
  id: z.number().int().min(1),
  title: z.string().min(1, 'Project title is required'),
  siteLink: z.string().min(3, 'Project site link is optional').optional(),
  codeLink: z.string().min(3, 'Project code link is optional').optional(),
  projectThumbnail: z.string().min(3, 'Project thumbnail link is required'),
  image: z.string().min(3, 'Project thumbnail link is required').optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Date must be a valid date (e.g. YYYY-MM-DD)',
  }),
  categoryId: z.string().min(3, 'Project category link is required'),
  description: z.string().min(3, 'Project description is optional').optional(),
});

export const skillSchema = z.object({
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
