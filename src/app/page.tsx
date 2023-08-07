"use client";

import getData from "@/src/lib/getData";
import getRecommendedData from "@/src/lib/getRecommendedData";
import SearchComponent from "@/src/components/search";
import Switch from "@/src/components/switch";
import Carousel, { LAYOUT_TYPE } from "@/src/components/carousel";
import { useState } from "react";
import Leaderboard, { LEADERBOARD_TYPE } from "../components/leaderboard";
import Footer from "@/src/components/footer";

export enum FILTER {
    All,
    Art,
    Video,
    Music,
};

export default function Home() {
    const data = getData();
    const recommendedData = getRecommendedData();
    const [filterNFT, setFilterNFT] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(FILTER.All);
    const [searchInput, setSearchInput] = useState("");

    const tabs = [
        { name: 'Trending', key: 'trending' },
        { name: 'Top', key: 'top'},
    ];

    const [selectedTab, setSelectedTab] = useState('trending');

    const handleFilter = (option: FILTER) => {
        setSelectedFilter(option);
    }

    return (
        <>
            <main className="flex min-h-screen flex-col px-36 py-12">
                <div className="flex justify-between mb-6">
                    <div className="flex justify-start items-center">
                        <button className={`${selectedFilter === FILTER.All ? "bg-gray-500" : "" } px-4 py-1 rounded-lg`} onClick={() => handleFilter(FILTER.All)}>All</button>
                        <button className={`${selectedFilter === FILTER.Art ? "bg-gray-500" : "" } px-4 py-1 rounded-lg`} onClick={() => handleFilter(FILTER.Art)}>Art</button>
                        <button className={`${selectedFilter === FILTER.Video ? "bg-gray-500" : "" } px-4 py-1 rounded-lg`} onClick={() => handleFilter(FILTER.Video)}>Video</button>
                        <button className={`${selectedFilter === FILTER.Music ? "bg-gray-500" : "" } px-4 py-1 rounded-lg`} onClick={() => handleFilter(FILTER.Music)}>Music</button>
                    </div>
                    <SearchComponent redirectUrl="/search" value={searchInput} change={(e) => setSearchInput(e?.target?.value)}/>
                </div>
                <h3 className="my-3 font-bold">Recommend for You</h3>
                <Carousel layout={LAYOUT_TYPE.Large} showNum={4} slideNum={2} data={recommendedData} />

                <div className="flex mt-12">
                    <div className="block bg-gray-500 rounded-md">
                        <nav className="flex" aria-label="Tabs">
                            {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                className={
                                   `${selectedTab === tab.key ? 'bg-artvortex ' : 'hover:text-gray-700'}
                                    rounded-md px-6 py-2 text-sm font-medium`
                                }
                                aria-current={tab.current ? 'page' : undefined}
                                onClick={() => setSelectedTab(tab.key)}
                            >
                                {tab.name}
                            </button>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="py-6">
                { 
                    selectedTab === "trending" &&
                    <Leaderboard type={LEADERBOARD_TYPE.Trending} />
                }
                {
                    selectedTab === "top" &&
                    <Leaderboard type={LEADERBOARD_TYPE.Top} />
                }
                </div>
                {
                    (selectedFilter === FILTER.All || selectedFilter === FILTER.Art) &&
                    <>
                        <h3 className="mt-12 mb-3 font-bold">Trending in Art</h3>
                        <Carousel layout={LAYOUT_TYPE.Large} showNum={4} data={data} />
                    </>
                }
                {
                    (selectedFilter === FILTER.All || selectedFilter === FILTER.Video) &&
                    <>
                        <h3 className="mt-12 mb-3 font-bold">Trending in Video</h3>
                        <Carousel layout={LAYOUT_TYPE.Large} showNum={4} slideNum={3} data={data} />
                    </>
                }
                {
                    (selectedFilter === FILTER.All || selectedFilter === FILTER.Music) &&
                    <>
                        <h3 className="mt-12 mb-3 font-bold">Trending in Music</h3>
                        <Carousel layout={LAYOUT_TYPE.Large} showNum={4} data={data} />
                    </>
                }
            <Footer />
            </main>
        </>
    )
}
