import React from 'react'
import NewWindow from "react-new-window"

interface Props {
    drawData: string,
}
const CartIntegration = (props: Props) => {
    const {drawData} = props;
    let format = drawData.replaceAll('&amp;', '&');
    format = format.replaceAll('&#39;', "`");
    return (
        <NewWindow>
            <div dangerouslySetInnerHTML={{__html: format}}></div>
        </NewWindow>
    )
}

export default CartIntegration
