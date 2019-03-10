import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': 'Edward',
    'birthday': '999999',
    'gender': 'Male',
    'job': 'Student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': 'Tony',
    'birthday': '888888',
    'gender': 'Male',
    'job': 'Architect'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': 'Kang',
    'birthday': '777777',
    'gender': 'Female',
    'job': 'HouseKeeper'
  }
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                name={c.name}
                image={c.image}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
