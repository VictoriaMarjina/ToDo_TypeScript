import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppStateType } from '../root/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;