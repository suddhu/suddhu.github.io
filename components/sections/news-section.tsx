'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/constants'

export function NewsSection() {
  const [showAllUpdates, setShowAllUpdates] = useState(false)

  return (
    <motion.section
      id="news"
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <h3
        className="mb-5 text-2xl font-medium text-zinc-900 dark:text-zinc-100"
        style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}
      >
        News
      </h3>
      <div className="space-y-1">
        <div className="grid grid-cols-1 gap-1">
          {/* Year divider */}
          <div className="flex items-center gap-4 py-1">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-500 dark:text-zinc-400">
              2026 ↓
            </div>
            <div className="flex-1 border-t border-zinc-300 dark:border-zinc-700"></div>
          </div>

          <div className="flex gap-4 py-0.5">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Mar
            </div>
            <div className="flex-1 text-lg text-black dark:text-zinc-300">
              I was promoted to senior staff RS! I lead a team that trains robot
              policies from human data.
            </div>
          </div>

          <div className="flex gap-4 py-0.5">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Jan
            </div>
            <div className="flex-1 text-lg text-black dark:text-zinc-300">
              I wrote a{' '}
              <a
                href="https://www.science.org/eprint/BZ4KZXTIXXSEW43ZAAF5/full?activationRedirect=/doi/full/10.1126/scirobotics.aee5782"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                focus article
              </a>{' '}
              for Science Robotics about Robot Dexterity, have a read!
            </div>
          </div>

          {/* Year divider */}
          <div className="flex items-center gap-4 py-1">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-500 dark:text-zinc-400">
              2025 ↓
            </div>
            <div className="flex-1 border-t border-zinc-300 dark:border-zinc-700"></div>
          </div>

          <div className="flex gap-4 py-0.5">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Jun
            </div>
            <div className="flex-1 text-lg text-black dark:text-zinc-300">
              I did a deep-dive into our whole-body manipulation and vision
              stack at the{' '}
              <a
                href="https://dex-manipulation.github.io/rss2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                RSS Dexterous Manipulation Workshop
              </a>
              , link to the invited talk{' '}
              <a
                href="https://youtu.be/7a5HYjQ4wJo?si=E3kdseb2sUG0MvXL&t=2442"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                here
              </a>
              .
            </div>
          </div>

          <div className="flex gap-4 py-0.5">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              May
            </div>
            <div className="flex-1 text-lg text-black dark:text-zinc-300">
              I&apos;m a featured interview in our team&apos;s{' '}
              <a
                href="https://youtu.be/oe1dke3Cf7I?si=h1efM6LhF7iPMxO"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                video release
              </a>{' '}
              and a contributing author to the accompanying{' '}
              <a
                href="https://bostondynamics.com/blog/making-atlas-see-the-world/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                blogpost
              </a>
            </div>
          </div>

          <div className="flex gap-4 py-0.5">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              May
            </div>
            <div className="flex-1 text-lg text-black dark:text-zinc-300">
              Selected to be part of the{' '}
              <a
                href="https://sites.google.com/view/rsspioneers2025/participants?authuser=0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                RSS Pioneers Workshop
              </a>
              , one of 33 PhD and early-career industry researchers.
            </div>
          </div>

          {/* Year divider */}
          <div className="flex items-center gap-4 py-1">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-500 dark:text-zinc-400">
              2024 ↓
            </div>
            <div className="flex-1 border-t border-zinc-300 dark:border-zinc-700"></div>
          </div>

          <div className="flex gap-4 py-0.5">
            <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Nov
            </div>
            <div className="flex-1 text-lg text-black dark:text-zinc-300">
              NeuralFeels is{' '}
              <a
                href="https://www.science.org/stoken/author-tokens/ST-2331/full"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                published in Science Robotics
              </a>{' '}
              and featured as{' '}
              <a
                href="https://www.science.org/toc/scirobotics/9/96"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                cover of November issue
              </a>{' '}
              (
              <a
                href="https://www.ri.cmu.edu/cmu-and-partners-redefine-robotic-perception-with-neuralfeels/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
              >
                spotlight article
              </a>
              ).
            </div>
          </div>
        </div>

        {/* Fade out effect and expand button */}
        {!showAllUpdates && (
          <div className="relative">
            {/* Preview of first hidden update */}
            <div className="pointer-events-none" style={{ opacity: 0.8 }}>
              <div className="flex gap-4 py-0.5">
                <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Oct
                </div>
                <div className="flex-1 text-lg text-black dark:text-zinc-300">
                  My work on Atlas was{' '}
                  <a
                    href="https://youtu.be/F_7IPm7f1vI?si=woSN8Jax0F6XK_P3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                  >
                    featured in their autonomous demo
                  </a>{' '}
                  (
                  <a
                    href="https://spectrum.ieee.org/boston-dynamics-new-atlas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                  >
                    IEEE
                  </a>
                  ,{' '}
                  <a
                    href="https://techcrunch.com/2024/10/30/boston-dynamics-electric-atlas-humanoid-executes-autonomous-automotive-parts-picking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                  >
                    TechCrunch
                  </a>
                  ,{' '}
                  <a
                    href="https://www.theverge.com/2024/10/30/24283592/boston-dynamics-atlas-robot-autonomous"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                  >
                    Verge
                  </a>
                  ).
                </div>
              </div>
            </div>

            {/* Fade out gradient overlay */}
            <div
              className="pointer-events-none absolute right-0 bottom-0 left-0 bg-gradient-to-t from-[#FBFBF8] via-[#FBFBF8] to-transparent dark:from-zinc-950 dark:via-zinc-950"
              style={{ height: '80px' }}
            ></div>

            <div className="mt-4 flex justify-center">
              <motion.button
                onClick={() => setShowAllUpdates(true)}
                className="group relative inline-flex items-center gap-2 border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs text-black transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>[more]</span>
                <ChevronDownIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-y-0.5" />
              </motion.button>
            </div>
          </div>
        )}
      </div>

      {/* Expanded updates section */}
      {showAllUpdates && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 space-y-1"
        >
          <div className="grid grid-cols-1 gap-1">
            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Oct
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                My work on Atlas was{' '}
                <a
                  href="https://youtu.be/F_7IPm7f1vI?si=woSN8Jax0F6XK_P3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  featured in their autonomous demo
                </a>{' '}
                (
                <a
                  href="https://spectrum.ieee.org/boston-dynamics-new-atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  IEEE
                </a>
                ,{' '}
                <a
                  href="https://techcrunch.com/2024/10/30/boston-dynamics-electric-atlas-humanoid-executes-autonomous-automotive-parts-picking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  TechCrunch
                </a>
                ,{' '}
                <a
                  href="https://www.theverge.com/2024/10/30/24283592/boston-dynamics-atlas-robot-autonomous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  Verge
                </a>
                ).
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Mar
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                I&apos;ve moved to Greater Boston, to work with the Atlas team
                at Boston Dynamics (
                <a
                  href="https://www.youtube.com/watch?v=29ECwExc-_M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  hello
                </a>
                ).
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Feb
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                I&apos;ve defended my Ph.D., here&apos;s my{' '}
                <a
                  href="https://www.youtube.com/watch?v=9v-bmXGAxVc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  talk
                </a>{' '}
                and{' '}
                <a
                  href="https://kilthub.cmu.edu/articles/thesis/Perception_amidst_interaction_spatial_AI_with_vision_and_touch_for_robot_manipulation/25316152?file=44750527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  thesis
                </a>
                !
              </div>
            </div>

            {/* Year divider */}
            <div className="flex items-center gap-4 py-1">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-500 dark:text-zinc-400">
                2023 ↓
              </div>
              <div className="flex-1 border-t border-zinc-300 dark:border-zinc-700"></div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Dec
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                The pre-print for NeuralFeels is out, read it{' '}
                <a
                  href="https://arxiv.org/abs/2312.13469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  here
                </a>
                .
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Aug
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                Our work{' '}
                <a
                  href="https://haozhi.io/rotateit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  RotateIt
                </a>
                , led by{' '}
                <a
                  href="https://haozhi.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  Haozhi
                </a>
                , was accepted to{' '}
                <a
                  href="https://www.corl2023.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  CoRL 2023
                </a>
                .
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Apr
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                Spending the summer as a research scientist intern at{' '}
                <a
                  href="https://ai.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  FAIR
                </a>{' '}
                Menlo Park on visuo-tactile manipulation!
              </div>
            </div>

            {/* Year divider */}
            <div className="flex items-center gap-4 py-1">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-500 dark:text-zinc-400">
                2022 ↓
              </div>
              <div className="flex-1 border-t border-zinc-300 dark:border-zinc-700"></div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Dec
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                <a
                  href="https://suddhu.github.io/midastouch-tactile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  MidasTouch
                </a>{' '}
                was showcased at{' '}
                <a
                  href="https://corl2022.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  CoRL 2022
                </a>{' '}
                with a{' '}
                <a
                  href="data/media/midastouch/midastouch_demo.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  live demo
                </a>
                .
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Oct
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                Successfully passed my{' '}
                <a
                  href="https://www.ri.cmu.edu/event/tactile-slam-perception-for-dexterity-via-vision-based-touch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  Ph.D. thesis proposal
                </a>
                !
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Sep
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                <a
                  href="https://suddhu.github.io/midastouch-tactile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  MidasTouch
                </a>{' '}
                was accepted to{' '}
                <a
                  href="https://corl2022.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  CoRL 2022
                </a>{' '}
                as an oral.
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Aug
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                We&apos;ve extended{' '}
                <a
                  href="https://joeaortiz.github.io/iSDF/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  iSDF
                </a>{' '}
                for neural mapping with the Franka robot, code{' '}
                <a
                  href="https://github.com/facebookresearch/iSDF#3-running-isdf-with-a-franka-and-live-camera-in-ros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  here
                </a>
                .
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Apr
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                Spending the summer at{' '}
                <a
                  href="https://ai.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  FAIR
                </a>{' '}
                Pittsburgh working on pose tracking from touch
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Jan
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                <a
                  href="https://arxiv.org/abs/2109.09884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  ShapeMap 3-D
                </a>{' '}
                was accepted to ICRA 2022, with an open-source{' '}
                <a
                  href="https://github.com/rpl-cmu/shape-map-3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  implementation
                </a>
                .
              </div>
            </div>

            {/* Year divider */}
            <div className="flex items-center gap-4 py-1">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-500 dark:text-zinc-400">
                2021 ↓
              </div>
              <div className="flex-1 border-t border-zinc-300 dark:border-zinc-700"></div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Aug
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                Presented at the Tartan SLAM series on our working on perception
                for planar pushing, video{' '}
                <a
                  href="https://www.youtube.com/watch?v=IjuTxa8andk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  here
                </a>
                .
              </div>
            </div>

            <div className="flex gap-4 py-0.5">
              <div className="w-16 flex-shrink-0 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                May
              </div>
              <div className="flex-1 text-lg text-black dark:text-zinc-300">
                <a
                  href="https://suddhu.github.io/tactile-slam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 dark:decoration-zinc-600"
                >
                  Tactile SLAM
                </a>{' '}
                was the ICRA 2021 best paper in service robotics finalist!
              </div>
            </div>
          </div>

          {/* Less button for expanded updates */}
          <div className="mt-6 flex justify-center">
            <motion.button
              onClick={() => setShowAllUpdates(false)}
              className="group relative inline-flex items-center gap-2 border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs text-black transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>[less]</span>
              <ChevronUpIcon className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.section>
  )
}
