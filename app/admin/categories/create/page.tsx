import CategoryFom from '@/app/admin/categoryFom';
import React from 'react';

const Create = () => {
  return (
    <div className="">
      <h2 className="h2-bold">Create Category</h2>
      <div className="my-8 flex justify-center items-center">
        <div className="w-[70vw]">
          <CategoryFom type="Create" />
        </div>
      </div>
    </div>
  );
};

export default Create;
