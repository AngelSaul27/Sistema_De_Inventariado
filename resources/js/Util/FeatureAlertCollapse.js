export default function FeatureAlertCollapse(){
    const alertas = document.getElementsByClassName('alert-item');
    if (alertas.length > 0) {
        Array.from(alertas).forEach((alerta) => {
            if(alerta.classList.contains("active")){
                alerta.classList.remove("active")
            }
        });
    }

    setTimeout(function() {
        if (alertas.length > 0) {
            Array.from(alertas).forEach((alerta) => {
                alerta.classList.add("active");
            });
        }
    }, 6000);
}
