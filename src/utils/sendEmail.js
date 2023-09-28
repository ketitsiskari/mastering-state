const sendEmail = async (email) => {
    try {
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.status === 422) {
        const data = await response.json();
        alert(data.error);
    } else if (response.ok) {
        console.log('Email subscribed successfully!');
    } else {
        throw new Error('Something went wrong');
    }
} catch (error) {
    console.log(error);
    alert('An error occurred while subscribing.');
}
  };

export default sendEmail;
