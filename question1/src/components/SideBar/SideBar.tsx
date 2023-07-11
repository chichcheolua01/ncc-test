import React from "react";

export default function SideBar() {
  return (
    <div className="bg-black h-full">
      <div className="flex flex-col">
        <div className="hover:bg-gray-400">
          <a
            href="#"
            className="py-[10px] px-[20px] text-white flex justify-start border-b-[1px] border-gray-300"
          >
            Home
          </a>
        </div>
        <div className="hover:bg-gray-400">
          <a
            href="#"
            className="py-[10px] px-[20px] text-white flex justify-start border-b-[1px] border-gray-300"
          >
            Services
          </a>
        </div>
        <div className="hover:bg-gray-400">
          <a
            href="#"
            className="py-[10px] px-[20px] text-white flex justify-start border-b-[1px] border-gray-300"
          >
            Blog
          </a>
        </div>
        <a
          href="#"
          className="py-[10px] px-[20px] text-white flex justify-start border-b-[1px] border-gray-300"
        >
          News
        </a>
        <div className="hover:bg-gray-400">
          <a
            href="#"
            className="py-[10px] px-[20px] text-white flex justify-start border-b-[1px] border-gray-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
