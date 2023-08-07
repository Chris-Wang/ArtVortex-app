"use client";

import NavBarUserProfile from "./navBarUserProfile"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faPlus, faHouse, faMagnifyingGlass, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function NavBar() {
    const { data: session, status } = useSession();

    return (
        <div className="sticky left-0 flex items-center justify-between z-40 bg-secondary shadow-inner shadow-md px-4">
            <Link href="/">
                <Image src="/logo.png"
                    width={195}
                    height={52}
                    alt="ARTVORTEX"
                />
            </Link>
            <div className="flex flex-1 items-center justify-end py-3 mx-4">
                <Link href="/"
                    className="mx-3">
                    <FontAwesomeIcon icon={faHouse} className="mr-1" color="white" /> 
                </Link>
                <Link href="/create-image"
                    className="mx-1 rounded-md px-3 py-1 bg-artvortex text-white">
                    Create
                </Link>
            </div>
            {
                status === 'loading' ?
                    <Image src="/loading.svg"
                        width={32}
                        height={32}
                        alt="loading"
                        />
                :  (
                    session
                    ? <NavBarUserProfile user={session?.user} />
                    : <Link 
                        href="/api/auth/signin?callbackUrl=/"
                        className="bg-primary mx-1 rounded-md px-3 py-1"
                        >
                            Login / Sign Up
                        </Link>
                )
            }
        </div>
    );
}