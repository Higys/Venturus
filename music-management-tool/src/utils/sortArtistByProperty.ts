import { Data } from "../store/musicReducer";

export const sortByProperty = (artists: Data[], property: string, order='desc') => {
    let orderedArray: Data[] = [];
    if(property === 'rating') {

        if (order === 'asc') {
            orderedArray = artists.sort((a: any, b: any) => a[property] - b[property]);
        } else {
            orderedArray = artists.sort((a: any, b: any) => b[property] - a[property]);
        }
    } 
    else if (property === 'name') {
        if (order === 'asc') {
            orderedArray = artists.sort((a: any, b: any) => a[property].localeCompare(b[property]));
        } else {
            orderedArray = artists.sort((a: any, b: any) => b[property].localeCompare(a[property]));
        }
    }
    return orderedArray;
}