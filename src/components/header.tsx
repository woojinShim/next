import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/scale">Scale</Link>
            <Link href="/details">Detail</Link>
        </div>
    )
}