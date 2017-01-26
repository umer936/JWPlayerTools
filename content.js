var waitForVideo = setInterval(checkForElement, 150);

function checkForElement() {
    var videoElem = document.getElementsByTagName('video');
    if (videoElem.length) {
        clearInterval(waitForVideo);
        getVideo = videoElem[0];
    }
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.task == "caption") {
        for (index = 0; index < getVideo.textTracks[0].cues.length; ++index) {
            document.write(getVideo.textTracks[0].cues[index].text + " ");
        }
    } else if (request.task == "speed") {
        var newspeed = prompt("Current Speed: " + getVideo.playbackRate + "\nNew Speed: ");
        getVideo.playbackRate = newspeed;
    } else {
        // sendResponse({});
    } 
});