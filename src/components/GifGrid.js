import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {data:dataimages, loading} = useFetchGifs(category);    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    dataimages.map(img =>
                        <GifGridItem
                            key={img.id}
                            {...img} // envio de todos los parametros desestructurado
                        />
                    )
                }
            </div>
        </>
    );
};

// export default GifGrid;
