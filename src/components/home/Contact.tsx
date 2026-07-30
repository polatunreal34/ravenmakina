export default function Contact() {
    return (
        <section className="py-20 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-5">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        İletişime Geçin
                    </h2>

                    <p className="text-zinc-600">
                        Projeleriniz ve ihtiyaçlarınız için bizimle iletişime geçebilirsiniz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-xl border shadow-sm">
                        <h3 className="font-semibold text-lg mb-3">
                            Telefon
                        </h3>

                        <a
                            href="tel:05427338803"
                            className="text-zinc-600 hover:text-black"
                        >
                            0542 733 88 03
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl border shadow-sm">
                        <h3 className="font-semibold text-lg mb-3">
                            E-Mail
                        </h3>

                        <a
                            href="mailto:info@ravenmakina.com"
                            className="text-zinc-600 hover:text-black"
                        >
                            info@ravenmakina.com
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl border shadow-sm">
                        <h3 className="font-semibold text-lg mb-3">
                            Adres
                        </h3>

                        <p className="text-zinc-600">
                            HanPlus İş Merkezi Kat:7 No:199
                            <br />
                            Esenyurt / İstanbul
                        </p>
                    </div>

                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    <a
                        href="tel:05427338803"
                        className="px-6 py-3 bg-black text-white rounded-lg"
                    >
                        Hemen Arayın
                    </a>

                    <a
                        href="mailto:info@ravenmakina.com"
                        className="px-6 py-3 border rounded-lg"
                    >
                        E-Mail Gönderin
                    </a>
                </div>

            </div>
        </section>
    );
}