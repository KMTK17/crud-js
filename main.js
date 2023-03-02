const edit = document.querySelector('#edit');
const modal_edit = document.querySelector('.modal-edit');
const back_edit = document.querySelector('#back-edit');

edit.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_edit.classList.add('modal-edit--show');
});

back_edit.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_edit.classList.remove('modal-edit--show');
});


const client = document.querySelector('#client');
const modal_client = document.querySelector('.modal-client');
const back_client = document.querySelector('#back-client')

client.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_client.classList.add('modal-client--show');
});

back_client.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_client.classList.remove('modal-client--show');
});

