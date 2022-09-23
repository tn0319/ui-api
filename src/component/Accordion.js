import { useState } from 'react';

function Accordion({ idx }) {
    const [openAccord, setOpenAccord] = useState(false);
    return (
        <li className="accordion-list">
            <div className="tit" onClick={() => setOpenAccord(!openAccord)}>accordion{idx}</div>
            <div className={`cont ${openAccord === true ? 'on' : ''}`}>accordion{idx} content</div>
        </li>
    )
}

export default Accordion;