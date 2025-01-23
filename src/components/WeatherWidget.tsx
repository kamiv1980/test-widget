"use client"

import type React from "react"
import {Box, useTheme, useMediaQuery, Grid, Typography} from "@mui/material"
import CurrentWeather from "./CurrentWeather"
import Forecast from "./Forecast"
import type { WeatherData } from "@/types/weather"

interface WeatherWidgetProps {
    weatherData: WeatherData
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weatherData }) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
    const { name } = weatherData.location
    const date = new Date(weatherData?.location?.localtime).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "2-digit",
        })
    const baseUnit = isSmall ? "140px" : "160px"

    return (
        <Grid container
            sx={{
                p: isSmall ? 1 : 2,
                width: {
                    xs: `calc(${baseUnit} * 2)`,
                    md: `calc(${baseUnit} * 4)`,
                    lg: `calc(${baseUnit} * 4)`,
                },
                height: {
                    xs: `calc(${baseUnit} * 2)`,
                    md: `calc(${baseUnit} * 2)`,
                    lg: `calc(${baseUnit} * 4)`,
                },
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "all 0.3s ease-in-out",
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            }}
        >
            <Grid item xs={12} >
                <Typography
                    variant={isSmall ? "h5" : "h4"}
                    sx={{
                        textAlign:'center',
                        color: theme.palette.text.primary,
                    }}
                >
                    {name}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isSmall ? "column" : "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: isSmall ? 0 : 2,
                        mb: isSmall ? 2 : 3,
                    }}
                >

                    <Typography
                        variant={isSmall ? "body2" : "subtitle1"}
                        sx={{
                            color: theme.palette.text.secondary,
                        }}
                    >
                        {date}
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={12} md={6} xs={12} >
                <CurrentWeather weatherData={weatherData} />
            </Grid>
                <Grid item lg={12} md={6} xs={12}
                      sx={{
                              display: {
                                  xs: "none",
                                  md: "block",
                                  lg: "block",
                              }}}
                          >
                    <Forecast weatherData={weatherData}/>
                </Grid>

        </Grid>
    )
}

export default WeatherWidget

