document.getElementById('sendBtn').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    const phoneNumber = '3794031986'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});
