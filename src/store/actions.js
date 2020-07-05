import {fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchItemInfo} from '../api/index';

export default {
/*  FETCH_NEWS({commit}) {
    return fetchNewsList()
      .then(response => commit('SET_NEWS', response.data))
      .catch(error => console.log(error))
  },
  FETCH_ASK({commit}) {
    return fetchAskList()
      .then(response => commit('SET_ASK', response.data))
      .catch(error => console.log(error))
  },
  FETCH_JOBS({commit}) {
    return fetchJobsList()
      .then(response => commit('SET_JOBS', response.data))
      .catch(error => console.log(error))
  },
  FETCH_USER({commit}, name) {
    return fetchUserInfo(name)
      .then(({data}) => commit('SET_USER', data))
      .catch(error => console.log(error))
  },
  FETCH_ITEM({commit}, id) {
    return fetchItemInfo(id)
      .then(({data}) => commit('SET_ITEM', data))
      .catch(error => console.log(error))
  },
  FETCH_LIST({commit}, pageName) {
    return fetchList(pageName)
      .then(({data}) => commit('SET_LIST', data))
      .catch(error => console.log(error))
  }
  */
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_ASK(context) {
    const response = await fetchAskList();
    context.commit('SET_ASK', response.data);
    return response;
  },
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobsList();
      context.commit('SET_JOBS', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },
  async FETCH_USER(context, name) {
    const response = await fetchUserInfo(name);
    context.commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM(context, id) {
    const response = await fetchItemInfo(id);
    context.commit('SET_ITEM', response.data);
    return response;
  },
  async FETCH_LIST(context, pageName) {
    const response = await fetchList(pageName);
    context.commit('SET_LIST', response.data);
    return response;
  }
}
