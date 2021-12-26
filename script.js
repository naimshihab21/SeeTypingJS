const inp = document.querySelector('#input');
const txtarea = document.querySelector('#textarea');
const btn = document.querySelector('#button');

inp.addEventListener('keyup', () => {
  txtarea.textContent = inp.value;
});

btn.addEventListener('click', () => {
  const questionDel = confirm('Yakin Ingin Menghapus?');
  if(questionDel) {
    inp.value = '';
    txtarea.textContent = '';
  }
});