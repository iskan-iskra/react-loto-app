import { Button, Container, Stack } from "react-bootstrap";
import { ThemeTitles } from "../consts";
import { useTheme } from "../hooks";

export default function AppHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 bg-body-tertiary border-bottom">
      <Container>
        <Stack direction="horizontal">
          <h1 className="">React loto app</h1>
          <Button
            className="ms-auto"
            variant={theme === "light" ? "dark" : "light"}
            onClick={toggleTheme}
          >
            {theme === "light" ? ThemeTitles.DARK : ThemeTitles.LIGHT}
          </Button>
        </Stack>
      </Container>
    </header>
  );
}
