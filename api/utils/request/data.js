const addEntity =  () => ({
    method: 'post',
    url: `http://localhost:${process.env.OCX_PORT_DATA}/table/create`
});

const insertEntity = () => ({
    method: 'post',
    url: `http://localhost:${process.env.OCX_PORT_DATA}/query/create` 
});

const removeEntity = () => ({
    method: 'delete',
    url: `http://localhost:${process.env.OCX_PORT_DATA}/query/delete`
});

const rollback = () => ({
    method: 'post',
    url: `http://localhost:${process.env.OCX_PORT_DATA}/setup`
});

const searchEntity = () => ({
    method: 'get',
    url: `http://localhost:${process.env.OCX_PORT_DATA}/query/retrieve` 
});

module.exports = {addEntity, insertEntity, removeEntity, rollback, searchEntity};