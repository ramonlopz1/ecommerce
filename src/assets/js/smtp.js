document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let assunto = document.querySelector(".assunto").value;
    let message = document.querySelector(".message").value;
  
    document.querySelector(".contact-form").reset();
    sendEmail(name, email, assunto, message);
  }
  
  // Send Email Info
  function sendEmail(name, email, assunto, message) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: 'rmnprojetos@gmail.com',
      Password: "qodusdnpeaupsbab",
      To: "rmnprojetos@gmail.com",
      From: email,
      Subject: `CONTATO - SITE PORTFOLIO`,
      Body: `Nome: ${name} <br/> 
            Email: ${email} <br/> 
            Assunto: ${assunto} <br/> 
            Mensagem: ${message}`
    }).then((message) => alert("Mensagem enviada com sucesso."))
  }