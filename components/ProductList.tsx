import ProductCard from './ProductCard';

const dummyProducts = [
  { slug: 'product-one', name: 'Product One' },
  { slug: 'product-two', name: 'Product Two' },
];

export default function ProductList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {dummyProducts.map((product) => (
        <ProductCard key={product.slug} slug={product.slug} name={product.name} />
      ))}
    </div>
  );
}
