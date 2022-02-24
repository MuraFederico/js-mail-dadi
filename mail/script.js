const arrayMails = ['1@mail.com' , '2@mail.com' , '3@mail.com' , '4@mail.com' , '5@mail.com' ,'6@mail.com' , '7@mail.com' , '8@mail.com'];

const userMail = prompt('type your e-mail');

let mailRegistered = false;

for (let i = 0; i < arrayMails.length; i++) {
    if (userMail.toUpperCase() == arrayMails[i].toUpperCase()){
        mailRegistered = true;
    }
    
}
if (mailRegistered == true) {
    alert('mail trovata');
} else {
    alert('mail non esistente');
}
