const onDecrBtn = document.querySelector('button[data-action="decrement"]');
const onIncrBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let value = Number(valueEl.textContent);

onDecrBtn.addEventListener('click', () => {
    value -=1;
    return valueEl.textContent = value;
    
});

onIncrBtn.addEventListener('click', () => {
    value +=1;
    return valueEl.textContent = value;
});
console.log(valueEl);




