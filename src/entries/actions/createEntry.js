import {VALIDATE_ENTRY_FAIL, CREATE_ENTRY_REQUEST, VALIDATE_ENTRY_SUCCESS} from "../contants"

const createExpense = (formData) => (dispatch) => {
    dispatch({ type: CREATE_ENTRY_REQUEST, payload: {} });
    valid = validateForm()
    if(valid.status)
        dispatch({ type: VALIDATE_ENTRY_SUCCESS, payload:formData});
    else
        dispatch({ type: VALIDATE_ENTRY_FAIL, payload:valid});
}

validateForm = (formData) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!uniqueEmailValidation(formData.entries, formData.email))
        return {status:false, error:"Email address already in use"}
    if (!re.test(String(formData.email).toLowerCase()))
        return {status:false, error: "invalid email address"}
    return {status:true}
}

uniqueEmailvValidation = (entries, email) => {
    for (i in entries){
        if (String(entries[i].email).toLowerCase() === String(email).toLowerCase())
            return false
    }
    return true
}