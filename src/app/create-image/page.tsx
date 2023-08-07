"use client";

import Image from "next/image";
import PromptInput from "@/src/components/promptInput";
import PromptPool from "@/src/components/promptPool";
import ArtStyleList from "@/src/components/artStyleList";
import CanvasList from "@/src/components/canvasList";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCheckToSlot, faC } from "@fortawesome/free-solid-svg-icons";
import Carousel, { LAYOUT_TYPE } from "@/src/components/carousel";
import { useState, useContext } from "react";
import { useRouter } from 'next/navigation';

import { NotificationContext } from "@/src/context/notificationContext";
import { FormDataContext } from "@/src/context/formDataContext";

const carouselData = [
    { key: 1, name: "01", url: "/image_1.png" },
    { key: 2, name: "02", url: "/image_2.png" },
    { key: 3, name: "03", url: "/image_3.png" },
    { key: 4, name: "04", url: "/image_4.png" },
    { key: 5, name: "05", url: "/image_5.png" },
    { key: 6, name: "06", url: "/image_6.png" },
];

export default function CreateImage() {

    const { formData, updatePrompt } =  useContext(FormDataContext);
    const { notify } = useContext(NotificationContext);

    const router = useRouter();

    const handleClickGenerate = () => {
        notify("Image has been generated successfully.", true, "Image created");
    }
 
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-36 py-12">
            <div className="w-full">
                <h2 className="font-bold text-lg pb-6">Create New Image</h2>

                <div className="grid grid-cols-12">
                    <div className="col-span-4 text-white">

                        <div className="flex flex-col">
                            <label className="py-3 font-bold">Enter Prompt</label>
                            <PromptInput prompt={formData.prompt} setPrompt={updatePrompt} />
                            <span className="">Prompt Hints</span>
                            <PromptPool prompt={formData.prompt} setPrompt={updatePrompt} />
                        </div>

                        <div className="flex flex-col py-3">
                            <label className="py-3 font-bold">Art Style</label>
                            <ArtStyleList />
                        </div>

                        <div className="flex flex-col py-3">
                            <label className="py-3 font-bold">Canvas</label>
                            <CanvasList />
                        </div>
                        
                        <button className="w-full text-white px-3 py-2 rounded-md bg-primary my-3" 
                            onClick={handleClickGenerate}>
                            Create
                        </button>

                        <button className="w-full bg-orange-500 rounded-md px-3 py-2" 
                            onClick={() => router.push('/publish')}>
                            <FontAwesomeIcon icon={faCheckToSlot} color="white" /> Publish
                        </button>

                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-7 flex flex-col">
                        <div className="grow rounded-md" style={{ background: "url('/sample.png') no-repeat", backgroundSize: "cover"}}>
                            <div className="w-full h-full flex items-center justify-center bg-white bg-opacity-50 rounded-md relative" style={{backdropFilter: "blur(5px)"}}>
                            <div className="absolute top-3 left-3 text-shadow text-slate-500 font-bold">Art Preview</div>
                                <Image src="/sample.png"
                                    width={360}
                                    height={360}
                                    alt="Preview"
                                />
                            <Link className="absolute right bottom-2 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-md px-3 py-2 mx-3"
                                href="/">
                                <FontAwesomeIcon icon={faDownload} color="white" /> Download
                            </Link>
                            </div>
                        </div>
                        <Carousel className="grow-0 my-3" layout={LAYOUT_TYPE.Regular} showNum={6} slideNum={1} data={carouselData} />
                    </div>
                </div>
                {/* <div className="grid grid-cols-12 mt-6">
                    <div className="col-span-4 flex flex-col">
                        <button className="text-white px-3 py-2 rounded-md bg-primary" 
                            onClick={handleClickGenerate}>
                            Create
                        </button>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-7 flex items-center justify-center px-6">
                        <Link className="bg-black bg-opacity-20 hover:bg-opacity-30 rounded-md px-3 py-2 mx-3"
                            href="/">
                            <FontAwesomeIcon icon={faDownload} color="white" /> Download
                        </Link>
                        <Link className="bg-black bg-opacity-20 hover:bg-opacity-30 rounded-md px-3 py-2 mx-3" 
                            href="/publish">
                            <FontAwesomeIcon icon={faCheckToSlot} color="white" /> Publish
                        </Link>
                    </div>
                </div> */}
            </div> 
        </main>
    )
}