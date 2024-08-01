"use client";

import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

function HeadAndSearch() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="pt-5 text-center text-4xl font-bold">Get Daily News!</h1>
      <TextInput
        icon={HiSearch}
        type="search"
        placeholder="Search For A Topic"
        required
        size={16}
        className="w-96"
      />
    </div>
  );
}

export default HeadAndSearch;
