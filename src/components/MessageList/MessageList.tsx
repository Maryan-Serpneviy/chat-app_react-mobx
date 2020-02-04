import React from 'react'

const FISH_DATA = [
   {
      user: 'Marian',
      text: 'Hi. How are you today?'
   },
   {
      user: 'Some girl',
      text: 'Great! Weather is excellent!'
   },
   {
      user: 'Marian',
      text: 'Wanna drink some tea or whatever?'
   },
   {
      user: 'Some girl',
      text: 'Sure why not'
   }
]

export default function MessageList(props) {
   return (
      <div className="message-list">
         {FISH_DATA.map((message, index) => {
            return (
               <div key={index} className="message">
                     <div className="message-username">{message.user}</div>
                     <div className="message-text">{message.text}</div>
               </div>
            )
         })}
      </div>
   )
}
