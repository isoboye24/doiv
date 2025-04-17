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
import { z } from 'zod';
import { projectSchema } from '@/lib/validator';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';

const ProjectForm = ({ type }: { type: 'Create' | 'Update' }) => {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
  });

  return (
    <div>
      <Form {...form}>
        <form
          method="post"
          //   onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="">
              {/* Project name */}
              <FormField
                control={form.control}
                name="title"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<
                    z.infer<typeof projectSchema>,
                    'title'
                  >;
                }) => (
                  <FormItem className="w-full">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Project Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              {/* Project site link */}
              <FormField
                control={form.control}
                name="siteLink"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<
                    z.infer<typeof projectSchema>,
                    'siteLink'
                  >;
                }) => (
                  <FormItem className="w-full">
                    <FormLabel>Site Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Project Site link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              {/* Project code link */}
              <FormField
                control={form.control}
                name="codeLink"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<
                    z.infer<typeof projectSchema>,
                    'codeLink'
                  >;
                }) => (
                  <FormItem className="w-full">
                    <FormLabel>Code Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Project code link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              {/* Project thumbnail */}
              <FormField
                control={form.control}
                name="projectThumbnail"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<
                    z.infer<typeof projectSchema>,
                    'projectThumbnail'
                  >;
                }) => (
                  <FormItem className="w-full">
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Project thumbnail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              {/* Project image */}
              <FormField
                control={form.control}
                name="image"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<
                    z.infer<typeof projectSchema>,
                    'image'
                  >;
                }) => (
                  <FormItem className="w-full">
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Project image" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              {/* Project description */}
              <FormField
                control={form.control}
                name="date"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<
                    z.infer<typeof projectSchema>,
                    'date'
                  >;
                }) => (
                  <FormItem className="w-full">
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="input input-bordered w-full"
                        placeholder="Enter Project description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              {/* Project description */}
              <FormField
                control={form.control}
                name="description"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<
                    z.infer<typeof projectSchema>,
                    'description'
                  >;
                }) => (
                  <FormItem className="w-full">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Project description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
              <Button
                type="submit"
                size="lg"
                disabled={form.formState.isSubmitting}
                className="button col-span-2 w-full"
              >
                {form.formState.isSubmitting ? 'Submitting' : `${type} Project`}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;
