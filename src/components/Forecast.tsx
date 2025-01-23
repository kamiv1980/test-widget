import type React from "react"
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material"
import type { WeatherData } from "@/types/weather"

interface ForecastProps {
    weatherData: WeatherData
}

const Forecast: React.FC<ForecastProps> = ({ weatherData }) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Box
            sx={{
                p: isSmall ? 1 : 2,
                flex: 1,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Grid container spacing={isSmall ? 1 : 2}>
                {weatherData.forecast.forecastday.slice(1, 7).map((day) => (
                    <Grid item xs={2} key={day.date}>
                        <Box
                            sx={{
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 0.5,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontSize: isSmall ? "0.75rem" : "0.875rem",
                                }}
                            >
                                {new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}
                            </Typography>
                            <img
                                src={day.day.condition.icon || "/placeholder.svg"}
                                alt={day.day.condition.text}
                                style={{
                                    width: isSmall ? "30px" : "50px",
                                    height: isSmall ? "30px" : "50px",
                                }}
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontSize: isSmall ? "0.75rem" : "0.875rem",
                                }}
                            >
                                {day.day.maxtemp_c}°C
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Forecast

