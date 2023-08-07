import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full flex mt-12 py-12 border-t border-sub">
            <div className="flex-none">
                <Image
                    src="/art_vortex_logo.png"
                    width={94}
                    height={94}
                    alt="Art Vortex"
                    />
                <Image
                    src="/art_vortex.png"
                    width={220}
                    height={39}
                    alt="Art Vortex"
                    />
            </div>
            <div className="flex-1 flex items-center justifuy-between">
                <div className="flex-1 flex justify-center">
                    <Link href="/create">Create</Link>
                </div>
                <div className="flex-1 flex justify-center">
                    <Link href="/">Marketplace</Link>
                </div>
                <div className="flex-1 flex justify-center">
                    <Link href="/account">Account</Link>
                </div>
            </div>
        </div>
    )
}