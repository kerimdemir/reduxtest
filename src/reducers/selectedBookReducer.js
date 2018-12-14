
import { DESELECT_BOOK,SELECT_BOOK } from '../actions'

export default (state = { }, action) => {
  
    {/*

    console.log("*************")
    console.log("selectedBookReducers")
    console.log("state - reducer select book")
    console.log(state)
    console.log("-------------------------")
    console.log("action")
    console.log(action)
    console.log("*************")
    

    */}
  
  switch (action.type) {
    case SELECT_BOOK:
      return action.payload;

    case DESELECT_BOOK:
      return action.payload;
    default:
      return state;
  }
}