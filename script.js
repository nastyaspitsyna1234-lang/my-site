function createURL(data) {
    const json = JSON.stringify(data);
    const encoded = btoa(json);
    return location.origin + "/index.html#data=" + encoded;
}

function readFromURL() {
    const hash = location.hash.replace("#data=", "");
    const json = atob(hash);
    return JSON.parse(json);
}