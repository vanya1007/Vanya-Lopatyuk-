let priceSection = document.createElement('div');
      let valueType = document.createTextNode('Price, \$');
      let getPrice = document.createElement('input');
      getPrice.id = 'getPrice';
      getPrice.style.display = 'inline';
      getPrice.style.type = 'text';
      getPrice.style.marginLeft = '10px';
      priceSection.append(valueType);
      priceSection.append(getPrice);
      document.body.append(priceSection);
      
      function sendPrice(inputPrice) {
        let processedDiv = document.createElement('div');
        processedDiv.id = 'processedDiv';
        let processedSpan = document.createElement('span');
        let clearInfo = document.createElement('button');
        clearInfo.style.width = '20px';
        clearInfo.style.height = '20px';
        clearInfo.innerText = 'X';
        processedSpan.innerHTML = `Текущая цена: ${inputPrice}`;
        processedDiv.append(processedSpan);
        processedDiv.append(clearInfo);
        priceSection.before(processedDiv);
        return clearInfo;
      };  

      getPrice.addEventListener('focus', function( event ) {
        event.target.style.outline = '2px solid green';    
      }, true);
      getPrice.addEventListener('blur', function( event ) {
        if (+getPrice.value > 0) {
            event.target.style.outline = '';
            let clearButton = sendPrice(getPrice.value);
            clearButton.onclick = function() {
                let div = document.getElementById('processedDiv');
                div.remove();
                getPrice.value = '';   
            };
        } else {
            getPrice.style.backgroundColor = 'red';
            event.target.style.outline = '';
            getPrice.value = 'Please enter correct price';

            
        }
      }, true);