"use client";

import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import SearchComponent from "@/src/components/search";
import Card from '@/src/components/card';
import getData from '@/src/lib/getData';
import { KeyboardEventHandler, useState } from 'react';

export default function Search() {
    const searchParams = useSearchParams();
    const [searchInput, setSearchInput] = useState(searchParams.get('s'));

    const data = getData(searchInput);

    const handleSearchInput = (e: KeyboardEventHandler<HTMLInputElement>):void => {
        setSearchInput(e?.target?.value);
    }

    return (
        <main className="flex min-h-screen flex-col px-36 py-12">
            <div className="flex justify-between mb-6">
                <div className="flex justify-start items-center">
                    <Link href="/"><FontAwesomeIcon icon={faChevronLeft} className="mr-1" /> Back</Link>
                </div>
                <SearchComponent value={searchInput} change={handleSearchInput} />
            </div>
            <div className="w-full grid grid-cols-4 gap-2 items-strech">
            {
                data && data.map(row => {
                    return (
                        <Card key={row.id} post={row} />
                    )
                })
            }
            </div>
        </main>
    )
}
