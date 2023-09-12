import entriesTypes from '../actions/entries.actions'

const reducer = (state, action) => {
    let newEntries
    switch(action.type) {
        case entriesTypes.POPULATE_ENTRIES:
        return action.payload
        default:
    }
}
export default reducer



