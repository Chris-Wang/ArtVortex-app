import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

type Props = {
    item: {
        url: string;
        name: string;
    } | null;
}

export default function Preview({ item }: Props) {
    const [image, setImage] = useState<Props["item"]>(item);

    // useEffect(() => {
    //     setImage(item);
    // }, [item]);
    
    return (
        <>
        { image &&
            <div className="fixed flex items-center justify-center left-0 top-0 w-full h-full bg-black bg-opacity-75 z-50">
                <FontAwesomeIcon 
                    icon={faXmark} 
                    color="white"     
                    className="text-3xl absolute right-3 top-3  cursor-pointer" 
                    onClick={() => setImage(null)} />
                <img
                    src={image.url}
                    alt={image.name}
                />
            </div>
        }
        </>
    );
}