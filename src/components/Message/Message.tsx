import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

const Message: React.FC<Props> = ({ username, text }: InferProps<typeof Message.propTypes>) => (
   <div className="message">
      <div className="message-username">{username}</div>
      <div className="message-text">{text}</div>
   </div>
)

Message.propTypes = {
   username: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired
}

interface Props {
   username: string
   text: string
}

export default Message
