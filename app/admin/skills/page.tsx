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
  title: 'List of Skills',
};

const Skills = () => {
  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Skills</h1>
        </div>
        <a href="/admin/skills/create" className="">
          <Button variant="default">Create Skill</Button>
        </a>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Skill</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>JavaScript</TableCell>
              <TableCell>Web</TableCell>
              <TableCell className="flex gap-5">
                <a href={`/admin/skills/id`}>
                  <Button>Edit</Button>
                </a>
                <a href={`/admin/skills/id`}>
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

export default Skills;
