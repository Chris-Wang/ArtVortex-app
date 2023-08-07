"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ReactEventHandler } from 'react';
import { redirect } from 'next/navigation';
import { useRouter } from "next/navigation";

type props = {
    className?: string;
    value?: string;
    change: ReactEventHandler,
    redirectUrl?: string;
}

export default function Search({ className, value, change, redirectUrl }: props) {
    const router = useRouter();

    const handleKeyUp = (e: KeyboardEventHandler<HTMLInputElement> | undefined) => {
        if (e.keyCode === 13 && !!redirectUrl) {
            router.push(`${redirectUrl}?s=${value}`);
        }
    }

    return (
        <div className={`flex items-center w-96 ${className}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="-mr-7 z-10 text-slate-500"/>
            <input
                className="w-full bg-surf text-slate-500 rounded-lg py-2 pl-9 pr-3 flex items-center justify-start focus-visible:border-slate-50"
                placeholder='Quick search...'
                value={value}
                onKeyUp={(e) => handleKeyUp(e)}
                onChange={change}
                />
        </div>
    )
}