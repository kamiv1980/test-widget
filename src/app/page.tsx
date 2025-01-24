import React from "react"
import { Box, Container } from "@mui/material"
import { getWeatherData } from "@/actions/getWeatherData"
import WeatherWidget from "@/components/WeatherWidget";
import ErrorWidget from "@/components/ErrorWidget";

export default async function Home(props: { searchParams: Promise<Record<string, string | undefined>> })  {
    const searchParams = await props.searchParams;
    const data = await getWeatherData(searchParams)


    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                p: 2,
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                }}
            >
                {('error' in data) ?
                    <ErrorWidget message={data.error}/>
                    :
                    <WeatherWidget weatherData={data} />
                }

            </Container>
        </Box>
    )
}
