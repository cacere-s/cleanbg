'use client'
import { DropProvider } from '../../context/dropzone'
import { Status } from './Status'

export function ContextDrop () {
  return (
    <DropProvider>
      <Status />
    </DropProvider>

  )
}
