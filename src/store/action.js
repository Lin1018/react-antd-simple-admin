import * as actionType from './actionType'

export const TOGGLE_COLLAPSED = (value) => {
  return {
    type: actionType.COLLAPSED,
    value
  }
} 