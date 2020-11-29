const addEntity = () => ({
  method: 'post',
  url: `${process.env.OCX_HOST_DATA}/table/create`,
});

const insertEntity = () => ({
  method: 'post',
  url: `${process.env.OCX_HOST_DATA}/query/create`,
});

const removeEntity = () => ({
  method: 'delete',
  url: `${process.env.OCX_HOST_DATA}/query/delete`,
});

const rollback = () => ({
  method: 'post',
  url: `${process.env.OCX_HOST_DATA}/setup`,
});

const searchEntity = () => ({
  method: 'get',
  url: `${process.env.OCX_HOST_DATA}/query/retrieve`,
});

module.exports = {
  addEntity,
  insertEntity,
  removeEntity,
  rollback,
  searchEntity,
};
