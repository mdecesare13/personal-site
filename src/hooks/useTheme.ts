export function useTheme() {
  // Always return dark theme
  return {
    theme: "dark",
    setTheme: () => {}, // No-op function
    systemTheme: "dark"
  };
} 