async function uploadCloudinary (formData)  {
 
    const data = await fetch(process.env.CLOUD_PATH, {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.text();
        })

    return data
    
}