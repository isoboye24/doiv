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
import { EyeIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'List of Users',
};

const Users = () => {
  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Users</h1>
        </div>
        <a href="/admin/users/register" className="">
          <Button variant="default">Register User</Button>
        </a>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Surname</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Isoboye</TableCell>
              <TableCell>Dan-Obu</TableCell>
              <TableCell>isoboyedanobu@gmail.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="flex gap-5">
                <a href={`/admin/users/id`}>
                  <Button>
                    <EyeIcon size={10} />
                  </Button>
                </a>
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

export default Users;
