document.querySelector(".btnCalender").addEventListener("click", () => {


    chrome.windows.create({
        url: "https://calendar.google.com/calendar/u/0/r/week/2021/5/26",
        left: screen.width,
        width: (screen.width / 2)
    });
})




document.querySelector(".btnApplication").addEventListener("click", () => {

    chrome.tabs.query({ currentWindow: true }, function(tabs) {
        tabs.forEach(e => {
            e.active = true
            if (e.url == undefined) {
                e.url = "NaN"
            }
            if (e.url.includes("https://meet.google.com/")) {
                chrome.windows.create({

                    url: e.url,
                    left: 0,
                    width: (screen.width / 2)

                });

                chrome.tabs.remove(e.id, function() {});




            }

            console.log(e)

        })
    })
})

document.querySelector(".btnWindow").addEventListener("click", () => {

    chrome.windows.create({

        url: "https://stackoverflow.com/questions/28799892/how-to-launch-a-new-window-in-google-chrome-extension",
        left: 0,
        width: (screen.width / 2)

    }, callback);


    function callback(data) {

    }
})