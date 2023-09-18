let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});


// Cambiar de Color cuando pase de Login a Singup 

// signup.addEventListener("click", () => {
//     slider.parentElement.classList.add("signup-1");
// });

// login.addEventListener("click", () => {
//     slider.parentElement.classList.remove("signup-1");
// });