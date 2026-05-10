import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function PageContainer({ children, className }: PageContainerProps) {
  return <div className={`flex flex-col bg-(--color-bg) max-w-3xl m-auto items-center object-center align-middle text-center px-6 py-6 ${className} md:px-8`}>{children}</div>;
}