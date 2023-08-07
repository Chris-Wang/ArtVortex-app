export default function getData(value: string): Post[] {


    const data = [
        {
            id: 1,
            name: "Sunflower",
            description: "AI generated Gundam suit",
            author: "James McA",
            firstName: "James",
            lastName: "McAllan",
            thumbnail: "image_1.png",
            nft: false,
        },
        {
            id: 2,
            name: "Twins",
            description:" AI generated Gundam suit",
            author: "James McA",
            firstName: "James",
            lastName: "McAllan",
            thumbnail: "image_2.png",
            nft: true,
            artwork_price: 0.25,
            artwork_unit: "ETH",
            prompt_price: 0.0015,
            prompt_unit: "ETH",
        },
        {
            id: 3,
            name: "Hope",
            description:" AI generated Gundam suit",
            author: "James McA",
            firstName: "James",
            lastName: "McAllan",
            profileImageUrl: "/_601.jpeg",
            thumbnail: "image_3.png",
            nft: true,
            artwork_price: 0.15,
            artwork_unit: "ETH",
        },
        {
            id: 4,
            name: "Warrior",
            description:" AI generated Gundam suit",
            author: "James McA",
            firstName: "James",
            lastName: "McAllan",
            profileImageUrl: "/logo.svg",
            thumbnail: "image_4.png",
            nft: false,
        },
        {
            id: 5,
            name: "Screaming Shiba",
            description:" AI generated Gundam suit",
            author: "Vincent Chen",
            firstName: "Vincent",
            lastName: "Chen",
            profileImageUrl: "/profile.jpeg",
            thumbnail: "image_5.png",
            nft: false,
        },
        {
            id: 6,
            name: "Heaven",
            description:" AI generated Gundam suit",
            author: "Sunayyah",
            firstName: "Sun",
            lastName: "Ayyah",
            profileImageUrl: "/sample.png",
            thumbnail: "image_6.png",
            nft: false,
            artwork_price: 0.5,
            artwork_unit: "ETH",
        },
    ];
    
    if(value) {
        return data.filter(row => row.name.toLowerCase().includes(value) || row.author.toLowerCase().includes(value));
    } else {
        return data;
    }
}