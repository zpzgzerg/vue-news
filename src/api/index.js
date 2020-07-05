import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

async function fetchNewsList() {
  try {
    return await axios.get(`${config.baseUrl}news/1.json`);
  } catch (e) {
    console.log(e)
  }
}

async function fetchAskList() {
  try {
    return await axios.get(`${config.baseUrl}ask/1.json`);
  } catch (e) {
    console.log(e)
  }
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (error) {
    console.log(error)
  }
}

async function fetchUserInfo(userName) {
  try {
    return await axios.get(`${config.baseUrl}user/${userName}.json`)
  } catch (e) {
    console.log(e)
  }
}

async function fetchItemInfo(id) {
  try {
    return await axios.get(`${config.baseUrl}item/${id}.json`)
  } catch (e) {
    console.log(e)
  }
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
}
