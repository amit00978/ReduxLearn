
import { select_library } from '../components/common/type'
export const selectLibraray = (library_id) =>{

    return{
        type: select_library,
        payload : library_id
    };
};