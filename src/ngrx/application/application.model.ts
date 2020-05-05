
export interface Toast {
  message: string;
  duration?: number;
  position: 'bottom' | 'middle' | 'top';
  showCloseButton?: boolean;
}

export const BASE_TOAST: Toast = {
  message: '',
  duration: 3000,
  position: 'bottom',
  showCloseButton: true
};

export interface ApplicationState {
  project: object;
  isLoading: boolean;
  toaster?: Partial<Toast>;
}

export const DEFAULT_APPLICATION_STATE: ApplicationState = {
  project: {
    version: '1.0.0',
    sha: 'no sha provided',
    github: 'https://www.github.com/theaccordance/pwa'
  },
  isLoading: false
};
