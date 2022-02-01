// const getImagenPromesa = () => new Promise(resolve => resolve('https://kfdjdfhdjnsj.com'));
// getImagenPromesa().then(console.log);

const getImagen = async () =>{
    try {
        const apiKey = 'o3EmUW34tAIJrtS589Qj4nHRClwou8BY'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
    
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url; 
        document.body.append( img );
        
    } catch (error) {
        // manejo de error
        console.error(error);
    }
    
   
}

getImagen();
