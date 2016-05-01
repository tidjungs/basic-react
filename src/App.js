import React from 'react'
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [
    {
        id: 1,
        name: 'Tidjungsssss',
        phone: '111 222 333'
    },

    {
        id: 2,
        name: 'aaaaa',
        phone: '222 222 333'
    },

    {
        id: 3,
        name: 'bbbbbb',
        phone: '333 222 333'
    },

    {
        id: 4,
        name: 'cccccc',
        phone: '444 222 333'
    }
]

class App extends React.Component {
    render() {
        return (
            <div>
                <h1> Contacts List </h1>
                <ContactsList contacts={this.props.contacts} />
            </div>      
        )
    }
}

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('app'));

