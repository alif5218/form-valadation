var formSub=document.getElementById('form');
formSub.addEventListener('submit' , function(e){
	e.preventDefault();
	var fname=e.target.fName;
	var email=e.target.email;
	var mobile=e.target.mobile;
	var Password=e.target.Password;
	var cPassword=e.target.cPassword;
	var date=e.target.date;
	var gender=e.target.gender;
	
	if(fname.value=="" || email.value=="" || mobile.value=="" || Password.value=="" || cPassword.value=="" || date.value=="" || gender.value==""){
		alert("This field is required!!!");

	}
	if(Password.value!==cPassword.value){
		alert("Confirm password not match");
	}
	
})
function showPasword(){
		var pass1=document.getElementById('password');
		var pass2=document.getElementById('confirm-password');
		if(pass1.type=="password"){
			pass1.type="text";
			pass2.type="text";
			
		}else{
			
			pass1.type="password";
			pass2.type="password";
		}
		
	}