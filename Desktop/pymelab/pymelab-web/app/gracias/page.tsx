'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export default function GraciasPage() {
  const { t } = useLang()

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C8A96E]/5 blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Check icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 border border-[#C8A96E]/40 flex items-center justify-center mx-auto mb-8"
        >
          <Check size={32} className="text-[#C8A96E]" />
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h1
            className="font-display text-5xl md:text-7xl font-light italic text-[#F0EDE8]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {t('thanks.h1')}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#666] text-lg mb-10 font-light leading-relaxed"
        >
          {t('thanks.sub')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group"
          >
            {t('thanks.back')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
