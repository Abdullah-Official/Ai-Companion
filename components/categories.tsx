"use client";

import qs from "query-string";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoriesProps {
  data: Category[];
}

const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button
        onClick={() => onClick(undefined)}
        className={cn(
          `
             flex items-center  text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition
            `,
          !categoryId && "bg-primary/25"
        )}
      >
        Newest
      </button>
      {data &&
        data.map((cat) => (
          <button
            onClick={() => onClick(cat.id)}
            key={cat.id}
            className={cn(
              `
             flex items-center  text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition
            `,
              cat.id === categoryId && "bg-primary/25"
            )}
          >
            {cat.name}
          </button>
        ))}
    </div>
  );
};

export default Categories;
