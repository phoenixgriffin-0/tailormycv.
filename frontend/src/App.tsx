import { useState } from 'react'

export default function App() {
  const [file, setFile] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async () => {
    if (!file || !jobDescription) {
      alert('Please provide both a CV and a job description.')
      return
    }

    setStatus('Sending to backend...')
    
    // Prepare the data to send
    const formData = new FormData()
    formData.append('file', file)
    formData.append('job_description', jobDescription)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/tailor', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      console.log("Backend response:", data)
      setStatus(`Success! Backend received: ${data.filename}`)
    } catch (error) {
      console.error(error)
      setStatus('Error connecting to backend.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">TailorMyCV</h1>
        <p className="text-gray-600 mb-6 text-center">Upload your base CV and target job.</p>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Base CV (PDF)</label>
          <input 
            type="file" 
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
          <textarea 
            rows={4}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button 
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition mb-2"
        >
          Tailor My CV
        </button>
        
        {status && <p className="text-sm text-center text-blue-600 font-medium">{status}</p>}
      </div>
    </div>
  )
}