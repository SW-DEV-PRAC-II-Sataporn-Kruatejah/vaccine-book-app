import Link from "next/link"

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link className="block px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition duration-300 ease-in-out" href={pageRef}>
            {title}
        </Link>
    );
}

