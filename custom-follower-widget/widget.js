
let totalEvents = 0
let eventsLimit = 5

let idCounter = 0
let displayedAlerts = []

window.addEventListener('onEventReceived', function (obj) {
    if (!obj.detail.event) {
      return;
    }
    if (typeof obj.detail.event.itemId !== "undefined") {
        obj.detail.listener = "redemption-latest"
    }

    const listener = obj.detail.listener.split("-")[0]
    const event = obj.detail.event

    if (listener === 'follower') {
        // addEntry(event.name)
        addFollower(event.name)
    }
});

window.addEventListener('onWidgetLoad', function (obj) {
    
});

function addEntry(username) {
    totalEvents += 1;
    let element = `
        <div class="event-container" id="event-${totalEvents}">
            <div class="details-container">${username}</div>
        </div>
    `;

    $('.main-container').removeClass("fadeOutClass").show().append(element);
    $('.main-container').addClass("fadeOutClass");

    if (totalEvents > eventsLimit) {
        removeEntry(totalEvents - eventsLimit);
    }
}

function removeEntry(eventId) {
    $(`#event-${eventId}`).animate({
        height: 0,
        opacity: 0
    }, 'slow', function () {
        $(`#event-${eventId}`).remove();
    });
}

function addFollower(name) {
    idCounter += 1

    let element = `
        <div class="follower-container" id="follow-${idCounter}">
            ${name} follows
        </div>
    `
    displayedAlerts.push(idCounter)
    $('.main-container').append(element)
    $(`#follow-${idCounter}`).animate({
        height: 0,
        opacity: 0
    }, 100, function () {
        $(`#follow-${idCounter}`);
    })
}