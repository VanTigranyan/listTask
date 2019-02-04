import listTypes from '../types/list.types';
import Service from '../service';

export const getListsAction = () => dispatch => {
    dispatch({
        type: listTypes.GET_LISTS
    })
    Service.getLists()
        .then(res => {
            dispatch({
                type: listTypes.GET_LISTS_SUCCESS,
                payload: res,
            })
        })
        .catch(err => {
            dispatch({
                type: listTypes.GET_LISTS_FAIL,
                payload: err,
            })
        })
}

export const createItemAction = name => dispatch => {
    dispatch({
        type: listTypes.CREATE_ITEM
    })
    Service.createItem(name)
        .then(res => {
            dispatch({
                type: listTypes.CREATE_ITEM_SUCCESS,
                payload: res,
            })
        })
        .catch(err => {
            dispatch({
                type: listTypes.CREATE_ITEM_FAIL,
                payload: err,
            })
        })
}

export const changeStatusAction = ( i, isActive) => dispatch => {
    dispatch({
        type: listTypes.CHANGE_STATUS,
    })
    console.log( i, isActive)
    Service.changeStatus(i, isActive)
        .then(res => {
            dispatch({
                type: listTypes.CHANGE_STATUS_SUCCESS,
                i: i,
            })
        })
        .catch(err => {
            dispatch({
                type: listTypes.CHANGE_STATUS_FAIL,
                payload: err,
            })
        })
}

export const updateItemAction = (i, name) => dispatch => {
    dispatch({
        type: listTypes.CHANGE_NAME,
    })
    Service.updateName(i,name)
        .then(res => {
            dispatch({
                type: listTypes.CHANGE_NAME_SUCCESS,
                payload: name,
                i: i,
            })
        })
        .catch(err => {
            dispatch({
                type: listTypes.CHANGE_NAME_FAIL,
                payload: err,
            })
        })
}

export const deleteItemAction = (i) => dispatch => {
    dispatch({
        type: listTypes.DELETE_ITEM,
    })
    Service.deleteItem(i)
        .then(() => {
            dispatch({
                type: listTypes.DELETE_ITEM_SUCCESS,
                payload: i,
            })
        })
        .catch(err => {
            dispatch({
                type: listTypes.DELETE_ITEM_FAIL,

            })
        })
}
