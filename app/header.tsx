'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { EMAIL } from './data'

function ScramblingTitle({ children }: { children: string }) {
  const [displayText, setDisplayText] = useState(children)
  const [isHovering, setIsHovering] = useState(false)
  const [scrambleHistory, setScrambleHistory] = useState<string[]>([])
  const [isUnscrambling, setIsUnscrambling] = useState(false)

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  const changeOneLetter = (text: string) => {
    const textArray = text.split('')
    const randomIndex = Math.floor(Math.random() * textArray.length)
    const randomChar = characters.charAt(
      Math.floor(Math.random() * characters.length),
    )

    // Don't change spaces
    if (textArray[randomIndex] === ' ') {
      return text
    }

    textArray[randomIndex] = randomChar
    return textArray.join('')
  }

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(children)
      setScrambleHistory([])
      setIsUnscrambling(false)
      return
    }

    // Scrambling phase
    const scrambleInterval = setInterval(() => {
      setDisplayText((prev) => {
        const newText = changeOneLetter(prev)
        setScrambleHistory((history) => [...history, prev])
        return newText
      })
    }, 25)

    // After 0.5 seconds, start unscrambling
    const unscrambleTimeout = setTimeout(() => {
      setIsUnscrambling(true)
      clearInterval(scrambleInterval)
    }, 500)

    return () => {
      clearInterval(scrambleInterval)
      clearTimeout(unscrambleTimeout)
    }
  }, [isHovering, children])

  // Unscrambling effect
  useEffect(() => {
    if (!isUnscrambling || scrambleHistory.length === 0) return

    const unscrambleInterval = setInterval(() => {
      setScrambleHistory((history) => {
        if (history.length > 0) {
          const previousText = history[history.length - 1]
          setDisplayText(previousText)
          return history.slice(0, -1)
        } else {
          setDisplayText(children)
          setIsUnscrambling(false)
          setIsHovering(false)
          return []
        }
      })
    }, 25)

    return () => clearInterval(unscrambleInterval)
  }, [isUnscrambling, scrambleHistory, children])

  return (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="press-start-2p-large cursor-pointer text-black dark:text-zinc-100"
    >
      {displayText}
      <span className="animate-blink inline-block h-0.5 w-3 bg-black dark:bg-zinc-100"></span>
    </span>
  )
}

function EmailScrambler() {
  const [isScrambled, setIsScrambled] = useState(true)

  const emailUser = EMAIL.split('@')[0]
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  const generateRandomString = (length: number) => {
    return Array.from(Array(length), () =>
      characters.charAt(Math.floor(Math.random() * characters.length)),
    ).join('')
  }

  // Initialize with empty string to avoid hydration mismatch, then set random value on client
  const [displayUsername, setDisplayUsername] = useState('')
  const [isClient, setIsClient] = useState(false)

  // Set random value only on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true)
    setDisplayUsername(generateRandomString(emailUser.length))
  }, [])

  useEffect(() => {
    if (isScrambled) {
      setDisplayUsername(generateRandomString(emailUser.length))
    } else {
      let currentIndex = 0
      const animateUnscramble = () => {
        if (currentIndex <= emailUser.length) {
          const unscrambledPart = emailUser.slice(0, currentIndex)
          const scrambledPart = generateRandomString(
            emailUser.length - currentIndex,
          )
          setDisplayUsername(unscrambledPart + scrambledPart)
          currentIndex++
          setTimeout(animateUnscramble, 50)
        }
      }
      animateUnscramble()
    }
  }, [isScrambled, emailUser])

  return (
    <div className="text-left">
      <div
        className="press-start-2p cursor-pointer select-none"
        onClick={() => setIsScrambled(!isScrambled)}
      >
        <span className="press-start-2p text-black dark:text-zinc-200">
          {isClient ? displayUsername : '•'.repeat(emailUser.length)}
          <span className="text-[#0047FF] dark:text-[#3B82F6]"> [at] </span>
          {EMAIL.split('@')[1].split('.')[0]}
          <span className="text-[#0047FF] dark:text-[#3B82F6]"> [dot] </span>
          {EMAIL.split('.')[EMAIL.split('.').length - 1]}
        </span>
      </div>
      <div style={{ height: '5px' }}></div>
      {isScrambled && (
        <div
          className="cursor-pointer text-[8px] text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
          style={{
            fontFamily: 'var(--font-press-start-2p), cursive',
            fontSize: '8px',
          }}
          onClick={() => setIsScrambled(!isScrambled)}
        >
          (click to unscramble)
        </div>
      )}
      {!isScrambled && (
        <div
          className="text-[8px] text-transparent"
          style={{
            fontFamily: 'var(--font-press-start-2p), cursive',
            fontSize: '8px',
          }}
        >
          (click to unscramble)
        </div> // Placeholder for height
      )}
    </div>
  )
}

export function Header() {
  return (
    <>
      <div id="home" className="mb-6">
        <Image
          src="/profile.png"
          alt="Portrait of Sudharshan Suresh"
          className="mx-auto mb-4 rounded-2xl ring-1 ring-zinc-200 sm:float-left sm:mr-6 dark:ring-zinc-700"
          width={300}
          height={300}
          priority
        />
        <div className="space-y-2">
          <div>
            <ScramblingTitle>Sudharshan Suresh</ScramblingTitle>
          </div>
          <EmailScrambler />
          <p className="mt-4 text-lg text-black dark:text-zinc-200">
            I&apos;m a senior staff research scientist and technical lead at{' '}
            <a
              href="https://www.bostondynamics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
            >
              Boston Dynamics
            </a>{' '}
            on the{' '}
            <a
              href="https://www.bostondynamics.com/robots/atlas/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
            >
              Atlas
            </a>
            . I currently focus on training humanoid policies at scale with
            egocentric human data.
          </p>
          <p className="mt-4 text-lg text-black dark:text-zinc-200">
            I earned my Ph.D. in Robotics from{' '}
            <a
              href="https://www.cmu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
            >
              CMU
            </a>
            , while working as a visiting researcher at{' '}
            <a
              href="https://ai.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
            >
              FAIR
            </a>{' '}
            (Meta) on the dexterous manipulation team. My{' '}
            <a
              href="https://kilthub.cmu.edu/articles/thesis/Perception_amidst_interaction_spatial_AI_with_vision_and_touch_for_robot_manipulation/25316152?file=44750527"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
            >
              thesis
            </a>{' '}
            enabled robots to learn from vision and touch, see popular work like{' '}
            <a
              href="https://suddhu.github.io/neural-feels/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
            >
              NeuralFeels
            </a>{' '}
            and{' '}
            <a
              href="https://suddhu.github.io/midastouch-tactile/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
            >
              MidasTouch
            </a>
            .
          </p>
        </div>
        <div className="clear-both"></div>
      </div>
    </>
  )
}
