import React from "react";

import { StoreType} from "./redux/reduxStore";

// interface ContexProps {
//     state: StateType
//     dispatch: ({type}:{type: string}) => void
//     getState: () => StateType
// }

const StoreContext = React.createContext({} as StoreType)


export default StoreContext