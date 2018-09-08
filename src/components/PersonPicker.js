import React from 'react';
import { connect } from 'react-redux';

import CreatableSelect from 'react-select/lib/Creatable';

export class PersonPicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      people: this.props.people ? this.props.people.map((person) => { return person.name }) : '',
      guarantorSelection: props.guarantorSelection ? props.guarantorSelection : false,
      isNewGuarantor: false
    }
  }
  onGuarantorSelection = (selection) => {
    if (selection) {
      this.setState(() => ({
        guarantorSelection: selection
      }))
    }
    else {
      this.setState(() => ({
        guarantorSelection: false
      }))
    }
    this.props.onGuarantorSelection
      ? this.props.onGuarantorSelection(selection)
      : undefined;
  }
  render() {
    const activeGuarantorSelection = this.props.guarantorSelection;
    const activePeopleList = this.props.people.map((person) => { return person.name });
    return (
      <div>
        <label htmlFor="person-input">Who owes this?</label>
        <CreatableSelect
          label="person-input"
          isClearable
          className="person-input"
          onChange={this.onGuarantorSelection}
          options={activePeopleList}
          value={activeGuarantorSelection}
          placeholder="Select or type to add"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  people: state.people
})
// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(PersonPicker)

// export default PersonPicker;
