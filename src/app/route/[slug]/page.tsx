import { notFound } from "next/navigation";
import { landmarks } from "@/data/landmarks";
import PageHeader from "@/components/PageHeader";
import LandmarkDetail from "@/components/LandmarkDetail";
import NextStop from "@/components/NextStop";

type LandmarkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return landmarks.map((landmark) => ({
    slug: landmark.slug,
  }));
}

export default async function LandmarkDetailPage({
  params,
}: LandmarkDetailPageProps) {
  const { slug } = await params;

  const landmark = landmarks.find((item) => item.slug === slug);

  if (!landmark) {
    notFound();
  }

  return (
    <main>
      <PageHeader backHref="/route" />
      <LandmarkDetail landmark={landmark} />
      <NextStop landmark={landmark} />
    </main>
  );
}