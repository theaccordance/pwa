import {RootState} from '../state';

export interface AboutViewModel {
  name: string;
  version: string;
  dependencies: { [key: string]: string};
  devDependencies: { [key: string]: string};
}

export function mapToAboutVM(state: RootState): AboutViewModel {
  const {name, version, dependencies, devDependencies} = state.Application.manifest;
  return {
    name,
    version,
    dependencies,
    devDependencies
  };
}
