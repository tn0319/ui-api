import { useState } from "react";

function Tab() {
    const [activeIdx, setActiveIdx] = useState(0);

    const handleTabClick = (idx) => {
        setActiveIdx(idx);
    }

    return (
        <div>
            <ul className="tab-wrap">
                <li className={activeIdx === 0 ? 'on' : ''} onClick={() => handleTabClick(0)}>a</li>
                <li className={activeIdx === 1 ? 'on' : ''} onClick={() => handleTabClick(1)}>b</li>
                <li className={activeIdx === 2 ? 'on' : ''} onClick={() => handleTabClick(2)}>c</li>
            </ul>
            <div className="cont-wrap">
                <div className={activeIdx === 0 ? 'on' : ''}>content1</div>
                <div className={activeIdx === 1 ? 'on' : ''}>content2</div>
                <div className={activeIdx === 2 ? 'on' : ''}>content3</div>
            </div>
        </div>
    )
}

export default Tab;