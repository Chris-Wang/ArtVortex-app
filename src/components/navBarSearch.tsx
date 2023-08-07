"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function NavBarSearch() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    function handleSubmit(e: FormEvent):void {
        e.preventDefault();

        router.push(`/search?s=${search}`);
    }

    return (
        <form className="mx-12 flex" onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="-mr-7 mt-2 z-10 text-slate-500"/>
            <input
                className="bg-slate-100 text-slate-500 text-sm rounded-full py-2 pl-9 pr-3 flex items-center justify-start focus-visible:border-slate-50 w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Quick search...'
                />
        </form>
    );
}