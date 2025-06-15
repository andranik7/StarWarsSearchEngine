// extraction de l'id à partir de l'url
const idExtractor = (url) => {
    let splited = url.split('/');
    const id = splited[splited.length - 1];
    return id;
}

export default idExtractor