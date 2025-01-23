import React from "react"
import {Box, Typography, useTheme, useMediaQuery} from "@mui/material"
import type { WeatherData } from "@/types/weather"

interface CurrentWeatherProps {
    weatherData: WeatherData
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
    const {
        temp_c,
        feelslike_c,
        wind_kph,
        wind_dir,
        pressure_mb,
        condition,
        uv
    } = weatherData.current
    const {maxtemp_c = 0 ,mintemp_c = 0} = weatherData?.forecast?.forecastday[0].day
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
    const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"))

    return (
        <Box
            sx={{
                textAlign: "center",
                flex: "0 0 auto",
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    flexDirection: isSmall ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: isSmall ? 1 : isMedium ? 2 : 4,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <Typography
                        variant={isSmall ? "h5" : "h4"}
                        sx={{
                            color: theme.palette.text.primary,
                        }}
                    >
                        {temp_c}°C
                    </Typography>
                    <Typography
                        variant={isSmall ? "body2" : "subtitle1"}
                        sx={{
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Feels like: {feelslike_c}°C
                    </Typography>
                    {!isSmall && (
                        <Typography
                            variant="h6"
                            sx={{
                                color: theme.palette.text.primary,
                            }}
                        >
                            <span style={{color: "#1d84fc"}}>
                                {mintemp_c}
                            </span>
                            {" / "}
                            <span style={{color: '#ef3131'}}>
                                {maxtemp_c}
                            </span>
                            {" °C"}
                        </Typography>
                    )}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={condition.icon || "/placeholder.svg"}
                        alt={condition.text}
                        style={{
                            width: isSmall ? "80px" : isMedium ? "80px" : "160px",
                            height: isSmall ? "80px" : isMedium ? "80px" : "160px",
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: {
                            xs: "none",
                            md: "none",
                            lg: "flex",
                        },

                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <Typography
                        variant={isMedium ? "body2" : "subtitle1"}
                        sx={{
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Wind: {wind_kph} kph ({wind_dir})
                    </Typography>
                    <Typography
                        variant={isMedium ? "body2" : "subtitle1"}
                        sx={{
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Pressure: {pressure_mb} mb
                    </Typography>
                    <Typography
                        variant={isMedium ? "body2" : "subtitle1"}
                        sx={{
                            color: theme.palette.text.secondary,
                        }}
                    >
                        UV: {uv} mb
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CurrentWeather
