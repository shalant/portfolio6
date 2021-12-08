

state = {
    email: {
        recipient: '',
        sender: '',
        subject: '',
        text: ''
    }
}

sendEmail = _ => {
    const { email } = this.state;
    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text={$email.text}`) //query string url
        .catch(err => console.error(err))
}

