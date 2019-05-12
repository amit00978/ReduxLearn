import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';



// Combine all the reducers
export default combineReducers({
        libraries: LibraryReducer,
        SelectedLibraryId : SelectionReducer
});