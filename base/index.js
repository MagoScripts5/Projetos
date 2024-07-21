window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(function() {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        content.style.display = 'flex';
    }, 1000);
});

let currentIndex = 0;

function abrirMenu() {
    document.getElementById("menuLateral").style.width = "250px";
    document.body.style.marginLeft = "250px";
}

function fecharMenu() {
    document.getElementById("menuLateral").style.width = "0";
    document.body.style.marginLeft = "0";
}
