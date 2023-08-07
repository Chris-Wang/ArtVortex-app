"use client";

import getData from "@/src/lib/getData";
import getRecommendedData from "@/src/lib/getRecommendedData";
import Card from "@/src/components/card";
import Search from "@/src/components/search";
import Switch from "@/src/components/switch";
import { useState } from "react";

export default function Home() {
    const data = getData();
    const recommendedData = getRecommendedData();
    const [filterNFT, setFilterNFT] = useState(true);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-36 py-12">
            {/* <h1 className="text-4xl font-bold">Explore  Marketplace</h1>
            <div className="w-full flex items-center justify-center">
                <Search className="py-6" />
                <Switch className="mr-auto" enabled={filterNFT} onChange={(e) => setFilterNFT(e)} />
            </div>
            <div className="w-full grid grid-cols-4 gap-2 items-strech">
            {
                data && data.map(row => {
                    return (
                        <Card key={row.id} post={row} />
                    )
                })
            }
            </div> */}
        </main>
    )
}
