import React from 'react'
import Icon1 from '../../images/cooking1.svg'
import Icon2 from '../../images/organic1.svg'
import Icon3 from '../../images/best-quality1.svg'
import Icon4 from '../../images/deliveries1.svg'
import {FeatureContainter, 
    FeatureCard, 
    FeatureWrapper, 
    FeatureH2, 
    FeatureIcon,
    FeatureP1, 
    FeatureH1
} from './FeatureElement'
const Feature = () => {
    return (
        <FeatureContainter id="Feature">
            <FeatureH1>Why us ?</FeatureH1>
            <FeatureWrapper>
                <FeatureCard>
                    <FeatureIcon src={Icon1} />
                    <FeatureH2>Best ingredient</FeatureH2>
                    <FeatureP1>We maintain our ingredient at best quality for you</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon2} />
                    <FeatureH2>Pure Organic</FeatureH2>
                    <FeatureP1>We keep our dish at organic without dangerous chemical</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon3} />
                    <FeatureH2>Best Quality</FeatureH2>
                    <FeatureP1>We can guaranteed our product at our best quality</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon4} />
                    <FeatureH2>Delivery Service</FeatureH2>
                    <FeatureP1>We support delivery services to anywhere in indonesia</FeatureP1>
                </FeatureCard>
            </FeatureWrapper>
        </FeatureContainter>
    )
}

export default Feature
