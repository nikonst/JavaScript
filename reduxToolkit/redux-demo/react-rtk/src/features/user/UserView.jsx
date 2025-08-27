import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h2>List of Users</h2>
      <p>
        {user.isLoading && <p>Loading...</p>}
        {!user.isLoading && user.error ? <p>Error...</p> : null}
        {!user.isLoading && !user.error && user.users.length > 0
          ? <p><u>{user.users.map(u =>
            <li key={u.id}>{u.id}{u.name}</li>
          )}</u></p>
          : null
        }
      </p>
    </div>
  )
}

