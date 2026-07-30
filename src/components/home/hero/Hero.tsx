import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <Section className="bg-slate-50">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Sol Taraf */}
                    <div>
                        <p className="mb-4 text-orange-500 font-semibold">
                            Raven Makina
                        </p>

                        <h1 className="text-5xl font-bold leading-tight text-zinc-900">
                            Endüstriyel Soğutma
                            <br />
                            Çözümlerinde
                            <br />
                            Güvenilir Partneriniz
                        </h1>

                        <p className="mt-6 text-lg text-zinc-600">
                            Endüstriyel soğutma, makine mühendisliği ve proje
                            danışmanlığı alanlarında modern çözümler sunuyoruz.
                        </p>

                        <div className="mt-8 flex gap-4">
    <Link href="/iletisim">
        <Button>Teklif Al</Button>
    </Link>

    <Link href="/hizmetler">
        <Button>Hizmetlerimiz</Button>
    </Link>
</div>
                    </div>

                    {/* Sağ Taraf */}
                    <div className="relative h-[500px] overflow-hidden rounded-2xl">
                        <Image
                            src="/images/hero/mainmanu.webp"
                            alt="Raven Makina"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            priority
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}