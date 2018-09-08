import React from 'react';
import CurrencyFormat from 'react-currency-format';

import PersonPicker from './PersonPicker';

export class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      amount: '',
      error: ''
    }
  }
  onValueChange = ({ value }) => {
    this.setState(() => ({ amount: value }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };
  onGuarantorSelection = (guarantor) => {
    this.setState(() => ({
      guarantorSelection: guarantor
    }))
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount || !this.state.guarantorSelection) {
      this.setState({
        error: 'Please fill out all required fields'
      });
    }
    else {
      this.setState({ error: '' });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        guarantor: this.state.guarantorSelection.value,
        guarantorSelection: this.state.guarantorSelection
      })
    }
    this.setState({
      description: '',
      amount: '',
      error: '',
      guarantor: '',
      guarantorSelection: false
    })
  };

  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <CurrencyFormat
            className="text-input"
            thousandSeparator={true}
            prefix={'$'}
            placeholder="How much is it?"
            value={this.state.amount}
            onValueChange={this.onValueChange} />
          <br />
          <PersonPicker
            onGuarantorSelection={this.onGuarantorSelection}
            guarantorSelection={this.state.guarantorSelection} />
          <button>Add Row</button>
        </form>
      </div>
    );
  }
};

export default TransactionForm;
