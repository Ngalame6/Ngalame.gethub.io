const filterBtn=document.querySelector('.filter-button');
const items=document.querySelectorAll('.item');

filterBtn.addEventListener('click', () =>
{
    document.querySelector('.filter-select').Value;
    item.forEach(item => {
        if(filterValue==='all')
{
    item.style.display='block';
}else if(item.classList.contains(filterValue))
{
    item.style.display='block';
}else{
    item.style.display='none';
}
});
        
});

const form=document.querySelector('.form');
form.addEventListener('submit', Event =>{
    Event.preventDefault();
const formData=new formData(Event.target);
console.log(formData);
});
