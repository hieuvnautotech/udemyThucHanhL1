// import {useState, useEffect} from 'react'
// import { useDispatch } from 'react-redux'
// import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
// import {v4 as uuidv4} from 'uuid'

// function useEntryDetails(desc='', val='', isExp=true){
//     const [description, setDescription] = useState(desc);
//     const [value, setValue] = useState(val);
//     const [isExpense, setIsExpense] = useState(isExp);
//     const dispatch = useDispatch()

//     useEffect(()=>{
//         setDescription(desc)
//         setValue(val)
//         setIsExpense(isExpense)
//       },[desc, val, isExp])

//     function addEntry() { 
//         dispatch(addEntryRedux({
//           id: uuidv4(),
//           description,
//           value,
//           isExpense
//         }))
//         resetValues() 
//       }

//         function resetValues(){
//         setDescription('')
//         setValue('')
//         setIsExpense(true)
//       }

//       return {
//         description, 
//         setDescription, 
//         setValue, 
//         value, 
//         setIsExpense, 
//         isExpense, 
//         addEntry,
//         // updateEntry
//     }

// }
// export default useEntryDetails
