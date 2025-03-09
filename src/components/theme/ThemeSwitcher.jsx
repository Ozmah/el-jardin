import { useTheme } from "./ThemeProvider";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const {
    darkMode,
    palette,
    themeMenuOpen,
    toggleThemeMenu,
    changeTheme,
    PALETTES,
  } = useTheme();

  // Información de las paletas de colores
  const paletteInfo = {
    [PALETTES.NATURAL_SERENE]: {
      name: "Natural Serene",
      colors: {
        light: [
          "#A3CBE7",
          "#E4EEF9",
          "#7FB069",
          "#5C8D51",
          "#8E6E53",
          "#F8F4E9",
        ],
        dark: [
          "#A3CBE7",
          "#1E2A1C",
          "#7FB069",
          "#5C8D51",
          "#8E6E53",
          "#F8F4E9",
        ],
      },
    },
    [PALETTES.FOREST_BREEZE]: {
      name: "Forest Breeze",
      colors: {
        light: [
          "#89C2E8",
          "#D3E5F3",
          "#7BB86A",
          "#2C6E49",
          "#9C89B8",
          "#F6F4EB",
        ],
        dark: [
          "#89C2E8",
          "#1E3329",
          "#7BB86A",
          "#2C6E49",
          "#9C89B8",
          "#F6F4EB",
        ],
      },
    },
    [PALETTES.MEADOW_STREAM]: {
      name: "Meadow Stream",
      colors: {
        light: [
          "#71B8C5",
          "#E8F4F7",
          "#8CC084",
          "#3F704D",
          "#BE6E8A",
          "#F7F5E8",
        ],
        dark: [
          "#71B8C5",
          "#1F372A",
          "#8CC084",
          "#3F704D",
          "#BE6E8A",
          "#F7F5E8",
        ],
      },
    },
    [PALETTES.SKY_REALM]: {
      name: "Sky Realm",
      colors: {
        light: [
          "#6AADDF",
          "#A7D1F2",
          "#5B9C77",
          "#2D77B0",
          "#C9A9D9",
          "#F8FBFE",
        ],
        dark: [
          "#6AADDF",
          "#1D2F44",
          "#5B9C77",
          "#2D77B0",
          "#C9A9D9",
          "#F8FBFE",
        ],
      },
    },
  };

  return (
    <div className="theme-switcher-container">
      <button
        onClick={toggleThemeMenu}
        className="theme-toggle"
        aria-label="Cambiar tema"
        aria-expanded={themeMenuOpen}
      >
        {darkMode ? (
          <svg className="sun-icon" viewBox="0 0 24 24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.844a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          <svg className="moon-icon" viewBox="0 0 24 24">
            <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
          </svg>
        )}
        <span className="current-theme-indicator"></span>
      </button>

      {themeMenuOpen && (
        <div className="theme-menu">
          <div className="theme-menu-header">Seleccionar Tema</div>
          <div className="theme-palettes">
            {Object.keys(paletteInfo).map((paletteKey) => (
              <div key={paletteKey} className="palette-section">
                <h3 className="palette-name">{paletteInfo[paletteKey].name}</h3>
                <div className="theme-options">
                  <button
                    className={`theme-option ${
                      palette === paletteKey && !darkMode ? "active" : ""
                    }`}
                    onClick={() => changeTheme(paletteKey, false)}
                    aria-label={`${paletteInfo[paletteKey].name} modo claro`}
                  >
                    <div className="theme-preview theme-preview-light">
                      {paletteInfo[paletteKey].colors.light.map(
                        (color, index) => (
                          <span
                            key={index}
                            className="color-dot"
                            style={{ backgroundColor: color }}
                          ></span>
                        )
                      )}
                    </div>
                    <span className="theme-label">Claro</span>
                  </button>

                  <button
                    className={`theme-option ${
                      palette === paletteKey && darkMode ? "active" : ""
                    }`}
                    onClick={() => changeTheme(paletteKey, true)}
                    aria-label={`${paletteInfo[paletteKey].name} modo oscuro`}
                  >
                    <div className="theme-preview theme-preview-dark">
                      {paletteInfo[paletteKey].colors.dark.map(
                        (color, index) => (
                          <span
                            key={index}
                            className="color-dot"
                            style={{ backgroundColor: color }}
                          ></span>
                        )
                      )}
                    </div>
                    <span className="theme-label">Oscuro</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
