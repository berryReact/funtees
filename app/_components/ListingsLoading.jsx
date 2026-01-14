import Spinner from "./Spinner";
function ListingsLoading() {
  return (
    <div className="mx-auto my-[2rem] flex h-[12.5rem] w-[12.5rem] flex-col items-center justify-center gap-3">
      <Spinner />
      <p className="text-sm text-metal-700">Loading listings…</p>
    </div>
  );
}

export default ListingsLoading;
