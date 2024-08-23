"use client";

import { Product } from "@prisma/client";
import { useStore } from "@/store";

type ButtonAgregarProps = {
  product: Product;
};

export default function ButtonAgregar({ product }: ButtonAgregarProps) {
  const addToOrder = useStore((state) => state.addToOrder);
  return (
    <div>
      <button
        type="button"
        className="bg-red-400 text-white mt-2 p-4  uppercase font-bold cursor-pointer hover:bg-red-700 border rounded-2xl"
        onClick={() => addToOrder(product)}
      >
        Agregar
      </button>
    </div>
  );
}
