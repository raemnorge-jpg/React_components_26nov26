import { PhoneCall } from 'lucide-react'
import { MessageCircleText } from 'lucide-react'
import React from 'react'
import './Head.css'

const Head = () => {
  return (
    <>
        <div>
            <PhoneCall size={16} color="#00e3ff" />
            <MessageCircleText size={16} color="#00e3ff" />
        </div>
    </>
  )
}

export default Head
