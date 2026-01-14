import ListingsLoading from "@/app/_components/ListingsLoading";
import TshirtListPanel from "@/app/_components/TshirtListPanel";
import { Suspense } from "react";

function Page() {
  return (
    <div>
      <div className="">
        <h1 className="text-center">Tshirts Page</h1>
      </div>
      <div className="">
        <Suspense fallback={<ListingsLoading />}>
          <TshirtListPanel />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
