"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b bg-white relative">
            <div className="flex items-center justify-between p-5 max-w-6xl mx-auto">

                {/* Logo */}
                <div className="font-bold text-xl">
                    Raven Makina
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 text-sm">
                    <Link href="/">Anasayfa</Link>
                    <Link href="/kurumsal">Kurumsal</Link>
                    <Link href="/hizmetler">Hizmetler</Link>
                    <Link href="/urunler">Ürünler</Link>
                    <Link href="/kalite-politikasi">Kalite Politikası</Link>
                    <Link href="/iletisim">İletişim</Link>
                </nav>

                {/* Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 p-5 border-t bg-white">
                    <Link href="/" onClick={() => setOpen(false)}>Anasayfa</Link>
                    <Link href="/kurumsal" onClick={() => setOpen(false)}>Kurumsal</Link>
                    <Link href="/hizmetler" onClick={() => setOpen(false)}>Hizmetler</Link>
                    <Link href="/urunler" onClick={() => setOpen(false)}>Ürünler</Link>
                    <Link href="/kalite-politikasi" onClick={() => setOpen(false)}>Kalite Politikası</Link>
                    <Link href="/iletisim" onClick={() => setOpen(false)}>İletişim</Link>
                </div>
            )}
        </header>
    );
}