import React from 'react'
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = {
    name: 'Tidjungsssss',
    phone: '111 222 333'
}

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

