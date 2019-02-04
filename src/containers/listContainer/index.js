import React from "react";
import { connect } from "react-redux";

import {
  changeStatusAction,
  deleteItemAction,
  getListsAction,
  updateItemAction,
  createItemAction
} from "../../redux/actions/list.actions";
import List from "../../components/list";
import "./styles.scss";

class ListContainer extends React.Component {
  componentWillMount() {
    this.props.getLists();
  }

  render() {
    return (
      <div className="container">
          {this.props.lists.length > 0 ? <List
          data={this.props.lists}
          changeStatus={this.props.changeStatus}
          deleteItem={this.props.deleteItem}
          createItem={this.props.createItem}
          updateItem={this.props.updateItem}
          isFetching={this.props.isFetching}
        /> : <img src="loader.gif" alt='loader'/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.list.data,
    isFetching: state.list.isFetching,
    error: state.list.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLists: () => dispatch(getListsAction()),
    changeStatus: (i, status) => dispatch(changeStatusAction(i, status)),
    deleteItem: i => dispatch(deleteItemAction(i)),
    updateItem: (i, name) => dispatch(updateItemAction(i, name)),
    createItem: name => dispatch(createItemAction(name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
