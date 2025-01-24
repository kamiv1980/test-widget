"use server"

import type { WeatherData } from "@/types/weather"
import {ErrorData} from "@/types/weather";

const WEATHER_API_KEY = 'a5a599da2d4c4c8399f175631252201'

export async function getWeatherData(searchParams: Record<string, string | undefined>): Promise<WeatherData | ErrorData> {
  const location = searchParams.location ?? "Kyiv"
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=7`,
    { next: { revalidate: 3600 } }, // Revalidate every hour
  )

  if (!response.ok) {
    return {
      error: 'Failed to fetch weather data!' }
  }

  return response.json()
}

