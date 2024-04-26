const startBtn = document.querySelector('.start-btn');
const wrap = document.querySelector('.wrap');
const url = ('https://api.thecatapi.com/v1/images/search?limit=10');

let data;

const fetchData = async () => {
    try {
        let response = await fetch(url);
        data = await response.json();
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log('Операция завершена')
    }
};


fetchData();

startBtn.addEventListener('click', () => {
    data.forEach(data => {
        let elem = `<img src = ${data.url}></img`;
        wrap.innerHTML += elem;
    });

});
