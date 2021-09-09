import { combineReducers } from "redux"
import { homeReducer } from "src/pages/Home/Home.reducer"
const rootReducer = combineReducers({
  home: homeReducer
})

export default rootReducer
