import React from "react";
import { ArrowRight, DotsThree, MagnifyingGlass } from "phosphor-react";

export interface HeaderProps {
  title?: string;
  className?: string;
}
export const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
    <div className="flex items-center justify-between sticky top-0 w-full pt-6 pb-3 px-5 bg-blue-800 rounded-b-2xl">
      <div className="w-20 ">
        <ArrowRight size={26} className="text-white" />
      </div>
      <div className="">
        <p className="text-white text-sm">{title}</p>
      </div>
      <div className="w-20 flex items-center justify-end">
        <MagnifyingGlass size={26} className="text-white" />
        <DotsThree size={26} className="text-white mr-2" />
      </div>
    </div>
  );
};
