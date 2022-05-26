import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[items]
        
    )


    return [items, setItems]

};

export default useItems;
