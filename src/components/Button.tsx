import { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button';
  children?: React.ReactNode;

  icon?: JSX.Element;
}

export function Button({ type, children, icon, ...rest }: CustomButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      className="flex items-center justify-center gap-2 border border-white bg-transparent px-6 py-3 text-white duration-300 hover:opacity-50"
    >
      {children}

      {icon && icon}
    </button>
  );
}
