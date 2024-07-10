import React from 'react';

type ActiveLinkProps = {
  children?: React.ReactNode;
};

export function ActiveLink({ children }: ActiveLinkProps) {
  return (
    <a className="cursor-pointer border-b-2 border-transparent duration-300 hover:border-white hover:text-slate-300">
      {children}
    </a>
  );
}
