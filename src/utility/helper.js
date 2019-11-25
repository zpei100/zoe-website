const getUrl = url => `url(${url})`;

const getAssetFromStatic = url => `/assets/images/${url}`;

module.exports = { getUrl, getAssetFromStatic }