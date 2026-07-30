import Image from "next/image";

export default function KurumsalPage() {
    return (
        <main className="max-w-6xl mx-auto px-5 py-20">
            <h1 className="text-5xl font-bold mb-10">
                Kurumsal
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Yazılar */}
                <div className="space-y-8 text-lg text-zinc-600 leading-8">
                    <p>
                        Raven Global Makine ve Mühendislik,
                        endüstriyel soğutma sistemleri alanında
                        yenilikçi ve sürdürülebilir çözümler sunmaktadır.
                    </p>

                    <p>
                        Müşteri memnuniyetini esas alan yaklaşımımızla,
                        tasarım, üretim, kurulum ve satış sonrası destek
                        süreçlerinin tamamında profesyonel hizmet vermekteyiz.
                    </p>

                    <p>
                        Kalite, güvenilirlik ve mühendislik gücünü bir araya getirerek
                        projelerimize uzun ömürlü çözümler kazandırıyoruz.
                    </p>
                </div>

                {/* Görsel */}
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                    <Image
                        src="/images/kurumsal/fabrika.webp"
                        alt="Raven Makina Fabrikası"
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                </div>

            </div>
        </main>
    );
}