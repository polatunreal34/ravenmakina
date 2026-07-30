const services = [
    {
        title: "Endüstriyel Soğutma Çözümleri",
        description:
            "Endüstriyel tesisler için yüksek verimli soğutma sistemleri tasarlıyor ve uyguluyoruz.",
    },
    {
        title: "Teşhir ve Mağaza Tasarımı",
        description:
            "Market, kasap ve şarküteri alanları için özel teşhir çözümleri sunuyoruz.",
    },
    {
        title: "Makine Mühendisliği ve Ar-Ge",
        description:
            "Ürün geliştirme ve mühendislik süreçlerinde profesyonel destek sağlıyoruz.",
    },
    {
        title: "Proje Danışmanlığı ve Kurulum",
        description:
            "Projelerin planlama, uygulama ve devreye alma süreçlerini yönetiyoruz.",
    },
    {
        title: "Satış Sonrası Destek",
        description:
            "Kurulum sonrası bakım, servis ve teknik destek hizmetleri veriyoruz.",
    },
];

export default function HizmetlerPage() {
    return (
        <main className="max-w-6xl mx-auto px-5 py-20">
            <h1 className="text-5xl font-bold mb-12">
                Hizmetlerimiz
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="bg-white border rounded-xl p-6 shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold mb-4">
                            {service.title}
                        </h2>

                        <p className="text-zinc-600 leading-7">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}