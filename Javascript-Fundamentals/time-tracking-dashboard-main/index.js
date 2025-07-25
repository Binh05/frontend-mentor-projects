const timeFrames = document.querySelectorAll('ul li')
let currentTimeFrame = document.querySelector('ul li:nth-child(2)')
const items = document.querySelectorAll('.item')

function changeData(data, timeFrame, time) {
    items.forEach((item, index) => {
        const current = item.querySelector('.hours')
        const previous = item.querySelector('.time')

        if (current && previous) {
            current.textContent = `${data[index].timeframes[timeFrame].current}hrs`;
            previous.textContent = `${time} - ${data[index].timeframes[timeFrame].previous}hrs`;
        }
    });
}

const handleClickTimeFrame = (e) => {
    currentTimeFrame.classList.remove('active');

    e.target.classList.add('active')
    currentTimeFrame = e.target
    const timeFrameName = e.target.textContent.toLowerCase()

    fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        let previous
        switch (timeFrameName) {
            case 'daily':
                previous = 'Yesterday'
                break;
            case 'weekly':
                previous = 'Last Week'
                break;
            case 'monthly':
                previous = 'Last Month'
        }
        changeData(data, timeFrameName, previous)
    })
}

timeFrames.forEach((timeFrame) => {
    timeFrame.addEventListener('click', handleClickTimeFrame)
})