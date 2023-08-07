"use client";

import { useState } from "react";

export default function ArtStyleList() {
    const styleList = [
        {id: 1, name: "Stable"},
        {id: 2, name: "Analog Photography"},
        {id: 3, name: "Redshift"},
        {id: 4, name: "Anything 4"},
        {id: 5, name: "Classic Anime"},
        {id: 6, name: "Van-gogh"},
        {id: 7, name: "Disco"},
        {id: 8, name: "Portrait Plus"}
    ];

    const [selected, setSelected] = useState<number | null>(null);

    function handleSelectArtStyle(id: number): void {
        setSelected(id);
    }

    return  (
        <div className="grid grid-cols-2 gap-4">
            { styleList && styleList.map(style => {
                return <button 
                    key={style.id} 
                    className={`truncate rounded-md border border-sub px-2 py-1 mx-2 whitespace-nowrap text-center hover:bg-input-main ${selected === style.id ? "bg-input-main" : "bg-surf bg-opacity-75"}`}
                    onClick={() => handleSelectArtStyle(style.id)}
                    >
                        {style.name}
                    </button>
            })}
        </div>
    )
}