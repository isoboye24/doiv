import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'List of Projects',
};

const Projects = () => {
  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Projects</h1>
        </div>
        <a href="/admin/projects/create" className="">
          <Button variant="default">Create Project</Button>
        </a>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Site Link</TableHead>
              <TableHead>Code Link</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>APC App</TableCell>
              <TableCell>None</TableCell>
              <TableCell>https://github.com/isoboye24/APC</TableCell>
              <TableCell>This is an app for NGO</TableCell>
              <TableCell>Desktop</TableCell>
              <TableCell>10.05.2024</TableCell>
              <TableCell className="flex gap-5">
                <a href={`/admin/users/id`}>
                  <Button>Edit</Button>
                </a>
                <a href={`/admin/users/id`}>
                  <Button className="bg-red-800 text-gray-200 hover:bg-red-700">
                    Delete
                  </Button>
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Projects;
