import { combineReducers } from 'redux';
import addObjectToStore, {addNewValueToStoreReducer} from "./addObjectToStore";
import addObjectToStoreReducer from "./addObjectToStore";

const allReducers = combineReducers({
    shipmentUpdate: addObjectToStoreReducer,
    // shipmentUpdateWithNewValue: addNewValueToStoreReducer
})


export default allReducers;