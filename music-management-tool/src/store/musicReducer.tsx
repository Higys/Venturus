import { sortByProperty } from "../utils/sortArtistByProperty";

export const ADD_ARTIST = 'ADD_ARTIST';

export const DELETE_ARTIST = 'DELETE_ARTIST';

export const SORT_ARTIST = 'SORT_ARTIST';

export const SEARCH_ARTIST = 'SEARCH_ARTIST';

export interface Data {
  id: number;
  name: string;
  rating: number;
  url?: string;
  actions?: number;
}

export const initialState = {
  artists: [
    {
      id: 1,
      name: 'Led Zepelin',
      rating: 10,
      url: 'https://www.youtube.com/watch?v=JGwWNGJ',
      actions: 1
    },
    {
      id: 2,
      name: 'Kendrick Lamar',
      rating: 8,
      url: 'https://www.youtube.com/watch?v=JGwWNGJ',
      actions: 1
    },
    {
      id: 3,
      name: 'Queen',
      rating: 9,
      url: 'https://www.youtube.com/watch?v=JGwWNGJ',
      actions: 1
    },
    {
      id: 4,
      name: 'Cazuza',
      rating: 5,
      url: 'https://www.youtube.com/watch?v=JGwWNGJ',
      actions: 1
    },
    {
      id: 5,
      name: 'Angra',
      rating: 6,
      url: 'https://www.youtube.com/watch?v=JGwWNGJ',
      actions: 1
    },
  ],
};

export const addArtist = (artist: any) => ({
  type: ADD_ARTIST,
  artist,
});

export const deleteArtist = (artist: any) => ({
  type: DELETE_ARTIST,
  artist,
});

export const sortArtist =  (payload: any) => ({
  type: SORT_ARTIST,
  payload,
});

export const searchArtist =  (payload: any) => ({
  type: SEARCH_ARTIST,
  payload,
});

export const musicReducer = (state = initialState, action: any) => {
  
  switch (action.type) {

    case ADD_ARTIST: 
      {        
        return {
        ...state,
        artists: [...state.artists, action.artist],
        };
      }

    case DELETE_ARTIST: 
      {
        return {
        ...state,
        artists: state.artists.filter((artist: any) => artist.id !== action.artist.id),
        };
      } 

    case SORT_ARTIST:
      {      
        let artistsOrder = sortByProperty(state.artists, action.payload.property, action.payload.order);
        return {
        ...state,
        artists: artistsOrder
      };
    }

  }

};