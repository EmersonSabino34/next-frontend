import Link from "next/link";

export default function Cliente() {
    return (
        <div className="bg-zinc-800 h-screen w-screen">
            <h1 className="text-white text-3xl">Cliente</h1>
            <Link className=" bg-orange-600  text-white  p-2  rounded-md " href="/"> Principal </Link>
            <Link className="bg-green-600 text-white p-2 rounded-md " href="/produto"> Produtos </Link>
            <Link className="bg-violet-600 text-white p-2 rounded-md" href="/cliente"> Clientes </Link>
        </div>
    )
}
