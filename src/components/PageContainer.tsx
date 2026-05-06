import react from 'react';

type PageContainerProps = {
    children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <main className="mx-auto max-w-3xl px-6 py-10">
            {children}
        </main>
    );
}