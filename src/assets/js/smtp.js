document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    // Recebe valores dos inputs
    let name = document.querySelector("#input_nome").value;
    let email = document.querySelector("#input_email").value;
    let message = document.querySelector("#textarea_mensagem").value;
  
    document.querySelector(".contact-form").reset();
    sendEmail(name, email, assunto, message);
  }
  
  // Envia email pela API
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