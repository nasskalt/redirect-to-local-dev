document.getElementById('save').onclick = function (event) {
    let fromUrl = document.getElementById('fromUrl').value;
    let toUrl = document.getElementById('toUrl').value;

    chrome.storage.local.set({
        'settings': {
            'replace_from_url': fromUrl,
            'replace_to_url': toUrl,
        }
    });

    document.getElementById('success').style.display = 'block';
    setTimeout(function () {
        document.getElementById('success').style.display = 'none';
    }, 5000)
};

chrome.storage.local.get('settings', function (items) {
    let replaceFromUrl = items['settings']['replace_from_url'];
    let replaceToUrl = items['settings']['replace_to_url'];

    if (replaceFromUrl !== undefined) {
        document.getElementById('fromUrl').value = replaceFromUrl;
    }

    if(replaceToUrl !== undefined) {
        document.getElementById('toUrl').value = replaceToUrl;
    }
})
