import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom'
import { withStore } from '~hoc/withStore'
import styles from './RoomsList.module.scss'

const RoomsList: React.FC<Props> = ({ rooms, ...props }: InferProps<typeof RoomsList.propTypes>) => (
   <div className={styles.rooms}>
      <ul>
         <h3 className={styles.heading}>Your rooms:</h3>
         {rooms ? rooms.map(room => (
            <li key={room.id} className={styles.room}>
               <NavLink
                  activeClassName={styles.active}
                  onClick={() => props.store.main.subscribeToRoom(room.id)}
                  to={room.name}
                  className={styles.link}
               ># {room.name}</NavLink>
            </li>
         )) : null}
      </ul>
   </div>
)

interface Props {
   rooms: object[]
}

RoomsList.propTypes = {
   rooms: PropTypes.array.isRequired
}

export default withStore(withRouter(RoomsList))
