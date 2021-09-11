import { combineReducers } from "redux"
import  detailsReducer  from "src/pages/Details/Details.reducer"
const rootReducer = combineReducers({
  details: detailsReducer
})

export default rootReducer
