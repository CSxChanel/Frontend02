import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <h1 className="bg-cyan-200 text-xl font-bold">Sidebar</h1>
      <Link href={"../pages/members"}>ke-member</Link>
    </>
  );
}
