import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

type Props = {
    post: Post;
    className?: string;
    style?: object;
};

export default function Card({ style, className, post }: Props) {
    return (
        <div style={style} className={`${className} flex items-center rounded-lg text-sm drop-shadow-md`}>
            <div className="w-full relative">
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} 
                    src={"/" + post.thumbnail}
                    alt={post.description}
                    className="rounded-lg"
                />
                <div className="absolute w-full bottom-0 card-gradient px-3 pb-3">
                    <div className="">
                        <p className="text-slate-500 font-black">{ post.name }</p>
                    </div>
                    <div className="text-xs flex items-center my-1">
                        { post.profileImageUrl
                            ? <div className="grow-0 shrink-0 rounded-full bg-cover w-5 h-5" style={{ backgroundImage: `url(${post.profileImageUrl})` }}></div>
                            : <div className="grow-0 shrink-0 flex items-center justify-center rounded-full bg-cover w-5 h-5 bg-secondary text-white">{ post.abbrName }</div>
                        }
                        <span className="text-slate-900 ml-1">{ post.author }</span>
                    </div>
                    {  
                        (post.artwork_price || post.prompt_price) &&
                        <div className="mt-1 pt-1 flex-1 flex flex-col items-center border-sub border-t h-10">
                        {
                            post.artwork_price && 
                            <div className="w-full flex items-center justify-between">
                                <div>Artwork</div>
                                <div>{ post.artwork_price }<span className="text-slate-500 ml-1">{ post.artwork_unit }</span></div>
                            </div>
                        }
                        {
                            post.prompt_price && 
                            <div className="w-full flex items-center justify-between">
                                <div>Prompt</div>
                                <div>{ post.prompt_price }<span className="text-slate-500 ml-1">{ post.prompt_unit }</span></div>
                            </div>
                        }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}