function increment() {
    var counter = document.getElementById('counter');
    axios.get('/increment').then(function(response){
        counter.innerHTML = response.data;
    });
}

function decrement() {
    var counter = document.getElementById('counter');
    axios.get('/decrement').then(function(response){
        counter.innerHTML = response.data;
    });
}

function reset() {
    var counter = document.getElementById('counter');
    axios.get('/reset').then(function(response){
        counter.innerHTML = response.data;
    });
}