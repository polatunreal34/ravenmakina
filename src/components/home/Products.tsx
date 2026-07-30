import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Products() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Projelerimiz
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/products/${project.slug}`}
                            className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="w-full h-64 object-contain bg-white"
                            />

                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-600">
                                    {project.shortDescription}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}