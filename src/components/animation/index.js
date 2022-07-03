import React from 'react'
import { useSpring, animated as a } from 'react-spring'

const SlideIn = ({ from, children }) => {
  const animatedProps = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { transform: from === 'right' ? 'translateX(60%)' :  'translateX(-30%)'},
    config: { mass: 1, tension: 5, friction: 10, duration: 400 },
  })
  return <a.div style={{ ...animatedProps }}>{children}</a.div>
}

export default SlideIn
