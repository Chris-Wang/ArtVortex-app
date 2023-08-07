"use client";

import { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Preview from "./preview";
import Card from "@/src/components/card";

export enum LAYOUT_TYPE {
    Regular,
    Large,
}

type CarouselItem = {
    key: string | number;
    name: string;
    url: string;
}; 

type Props = {
    children?: ReactNode;
    className?: string;
    layout?: LAYOUT_TYPE;
    showNum?: number;
    data: CarouselItem[];
    slideNum?: number;
};

export default function Carousel({ children, className, layout, showNum, slideNum = 1, data }: Props) {
    const [index, setIndex] = useState<number>(0);
    const [selectedImage, setSelectedImage] = useState<CarouselItem | null>(null);

    const showNumRes = showNum ? showNum : data.length;
    const carouselStyle = { 
        width: `${1 / showNumRes * 100}%` 
    };

    const moveRange = data.length - showNumRes;

    const handleIndex = (i: number):void => {
        if (index + i < 0) { setIndex(0); }
        else if (index + i >= moveRange ) { setIndex( moveRange ); }
        else setIndex(prev => prev + i);
    }

    const style = {
        transform: `translateX(-${1 / showNumRes * 100  * index}%)`,
    };

    const iconSizes = {
        [LAYOUT_TYPE.Regular]: "",
        [LAYOUT_TYPE.Large]: "1x",
    };

    return (
        <div className={`${className} w-full flex items-center justify-between relative`}>
            <div 
                onClick={() => handleIndex(-slideNum)}  
                className={`${index === 0 ? 'disable' : ''} absolute left-0 -ml-6 z-30 w-12 h-12 flex items-center justify-center cursor-pointer bg-white rounded-full hover:bg-slate-300`}>
                <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    color="black" 
                    size={iconSizes[layout]}
                    className="z-12"
                />
            </div>
            <div className="grow shrink flex overflow-hidden bg-surf rounded">
                <div className="w-full flex ease-in-out transition duration-500" style={style}>
                {
                    data && data.map(row => {
                        if (layout === LAYOUT_TYPE.Large) {
                            return <Card style={carouselStyle} className="grow-0 shrink-0 px-1" key={row.id} post={row} />
                        } else {
                            return (
                                <div 
                                    key={row.id} 
                                    style={carouselStyle}
                                    className="grow-0 shrink-0 px-1 cursor-pointer opacity-75 hover:opacity-100"
                                    >
                                    <Image 
                                        src={row.url} 
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} 
                                        alt={row.name}
                                        onClick={() => setSelectedImage(row)}
                                    />
                                </div>
                            )
                        }
                    })
                }
                </div>
            </div>
            <div onClick={() => handleIndex(slideNum)}
                className={`${index >= moveRange ? 'disable' : ''} absolute right-0 -mr-6 z-30 w-12 h-12 flex items-center justify-center cursor-pointer bg-white rounded-full hover:bg-slate-300`}>
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    color="black"
                    size={iconSizes[layout]}
                    className="z-12"
                />
            </div>
            <Preview item={selectedImage} key={selectedImage?.key} />
        </div>
    );
}
