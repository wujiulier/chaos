async function fetchWithImmediateOrder(urls){
    const results = new Array(urls.length);
    const printed = new Array(urls.length).fill(false);

    async function fetchUrl(url,index){
        try{
            const response = await fetch(url);
            const data = await response.json();
            results[index] = data;

            printResults();
        }catch(err){
            results[index] = null;
            printResults();
        }
    }

    function printResults(){
        for(let i=0;i<results.length;i++){
            if(results[i] !== undefined && !printed[i]){
                console.log(results[i]);
                printed[i] = true;
            }
        }
    }

    urls.forEach((url,index) => fetchUrl(url,index));
}

