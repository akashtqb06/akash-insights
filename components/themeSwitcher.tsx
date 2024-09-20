import { useEffect, useMemo, useState } from "react";

export default function ThemeSwitcher() {
  interface Tcolors {
    bg: string;
    ring: string;
    theme: string;
  }
  const colors: Tcolors[] = useMemo(
    () => [
      { bg: "bg-[#225aa0]", ring: "ring-[#225aa0]", theme: "" },
      { bg: "bg-[#e11d48]", ring: "ring-[#e11d48]", theme: "themeDiversity" },
      { bg: "bg-[#f59e0b]", ring: "ring-[#f59e0b]", theme: "themeLocalTalent" },
      { bg: "bg-[#059669]", ring: "ring-[#059669]", theme: "themeEnvironment" },
      { bg: "bg-[#475569]", ring: "ring-[#475569]", theme: "themeNeutral" }
    ],
    []
  );
  const [index, setIndex] = useState<number>(0);
  const [colorMode, setColorMode] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const theme: string | null = localStorage.getItem("theme");
    const colorModeString: string | null = localStorage.getItem("mode");
    const colorMode: boolean = colorModeString === "true";
    setColorMode(colorMode);
    if (theme !== null && colorMode) {
      setTheme(theme);
      document
        .querySelector("html")
        ?.setAttribute("data-theme", "dark");
      const foundIndex = colors.findIndex((color) => color.theme === theme);
      if (foundIndex !== -1) {
        setIndex(foundIndex);
      }
    } else if (theme !== null) {
      setTheme(theme);
      document.querySelector("html")?.setAttribute("data-theme", theme);
      const foundIndex = colors.findIndex((color) => color.theme === theme);
      if (foundIndex !== -1) {
        setIndex(foundIndex);
      }
    }
  }, [colors]);
  const changeTheme = (theme: string, idx: number, colormode: boolean) => {
    setIndex(idx);
    setTheme(theme);
    localStorage.setItem("theme", theme);
    setColorMode(colormode);
    localStorage.setItem("mode", colormode.toString());
    if (colormode) {
      document
        .querySelector("html")
        ?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="flex w-full">
      <button
        onClick={() => changeTheme(theme, index, !colorMode)}
        aria-label="theme switching"
        type="button"
        className="group flex max-w-[2.25rem] rounded-lg h-9 w-9 items-center justify-center"
      >
        {colorMode ? (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative size-5 text-foreground duration-500 group-hover:rotate-[360deg]"
          >
            <path
              fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative size-5 text-foreground duration-300 group-hover:rotate-180"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
          </svg>
        )}
      </button>
      {/* <ul className="flex items-center flex-wrap gap-4">
        {colors.map((item, idx) => (
          <li key={idx} className="flex-none">
            <label htmlFor={item.bg} className="block relative w-6 h-6">
              <input
                id={item.bg}
                type="radio"
                checked={idx == index ? true : false}
                name="color"
                value={item.theme}
                className="sr-only peer"
                onChange={(e) => changeTheme(e.target.value, idx, colorMode)}
              />
              <span
                className={`inline-flex justify-center items-center w-full h-full rounded-full peer-checked:ring ring-offset-2 cursor-pointer duration-150 ${item.bg} ${item.ring}`}
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white absolute inset-0 m-auto z-0 pointer-events-none hidden peer-checked:block duration-150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </label>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
