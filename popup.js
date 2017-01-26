document.addEventListener('DOMContentLoaded', function() {
    var playback = document.getElementById('playback');
    playback.addEventListener('click', function() {
        // var newspeed = prompt("Current Speed: " + getVideo.playbackRate + "\nNew Speed: ");
        // getVideo.playbackRate = newspeed;

        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                task: "speed"
            }, function(response) {
                alert(response.farewell);
            });
        });

    });

    // var captions = document.getElementById('captions');
    // captions.addEventListener('click', function() {
    //     // for (index = 0; index < getVideo.textTracks[0].cues.length; ++index) {
    //     // document.write(getVideo.textTracks[0].cues[index].text + " ");
    //     // }

    //     chrome.tabs.getSelected(null, function(tab) {
    //         chrome.tabs.sendRequest(tab.id, {
    //             task: "caption"
    //         }, function(response) {
    //             alert(response.farewell);
    //         });
    //     });
    // });
});