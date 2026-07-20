"use client";

import { useMemo, useState } from "react";
import { StoreProductCard } from "@/components/features/products/store-product-card-wrapper";

const FALLBACK_IMAGE = "/logo/organocity.png";

interface Subcategory {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  order: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  order: number;
  subcategories: Subcategory[];
}

interface Product {
  id: string;
  handle: string;
  title: string;
  price: number | null;
  compareAtPrice: number | null;
  featuredImage: string | null;
  images: unknown;
  tags: unknown;
  description?: string | null;
  sku?: string | null;
  productType?: string | null;
  vendor?: string | null;
  categoryId: string | null;
  subcategoryId: string | null;
}

interface Props {
  categories: Category[];
  initialProducts: Product[];
  initialCategorySlug?: string;
}

type CategoryNode = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  order: number;
};

type ProductRow = {
  categoryId: string;
  products: Product[];
};

function getStringArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function buildCategoryNodes(categories: Category[]) {
  return categories.flatMap<CategoryNode>((category) => [
    {
      id: category.id,
      name: category.name,
      slug: category.slug,
      parentId: null,
      order: category.order,
    },
    ...category.subcategories.map((subcategory) => ({
      id: subcategory.id,
      name: subcategory.name,
      slug: subcategory.slug,
      parentId: category.id,
      order: subcategory.order,
    })),
  ]);
}

function ProductCard({ product }: { product: Product }) {
  const productImageUrls = getStringArray(product.images);
  const firstImage = productImageUrls[0] || null;
  const firstTag = getStringArray(product.tags)[0];

  return (
    <StoreProductCard
      handle={product.handle}
      title={product.title}
      featuredImageUrl={product.featuredImage || firstImage || FALLBACK_IMAGE}
      imageUrls={productImageUrls}
      price={{ amount: Number(product.price || 0).toFixed(2), currencyCode: "PKR" }}
      compareAtPrice={
        product.compareAtPrice
          ? { amount: Number(product.compareAtPrice).toFixed(2), currencyCode: "PKR" }
          : null
      }
      tag={firstTag}
      productId={product.id}
    />
  );
}

