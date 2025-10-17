import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "./Mode";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/src/assets/workcation-logo-indigo-400.svg"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <a
              href="#"
              className={`text-sm font-semibold leading-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark
                  ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel
            className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 ${
              isDark
                ? "bg-gray-900 ring-gray-100/10"
                : "bg-white ring-gray-900/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Workcation</span>
                <img
                  alt=""
                  src="/src/assets/workcation-logo-indigo-400.svg"
                  className="h-8 w-auto"
                />
              </a>
              <div className="flex gap-2">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg ${
                    isDark
                      ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`-m-2.5 rounded-md p-2.5 ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div
                className={`-my-6 divide-y ${
                  isDark ? "divide-white/10" : "divide-gray-500/10"
                }`}
              >
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        isDark
                          ? "text-white hover:bg-white/5"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${
                      isDark
                        ? "text-white hover:bg-white/5"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background Effects */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg"
              className="mx-auto h-50"
            />
          {/* Announcement Badge */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              className={`relative rounded-full px-3 py-1 text-sm leading-6 ${
                isDark
                  ? "text-gray-400 ring-white/10 hover:ring-white/20"
                  : "text-gray-600 ring-gray-900/10 hover:ring-gray-900/20"
              } ring-1`}
            >
              Announcing our next round of funding.{" "}
              <a
                href="#"
                className={`font-semibold ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center">
            
            <h1
              className={`text-4xl font-bold tracking-tight sm:text-6xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Work. Explore. Thrive.
            </h1>
            <p
              className={`mt-6 text-lg leading-8 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Workcation helps remote teams blend productive work with curated
              travel experiences, providing planning tools, logistics support,
              and insights to keep teams connected and energized.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isDark
                    ? "bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
                }`}
              >
                Get started
              </a>
              <a
                href="#"
                className={`text-sm font-semibold leading-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Background Effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Scroll indicator (animated arrow) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <button
            type="button"
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
            aria-label="Scroll down"
            className={`flex items-center justify-center h-12 w-12 rounded-full shadow-md ring-1 ${
              isDark
                ? "bg-gray-800 text-indigo-300 ring-white/10 hover:bg-gray-700"
                : "bg-white text-indigo-600 ring-gray-200 hover:bg-gray-50"
            }`}
          >
            <ChevronDownIcon
              className="h-6 w-6 animate-bounce mt-0.5"
              style={{ animationDuration: "2s" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
