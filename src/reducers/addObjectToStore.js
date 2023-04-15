import shipmentsDetail from "../components/ShipmentsDetail";

const initialState = [{
    // consignee: "None",
    // shipmentsDetail: [{
    //     consignee: state.payload.consignee,
    //     customer: "None",
    //     date: "None",
    //     orderNo: "None",
    //     status: "None",
    //     trackingNo: "None"
    // }],
}];


const addObjectToStoreReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "ADD_OBJECT":
        //     return {
        //         ...state,
        //         consignee: action.payload.consignee,
        //         customer: action.payload.customer,
        //         orderNo: action.payload.orderNo,
        //         date: action.payload.date,
        //         trackingNo: action.payload.trackingNo,
        //         status: action.payload.status,
        //     }
        case "ADD_ALL_TO_STORE":
            return {
                ...state,
                shipmentsDetail: action.payload.map(item => ({
                    consignee: item.consignee,
                    customer: item.customer,
                    orderNo: item.orderNo,
                    date: item.date,
                    trackingNo: item.trackingNo,
                    status: item.status,
                }))
            }
        case "ADD_UPDATED_OBJECT":
            let array = [{...state}]
            console.log("THIS IS ARRAY", array)
            array[0]["shipmentsDetail"][0].consignee = action.payload.consignee
            array[0]["shipmentsDetail"][0].customer = action.payload.customer
            array[0]["shipmentsDetail"][0].orderNo = action.payload.orderNo
            array[0]["shipmentsDetail"][0].date = action.payload.date
            array[0]["shipmentsDetail"][0].trackingNo = action.payload.trackingNo
            array[0]["shipmentsDetail"][0].status = action.payload.status
            console.log("THIS", array[0]["shipmentsDetail"][0])

            return {
                array,
                consignee: action.payload.consignee,
                customer: action.payload.customer,
            }
        default:
            return state;
    }
}

// export const addNewValueToStoreReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_UPDATED_OBJECT":
//             let array = [...state]
//             console.log("THIS IS ARRAY", array)
//                 // array[0].consignee = action.payload.consignee
//             return {
//                 ...state,
//                 consignee: action.payload.consignee,
//                 customer: action.payload.customer,
//             }
//         default:
//             return state;
//     }
// }


export default addObjectToStoreReducer;

