import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #7B5A4B;
        --color-secondary: #FA5E17;
        --color-background: #486F7A;
        --color-bar: #16FA95;
        --color-bar-hover: #16C8FA;
        --color-error: #E60000;
        --color-darkred: #5e2129;
        --gray-0: #333333;
        --gray-1: #828282;
        --gray-2: #E0E0E0;
        --gray-3: #F5F5F5;
        --heading-1: bold 1.625rem "Inter";
        --heading-2: bold 1.375rem "Inter";
        --heading-3: bold 1.125rem "Inter";
        --headline: 1rem "Inter";
        --body: .875rem "Inter";
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        list-style: none;
        text-decoration: none;
    }
    body {
        height: 100%;
        width: 100%;
    }
    main {
        font-family: "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    dialog{
        display: unset;
        position: unset;
    }
`;
