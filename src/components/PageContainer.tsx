import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return <div className="mx-auto max-w-5xl px-6 py-6 md:px-8">{children}</div>;
}