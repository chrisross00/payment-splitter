import React from 'react';
import uuid from 'uuid';

class BillAdderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  onInputChange = (e) => {
    const val = e.target.value;
    switch (e.target.className) {
      case 'expenseName':
        return this.setState(() => ({
          name: val
        }));
      case 'description':
        return this.setState(() => ({
          description: val
        }));
      case 'createdBy':
        return this.setState(() => ({
          createdBy: val
        }));
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState({ error: 'Please complete required fields' });
    }
    else {
      this.props.onSubmit({
        name: this.state.name,
        description: this.state.description,
        createdDate: 0,
        createdBy: this.state.createdBy
      });
    }
    this.setState({
      name: '',
      description: '',
      createdDate: 0,
      createdBy: '',
      error: ''
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <label htmlFor="expenseName">Give your expense a name</label>
        <input
          className="expenseName"
          type="text"
          placeholder="Expense name"
          onChange={this.onInputChange} />
        <br />
        <label htmlFor="description">Type a brief description (optional)</label>
        <input
          className="description"
          type="text"
          placeholder="Description"
          onChange={this.onInputChange} />
        <br />
        <label htmlFor="createdBy">Pick or enter your name</label>
        <input
          className="createdBy"
          type="text"
          placeholder="Name"
          onChange={this.onInputChange} />
        <br />
        <form onSubmit={this.onSubmit}>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default BillAdderForm;
