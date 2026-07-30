"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b bg-white relative">
            <div className="flex items-center justify-between p-5 max-w-6xl mx-auto">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/logos/logo-raven3.png"
                        alt="Raven Makina Logo"
                        width={100}
                        height={100}
                        priority
                        className="w-auto h-auto"
                    />

                    <div>
                        <h2 className="text-lg font-bold text-zinc-900">
                            Raven Makina
                        </h2>

                        <p className="text-xs text-zinc-500">
                            Endüstriyel Soğutma
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-6 text-sm">
                    <Link href="/">Anasayfa</Link>
                    <Link href="/kurumsal">Kurumsal</Link>
                    <Link href="/hizmetler">Hizmetler</Link>
                    <Link href="/kalite-politikasi">Kalite Politikası</Link>

                    <div className="relative group">
                        <button className="flex items-center gap-1">
                            Projeler
                            <span className="text-xs">▼</span>
                        </button>

                        <div className="absolute top-full left-0 hidden group-hover:block bg-white border rounded-lg shadow-lg min-w-[220px] p-2 z-50">
                            {projects.map((project) => (
                                <Link
                                    key={project.slug}
                                    href={`/products/${project.slug}`}
                                    className="block px-3 py-2 rounded hover:bg-zinc-100"
                                >
                                    {project.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/iletisim">İletişim</Link>
                </nav>

                {/* Hamburger */}
                <button
                    className="lg:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden flex flex-col gap-4 p-5 border-t bg-white">
                    <Link href="/" onClick={() => setOpen(false)}>
                        Anasayfa
                    </Link>

                    <Link href="/kurumsal" onClick={() => setOpen(false)}>
                        Kurumsal
                    </Link>

                    <Link href="/hizmetler" onClick={() => setOpen(false)}>
                        Hizmetler
                    </Link>

                    <Link
                        href="/kalite-politikasi"
                        onClick={() => setOpen(false)}
                    >
                        Kalite Politikası
                    </Link>

                    <div className="flex flex-col gap-2">
                        <span className="font-semibold">
                            Projeler
                        </span>

                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/products/${project.slug}`}
                                onClick={() => setOpen(false)}
                                className="pl-4 text-sm text-zinc-600"
                            >
                                {project.title}
                            </Link>
                        ))}
                    </div>

                    <Link href="/iletisim" onClick={() => setOpen(false)}>
                        İletişim
                    </Link>
                </div>
            )}
        </header>
    );
}