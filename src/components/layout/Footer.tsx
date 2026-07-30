export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white mt-20">
            <div className="max-w-6xl mx-auto px-5 py-12">

                <h3 className="text-2xl font-bold mb-4">
                    Raven Makina
                </h3>

                <p className="text-zinc-400 mb-8">
                    Endüstriyel soğutma sistemleri ve mühendislik çözümleri.
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    <div>
                        <h4 className="font-semibold mb-3">
                            İletişim
                        </h4>

                        <p>info@ravenmakina.com</p>
                        <p>+90 542 733 88 03 </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">
                            Hizmetler
                        </h4>

                        <p>Endüstriyel Soğutma</p>
                        <p>Makine Mühendisliği</p>
                        <p>Proje Danışmanlığı</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">
                            Kurumsal
                        </h4>

                        <p>Hakkımızda</p>
                        <p>Kalite Politikası</p>
                        <p>İletişim</p>
                    </div>

                </div>

                <div className="border-t border-zinc-700 mt-10 pt-6 text-sm text-zinc-400">
                    © {new Date().getFullYear()} Raven Makina. Tüm hakları saklıdır.
                </div>

            </div>
        </footer>
    );
}