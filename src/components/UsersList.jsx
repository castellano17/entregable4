import React from 'react'
import UserCard from './UserCard'

const UsersList = ({ users }) => {
    return (
        <section>
            {
                users.map(user => <UserCard key={user.id} user={user} />)
            }
        </section>
    )
}

export default UsersList