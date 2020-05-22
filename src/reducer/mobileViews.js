import { REMOVE_VIEW, ADD_VIEW, SET_LINK } from '../actions/types';

const initialState = {
  link: 'https://codebrahma.com/',
  initialViews: [
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
      id: 3,
      size: '360x640',
      name: 'galaxy S5'
    },
    {
      id: 4,
      size: '411x731',
      name: 'pixel 2'
    },
    {
      id: 5,
      size: '411x823',
      name: 'pixel 2 xl'
    },
    {
      id: 6,
      size: '365x667',
      name: 'iphone 6/7/8'
    },
    {
      id: 7,
      size: '414x736',
      name: 'iphone 6/7/8 +'
    },
    {
      id: 8,
      size: '375x812',
      name: 'iphone X'
    },
  ],
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
      id: 3,
      size: '360x640',
      name: 'galaxy S5'
    },
  ],
}

export default function(state=initialState, action) {
  const { type, payload } = action;
  const { selectedViews, initialViews } = state

  switch(type) {
    case ADD_VIEW:
      const shouldAddView = selectedViews.filter(view => view.id === payload.id)

      if(shouldAddView.length > 0) {
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

    default: 
      return state;
  }
}