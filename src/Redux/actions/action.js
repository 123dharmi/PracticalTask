import { ADD_ITEM } from "./types"


export const addItem = item =>{
  return(
    {type: ADD_ITEM, payload: item}
  )
}

export const toggleFavorite = (itemId) => ({
  type: 'TOGGLE_FAVORITE',
  payload: itemId,
});