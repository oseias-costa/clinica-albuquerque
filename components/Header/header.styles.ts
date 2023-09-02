import styled from 'styled-components'

export const HeaderContainer = styled.section`
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.10);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
`

export const MenuContainer = styled.nav`
    diplay: flex;
    @media(max-width: 820px){
        display: none;
    }
`

export const LinkMenu = styled.a`
    padding-left: 10px;
    padding-right: 10px;
    color: var(--color-gray-text);
    font-size: 16px;
    transition: .2s linear;

    &:hover{
        color: var(--color-blue-ligth);
    }
`