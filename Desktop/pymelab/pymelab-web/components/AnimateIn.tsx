'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode, useState, useEffect } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [mobile, setMobile] = useState(false)
  const inView = useInView(ref, { once, margin: '0px 0px -10% 0px' })

  useEffect(() => {
    setMobile(window.innerWidth < 768)
  }, [])

  /* On mobile: no animation, instant visible */
  if (mobile) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
