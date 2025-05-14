const cantidadSelect = document.getElementById('cantidad');
        const localidadContainer = document.getElementById('localidad-container');

        const localidadSelect = document.getElementById('localidad');
        
        const calcularBtn = document.getElementById('calcularTotalCompra');
        const resumenDiv = document.getElementById('resumen');
        const detalleCompra = document.getElementById('detalle-compra');
    
        
        const precios = {
            general: 350000,
            vip: 500000
        };
        
        cantidadSelect.addEventListener('change', function() {
            if (this.value) {
                localidadContainer.classList.remove('hidden');
                calcularBtn.classList.remove('hidden');
                resumenDiv.classList.add('hidden');
                confirmacionDiv.classList.add('hidden');
            } else {
                localidadContainer.classList.add('hidden');
                calcularBtn.classList.add('hidden');
                resumenDiv.classList.add('hidden');
            }
        });
 
        calcularBtn.addEventListener('click', function() {
            if (!localidadSelect.value) {
                alert('Por favor seleccione la localidad');
                return;
            }
            
            const cantidad = parseInt(cantidadSelect.value);
            const localidad = localidadSelect.value;
            const precioUnitario = precios[localidad];
            let total = cantidad * precioUnitario;
           
            let descuento = 0;
            if (cantidad === 2 && localidad === 'vip') {
                descuento = total * 0.20; 
                total -= descuento;
            }
            
            let html = `
                <p><strong>Cantidad:</strong> ${cantidad} boleta(s)</p>
                <p><strong>Localidad:</strong> ${localidad.toUpperCase()}</p>
                <p><strong>Precio unitario:</strong> $${precioUnitario.toLocaleString()}</p>
            `;
            
            if (descuento > 0) {
                html += `<p class="discount">Descuento (20%): -$${descuento.toLocaleString()}</p>`;
            }
            
            html += `<p><strong>Total a pagar:</strong> $${total.toLocaleString()}</p>`;
            
            detalleCompra.innerHTML = html;
            resumenDiv.classList.remove('hidden');
            

            resumenDiv.scrollIntoView({ behavior: 'smooth' });
        });
        
        confirmarBtn.addEventListener('click', function() {
            resumenDiv.classList.add('hidden');
            confirmacionDiv.classList.remove('hidden');
            

            confirmacionDiv.scrollIntoView({ behavior: 'smooth' });
        });