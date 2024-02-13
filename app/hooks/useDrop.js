'use client'
import { useContext } from 'react'
import { DropContext } from '../context/dropzone'

export function useDrop () {
  const context = useContext(DropContext)

  if (context === undefined) {
    throw new Error('useDrop must be used with a DropProvider')
  }

  return context
}
