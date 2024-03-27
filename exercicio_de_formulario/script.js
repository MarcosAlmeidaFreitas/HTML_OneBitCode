const tel = document.getElementById('tel');

tel.addEventListener('keyup', (event) => {
  tel.value = phoneMask(tel.value);
});


function phoneMask(value){
  if (!value) return "";
  value = value.replace(/\D/g,'');
  value = value.replace(/(\d{2})(\d)/,"($1) $2");
  value = value.replace(/(\d)(\d{4})$/,"$1-$2");
  return value;
}