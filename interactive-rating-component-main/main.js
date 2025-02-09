
/**
 * 
 * @param {HTMLDivElement} element 
 */

 const RENDERBUTTONS = (element) => {
    const BUTTON1 = document.createElement('button');
    BUTTON1.innerText = 1;
    BUTTON1.value = 1;
  
    const BUTTON2 = document.createElement('button');
    BUTTON2.innerText = 2;
    BUTTON2.value = 2;
  
    const BUTTON3 = document.createElement('button');
    BUTTON3.innerText = 3;
    BUTTON3.value = 3;
  
    const BUTTON4 = document.createElement('button');
    BUTTON4.innerText = 4;
    BUTTON4.value = 4;
  
    const BUTTON5 = document.createElement('button');
    BUTTON5.innerText = 5;
    BUTTON5.value = 5;
  
  
  
  
  
  
    const buttons = [BUTTON1, BUTTON2, BUTTON3, BUTTON4, BUTTON5];
   const VALORSELECCIONADO = document.getElementById('valor');
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Cambiar el color del botón clicado
        button.style.backgroundColor = 'orange';
        console.log(button.value);

        
  
        // Deshabilitar los demás botones
        buttons.forEach((otherButton, otherIndex) => {
          if (otherIndex !== index) {
            otherButton.disabled = otherButton.style.backgroundColor = '';
          }
        });

        // Actualizar valor seleccionado
          VALORSELECCIONADO.innerText = `You selected ${button.value} out of 5`;
        
        
          

        

        console.log(VALORSELECCIONADO);

        
      });
    });
  
    const CAJA = document.getElementById('cajon__numbers');
    buttons.forEach((button) => {
      CAJA.appendChild(button);
    });
  };
  
  const createButton = (number) => {
    const button = document.createElement('button');
    button.innerText = number;
    number.value =button;
    return button;
  };


  
  const element = document.createElement('div');
  RENDERBUTTONS(element);
  ;

  function mostrarDiv(){
    let mostrar = document.getElementById('card__items');
    mostrar.style.opacity= 1 ;

    let ocultar =document.getElementById('wrapper');
    ocultar.style.opacity = 0;

    
  }
