export const useApi = (path, options={}) => {  
  options.baseURL="https://tadbirkor-ayol.uz/services/platon-core/"
  return $fetch(path, { ...options})
}
