(function(){
    var state = {
        first: 0,
        second: 0
    }

    function updateLabel(labelElement, prefix, count){
        labelElement.innerText = prefix + ' ' + count;
    }

    var labelFirst = document.querySelector('#label-first');
    var firstButton = document.querySelector('#btn-first');

    var labelSecond = document.querySelector('#label-second');
    var secondButton = document.querySelector('#btn-second');

    
    var firstButtonMin = document.querySelector('#btn-first-minus');
    
    var secondButtonMin = document.querySelector('#btn-second-minus');
    
    
    
    
    
    firstButton.addEventListener('click', function(e){
        state.first = state.first + 1;
        updateLabel(labelFirst, 'First button:', state.first)
    })

    secondButton.addEventListener('click', function(e){
        state.second = state.second + 1;
        updateLabel(labelSecond, 'Second button:', state.second)
    })
    firstButtonMin.addEventListener('click', function(e){
        state.first = state.first - 1;
        updateLabel(labelFirst, 'First button:', state.first)
    })

    secondButtonMin.addEventListener('click', function(e){
        state.second = state.second - 1;
        updateLabel(labelSecond, 'Second button:', state.second)
    })





})()