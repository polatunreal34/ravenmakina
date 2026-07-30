import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProductGallery from "@/components/products/ProductGallery";
import type { Metadata } from "next";


type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return {
            title: "Ürün Bulunamadı | Raven Makina",
        };
    }

    return {
        title: `${project.title} | Raven Makina`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Raven Makina`,
            description: project.description,
            images: [project.images[0]],
        },
    };
}

export default async function ProjectDetail({ params }: Props) {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="max-w-6xl mx-auto px-5 py-20">

            <div className="grid lg:grid-cols-2 gap-12 items-start">

                <div>
                    <ProductGallery
    images={project.images}
    title={project.title}
    sizes={project.sizes}
/>
                </div>

                <div>
                    <h1 className="text-5xl font-bold mb-6">
                        {project.title}
                    </h1>

                    <p className="text-lg text-zinc-600 leading-8 mb-8">
                        {project.description}
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="/iletisim"
                            className="px-6 py-3 rounded-lg bg-black text-white"
                        >
                            Teklif Al
                        </a>

                        <a
                            href="/iletisim"
                            className="px-6 py-3 rounded-lg border"
                        >
                            İletişime Geç
                        </a>
                    </div>
                </div>

            </div>

            <div className="mt-20">
                <h2 className="text-3xl font-bold mb-8">
                    Teknik Özellikler
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature) => (
                        <div
                            key={feature}
                            className="p-5 border rounded-xl bg-white shadow-sm"
                        >
                            ✓ {feature}
                        </div>
                    ))}
                </div>
            </div>

        </main>


    );
}