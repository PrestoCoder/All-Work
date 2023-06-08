function  download(url) {
    return new Promise((resolve, reject) => {
        if(url.split('.').pop() != 'mp4') {
            // Return here is important, as otherwise, it'll move to downloading.
            return reject("File ka extension sahi nahin hai");
        }
        console.log("Download start");
        setTimeout(() => {
            console.log("Download ho gai");
            resolve(url.split('/').pop());
        }, 3000);
    })
}

function compress(file) {
    return new Promise((resolve, reject) => {
        console.log("Compression starts");
        setTimeout(() => {
            let cfile = file.split('.')[0] + '.zip';
            console.log("Compression completed")
            resolve(cfile);
        }, 3000)
    })
}

function upload(file) {
    return new Promise((resolve, reject) => {
        console.log("Uploading starts");
        setTimeout(() => {
            let newUrl = 'https://anotherMovie.com/abc.mp4';
            console.log("Uploading completed :- ", newUrl)
        }, 3000)
    })
}

download('https://movies.com/singham.mp4')
    .then((file) => {
        console.log("Downloaded file", file);
        return file;
        // But the below again is like callback
        // compress(file).then(compressedFile)
    })
    .then(compress)
    .then(upload)
    .catch(err => console.log(err));
    // The catch is common for download, compress and upload.