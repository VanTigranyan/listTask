import { list } from './list.reducer';
import listTypes from '../types/list.types';

describe('List Reducer', () => {
    let initState = {
        data: [],
        error: "",
        isFetching: false
    }

    let state = {
        data: [
            {
                name: "list 1",
                id: "dwsd55",
                isActive: false,
            },
            {
                name: "list 2",
                id: "dsds55",
                isActive: true,
            }
        ],
        error: "",
        isFetching: false,
    }

    it('should return the initial state while getting list data', () => {
        expect(list(undefined)).toEqual(initState);
    })

    it('should return isFetching to be equal to true', () => {
        expect(list(initState, {
            type: listTypes.GET_LISTS
        })).toEqual({...initState, isFetching: true})
    })

    it('should create new item for list data', () => {
        let res = list(state, {
            type: listTypes.CREATE_ITEM_SUCCESS,
            payload: {}
        });
        expect(res.data.length).toEqual(state.data.length + 1);
    })

    it('should change the status of an item in data array', () => {
        let res = list(state, {
            type: listTypes.CHANGE_STATUS_SUCCESS,
            i : 0,
        });

        expect(res.data[0].isActive).toEqual(true);
    })

    it('should change the name of given item', () => {
        let res = list(state, {
            type: listTypes.CHANGE_NAME_SUCCESS,
            i: 0,
            payload: 'new name'
        })

        expect(res.data[0].name).toBe('new name');
    })

    it('should delete the item with given index', () => {
        let res = list(state, {
            type: listTypes.DELETE_ITEM_SUCCESS,
            payload: 0
        })

        expect(res.data[0]).not.toEqual(state.data[0]);
        expect(res.data.length).toEqual(state.data.length - 1);
    })


})