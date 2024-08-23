import ProductCard from "@/components/products/ProductCard";
import { prisma } from "@/lib/prisma";

async function getProductos(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}

export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProductos(params.category);
  return (
    <>
      <div className="p-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map((products) => (
          <ProductCard key={products.id} product={products} />
        ))}
      </div>
    </>
  );
}
