import {VALIDATE_ENTRY_FAIL, CREATE_ENTRY_REQUEST, VALIDATE_ENTRY_SUCCESS} from "../contants"

export const initialState = {
    status: 'ready',
    entries: {},
    count: -1,
    total_entries: 0
  };

const addEntry = (entries,count,entry) => {
    entries[count+1] = entry
    return entries
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_ENTRY_REQUEST:{
            return {
                ...state,
                status: "ready"
            }
        }
        case VALIDATE_ENTRY_SUCCESS:{
            return {
                ...state,
                count: state.count+1,
                status: "added",
                entries: addEntry(state.entries, state.count, action.payload.entry),
                total_entries: state.total_entries + 1 
            }
        }
        case VALIDATE_ENTRY_FAIL:{
            return {
                ...state,
                status: "failed",
                error: action.payload.error
            }
        }
    }
}

