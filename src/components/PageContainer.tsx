import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return <div className="mx-auto max-w-3xl px-6 py-7">{children}</div>;
}