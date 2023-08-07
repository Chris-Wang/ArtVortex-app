type Post = {
    id: number;
    name: string;
    description: string;
    author: string;
    firstName: string;
    lastName: string;
    profileImageUrl?: string;
    thumbnail?: string;
    nft: boolean;
    artwork_price?: number;
    artwork_unit?: string;
    prompt_price?: number;
    prompt_unit?: string;
}