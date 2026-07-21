import Image from "next/image";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Skeleton } from "@esmate/shadcn/components/ui/skeleton";
import { Heart } from "@esmate/shadcn/pkgs/lucide-react";

type GalleryImage = {
  id: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
};

type ProductGallerySectionProps = {
  title: string;
  images: GalleryImage[];
  currentImage: GalleryImage | null;
  onSelectImage: (image: GalleryImage) => void;
  onToggleWishlist: () => void;
  wishlistActive: boolean;
  highestDiscount: { discountPercent: number; minQuantity: number } | null;
};

export function ProductGallerySection({
  title,
  images,
  currentImage,
  onSelectImage,
  onToggleWishlist,
  wishlistActive,
  highestDiscount,
}: ProductGallerySectionProps) {
  return (
    <div className="h-full min-w-0 space-y-4 rounded-2xl border border-orange-100/80 bg-white/45 p-2 sm:p-4">
      <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl border border-[#C6A24A]/20 bg-[#f4f1e8] shadow-md">
        <div className="absolute inset-0 bg-[#f4f1e8]" />
        {currentImage ? (
          <>
            <Image
              src={currentImage.url}
              alt={currentImage.altText || title}
              fill
              priority
              className="object-contain p-2 transition-transform duration-300 hover:scale-[1.03] sm:p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/5" />
          </>
        ) : (
          <Skeleton className="h-full w-full" />
        )}

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-3 top-3 h-8 w-8 bg-white/90 shadow-md backdrop-blur-sm hover:bg-white"
          onClick={onToggleWishlist}
        >
          <Heart className={`h-4 w-4 ${wishlistActive ? "fill-[#C6A24A] text-[#C6A24A]" : "text-[#0a0a0a]"}`} />
        </Button>

        {highestDiscount ? (
          <div className="absolute left-3 top-3 z-10 -rotate-2 rounded-2xl border-2 border-white/80 bg-[linear-gradient(135deg,#f97316,#dc2626)] px-3 py-2 text-center text-white shadow-[0_10px_24px_rgba(220,38,38,0.3)] sm:px-4">
            <div className="text-xl font-black leading-none sm:text-2xl">
              {highestDiscount.discountPercent}% OFF
            </div>
            <div className="mt-1 text-[9px] font-bold uppercase tracking-wider text-white/90 sm:text-[10px]">
              {highestDiscount.minQuantity > 1
                ? `For ${highestDiscount.minQuantity}+ items`
                : "For 1 item"}
            </div>
          </div>
        ) : null}

      </div>

      <div className="w-full overflow-x-auto px-0.5">
        <div className="flex w-max min-w-full max-w-md justify-start gap-2 pb-2 sm:mx-auto">
          {images.map((img) => (
            <button
              key={img.id}
              onClick={() => onSelectImage(img)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 bg-[#f4f1e8] sm:h-16 sm:w-16 ${
                img.id === currentImage?.id
                  ? "border-[#f6a45d] ring-2 ring-[#f6a45d] ring-offset-1"
                  : "border-transparent hover:border-[#f6a45d]/40"
              }`}
            >
              <Image src={img.url} alt={img.altText || `${title} thumbnail`} fill className="object-cover" sizes="64px" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
