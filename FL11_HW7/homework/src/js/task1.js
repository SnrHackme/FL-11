const minLogin = 6;
const minPass = 5;
const userLogin = 'user@gmail.com';
const adminLogin = 'admin@gmail.com';
const login = prompt('Enter your login','');
if(login === null || login === '') {
    alert('Canceled.');
} else if(login.length < minLogin) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if(login === userLogin || login === adminLogin) {
    let password = prompt('Enter password , please.','0');
    if(password === null || password === ''){
        alert('Canceled.');
    } else if(password === 'AdminPass' && login === adminLogin || password === 'UserPass' && login === userLogin) {
        if(confirm('Do you want to change your password?')) {
            if(prompt('Enter current password , please') === password) {
                let newPassword = prompt('Enter new password , please.','0');
                if(newPassword.length < minPass) {
                    alert('It\'s too short password. Sorry.')
                } else {
                    let validate;
                    validate = prompt('Retry new password , please.','0');
                    if(validate !== newPassword) {
                        alert('You wrote the wrong password');
                    } else {
                        password = newPassword;
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password.');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password.');
    }
} else {
    alert('I don\'t know you');
}