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
  console.log(payload);
  const response = await axios.post(url, {
    ...payload,
  });
  return response.data.OCXPayload;
};

const Get = async (url, data) => {
  const payload = {
    OCXSchema: 'v1',
    OCXType: 'Request',
    OCXComponent: 'OCXData',
    OCXPayload: {
      ...data,
    },
  };
  console.log(payload);
  const response = await axios.get(url, {
    ...payload,
  });
  return response.data.OCXPayload;
};

const Patch = async (url, data) => {
  const payload = {
    OCXSchema: 'v1',
    OCXType: 'Request',
    OCXComponent: 'OCXData',
    OCXPayload: {
      ...data,
    },
  };
  const response = await axios.patch(url, {
    ...payload,
  });
  return response.data.OCXPayload;
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
  const response = await axios.delete(url, {
    ...payload,
  });
  return response.data.OCXPayload;
};

module.exports = { Post, Get, Patch, Delete };
