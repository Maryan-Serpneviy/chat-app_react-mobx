import React, { useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { withStore } from '~hoc/withStore'
import styles from './RoomsList.module.scss'

interface Rooms {
   rooms: object
}

const RoomsList: React.FC<Rooms> = ({ rooms, ...props }) => (
   <div className={styles.rooms}>
      <ul>
         <h3 className={styles.heading}>Your rooms:</h3>
         {rooms ? rooms.map(room => (
            <li key={room.id} className={styles.room}>
               <NavLink
                  activeClassName={styles.active}
                  onClick={() => props.store.main.joinRoom(room.id)}
                  to={room.name}
                  className={styles.link}
               ># {room.name}</NavLink>
            </li>
         )) : null}
      </ul>
   </div>
)

export default withStore(withRouter(RoomsList))
