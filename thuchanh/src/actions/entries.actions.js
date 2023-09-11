const types = {
    GET_ENTRIES: 'GET_ENTRIES',

}
export default types

export const getAllEntries = () => {
    return{
        type: types.GET_ENTRIES,
    }
}





