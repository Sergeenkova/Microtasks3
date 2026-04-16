//Использование модульных стилей или styled components - это два равнозначных подхода. 
//Выбор зависит от конкретного проекта. 
//Главное, нельзя использовать оба подхода одновременно (т.е. файл Site.modules.css надо
//удалить, а стили переписать через компоненты) 


import styled from "styled-components";

const NavWrapper=styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #1e3786;
    }
    & > a.active {
        text-decoration: none;
        color: #03eaff;
    }
    & > a:hover {
        color: steelblue;
    }
`

export const S = {
    NavWrapper
}