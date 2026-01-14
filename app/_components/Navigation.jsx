import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex items-center justify-center gap-6 text-sm">
      <li>
        <Link href="/tshirts">Tshirts</Link>
      </li>
      <li>
        <Link href="/categories"> Categories</Link>
      </li>
      <li>
        <Link href="/account"> Account</Link>
      </li>
      <li>
        <Link href="/login"> Login</Link>
      </li>
    </ul>
  );
}

export default Navigation;
