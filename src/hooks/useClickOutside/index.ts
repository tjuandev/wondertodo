import { useCallback, useEffect, useRef } from 'react'

import { UseClickOutsideProps } from './types'

export default function useClickOutside({ onClick }: UseClickOutsideProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        return onClick()
      }
      return false
    },
    [ref, onClick]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return ref
}
