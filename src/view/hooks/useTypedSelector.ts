import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../data/store/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
