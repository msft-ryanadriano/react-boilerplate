import React from 'react'
import { useState } from 'react'
import { wrap } from 'comlink'
import './App.css'
import { runBigTask, runBigTaskAsync } from './utils/simulator'
import type { RunBigTaskWorker } from './utils/worker'

const App = () => {
  const [data, setData] = useState<string>()
  return (
    <div
      style={{
        backgroundColor: `${data === 'loading'} ? 'orange' : 'transparent'`,
      }}
    >
      <button
        onClick={() => {
          console.log('boop!')
        }}
      >
        Boop
      </button>
      <button
        onClick={async () => {
          setData('loading')
          const worker = new Worker(
            new URL('./utils/worker.ts', import.meta.url)
          )
          const service = wrap<RunBigTaskWorker>(worker)
          setData(await service.runBigTask(10))
        }}
      >
        Web Worker
      </button>
      <button
        onClick={() => {
          setData('loading')
          setData(runBigTask(10))
        }}
      >
        Main thread
      </button>
      <button
        onClick={async () => {
          setData('loading')
          setData(await runBigTaskAsync(10))
        }}
      >
        Promise
      </button>
      <span>{data}</span>
    </div>
  )
}

export default App
