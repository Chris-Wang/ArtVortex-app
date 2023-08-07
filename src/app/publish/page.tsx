
"use client";

import PromptInput from "@/src/components/promptInput";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCheckToSlot, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Switch from "@/src/components/switch";
import { useContext, useState } from "react";
import { FormDataContext } from "@/src/context/formDataContext";

export default function Publish() {
    const { formData, updatePrompt } =  useContext(FormDataContext);
    const [publishPrompt, setPublishPrompt] = useState(false);
    
    return (
        <main className="flex min-h-screen flex-col px-36 py-12">
            <h2 className="font-bold text-lg pb-6">Publish</h2>
            <div className="text-md">
                <Link href="/create-image"><FontAwesomeIcon icon={faChevronLeft} className="mr-1" /> Back to creation</Link>
            </div>
            <div className="grid grid-cols-12 flex-1">
                <div className="col-span-4 flex flex-col w-full text-white">
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-col py-3">
                            <label className="py-3 font-bold">Name Artwork</label>
                            <input className="rounded-md bg-surf px-3 py-2 bg-opacity-75" />
                        </div>

                        <div className="flex flex-col py-3">
                            <label className="py-3 font-bold">Prompt</label>
                            <PromptInput disabled prompt={formData.prompt} setPrompt={updatePrompt}/>
                            <div className="flex items-center justify-end py-1">
                                <span className="mx-3">Publish prompt</span>
                                <Switch enabled={publishPrompt} onChange={(e) => setPublishPrompt(e)} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-col gap-3">
                        <button className="text-white px-3 py-2 rounded-md bg-orange-500">
                            Mint NFT
                        </button>
                        <button className="text-white px-3 py-2 rounded-md bg-primary">
                            Publish
                        </button>
                        <button className="text-white px-3 py-2 rounded-md bg-black bg-opacity-20">
                            Save as draft
                        </button>
                    </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-7 rounded-md" style={{ background: "url('/sample.png') no-repeat", backgroundSize: "cover"}}>
                    <div className="w-full h-full flex items-center justify-center bg-white bg-opacity-50 rounded-md relative" style={{backdropFilter: "blur(5px)"}}>
                    <div className="absolute top-3 left-3">Art Preview</div>
                    <Image src="/sample.png"
                        width={360}
                        height={360}
                        alt="Preview"
                    />
                    <button className="absolute bottom-3 right-3 border border-white rounded-md px-3 py-2 mx-3">
                        <FontAwesomeIcon icon={faDownload} color="white" /> Download
                    </button>
                    </div>
                </div>
            </div>
        </main>
    )
}