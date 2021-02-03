import React from 'react'
import Icon1 from '../../images/mie.JPG'
import Icon2 from '../../images/geprek.JPG'
import Icon3 from '../../images/tengkleng.jpg'
import {FeatureContainter, 
    FeatureCard, 
    FeatureWrapper, 
    FeatureH2, 
    FeatureIcon,
    FeatureP1 
} from './FeatureElement'
const Feature = () => {
    return (
        <FeatureContainter id="Feature">
            <FeatureWrapper>
                <FeatureCard>
                    <FeatureIcon src={Icon1} />
                    <FeatureH2>Beegency</FeatureH2>
                    <FeatureP1>Feature available right now</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon2} />
                    <FeatureH2>Storage Feature</FeatureH2>
                    <FeatureP1>Feature available right now</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon3} />
                    <FeatureH2>Cullinary</FeatureH2>
                    <FeatureP1>Feature available right now</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon3} />
                    <FeatureH2>Cullinary</FeatureH2>
                    <FeatureP1>Feature available right now</FeatureP1>
                </FeatureCard>
            </FeatureWrapper>
        </FeatureContainter>
    )
}

export default Feature
