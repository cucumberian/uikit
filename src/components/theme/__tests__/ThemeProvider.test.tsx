import {render, screen} from '@testing-library/react';
import React, {useContext} from 'react';
import {mockMatchMedia} from '../../../../test-utils/mocks/mockMatchMedia';
import {ThemeContext} from '../ThemeContext';
import {ThemeProvider} from '../ThemeProvider';
import {ThemeValueContext} from '../ThemeValueContext';

function ThemeDisplay() {
    const {theme} = useContext(ThemeContext);
    const {themeValue} = useContext(ThemeValueContext);

    return (
        <>
            Theme: {theme}, theme value: {themeValue}
        </>
    );
}

test('should set "system" theme by default', () => {
    const mock = mockMatchMedia();

    render(
        <ThemeProvider>
            <ThemeDisplay />
        </ThemeProvider>,
    );

    expect(screen.getByText('Theme: system, theme value: light')).toBeInTheDocument();

    mock.uninstall();
});

test('should change theme value on system theme change', async () => {
    const mock = mockMatchMedia();

    render(
        <ThemeProvider>
            <ThemeDisplay />
        </ThemeProvider>,
    );

    mock.changeMedia(true);

    const el = await screen.findByText('Theme: system, theme value: dark');
    expect(el).toBeInTheDocument();

    mock.uninstall();
});

test('should keep selected theme when system theme changes', async () => {
    const mock = mockMatchMedia();

    render(
        <ThemeProvider theme="light">
            <ThemeDisplay />
        </ThemeProvider>,
    );

    mock.changeMedia(true);

    const el = await screen.findByText('Theme: light, theme value: light');
    expect(el).toBeInTheDocument();

    mock.uninstall();
});
