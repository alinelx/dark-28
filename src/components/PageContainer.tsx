import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function PageContainer({ children, className }: PageContainerProps) {
  return <div className={`bg-(--color-bg) mx-auto w-full max-w-3xl p-4 object-center items-center text-center ${className}`}>{children}</div>;
}