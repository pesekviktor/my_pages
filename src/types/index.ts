import {Reducer, Store} from "redux";
import {Saga} from "redux-saga";
import {SagaInjectionModes} from "redux-injectors";
import {LanguageProviderState} from "../containers/LanguageProvider/types";
import {ThemeProviderState} from "../containers/ThemesProvider/types";

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;

  runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: Saga;
  mode?: SagaInjectionModes;
}

export interface ApplicationRootState {
  readonly theme: ThemeProviderState;
  readonly language: LanguageProviderState;

  // for testing purposes
  readonly test: any;
}
