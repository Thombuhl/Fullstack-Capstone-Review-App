import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(247, 247, 247);
    background-image: url('homebg.gif');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const Text = styled.div`
    font-family: Lato, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 700;
    color: rgb(74, 74, 74);
    font-size: 3.2rem;
    margin: none;
    text-align: center;
`;

export const AllPreferences = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 9rem;
`;

export const SliderPreferences = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 75%;
`;

export const PreferenceContainer = styled.div`
    display: flex;
    margin: 1.2rem;
`;

export const PreferenceText = styled.div`
    font-family: Lato, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.3rem;
    font-weight: bold;
    text-align: center;
    color: rgb(74, 74, 74);
    font-size: 1.8rem;
    display: flex;
    margin-right: 1.5rem;
`;

export const Button = styled.button`
    display: block;
    padding: 18px 44px;
    width: 10%;
    line-height: 1.4rem;
    font-size: 1.8rem;
    background-color: rgb(220, 220, 220);
    border-radius: 5px;
    transition: all 0.3s ease 0s, transform 0.5s ease 0s;
    box-shadow: rgb(220, 220, 220 / 50%) 0px 10px 40px -10px;
    cursor: pointer;
    border: 1px solid transparent;
`;
