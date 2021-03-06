import axios from 'axios'
import {
  UPDATE_KEY,
  GET_UPDATE_KEY,
  UPDATE_FORM,
  GET_UPDATE_FORM,
  UPDATE_INFO
}
  from './mutation-types'
export default {
  getData ({ commit, state }) {
    commit(GET_UPDATE_KEY, {key: 'loading', value: true})
    axios.get('/api/activity/index/detail?ano=' + state.aid).then((response) => {
      const data = response.data.data
      const code = response.data.code
      if (code === 0) {
        commit(GET_UPDATE_KEY, {key: 'loading', value: false})
        alert(response.data.msg)
      } else {
        commit(GET_UPDATE_KEY, {key: 'loading', value: false})
        commit(UPDATE_INFO, { data })
        commit(GET_UPDATE_KEY, {key: 'loaded', value: true})
      }
    })
  },
  [UPDATE_KEY] ({ commit }, { key, value }) {
    commit(GET_UPDATE_KEY, { key, value })
  },
  [UPDATE_FORM] ({ commit }, { key, value }) {
    commit(GET_UPDATE_FORM, { key, value })
  }
}
