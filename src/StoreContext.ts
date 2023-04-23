import React from "react";
import {StoreType} from "./redux/store";

// interface ContexProps {
//     state: StateType
//     dispatch: ({type}:{type: string}) => void
//     getState: () => StateType
// }

const StoreContext = React.createContext({} as StoreType)


export default StoreContext