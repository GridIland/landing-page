import React from "react";

export default function Footer() {
    return (
        <footer className=" text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Branding + brief */}
                    <div>
                        <a href="/" className="inline-flex items-center text-gray-900 dark:text-white text-xl font-semibold">
                            <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <rect width="24" height="24" rx="6" fill="#111827" />
                                <path d="M6 12h12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            BrandName
                        </a>
                        <p className="mt-3 text-sm text-gray-400 max-w-xs">
                            Small description about the product or company. Keep it concise and helpful to visitors.
                        </p>
                    </div>

                    {/* Navigation columns */}
                    <div className="md:col-span-1 grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-100">Product</h3>
                            <ul className="mt-4 space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-gray-900 dark:text-white ">Features</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:text-white ">Pricing</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:text-white ">Integrations</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:text-white ">Docs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-100">Company</h3>
                            <ul className="mt-4 space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-gray-900 dark:text-white ">About</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:text-white ">Blog</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:text-white ">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:text-white ">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100">Subscribe to our newsletter</h3>
                        <p className="mt-3 text-sm text-gray-400">Get the latest updates and offers.</p>
                        <form className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                type="submit"
                                className="mt-3 sm:mt-0 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-gray-900 dark:text-white  text-sm rounded-md"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-3 text-xs text-gray-500">No spam — unsubscribe at any time.</p>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
                    <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-white " aria-label="GitHub">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M12 2C7.58 2 4 5.58 4 10c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C17.71 16.54 20 13.54 20 10c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-white " aria-label="Twitter">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M22 5.92c-.66.29-1.36.48-2.1.57a3.66 3.66 0 001.6-2.02 7.3 7.3 0 01-2.32.89 3.63 3.63 0 00-6.18 3.31A10.3 10.3 0 013 4.87a3.63 3.63 0 001.12 4.84 3.6 3.6 0 01-1.65-.46v.05a3.63 3.63 0 002.9 3.56c-.4.11-.84.17-1.29.06a3.63 3.63 0 003.39 2.52A7.28 7.28 0 012 19.54a10.28 10.28 0 005.57 1.63c6.69 0 10.35-5.54 10.35-10.34v-.47A7.4 7.4 0 0022 5.92z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-white " aria-label="LinkedIn">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h4.99V24H0V8.99zM8.54 8.99h4.78v2.05h.07c.66-1.25 2.27-2.56 4.67-2.56 4.99 0 5.91 3.29 5.91 7.56V24h-5V16.4c0-1.82-.03-4.16-2.53-4.16-2.53 0-2.92 1.98-2.92 4.02V24H8.54V8.99z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}