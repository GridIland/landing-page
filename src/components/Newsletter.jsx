import React from 'react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useTheme } from './Mode'

export default function Newsletter() {
  const { isDark } = useTheme()

  const container = isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
  const inputBase = 'w-full rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
  const inputLight = 'bg-white border border-gray-200 text-gray-900 placeholder-gray-500'
  const inputDark = 'bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400'
  const btn = isDark ? 'bg-indigo-500 hover:bg-indigo-400 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'
  const hint = isDark ? 'text-gray-400' : 'text-gray-600'

  return (
    <section className={`${container} py-12`}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Get our newsletter</h2>
            <p className={`mt-2 text-sm ${hint}`}>Join our mailing list to receive the latest updates and offers.</p>
          </div>

          <form
            className="mt-6 sm:mt-0 sm:ml-6 sm:flex sm:items-center"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="w-full sm:w-auto sm:flex-1">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className={`${inputBase} ${isDark ? inputDark : inputLight}`}
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 rounded-md font-medium ${btn}`}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <p className={`mt-4 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
