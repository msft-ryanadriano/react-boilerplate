const bigTask = (num: number) => {
  const sum = new Array(num)
    .fill(0)
    .map((el, idx) => el + idx)
    .reduce((sum, el) => sum + el, 0)

  console.log(sum)
}

export const runBigTask = (num: number): string => {
  bigTask(num)
  return '🎉 done'
}

export const runBigTaskAsync = async (num: number): Promise<string> => {
  bigTask(num)
  return '🎉 done'
}
