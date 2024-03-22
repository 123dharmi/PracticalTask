import {Images} from '../../assets';

const initialState = {
  data: [
    {
      id: 1,
      name: 'John Doe',
      userImg: Images.userImg,
      favorite: false,
    },
    {
      id: 2,
      name: 'Martin Kwik',
      userImg: Images.userImg,
      favorite: false,
    },
    {
      id: 3,
      name: 'Daniel Boyd',
      userImg: Images.userImg,
      favorite: false,
    },
    {
      id: 4,
      name: 'Sripad k',
      userImg: Images.userImg,
      favorite: false,
    },
    {
        id: 5,
        name: 'John Doe',
        userImg: Images.userImg,
        favorite: false,
      },
      {
        id: 6,
        name: 'Martin Kwik',
        userImg: Images.userImg,
        favorite: false,
      },
      {
        id: 7,
        name: 'Daniel Boyd',
        userImg: Images.userImg,
        favorite: false,
      },
      {
        id: 8,
        name: 'Sripad k',
        userImg: Images.userImg,
        favorite: false,
      },
  ],
  favorites: [],
};
const placeReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case 'TOGGLE_FAVORITE':
      const updatedData = state.data.map(item =>
        item.id === action.payload ? {...item, favorite: !item.favorite} : item,
      );
      const updatedFavorites = updatedData.filter(item => item.favorite);
      return {
        ...state,
        data: updatedData,
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};
export default placeReducer;
