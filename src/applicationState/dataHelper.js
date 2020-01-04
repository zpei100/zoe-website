const getUrl = url => `url(${url})`;

const getImageAssetFromStatic = url => `/assets/images/${url}`;
const getVideoAssetFromStatic = url => `/assets/videos/${url}`;

module.exports = {getUrl, getImageAssetFromStatic, getVideoAssetFromStatic}
