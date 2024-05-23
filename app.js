function counter() {
    let textArea = document.getElementById('textArea');
    let characters = document.getElementById('characters');
    let words = document.getElementById('words');
    let sentences = document.getElementById('sentences');
    let paragraphs = document.getElementById('paragraphs');    
    characters.innerText = textArea.value.split('').length;
    words.innerText = textArea.value.split(' ').length;
    sentences.innerText = textArea.value.split('.').length;
    paragraphs.innerText = textArea.value.split('\n').length;
}