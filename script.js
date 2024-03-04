const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const formData = new FormData(emailForm);
  const formDataObject = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject)
    });

    if (response.ok) {
      alert('Email sent successfully');
      emailForm.reset();
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error(error);
    alert('Error sending email');
  }
});
