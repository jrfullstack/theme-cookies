import { GetServerSideProps } from 'next';
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Card, FormControl, FormLabel, CardContent, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import Cookies from "js-cookie";
import { Layout } from "@/components/layouts"
import axios from 'axios';

interface Props {
  theme: string;
}


const ThemeChangerPage:FC<Props> = ({theme}) => {

  // console.log({props})

  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;

    // console.log({selectedTheme});

    setCurrentTheme(selectedTheme);

    // m1 localstorage
    localStorage.setItem('theme', selectedTheme);

    // m2 cookies
    Cookies.set('theme', selectedTheme);
  }

  const onClick = async () => {
    const {data} = await axios.get('/api/hello');
    console.log({data})
  }

  useEffect(() => {
    console.log('LocalStorage', localStorage.getItem('theme'));
    console.log("Cookies", Cookies.get("theme"));
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

                  <Button
                    onClick={onClick}
                  >
                    Solicitud
                  </Button>
              </CardContent>
          </Card>
      </Layout>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({req}) => {

  const {theme = 'light', name = 'No name'} = req.cookies;

  const validThemes = ['light', 'dark', 'custom'];

  // console.log({cookies})

  return {
    props: {
      // si theme incluye el theme q estoy recibiendo ese es el q va a regresa, y por defecto el escrito
      theme: validThemes.includes(theme) ? theme : 'light',
      name
    }
  }
}

export default ThemeChangerPage