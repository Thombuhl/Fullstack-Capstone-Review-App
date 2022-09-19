import styled from 'styled-components';

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: row-reversed;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SliderInput = styled.input`
    width: 50%;
    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #04aa6d;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #04aa6d;
        cursor: pointer;
    }
`;

export const SliderValueText = styled.div`
    font-family: Lato, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 700;
    color: rgb(74, 74, 74);
    font-size: 1.2rem;
    margin-right: 2rem;
`;
