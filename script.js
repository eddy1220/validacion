var cedula = document.getElementById('cedula');
var error = document.getElementById('error');
var mostrar = document.getElementById('mostrar');
var form = document.getElementById('form');

    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var mensajeError = [];
        var mensajeValido = [];
        var digito = [];
        var obtenerDigito;
        var acumulado = 0;
        var ultimoDigito = (Number(cedula.value.charAt(cedula.value.length-1)));
        var resultado = 0;
        var num = /^[0-9]+$/;
        
        if(cedula.value.length === 11 && cedula.value.match(num) )
        {
            for (var index = 0; index < cedula.value.length-1; index++) {
                digito[index] = (Number(cedula.value.charAt(index)));
                
            }
            for (var i = 0; i < cedula.value.length-1; i++) 
            {
                if(((i+1) % 2 ) === 0)
                {
                    obtenerDigito = String((+digito[i] * 2));

                    if(obtenerDigito.length == 2)
                    {
                        acumulado += Number(obtenerDigito[0]) + Number(obtenerDigito[1]);
                    }
                    else
                    {
                        acumulado += Number((+digito[i] * 2));
                    }
                }
                else
                {
                    obtenerDigito = String((+digito[i] * 1));
                    if(obtenerDigito.length == 2)
                    {
                        acumulado += Number(obtenerDigito[0]) + Number(obtenerDigito[1]);
                    }
                    else
                    {
                        acumulado += Number((+digito[i] * 1));
                    }
                }
            }
            console.log(acumulado);
            resultado = 10 - (acumulado%10);
            console.log(resultado);
            console.log(ultimoDigito);
            if(resultado === ultimoDigito)
            {
                mensajeValido.push('Es Válida');
            }
            else if(resultado%10 === ultimoDigito)
            {
                mensajeValido.push('Es Válida');
            }else
            {
                mensajeError.push('No es Válida');
            }
        }
        else
        {
            mensajeError.push('Error introduce 11 valores numéricos');
        }
        error.innerHTML = mensajeError.join(', ');
        mostrar.innerHTML = mensajeValido.join(', ');
        
    });