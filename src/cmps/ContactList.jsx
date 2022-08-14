import React from 'react'
import {ContactPreview} from './ContactPreview.jsx'

export function ContactList({ contacts, onSelectContactId }) {
    return (
        <div className='contact-list simple-cards-grid'>
            {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} onSelectContactId={onSelectContactId} />)}
        </div>
    )
}