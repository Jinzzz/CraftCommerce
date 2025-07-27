interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product: {slug}</h2>
      <p className="text-gray-700">Product details coming soon...</p>
    </div>
  );
}
