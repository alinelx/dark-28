import Link from "next/link";
import { notFound } from "next/navigation";
import { landmarks } from "@/data/landmarks";
import PageContainer from "@/components/PageContainer";
import type { Landmark } from "@/types/landmark";


type NextStopProps = {
  landmark: Landmark;
};

export default function NextStop({ landmark }: NextStopProps) {

    if (!landmark) {
        notFound();
    }

    const nextLandmark = landmark.nextLandId
        ? landmarks.find((item) => item.id === landmark.nextLandId)
        : undefined;

    return ( 
    nextLandmark && (
        <footer className="border border-black/10 bg-white p-6 shadow-sm">
            <PageContainer>
            <h2
            className="mb-4 text-2xl font-semibold justify-center flex"
            style={{ fontFamily: "var(--font-accent)" }}
            >
            Next Stop
            </h2>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-black/60">Up next</p>
                    <p
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "var(--font-headline)" }}
                    >
                    {nextLandmark.title}
                    </p>
                </div>
                <Link
                    href={`/route/${nextLandmark.slug}`}
                    className="rounded-full bg-(--color-yellow) px-4 py-2 text-sm font-semibold text-black"
                >
                    View
                </Link>
            </div>
            </PageContainer>
        </footer>
    )
)
}