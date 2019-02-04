import React from "react";
import {
  Circle,
  CheckCircle,
  Trash2,
  Edit2,
  XSquare,
  Save
} from "react-feather";

import "./styles.scss";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editableItem: null,
      updateValue: null,
      isCreating: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data && this.state.editableItem !== null) {
      if (
        nextProps.data[this.state.editableItem].name === this.state.updateValue
      ) {
        this.resetEditableItem();
      }
    }

    if (this.props.data.length > 0) {
      if (nextProps.data && nextProps.data.length > this.props.data.length) {
        this.toggleCreate();
      }
    }
  }

  setEditableItem = index => {
    this.setState({
      editableItem: index
    });
  };

  resetEditableItem = () => {
    this.setState({
      editableItem: null,
      updateValue: null
    });
  };

  onInputChange = event => {
    this.setState({
      updateValue: event.target.value
    });
  };

  onItemUpdate = i => {
    if (this.state.updateValue && this.state.updateValue.length > 0) {
      this.props.updateItem(i, this.state.updateValue);
    }
  };

  onDeleteItem = i => {
    let confirm = window.confirm("Are You sure you want to delete this item?");

    if (confirm) {
      this.props.deleteItem(i);
    } else return;
  };

  toggleCreate = () => {
    let obj = {
      isCreating: !this.state.isCreating
    };

    this.setState(obj);
  };

  onCreateInput = event => {
    let obj = {
      createInput: event.target.value
    };

    if (this.state.createInput === "") {
      obj.createInput = null;
    }
    this.setState(obj);
  };

  onCreateItem = () => {
    if (this.state.createInput) {
      this.props.createItem(this.state.createInput);
    }
  };

  render() {
    return (
      <React.Fragment>
        <table className="box">
            <tbody>
              {this.props.data.map((item, i) => {
                return (
                  <tr key={i} index={i} className="item">
                    <td
                      onClick={() => this.props.changeStatus(i, !item.isActive)}
                    >
                      {item.isActive ? (
                        <CheckCircle className="icon" />
                      ) : (
                        <Circle className="icon" />
                      )}
                    </td>
                    <td>
                      {this.state.editableItem === i ? (
                        <input
                          className="input"
                          defaultValue={item.name}
                          onChange={this.onInputChange}
                        />
                      ) : (
                        <h3>{item.name}</h3>
                      )}
                    </td>
                    <td>
                      {this.state.editableItem === i ? (
                        <XSquare
                          className="icon"
                          onClick={() => this.resetEditableItem()}
                        />
                      ) : (
                        <Edit2
                          className="icon"
                          onClick={() => this.setEditableItem(i)}
                        />
                      )}
                      {this.state.editableItem === i ? (
                        <Save
                          className="icon"
                          onClick={() => this.onItemUpdate(i)}
                        />
                      ) : (
                        <Trash2
                          className="icon"
                          onClick={() => this.onDeleteItem(i)}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
              {this.state.isCreating ? (
                <tr className="item">
                  <td>
                    <input
                      className="input"
                      placeholder="Type the name of item"
                      onChange={this.onCreateInput}
                      autoFocus={true}
                    />
                  </td>
                  <td>
                    <Save className="icon" onClick={this.onCreateItem} />
                    <XSquare className="icon" onClick={this.toggleCreate} />
                  </td>
                </tr>
              ) : null}
            </tbody>
        </table>
        <button className="add-button" onClick={this.toggleCreate}>
          New Item
        </button>
      </React.Fragment>
    );
  }
}
