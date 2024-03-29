
export interface FeatureFlag {
    icon: string;
    label: string;
    type: string;
    url: string;
}

export interface ApplicationState {
    features: FeatureFlag[];
    isLoading: boolean;
}

const features: FeatureFlag[] = [
    {
        icon: "musical-notes-outline",
        label: "Vinyl Record Collection",
        type: "feature:vinyl",
        url: "/desktop/vinyl"
    },
    {
        icon: "newspaper-outline",
        label: "Press Articles",
        type: "feature:press",
        url: "/desktop/press"
    },
    {
        icon: "airplane-outline",
        label: "Postcards",
        type: "feature:postcard",
        url: "/desktop/postcard"
    },
    {
        icon: "settings-outline",
        label: "Settings",
        type: "feature:settings",
        url: "/desktop/settings"
    },
    {
        icon: "information-circle-outline",
        label: "About",
        type: "feature:about",
        url: "/desktop/about"
    }
];

export const DEFAULT_APPLICATION_STATE = {
    features: [...features],
    isLoading: false
};
