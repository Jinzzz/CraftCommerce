import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between">
        <h1 className="text-xl font-bold">
          <Link href="/">CraftCommerce</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
