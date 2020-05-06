import {version, dependencies, devDependencies, name} from '../../../package.json';

export interface Manifest {
  name: string;
  version: string;
  dependencies: {
    [key: string]: string;
  };
  devDependencies: {
    [key: string]: string;
  };
}

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
  manifest: Manifest;
  isLoading: boolean;
  toaster?: Partial<Toast>;
}

export const DEFAULT_APPLICATION_STATE: ApplicationState = {
  manifest: {name, version, dependencies, devDependencies},
  isLoading: false
};
