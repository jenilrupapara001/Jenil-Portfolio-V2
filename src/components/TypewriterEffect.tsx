'use client'
import { useState, useEffect } from 'react'

export function TypewriterEffect({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.slice(0, currentText.length + 1))
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(word.slice(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="text-foreground/80">
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}
