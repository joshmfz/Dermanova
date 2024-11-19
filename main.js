// Cronograma

    // Abrir Tabla de Citas
    function mosss() {
        // Selecciona el div con el id "formulario-datos"
        const formularioDatos = document.getElementById('formulario-datos');
        
        // Cambia el estilo para que se muestre
        formularioDatos.style.display = 'flex';
    }

    // Cerrar Tabla de Citas
    function out() {
        // Selecciona el div con el id "formulario-datos"
        const formularioDatos = document.getElementById('formulario-datos');
        
        // Cambia el estilo para que se oculte
        formularioDatos.style.display = 'none';
    }

    //  Scroll Horizontal
    
        // Selecciona el div con el id "content"
    const contentElement = document.getElementById('content');
    
        // Se activa cuando el usuario gire la rueda del ratón
    contentElement.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            // Evita el desplazamiento vertical y desplaza horizontalmente
            event.preventDefault();
            contentElement.scrollLeft += event.deltaY;
        }
    });

// Otro HTML