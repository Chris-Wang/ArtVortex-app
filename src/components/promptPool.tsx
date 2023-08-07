type Props = {
    prompt: string;
    // setPrompt: React.Dispatch<React.SetStateAction<string>>;
    setPrompt: (prompt: string) => void;
};

export default function PromptPool({ prompt, setPrompt }: Props) {
    const pool = [
        "Sunset cliffs",
        "Cloud castle",
        "Neverend dream",
        "Fire and ice",
    ]

    const handleInput = (item: string): void => {
        setPrompt(prompt && prompt.length ? prompt + " " + item : item);
    }
    
    return (
        <div className="flex flex-wrap py-3">
            { pool && pool.map((item, index) => {
                return (
                    <div key={index}
                        className="rounded-full whitespace-nowrap px-3 py-1 border border-sub bg-surf mx-1 my-1 bg-opacity-75 hover:bg-input-main cursor-pointer"
                        onClick={() => handleInput(item)}
                        >
                        { item }
                    </div>
                );
            })}
        </div>
    )
}