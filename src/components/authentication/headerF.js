import Link from "next/link";

export default function HeaderF({ title, text, link, link_text }) {
  return (
    <div className="text-center">
      <h1 className="block text-2xl font-bold text-gray-800">{title}</h1>
      <p className="mt-2 text-sm text-gray-600">
        {text}
        <Link
          className="text-blue-600 decoration-2 hover:underline font-medium px-1"
          href={link}
        >
          {link_text}
        </Link>
      </p>
    </div>
  );
}
