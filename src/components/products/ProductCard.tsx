import { formatCurrency } from "@/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import ButtonAgregar from "./ButtonAgregar";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white">
      <Image
        width={400}
        height={400}
        src={`/products/${product.image}.jpg`}
        alt={`imagen plastico ${product.name}`}
        quality={100}
      />

      <div className="p-7 w-full h-60 grid grid-rows-2 place-items-center ">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <ButtonAgregar product={product} />
      </div>
    </div>
  );
}
