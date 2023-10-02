"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Input } from "@nextui-org/react";

const SearchBar = () => {
  return (
    <form>
      <Input
        classNames={{
          base: "w-[200px] md:w-[600px]  h-10",
          mainWrapper: "h-full w-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-200/20 dark:bg-default-400/20 w-full",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<IoMdSearch size={20} />}
        type="search"
      />
    </form>
  );
};

export default SearchBar;
