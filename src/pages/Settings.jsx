import React, { useState, useEffect } from 'react';

export default function Settings() {
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <div className="text-center">
            <label className="flex items-center justify-center gap-2">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                />
                Enable Dark Mode
            </label>
        </div>
    );
}
