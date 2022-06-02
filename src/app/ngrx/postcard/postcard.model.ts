
export interface Postcard {
    id: number;
    destination: string;
    location: string;
    date: string;
    // story?: string;
    image: string;
}

export interface PostcardState {
    displayList: boolean;
    postcards: Postcard[];
}

export const DEFAULT_POSTCARD_STATE: PostcardState = {
    displayList: true,
    postcards: [],
}
