import * as actionType from './actionType'

const defaultState = {
  collapsed: false
}

const reducer = (state = defaultState, action = {}) => {
  let newState = null
  switch(action.type) {
    case actionType.COLLAPSED:
      newState = JSON.parse(JSON.stringify(state))
      newState.collapsed = action.value
      return newState
    default:
      return state
  }
}

export default reducer