import { request, config } from '../utils'

export async function getInTheaters (params) {
  return request({
    url: `/in_theaters`,
    method: 'get',
    data: params,
  })
}

export async function getMovie (id) {
  return request({
    url: `/subject/${id}`,
    method: 'get',
  })
}

export async function getCommingSoon (params) {
  return request({
    url: `/coming_soon`,
    method: 'get',
    data: params,
  })
}

export async function getRankList (type,params) {
  return request({
    url: `/${type}`,
    method: 'get',
    data: params,
  })
}

export async function getSearchResult (params) {
  return request({
    url: `/search`,
    method: 'get',
    data: params,
  })
}

export async function getCommentByMovie (params,id) {
  return request({
    url: `/subject/${id}/comments`,
    method: 'get',
    data: params,
  })
}