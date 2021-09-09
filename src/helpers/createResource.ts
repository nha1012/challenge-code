export const createResource = (promise) => {
  let status = 'pending';
  let result = promise.then(
    (resolved: any) => {
      status = 'success'
      result = resolved
    },
    (rejected: any) => {
      status = 'error'
      result = rejected
    },
  )
  return {
    read() {
      if (status === 'pending') throw result
      if (status === 'error') throw result
      if (status === 'success') return result.data[0]
      throw new Error('This should be impossible')
    },
  }
}
