'use client'

import React, { useState } from 'react'

export default function Page() {
  const [file, setFile] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [driveLink, setDriveLink] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    setSubmitted(false)
    setDriveLink('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return alert('Please select a file first.')

    setUploading(true)

    const reader = new FileReader()
    reader.onload = async () => {
      const base64File = reader.result.split(',')[1]

      const payload = {
        file: base64File,
        filename: file.name,
        type: file.type,
      }

      try {
        const res = await fetch('https://script.google.com/macros/s/AKfycbyanBxEL7FPdeec1b9gnOIvv8MgM_zUPgt0IA4oZvo-Lp9PtROXNfJUh_voV-v10yTDIA/exec', {
          method: 'POST',
          body: JSON.stringify(payload),
          // No headers to avoid CORS preflight
        })

        const data = await res.json()
        setUploading(false)

        if (data.success) {
          setDriveLink(data.url)
          setSubmitted(true)
        } else {
          alert('Upload failed: ' + data.error)
        }
      } catch (err) {
        setUploading(false)
        alert('Error uploading file: ' + err.message)
      }
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4 text-black mt-3">
      <h1 className="text-xl font-bold">Upload Resume</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0 file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue text-white rounded hover:bg-blue disabled:opacity-50"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Submit'}
        </button>
      </form>

      {submitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          ✅ Submitted! <br />
          🔗 <a href={driveLink} target="_blank" rel="noopener noreferrer" className="text-blue underline">
            View File
          </a>
        </div>
      )}
    </div>
  )
}
