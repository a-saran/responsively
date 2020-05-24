import {
  REMOVE_VIEW,
  ADD_VIEW,
  SET_LINK,
  SET_SELECTED
} from '../actions/types';
import { mobileViews } from '../data';


const initialState = {
  link: 'https://saran.work/',
  initialViews: mobileViews,
  selectedViews: [
    {
      id: 1,
      size: '320x568',
      name: 'iphone SE'
    },
    {
      id: 2,
      size: '360x640',
      name: 'moto G4'
    },
    {
      id: 4,
      size: '411x731',
      name: 'pixel 2'
    },
    {
      id: 8,
      size: '375x812',
      name: 'iphone X'
    },
    {
      id: 7,
      size: '414x736',
      name: 'iphone 6/7/8 +',
      device: 'mob'
    },
  ],
}

export default function(state=initialState, action) {
  const { type, payload } = action;
  const { selectedViews, initialViews } = state

  switch(type) {
    case ADD_VIEW:
      const shouldAddView = selectedViews.filter(view => view.id === payload.id)
      if(shouldAddView.length === 0) {
        const newView = initialViews.filter(view => view.id === payload.id)
        return {
          ...state,
          selectedViews: [...selectedViews, ...newView]
        }
      }
      return state;
      
    case REMOVE_VIEW:
      const filteredSelectedViews = selectedViews.filter(view => view.id !== payload.id)
      return {
        ...state,
        selectedViews: [...filteredSelectedViews],
      }

    case SET_LINK:
      return {
        ...state,
        link: payload.link,
      }
    case SET_SELECTED:
      return {
        ...state,
        selectedViews: payload.newViews,
      }

    default: 
      return state;
  }
}