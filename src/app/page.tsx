import Link from "next/link";

export default function Home() {
  return (
   <div>
    <img width={100} src="https://avatars.githubusercontent.com/u/168974048?v=4" alt="" />
      <h1>Emerson02</h1>
      <p>Sabino</p>
      <Link href="/clientes">Clientes</Link>
   </div>
  );
}
