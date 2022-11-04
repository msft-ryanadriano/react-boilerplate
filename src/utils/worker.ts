import { expose } from 'comlink'
import { runBigTask } from './simulator'

const worker = {
  runBigTask,
}

export type RunBigTaskWorker = typeof worker

expose(worker)
