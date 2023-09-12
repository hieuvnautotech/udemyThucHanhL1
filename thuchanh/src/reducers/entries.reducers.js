import entriesTypes from '../actions/entries.actions'

const reducer = (state=initialEntries,action) => {
    // let newEntries
    switch(action.type){ 

        case entriesTypes.POPULATE_ENTRIES:
        return action.payload
        default:
        return state

    }
}

export default reducer

var initialEntries=[]