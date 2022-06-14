import { createStitches } from '@stitches/react'

export const {
    config,
    createTheme,
    css,
    getCssText,
    globalCss,
    keyframes,
    prefix,
    reset,
    styled,
    theme,
} = createStitches({
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
    },
    theme: {
        space: {
            1: '.0625rem',
            2: '.125rem',
            3: '.25rem',
            4: '.5rem',
            5: '.75rem',
            6: '1rem',
            7: '1.5rem',
            8: '2rem',
            9: '3rem',
            10: '4rem',
            11: '5rem',
            12: '6rem',
        },
        sizes: {
            1: '.0625rem',
            2: '.125rem',
            3: '.25rem',
            4: '.5rem',
            5: '.75rem',
            6: '1rem',
            7: '1.5rem',
            8: '2rem',
            9: '3rem',
            10: '4rem',
            11: '5rem',
            12: '6rem',
        },
        fontSizes: {
            1: '.5em',
            2: '1em',
            3: '1.5em',
            4: '2em',
            5: '2.5em',
            6: '3em',
            7: '3.5em',
            8: '4em',
            9: '4.5em',
        },
        lineHeights: {
            1: '1.05em',
            2: '1.125em',
            3: '1.25em',
            4: '1.375em',
            5: '1.5em',
            6: '1.75em',
        },
        fontWeights: {
            thin: 100,
            light: 300,
            normal: 400,
            medium: 500,
            bold: 700,
            black: 900,
        },
        radii: {
            1: '2px',
            2: '4px',
            3: '6px',
            4: '8px',
            5: '10px',
            round: '50%',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
        shadows: {
            primarySm: '0 0 30px 1px $colors$primary6',
            primaryMd: '0 0 40px 2px $colors$primary6',
            primaryLg: '0 0 50px 4px $colors$primary6',
            primaryXl: '0 0 60px 8px $colors$primary6',
        },
    },
    utils: {
        paddingX: (value: any) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingY: (value: any) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        marginX: (value: any) => ({
            marginLeft: value,
            marginRight: value,
        }),
        marginY: (value: any) => ({
            marginTop: value,
            marginBottom: value,
        }),
    },
})
