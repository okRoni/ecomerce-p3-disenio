import { Link } from "expo-router";


export default function LinkButton({ children, href }) {
    return (
        <Link href={href}
            className="flex justify-center items-center
                rounded-lg bg-blue-600 color-white p-2 m-1 text-lg
                hover:bg-indigo-700">
            {children}
        </Link>
    );
}