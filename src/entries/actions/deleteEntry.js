import {ENTRY_EXIST, DELETE_ENTRY_REQUEST, ENTRY_DOES_NOT_EXIST} from "../contants"

const createExpense = (formData,key) => (dispatch) => {
    dispatch({ type: DELETE_ENTRY_REQUEST, payload: {} });
    if(formData.entries[key])
        dispatch({ type: ENTRY_EXIST, payload:formData});
    else
        dispatch({ type: ENTRY_DOES_NOT_EXIST, payload:{error:"Entry Does not exist"}});
}
