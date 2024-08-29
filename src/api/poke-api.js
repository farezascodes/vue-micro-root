import service from '@/utils/request'

export function fetchListPoke() {
  return service({
    url: 'pokemon/ditto',
    method: 'get',
  })
}