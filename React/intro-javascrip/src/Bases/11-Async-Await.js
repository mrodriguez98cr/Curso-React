
const getImagen =async () => 
{
   
   try{
    const apiKey = 'UkD842Vu4UANPSkUZVycYmAPZP3Ui2rL';
    const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data}= await respuesta.json();

    console.log(data)

    const {url}=data.images.original;

    const img=document.createElement('img');
        img.src=url;
        document.body.append(img);

   }catch (error)
   {
       console.error(error)
   }
   
}

 getImagen()





/*peticion
    .then(resp => { resp.json()
    .then(({data}) => {
        const {url}=data.images.original;
        const img=document.createElement('img');
        img.src=url;
        document.body.append(img)





        })
    })
    .catch(console.warn)*/