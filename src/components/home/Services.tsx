const services = [
    "Endüstriyel Soğutma Çözümleri",
    "Teşhir ve Mağaza Tasarımı",
    "Makine Mühendisliği ve Ar-Ge",
    "Proje Danışmanlığı ve Kurulum",
    "Satış Sonrası Destek",
];

export default function Services() {
    return (
        <section className="py-20 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Hizmetlerimiz
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service}
                            className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="font-semibold text-lg">
                                {service}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}