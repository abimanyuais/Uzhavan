import React from 'react'

const ApiRequest = async (url = '', requestType = null, errorMessage = null) => 
{
    try {
        
        const response = await fetch(url, requestType);
        if(!response.ok) throw Error("Failed to fetch");

    } catch (error) {
        errorMessage = error.message;
    }
    finally
    {
        return errorMessage;
    }
}

export default ApiRequest