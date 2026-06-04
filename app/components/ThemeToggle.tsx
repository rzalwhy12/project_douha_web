    'use client';

    import { useTheme } from 'next-themes';
    import { useEffect, useState } from 'react';
    import { Moon, Sun } from 'lucide-react';

    export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    const isDark = currentTheme === 'dark';

    return (
        <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
        >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
    }
