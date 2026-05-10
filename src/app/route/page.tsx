import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import PageContainer from "@/components/PageContainer";
import RoutePageClient from "./RoutePageClient";

export default function RoutePage() {
  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="/" />
      <PageContainer className="p-4">
        <Suspense fallback={<div className="w-full text-center py-10">Loading route...</div>}>
          <RoutePageClient />
        </Suspense>
      </PageContainer>
    </main>
  );
}