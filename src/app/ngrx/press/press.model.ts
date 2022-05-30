
export interface PressArticle {
    id: number;
    publisher: string;
    published_date: string;
    title: string;
    url: string;
}

export interface PressState {
    articles: PressArticle[];
}

export const DEFAULT_PRESS_STATE: PressState = {
    articles: []
};
