document.addEventListener('DOMContentLoaded', function () {
    function wordClickHandler(word) {
        alert('Você clicou na palavra: ' + word.textContent);
    }

    const englishWords = document.querySelectorAll('.palavras_d p, .palavras_e p');
    englishWords.forEach(word => {
        word.addEventListener('click', function () {
            wordClickHandler(word);
        });
    });
});
