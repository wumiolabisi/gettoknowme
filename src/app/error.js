'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='p-24'>
            <h2 className="uppercase md:text-6xl text-3xl font-bold mb-2 text-violet-900 text-center">Oups ! Une erreur est survenue.</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Retenter
            </button>
        </div>
    )
}