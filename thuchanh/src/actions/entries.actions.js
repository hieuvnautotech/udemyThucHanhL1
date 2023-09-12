const types = {
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: "POPULATE_ENTRIES",

}
export default types
//get về để saga lắng nghe xong put populateEntries ra UI mới xem được
export const getAllEntries = () => {
    return{
        type: types.GET_ENTRIES,
    }
}
//put populateEntries ra UI
export const populateEntries = (entries) => {
    return { type: types.POPULATE_ENTRIES, payload: entries };
  };





