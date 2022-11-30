class UpdateHTTP {
  
    // Make an HTTP PUT Request
    async update(url) {
  
        // Awaiting fetch which contains 
        // method, headers and content-type
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }
        });
  
        // Awaiting for the resource to be updated
        const resData = 'resource updated...';
        // Return response data 
        window.location.reload()
        return resData;
    }
}

export default UpdateHTTP;