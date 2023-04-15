export const addToStore = object => {
    return {
        type: "ADD_OBJECT",
        payload: object
    }
};

export const addNewObjectToStore = object => {
    return {
        type: "ADD_UPDATED_OBJECT",
        payload: object
    }
};

export const addAllToStore = object => {
    return {
        type: "ADD_ALL_TO_STORE",
        payload: object
    }
};
