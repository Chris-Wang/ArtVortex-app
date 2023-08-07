import { useEffect, useState } from "react";

type Props = {
    user: {
        profileImageUrl: string;
        firstName: string;
        lastName: string;
    };
    size?: "lg" | "md" | "sm";
};

export default function Avatar({ user, size = "md" }: Props) {
    const sizeList = {
        "lg": "w-16 h-16",
        "md": "w-8 h-8",
        "sm": "w-5 h-5",
    };

    return (
        <>
        { user.profileImageUrl
            ? <div className={`${sizeList[size]} grow-0 shrink-0 rounded-full bg-cover`} style={{ backgroundImage: `url(${user.profileImageUrl})` }}></div>
            : <div className={`${sizeList[size]} grow-0 shrink-0 rounded-full bg-cover bg-artvortex text-shadow text-white flex items-center justify-center font-bold`}>{user.firstName[0]}{user.lastName[0]}</div>
        }
        </>
    )
}