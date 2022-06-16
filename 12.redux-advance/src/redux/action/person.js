import {ADD_PERSON} from '../constant'

export const createAddPersonAction = personObj => {
    return {type:ADD_PERSON,data:personObj}
}
