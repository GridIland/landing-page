import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useTheme } from './Mode'

export default function Example() {
  const { isDark } = useTheme()

  const inputBase =
    'block w-full rounded-md px-3.5 py-2 text-base placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500'
  const lightInput = 'bg-white border border-gray-200 text-slate-900 placeholder:text-gray-500'
  const darkInput = 'bg-slate-800 border border-slate-700 text-slate-200 placeholder:text-gray-400'

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className={`relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75 ${isDark ? 'opacity-30' : 'opacity-20'}`}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className={`text-4xl font-semibold tracking-tight sm:text-5xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Contact sales</h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-700'} mt-2 text-lg/8`}>Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={`block text-sm/6 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className={`${inputBase} ${isDark ? darkInput : lightInput}`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className={`block text-sm/6 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className={`${inputBase} ${isDark ? darkInput : lightInput}`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className={`block text-sm/6 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className={`${inputBase} ${isDark ? darkInput : lightInput}`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className={`block text-sm/6 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`${inputBase} ${isDark ? darkInput : lightInput}`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className={`block text-sm/6 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              Phone number
            </label>
            <div className="mt-2.5">
              <div className={`flex rounded-md has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-indigo-500 ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className={`col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base focus:outline-none ${isDark ? 'text-slate-200' : 'text-slate-700'}`}
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end ${isDark ? 'text-gray-300' : 'text-gray-400'} sm:size-4`}
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className={`block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base focus:outline-none ${isDark ? 'text-slate-200 placeholder:text-gray-400' : 'text-slate-900 placeholder:text-gray-500'} sm:text-sm/6`}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={`block text-sm/6 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${inputBase} ${isDark ? darkInput : lightInput}`}
                defaultValue={''}
              />
            </div>
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className={`group relative inline-flex w-8 shrink-0 rounded-full p-px inset-ring inset-ring-gray-200/40 outline-offset-2 transition-colors duration-200 ease-in-out ${isDark ? 'bg-white/5 inset-ring-white/10' : 'bg-gray-200'}`}>
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                />
              </div>
            </div>
            <label htmlFor="agree-to-policies" className={`${isDark ? 'text-gray-400' : 'text-gray-700'} text-sm/6`}>
              By selecting this, you agree to our{' '}
              <a href="#" className={`font-semibold whitespace-nowrap ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
