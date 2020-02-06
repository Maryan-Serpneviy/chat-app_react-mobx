import React from 'react'
import styles from './RoomsList.module.scss'

interface Rooms {
   rooms: object
}

const RoomsList: React.FC<Rooms> = ({ rooms }) => {
   return (
      <div className={styles.wrapper}>
         <ul className={styles.list}>
            <h3 className={styles.heading}>Your rooms:</h3>
            {rooms ? rooms.map(room => (
               <li key={room.id} className={styles.item}>
                  <a href="#" className={styles.link}># {room.name}</a>
               </li>
            )) : null}
         </ul>
      </div>
   )
}

export default RoomsList
