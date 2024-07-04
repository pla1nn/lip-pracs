import { saveFormData } from "./form-data";

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    
    const name = formElements.username.value;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
        name, email, message
    }

    saveFormData(formData);
    
}