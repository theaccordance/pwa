
export interface Record {
    artist: string;
    releaseId: string;
    thumbnail: string;
    title: string;
    vinylId: number;
    year: number;
}

export interface VinylState {
    records: Record[]
}

export const DEFAULT_VINYL_STATE: VinylState = {
    records: [
        {
            artist: "Porter Robinson",
            releaseId: "5987590",
            thumbnail: "https://i.discogs.com/maCI46zYJfIDWb2sysIL2CY6Kie203Zp1_B66hb-8Qk/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5ODc1/OTAtMTQwODE2MjU2/My01NTEwLmpwZWc.jpeg",
            title: "Worlds",
            vinylId: 9,
            year: 2014
        },
        {
            artist: "Foo Fighters",
            releaseId: "6309238",
            thumbnail: "https://i.discogs.com/_733jlNzkJBtNdzTqVuWr0d4gnrY7F1WwsqDCDlZ32A/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzMDky/MzgtMTQxNjE0NDgx/OS05ODUzLmpwZWc.jpeg",
            title: "Sonic Highways",
            vinylId: 52,
            year: 2014
        },
    ]
};
