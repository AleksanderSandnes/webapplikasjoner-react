import { theme } from '@chakra-ui/core';

export default {
    ...theme,
    breakpoints: ['30em', '48em', '62em', '80em'],
    fonts: {
        heading: '"Avenir Next", sans-serif',
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
        mono: 'Menlo, monospace',
    },
    fontSizes: {
        liten: '0.75rem',
        liten_medium: '0.875rem',
        medium: '1rem',
        stor: '1.125rem',
        ekstraStor: '1.25rem',
        '2x1': '1.5rem',
        '3x1': '1.875rem',
        '4x1': '2.25rem',
        '5x1': '3rem',
        '6x1': '4rem',
    },
};