const name=document.getElementById('name');
const email=document.getElementById('email');
const error=document.getElementById('nameerror');
const emailError=document.getElementById('emailerror');
eve();
function eve()
{
  name.addEventListener('blur',nameValid);
  email.addEventListener('blur',emailValid);
}
function nameValid()
{
  let nameis=name.value;
  if(nameis.length<=3&&nameis.length!="")
  {
    error.innerHTML='<i class="icofont-exclamation-circle"></i> Name must be atleast 5 charectors';
  }
  else if(nameis.length=="")
  {
    error.innerHTML='<i class="icofont-exclamation-circle"></i> Please enter your name';

  }
  else
  {
    error.innerText="";
  }
}
function emailValid()
{
  let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,10}$/;
  let emalis=email.value;
  if(emalis.match(pattern))
  {
    emailError.innerText="";
  }
  else if(emalis=="")
  {
    emailError.innerHTML='<i class="icofont-exclamation-circle"></i> Email is required';

  }
  else
  {
    emailError.innerHTML='<i class="icofont-exclamation-circle"></i> Please enter a valid email';

  }
}
