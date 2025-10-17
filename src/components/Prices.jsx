import { CheckIcon } from '@heroicons/react/20/solid'
import { useTheme } from './Mode'

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { isDark } = useTheme()

  return (
    <div className={classNames('relative isolate px-6 py-24 sm:py-32 lg:px-8', isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900')}>
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className={classNames('mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20', isDark ? 'opacity-25' : 'opacity-20')}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">Pricing</h2>
        <p className={classNames('mt-2 text-5xl font-semibold tracking-tight sm:text-6xl', isDark ? 'text-white' : 'text-gray-900')}>
          Choose the right plan for you
        </p>
      </div>

      <p className={classNames('mx-auto mt-6 max-w-2xl text-center text-lg font-medium sm:text-xl/8', isDark ? 'text-gray-300' : 'text-gray-400')}>
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-start gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => {
          const featured = tier.featured
          const baseCard = 'rounded-3xl p-8 sm:p-10 transition-transform'
          const featuredLift = 'relative z-20 lg:-translate-y-6'
          const bgCard = featured
            ? (isDark
                ? 'bg-gray-800 text-white ring-1 ring-white/10 shadow-2xl'
                : 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 shadow-lg')
            : (isDark ? 'bg-gray-900 text-gray-200 ring-1 ring-white/10' : 'bg-white text-gray-900 ring-1 ring-gray-900/5')

          return (
            <div
              key={tier.id}
              className={classNames(
                baseCard,
                bgCard,
                featured ? featuredLift : '',
                tier.featured
                  ? ''
                  : tierIdx === 0
                    ? 'sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none'
              )}
            >
              <h3 id={tier.id} className={classNames('text-base/7 font-semibold', featured ? (isDark ? 'text-indigo-200' : 'text-indigo-700') : 'text-indigo-400')}>
                {tier.name}
              </h3>

              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight">{tier.priceMonthly}</span>
                <span className="text-base">{'/month'}</span>
              </p>

              <p className={classNames('mt-6 text-base/7', isDark ? 'text-gray-300' : (featured ? 'text-indigo-700/90' : 'text-gray-600'))}>
                {tier.description}
              </p>

              <ul role="list" className={classNames('mt-8 space-y-3 text-sm/6 sm:mt-10', isDark ? 'text-gray-300' : 'text-gray-600')}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                  featured
                    ? (isDark ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500' : 'bg-indigo-600 text-white hover:bg-indigo-500')
                    : (isDark ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-white text-gray-900 hover:bg-gray-50')
                )}
              >
                Get started today
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
