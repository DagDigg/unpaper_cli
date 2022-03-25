import React, { useState } from 'react';
import { Back, Slider } from './elements';

export default function Switch() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Back onClick={() => setIsActive(!isActive)} isActive={isActive}>
            <Slider isActive={isActive} />
        </Back>
    );
}
