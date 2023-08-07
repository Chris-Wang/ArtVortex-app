import Avatar from "./avatar";
import { LEADERBOARD_TYPE } from "./leaderboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faBlankStar } from "@fortawesome/free-regular-svg-icons";


type Props = {
    item: Partial<Post>;
    rank: number;
    type: LEADERBOARD_TYPE
};

export default function LeaderboardItem({ rank, item, type }: Props) {
    return (
        <div className="flex">
            <div className="flex items-center justify-center px-4">
                <Avatar user={item} size="lg" />
            </div>
            { 
                type === LEADERBOARD_TYPE.Trending &&
                <div className="grow shrink flex justify-between border-b border-slate-600 py-3">
                    <div className="w-6 font-bold">{ rank }</div>
                    <div className="grow shrink flex flex-col">
                        <div className="font-bold">{ item.name }</div>
                        <div className="text-slate-400 mt-1">Created by { item.author }</div>
                    </div>
                    <div className="flex items-center font-bold">{ item.artwork_price }<span className="ml-1 text-slate-500">{item.artwork_unit}</span></div>
                </div>
            }
            {
                type === LEADERBOARD_TYPE.Top &&
                <div className="grow shrink flex justify-between border-b border-slate-600 py-3">
                    <div className="w-6 font-bold">{ rank }</div>
                    <div className="grow shrink flex flex-col">
                        <div className="font-bold">{ item.author }</div>
                        <div className="text-slate-400 mt-1">
                            <FontAwesomeIcon icon={faStar} color="yellow" />
                            <FontAwesomeIcon icon={faStar} color="yellow" />
                            <FontAwesomeIcon icon={faStar} color="yellow" />
                            <FontAwesomeIcon icon={faStar} color="yellow" />
                            <FontAwesomeIcon icon={faBlankStar} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}