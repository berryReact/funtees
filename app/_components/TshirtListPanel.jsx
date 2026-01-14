import Image from "next/image";
import Link from "next/link";

const { getAllProducts } = require("@/app/_lib/data-services");

export default async function TshirtListPanel() {
  const tshirtList = await getAllProducts();

  return (
    <div>
      {tshirtList.map((tshirt) => (
        <div className="" key={tshirt.id}>
          <div className="relative h-[6.4rem] w-[6.4rem]">
            <Link href={`/tshirt/${tshirt.id}`}>
              <Image
                className="flex-1 object-cover"
                fill
                src={tshirt.imageCoverUrl}
                alt={`${tshirt.name} image`}
              />
            </Link>
          </div>
          <p>{tshirt.name}</p>
          <p>{tshirt.category}</p>
          <p>{tshirt.price}</p>
          <p>{tshirt.product_variants.map((variant) => variant.size)}</p>
        </div>
      ))}
    </div>
  );
}
