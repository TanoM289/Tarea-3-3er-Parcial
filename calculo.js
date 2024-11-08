document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcular").addEventListener("click", function() {
        const monto = parseFloat(document.getElementById("entrada").value);

        if (isNaN(monto) || monto <= 0) {
            document.getElementById("resultado").innerText = "Por favor, ingresa un valor numérico válido.";
        } else {
            document.getElementById("resultado").innerText = "Monto total: $" + monto.toFixed(2);
        }
    });
});

