import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {contactService} from '../services/contactService'
import {ContactFilter} from '../cmps/ContactFilter.jsx'
import {ContactList} from '../cmps/ContactList.jsx'
// import {DetailsPage} from '../pages/DetailsPage.jsx'


export default class ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }


    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <div className='contact-app'>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <Link to="/contact/edit/">Add Contact</Link>
                <ContactList onRemoveContact={this.onRemoveContact} contacts={contacts} />
            </div>
        )
    }
}
