document.onkeydown = function (event) {
    if (event.ctrlKey && event.which === 66) {
        chrome.storage.local.get('settings', function (items) {
            let replaceFromUrl = items['settings']['replace_from_url'];
            let replaceToUrl = items['settings']['replace_to_url'];

            let hoveredLink = document.querySelector('a:hover');

            if (hoveredLink === null) {
                chrome.storage.local.get('savedUrl', function (items) {
                    if (items === {}) {
                        return;
                    }

                    if (window.location.hostname === 'localhost') {
                        window.open(items['savedUrl'], '_self');
                        return;
                    }

                    window.open(items['savedUrl']);
                });

                return;
            }

            let pageUrl = hoveredLink.href;
            let localDevUrl = pageUrl.replace(replaceFromUrl, replaceToUrl);

            chrome.storage.local.set({'savedUrl': localDevUrl});

            window.open(localDevUrl);
        })
    }
};
