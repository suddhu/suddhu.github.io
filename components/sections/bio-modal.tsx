'use client'
import React from 'react'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'

interface BioModalProps {
 isOpen: boolean
 onClose: () => void
 bioContent: React.ReactNode
}

export function BioModal({ isOpen, onClose, bioContent }: BioModalProps) {
 if (!isOpen) return null;

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
   onClick={onClose}
  >
   <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{
     type: 'spring',
     bounce: 0,
     duration: 0.3,
    }}
    className="relative max-w-2xl rounded-2xl p-6 ring-1 ring-zinc-200/50 dark:ring-zinc-800/50 ring-inset m-4 bg-[#FBFBF8] dark:bg-zinc-950"
    onClick={(e) => e.stopPropagation()}
   >
    <div className="space-y-4">
     <div className="flex items-center justify-between">
      <h3 className="press-start-2p-large text-zinc-900 dark:text-zinc-100">Bio</h3>
      <motion.button
       onClick={onClose}
       className="h-fit w-fit rounded-full bg-white dark:bg-zinc-800 p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
      >
       <XIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </motion.button>
     </div>
     <div className="text-black dark:text-zinc-300 leading-relaxed">
      {bioContent || <p>Loading...</p>}
     </div>
    </div>
   </motion.div>
  </motion.div>
 );
}
