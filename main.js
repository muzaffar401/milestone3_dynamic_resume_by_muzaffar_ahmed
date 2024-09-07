var _a;
document.addEventListener('DOMContentLoaded', function () {
    // Add input event listeners to trigger validation automatically
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    nameElement.addEventListener('input', validateName);
    emailElement.addEventListener('input', validateEmail);
    phoneElement.addEventListener('input', validatePhone);
    educationElement.addEventListener('input', validateEducation);
    experienceElement.addEventListener('input', validateExperience);
    skillsElement.addEventListener('input', validateSkills);
});
(_a = document.getElementById('resume_form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Validate all fields before generating resume
    if (validateAll()) {
        var name_1 = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var resumeData = "\n        <h2>RESUME</h2>\n        <br>\n        <h2>Personal Information</h2>\n        <p><strong>Name :</strong> ".concat(name_1, "</p>\n        <p><strong>Email :</strong> ").concat(email, "</p>\n        <p><strong>Phone Number :</strong> ").concat(phone, "</p>\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        <h2>Experience</h2>\n        <p>").concat(experience, "</p>\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n        ");
        var resumeDataElement = document.getElementById('resume_data');
        if (resumeDataElement) {
            resumeDataElement.innerHTML = resumeData;
        }
        else {
            console.error('The Resume Output Elements are Missing!');
        }
        // Reset the form fields
        var formElement = document.getElementById('resume_form');
        if (formElement) {
            formElement.reset();
        }
    }
    else {
        console.error('Form validation failed.');
    }
});
// Validate all fields
function validateAll() {
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isPhoneValid = validatePhone();
    var isEducationValid = validateEducation();
    var isExperienceValid = validateExperience();
    var isSkillsValid = validateSkills();
    return isNameValid && isEmailValid && isPhoneValid && isEducationValid && isExperienceValid && isSkillsValid;
}
// Validation functions
function validateName() {
    var nameElement = document.getElementById('name');
    var nameError = document.getElementById('name_error');
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (nameElement.value.length === 0) {
        nameError.textContent = 'Please fill out this field.';
        return false;
    }
    else if (nameElement.value.length < 3 || nameElement.value.length > 12) {
        nameError.textContent = 'Name must be between 3 and 12 characters long.';
        return false;
    }
    else if (!nameRegex.test(nameElement.value)) {
        nameError.textContent = 'Invalid name. Only letters and spaces allowed.';
        return false;
    }
    else {
        nameError.textContent = '';
        return true;
    }
}
function validateEmail() {
    var emailElement = document.getElementById('email');
    var emailError = document.getElementById('email_error');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailElement.value.length === 0) {
        emailError.textContent = 'Please fill out this field.';
        return false;
    }
    else if (!emailRegex.test(emailElement.value)) {
        emailError.textContent = 'Invalid email address.';
        return false;
    }
    else {
        emailError.textContent = '';
        return true;
    }
}
function validatePhone() {
    var phoneElement = document.getElementById('phone');
    var phoneError = document.getElementById('phone_error');
    var phoneRegex = /^\d{11}$/;
    if (phoneElement.value.length === 0) {
        phoneError.textContent = 'Please fill out this field.';
        return false;
    }
    else if (!phoneRegex.test(phoneElement.value)) {
        phoneError.textContent = 'Phone number must be exactly 11 digits.';
        return false;
    }
    else {
        phoneError.textContent = '';
        return true;
    }
}
function validateEducation() {
    var educationElement = document.getElementById('education');
    var educationError = document.getElementById('education_error');
    var requiredFieldRegex = /.+/;
    if (!requiredFieldRegex.test(educationElement.value)) {
        educationError.textContent = 'Please fill out this field.';
        return false;
    }
    else {
        educationError.textContent = '';
        return true;
    }
}
function validateExperience() {
    var experienceElement = document.getElementById('experience');
    var experienceError = document.getElementById('experience_error');
    var requiredFieldRegex = /.+/;
    if (!requiredFieldRegex.test(experienceElement.value)) {
        experienceError.textContent = 'Please fill out this field.';
        return false;
    }
    else {
        experienceError.textContent = '';
        return true;
    }
}
function validateSkills() {
    var skillsElement = document.getElementById('skills');
    var skillsError = document.getElementById('skills_error');
    var requiredFieldRegex = /.+/;
    if (!requiredFieldRegex.test(skillsElement.value)) {
        skillsError.textContent = 'Please fill out this field.';
        return false;
    }
    else {
        skillsError.textContent = '';
        return true;
    }
}
