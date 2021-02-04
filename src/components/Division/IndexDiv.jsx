import React from 'react'
import Icon1 from '../../images/mie.JPG'
import Icon2 from '../../images/geprek.JPG'
import Icon3 from '../../images/tengkleng.jpg'
import Icon4 from '../../images/tengkleng1.jpg'
import Icon5 from '../../images/rempah.JPG'
import {DivisionContainter, 
    DivisionCard, 
    DivisionWrapper, 
    DivisionH1, 
    DivisionH2, 
    DivisionIcon,
    DivisionP1 
} from './DivisonElement'
const division = () => {
    return (
        <DivisionContainter id="division">
            <DivisionH1>Product</DivisionH1>
            <DivisionWrapper>
                <DivisionCard>
                    <DivisionIcon src={Icon1} />
                    <DivisionH2>Liberica Coffee</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon2} />
                    <DivisionH2>YFC</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon3} />
                    <DivisionH2>BOBA</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon4} />
                    <DivisionH2>RiceBowl</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon5} />
                    <DivisionH2>Nugget</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon5} />
                    <DivisionH2>Donnut Potato</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
            </DivisionWrapper>
        </DivisionContainter>
    )
}

export default division