export function ProductsFiltered({
  categories,
  initialProducts,
  initialCategorySlug = "",
}: Props) {
  const categoryNodes = useMemo(() => buildCategoryNodes(categories), [categories]);
  const initialCategory = categoryNodes.find((category) => category.slug === initialCategorySlug);
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialCategory?.id || "");
  const [priceRange, setPriceRange] = useState("all");
  const [customMinPrice, setCustomMinPrice] = useState("");
  const [customMaxPrice, setCustomMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const categoryById = useMemo(
    () => new Map(categoryNodes.map((category) => [category.id, category])),
    [categoryNodes],
  );

  const childIdsByParentId = useMemo(() => {
    return categoryNodes.reduce((map, category) => {
      if (!category.parentId) return map;
      const ids = map.get(category.parentId) || [];
      ids.push(category.id);
      map.set(category.parentId, ids);
      return map;
    }, new Map<string, string[]>());
  }, [categoryNodes]);

  const categoriesWithProducts = useMemo(() => {
    return categories
      .filter((category) => {
        const relatedCategoryIds = new Set([
          category.id,
          ...category.subcategories.map((subcategory) => subcategory.id),
        ]);

        return initialProducts.some((product) => {
          const effectiveCategoryId = product.subcategoryId || product.categoryId;
          return Boolean(effectiveCategoryId && relatedCategoryIds.has(effectiveCategoryId));
        });
      })
      .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  }, [categories, initialProducts]);

  const selectedCategoryIds = useMemo(() => {
    if (!selectedCategoryId) return null;

    const category = categoryById.get(selectedCategoryId);
    if (!category) return null;

    return new Set([
      category.id,
      ...(category.parentId ? [] : childIdsByParentId.get(category.id) || []),
    ]);
  }, [categoryById, childIdsByParentId, selectedCategoryId]);

  const filteredProducts = useMemo(() => {
    const products = initialProducts.filter((product) => {
      const price = Number(product.price || 0);
      if (priceRange === "under-1000") return price < 1000;
      if (priceRange === "1000-3000") return price >= 1000 && price <= 3000;
      if (priceRange === "3000-5000") return price > 3000 && price <= 5000;
      if (priceRange === "5000-10000") return price > 5000 && price <= 10000;
      if (priceRange === "over-10000") return price > 10000;
      if (priceRange === "custom") {
        const minimum = customMinPrice === "" ? null : Number(customMinPrice);
        const maximum = customMaxPrice === "" ? null : Number(customMaxPrice);
        return (minimum === null || price >= minimum) && (maximum === null || price <= maximum);
      }
      return true;
    });

    return [...products].sort((a, b) => {
      if (sortBy === "price-low") return Number(a.price || 0) - Number(b.price || 0);
      if (sortBy === "price-high") return Number(b.price || 0) - Number(a.price || 0);
      if (sortBy === "name") return a.title.localeCompare(b.title);
      return 0;
    });
  }, [customMaxPrice, customMinPrice, initialProducts, priceRange, sortBy]);

  const selectedProducts = useMemo(() => {
    if (!selectedCategoryIds) return filteredProducts;

    return filteredProducts.filter((product) => {
      const effectiveCategoryId = product.subcategoryId || product.categoryId;
      return Boolean(effectiveCategoryId && selectedCategoryIds.has(effectiveCategoryId));
    });
  }, [filteredProducts, selectedCategoryIds]);

  const otherProducts = useMemo(() => {
    if (!selectedCategoryIds) return [];

    return filteredProducts.filter((product) => {
      const effectiveCategoryId = product.subcategoryId || product.categoryId;
      return !effectiveCategoryId || !selectedCategoryIds.has(effectiveCategoryId);
    });
  }, [filteredProducts, selectedCategoryIds]);

  const buildRows = (sourceProducts: Product[]) => {
    const grouped = sourceProducts.reduce((map, product) => {
      const categoryId = product.subcategoryId || product.categoryId;
      if (!categoryId || !categoryById.has(categoryId)) return map;

      const products = map.get(categoryId) || [];
      products.push(product);
      map.set(categoryId, products);
      return map;
    }, new Map<string, Product[]>());

    return categoryNodes
      .map<ProductRow | null>((category) => {
        const products = grouped.get(category.id) || [];
        return products.length ? { categoryId: category.id, products } : null;
      })
      .filter((row): row is ProductRow => Boolean(row));
  };

  const selectedRows = buildRows(selectedProducts);
  const otherRows = buildRows(otherProducts);
  const visibleRows = selectedRows;

  const pagedRows = visibleRows.filter((row) => row.products.length > 0);

  const pagedOtherRows = otherRows.filter((row) => row.products.length > 0);

  const selectClassName =
    "h-9 w-full appearance-auto rounded-md border border-[#C6A24A]/30 bg-[#fcf5e8] px-2 text-xs font-semibold normal-case tracking-normal text-[#0a0a0a] outline-none transition-all duration-200 hover:border-[#C6A24A]/60 focus:border-[#f6a45d] focus:ring-2 focus:ring-[#f6a45d]/20";
  const priceInputClassName =
    "h-9 min-w-0 rounded-md border border-[#C6A24A]/30 bg-white px-2 text-xs font-semibold text-[#0a0a0a] outline-none transition-all duration-200 placeholder:text-[#5A5E55]/60 focus:border-[#f6a45d] focus:ring-2 focus:ring-[#f6a45d]/20";

  return (
    <section className="min-w-0 space-y-5">
      <div className="border-b border-[#C6A24A]/20 pb-3">
        <div className="scrollbar-hide flex w-full snap-x snap-mandatory items-end gap-2 overflow-x-auto overscroll-x-contain scroll-smooth sm:justify-end">
          <label className="grid w-32 shrink-0 snap-start gap-1 text-[9px] font-bold uppercase tracking-wide text-[#5A5E55] sm:w-36 sm:text-[10px]">
            Category
            <select
              value={selectedCategoryId}
              onChange={(event) => setSelectedCategoryId(event.target.value)}
              className={selectClassName}
            >
              <option value="">All Products</option>
              {categoriesWithProducts.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label className="grid w-36 shrink-0 snap-start gap-1 text-[9px] font-bold uppercase tracking-wide text-[#5A5E55] sm:w-40 sm:text-[10px]">
            Price Range
            <select
              value={priceRange}
              onChange={(event) => setPriceRange(event.target.value)}
              className={selectClassName}
            >
              <option value="all">All Prices</option>
              <option value="under-1000">Under PKR 1,000</option>
              <option value="1000-3000">PKR 1,000–3,000</option>
              <option value="3000-5000">PKR 3,000–5,000</option>
              <option value="5000-10000">PKR 5,000–10,000</option>
              <option value="over-10000">Over PKR 10,000</option>
              <option value="custom">Custom Range</option>
            </select>
          </label>

          {priceRange === "custom" ? (
            <fieldset className="grid w-44 shrink-0 snap-start gap-1 sm:w-48">
              <legend className="text-[9px] font-bold uppercase tracking-wide text-[#5A5E55] sm:text-[10px]">
                Your Range (PKR)
              </legend>
              <div className="grid grid-cols-2 gap-1.5">
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={customMinPrice}
                  onChange={(event) => setCustomMinPrice(event.target.value)}
                  placeholder="Min"
                  aria-label="Minimum price in PKR"
                  className={priceInputClassName}
                />
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={customMaxPrice}
                  onChange={(event) => setCustomMaxPrice(event.target.value)}
                  placeholder="Max"
                  aria-label="Maximum price in PKR"
                  className={priceInputClassName}
                />
              </div>
            </fieldset>
          ) : null}

          <label className="grid w-32 shrink-0 snap-start gap-1 text-[9px] font-bold uppercase tracking-wide text-[#5A5E55] sm:w-36 sm:text-[10px]">
            Sort By
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className={selectClassName}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </label>
        </div>
      </div>

      <div className="relative grid gap-6">
        <section className="min-w-0 space-y-6">
          {pagedRows.length > 0 ? (
            pagedRows.map((row) => (
              <div
                key={row.categoryId}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
              >
                {row.products.map((product) => (
                  <ProductCard key={product.handle} product={product} />
                ))}
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-[#C6A24A]/20 bg-white p-12 text-center">
              <p className="text-lg text-[#5A5E55]">No products found.</p>
            </div>
          )}

          {selectedCategoryId && pagedOtherRows.length > 0 ? (
            <div className="space-y-6 border-t border-[#C6A24A]/20 pt-8">
              <h2 className="font-serif text-xl font-bold text-[#0a0a0a]">Other Products</h2>
              {pagedOtherRows.map((row) => (
                <div
                  key={`other-${row.categoryId}`}
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
                >
                  {row.products.map((product) => (
                    <ProductCard key={product.handle} product={product} />
                  ))}
                </div>
              ))}
            </div>
          ) : null}
        </section>
      </div>
    </section>
  );
}
