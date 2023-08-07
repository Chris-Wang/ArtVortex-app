import LeaderboardItem from "./leaderboardItem";
import getLeaderboardData from "../lib/getLeaderboardData";

export enum LEADERBOARD_TYPE {
    Trending,
    Top
}

type Props = {
    className?: string;
    type: LEADERBOARD_TYPE;
}

export default function Leaderboard({ type, className }: Props) {
    const data = getLeaderboardData();

    return (
        <div className={`${className} grid grid-cols-2 grid-rows-5 gap-4 grid-flow-col`}>
            {
                data && data.map((row, index) => {
                    return <LeaderboardItem key={row.id} item={row} rank={index+1} type={type}/>
                })
            }
        </div>
    )
}