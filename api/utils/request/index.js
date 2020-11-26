const axios = require('axios');

const Post = async (url, data) => {
  const payload = {
    OCXSchema: 'v1',
    OCXType: 'Request',
    OCXComponent: 'OCXData',
    OCXPayload: {
      ...data,
    },
  };
  const response = await axios.post(url, {
    ...payload,
  });
  return response.data.OCXPayload;
};

const Get = async (url) => {
  await axios.get(url);
};

const Patch = async (url, data) => {
  await axios.patch(url, data);
};

const Delete = async (url, data) => {
  const payload = {
    OCXSchema: 'v1',
    OCXType: 'Request',
    OCXComponent: 'OCXData',
    OCXPayload: {
      ...data,
    },
  };
  const response = await axios.post(url, {
    ...payload,
  });
  return response.data.OCXPayload;
};

module.exports = { Post, Get, Patch, Delete };
