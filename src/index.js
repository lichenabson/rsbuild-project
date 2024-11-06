
import { useEffect } from 'react'

const testA = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
  console.log('test')
}

console.log('useEffect', useEffect)

testA()
