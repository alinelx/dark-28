import { notFound } from "next/navigation";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import PageHeader from "@/components/PageHeader";
import LandmarkDetail from "@/components/LandmarkDetail";
import NextStop from "@/components/NextStop";

type LandmarkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function LandmarkDetailPage({
    params,
    searchParams,
}: LandmarkDetailPageProps) {
    const { slug } = await params;
    const { category } = await searchParams;
    const backHref =
    category && categories.some((cat) => cat.id === category)
        ? `/route?category=${category}`
        : "/route";

    const landmark = landmarks.find((item) => item.slug === slug);

    if (!landmark) {
        notFound();
    }

    return (
        <main>
            <PageHeader backHref={backHref} />
            <LandmarkDetail landmark={landmark} />
            <NextStop landmark={landmark} category={category} />
        </main>
    );
}