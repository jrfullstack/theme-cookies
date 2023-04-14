import { ChangeEvent, useEffect, useState } from "react";
import { Card, FormControl, FormLabel, CardContent, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Cookies from "js-cookie";
import { Layout } from "@/components/layouts"

const ThemeChangerPage = () => {

  const [currentTheme, setCurrentTheme] = useState('light');

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;

    console.log({selectedTheme});

    setCurrentTheme(selectedTheme);

    // m1 localstorage
    localStorage.setItem('theme', selectedTheme);

    // m2 cookies
    Cookies.set('theme', selectedTheme);
  }

  useEffect(() => {
    console.log('LocalStorage', localStorage.getItem('theme'))
  }, [])
  

  return (
      <Layout>
          <Card>
              <CardContent>
                  <FormControl>
                      <FormLabel>Tema</FormLabel>

                      <RadioGroup value={currentTheme} onChange={onThemeChange}>
                          <FormControlLabel
                              value="light"
                              control={<Radio />}
                              label="light"
                          />
                          <FormControlLabel
                              value="dark"
                              control={<Radio />}
                              label="dark"
                          />
                          <FormControlLabel
                              value="custom"
                              control={<Radio />}
                              label="custom"
                          />
                      </RadioGroup>
                  </FormControl>
              </CardContent>
          </Card>
      </Layout>
  );
}

export default ThemeChangerPage