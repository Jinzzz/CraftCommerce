import Link from 'next/link';

interface ProductCardProps {
  slug: string;
  name: string;
}

export default function ProductCard({ slug, name }: ProductCardProps) {
  return (
    <div className="border rounded p-4">
      <h2 className="text-lg font-semibold">
        <Link href={`/products/${slug}`}>{name}</Link>
      </h2>
      <p className="text-sm text-gray-500">Product description...</p>
    </div>
  );
}
