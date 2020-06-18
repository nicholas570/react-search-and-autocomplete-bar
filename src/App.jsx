import React from 'react';
import './App.css';

import Contact from './Contact';
import Auto from './Auto';

const contacts = [
  { name: 'Bruce', ego: 'Batman' },
  { name: 'Barry', ego: 'Flash' },
  { name: 'Clark', ego: 'Superman' },
  { name: 'Diana', ego: 'Wonder Woman' },
  { name: 'Nicholas', ego: 'Capitaine' },
  { name: 'Arthur', ego: 'Aquaman' },
  { name: 'Hal', ego: 'Green Lantern' },
  { name: 'Victor', ego: 'Cyborg' },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }
  render() {
    const { search } = this.state;
    const filteredContacts = contacts
      .filter(
        (contact) =>
          contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
      .map((contact) => (
        <Contact key={contact.name} name={contact.name} ego={contact.ego} />
      ));

    return (
      <div className='App'>
        <h1>Custom AutoComplete React</h1>
        <div className='logo'></div>
        <div className='auto-container'>
          <Auto />
        </div>
        <h1>Search bar</h1>
        <input
          type='text'
          className='search'
          onChange={this.handleChange}
          value={search.toLowerCase()}
        />
        {filteredContacts}
      </div>
    );
  }
}

export default App;
