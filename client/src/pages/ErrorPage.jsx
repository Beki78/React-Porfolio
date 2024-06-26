import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <main className="grid min-h-full place-items-center bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-cyan-300">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-cyan-500 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-cyan-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
             to="/"
              className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-500 hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
           
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage
