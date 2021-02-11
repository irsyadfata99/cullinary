import styled from 'styled-components'

export const ProductsContainer = styled.div`
    width: 100%;
    min-heigth: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #150f0f;
    color: #D35400;

`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #D35400;
`

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

export const ProductInfo =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding: 2rem;
    text-align: left;
`

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`

export const ProductButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    background: #d35400;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    width: 222px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #010606;
    }
`