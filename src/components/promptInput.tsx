"use client";

import React from "react";

type Props = {
    prompt: string;
    disabled?: boolean;
    // setPrompt: React.Dispatch<React.SetStateAction<string>>;
    setPrompt: (prompt: string) => void;
}

export default function PromptInput({ prompt, disabled, setPrompt }: Props) {

    return (
        <div>
            <textarea 
                rows={5}
                className="w-full rounded-md border-input-main bg-input-main px-3 py-2 bg-opacity-75"
                placeholder="Type your creation in detail..."
                disabled={disabled ?? false}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>):void => setPrompt(e.target.value)}
                value={prompt}
            />
            <div className="flex justify-end"><span className="text-xs">{prompt.length} / 200</span></div>
        </div>
    )
}