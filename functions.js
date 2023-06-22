//JavaScript code here

function messagePrint () {
    let message = document.getElementById('messageBox').value;
    alert(message);
    document.getElementById("messageBox").value = ''
}


function fontChange(element) {
    var targetElement = document.getElementById(element);

    if (targetElement.style.fontFamily === 'Times New Roman, serif') {
        targetElement.style.fontFamily = 'monospace';
    } else if (targetElement.style.fontFamily === 'monospace') {
        targetElement.style.fontFamily = 'Times New Roman, serif';
    } else {
        targetElement.style.fontFamily = 'Times New Roman, serif';
    }
}