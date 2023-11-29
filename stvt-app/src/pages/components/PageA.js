import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageA = () => {
    const navigate = useNavigate();
    return (
        <div>
            pageA
            <button onClick={()=>navigate('/PageB')}>next</button>
        </div>
    );
}

export default PageA;
