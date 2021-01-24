function contact({ body }) {
  return new Promise((resolve, reject) => {
    fetch('https://formspree.io/f/mrgojogk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject)
  })
}

export default contact
