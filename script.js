const markers = document.querySelectorAll('.marker');
const infoBox = document.getElementById('info-box');
const infoText = document.getElementById('info-text');

// Tạo một đối tượng chứa thông tin cho từng điểm đánh dấu
const markerData = {
    marker1: {
    title: 'Điểm đánh dấu 1',
    description: 'Thông tin giới thiệu cho điểm đánh dấu 1.'
    }
,
    marker2: {
    title: 'Điểm đánh dấu 2',
    description: 'Thông tin giới thiệu cho điểm đánh dấu 2.'
    }
};

markers.forEach(marker => {
    marker.addEventListener('click', () => {
    const id = marker.id;
    const data = markerData[id];

    if (data) {
        infoText.innerHTML = `<h3>${data.title}</h3><p>${data.description}</p>`;
        infoBox.classList.remove('hidden'); 
    }
    });
});

infoBox.addEventListener('click', () => {
infoBox.classList.add('hidden');
});