import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto del tema
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Verificar si hay un tema guardado en localStorage
  const storedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(
    storedTheme ? storedTheme === "dark" : true
  );

  // Efecto para aplicar las clases CSS cuando cambia el tema
  useEffect(() => {
    // Actualizar los colores de la raíz
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    // Guardar la preferencia en localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Función para alternar entre temas
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto del tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
