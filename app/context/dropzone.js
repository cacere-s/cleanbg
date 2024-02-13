'use client'
import { createContext, useState } from 'react'
import { IMAGE_STATUS } from '../const'
export const DropContext = createContext()

export function DropProvider ({ children }) {
  // In this context we will have the global variables

  const [imageStatus, setStatus] = useState(IMAGE_STATUS.READY)
  const [originalImage, setOriginal] = useState('')
  const [modifiedImage, setModified] = useState('')
  return (
    <DropContext.Provider value={{
      imageStatus,
      setStatus,
      originalImage,
      setOriginal,
      modifiedImage,
      setModified
    }}
    >
      {children}
    </DropContext.Provider>
  )
}
