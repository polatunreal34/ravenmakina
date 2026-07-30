"use client";

import { useState } from "react";

type Size = {
    name: string;
    image?: string;
    width: string;
    depth: string;
    height: string;
};

type Props = {
    images: string[];
    title: string;
    sizes?: Size[];
};

export default function ProductGallery({
    images,
    title,
    sizes = [],
}: Props) {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectedSize, setSelectedSize] = useState<Size | null>(
        sizes.length > 0 ? sizes[0] : null
    );

    return (
        <div>
            <img
                src={selectedImage}
                alt={title}
                className="w-full max-h-[600px] object-contain rounded-2xl border mb-4"
            />

            <div className="flex gap-3 flex-wrap mb-8">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${title}-${index}`}
                        onClick={() => setSelectedImage(image)}
                        className={`
                            w-24 h-20
                            object-cover
                            rounded-lg
                            cursor-pointer
                            border-2
                            transition-all
                            hover:scale-105
                            ${
                                selectedImage === image
                                    ? "border-black"
                                    : "border-zinc-300"
                            }
                        `}
                    />
                ))}
            </div>

            {sizes.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">
                        Boy Seçenekleri
                    </h3>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {sizes.map((size) => (
    <button
        key={size.name}
        onClick={() => setSelectedSize(size)}
        className={`h-20 rounded-lg border transition flex items-center justify-center
        ${
            selectedSize?.name === size.name
                ? "bg-black text-white border-black"
                : "bg-white text-black border-zinc-300 hover:border-black"
        }`}
    >
        <div className="font-semibold text-lg">
    {size.name}
</div>
    </button>
))}
                    </div>

                    {selectedSize && (
    <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-white rounded-lg border text-center">
            <p className="text-sm text-zinc-500">
                Genişlik
            </p>
            <p className="font-semibold">
                {selectedSize.width}
            </p>
        </div>

        <div className="p-3 bg-white rounded-lg border text-center">
            <p className="text-sm text-zinc-500">
                Derinlik
            </p>
            <p className="font-semibold">
                {selectedSize.depth}
            </p>
        </div>

        <div className="p-3 bg-white rounded-lg border text-center">
            <p className="text-sm text-zinc-500">
                Yükseklik
            </p>
            <p className="font-semibold">
                {selectedSize.height}
            </p>
        </div>
    </div>
)}
                </div>
            )}
        </div>
    );
}