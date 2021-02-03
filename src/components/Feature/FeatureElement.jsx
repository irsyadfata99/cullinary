import styled from 'styled-components'

export const FeatureContainter =styled.div`
    height: 425px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #D35400;

    @media screen and (max-width: 1000px) {
        height: 900px;
    }

    @media screen and (max-width: 768px) {
        height: 1400px;
    }

    @media screen and (max-width: 480px) {
        height: 2400px;
    }
`

export const FeatureWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 10px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
`

export const FeatureCard =  styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FeatureIcon = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
`

export const FeatureH1 = styled.h1`
    font-size: 2.5rem;
    color: #d11414;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const FeatureH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const FeatureP1 = styled.p`
    font-size: 1rem;
    text-align: center;
`