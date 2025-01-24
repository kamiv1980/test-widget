export interface WeatherData {
  location: {
    name: string
    region: string
    country: string
    localtime: string
  }
  current: {
    temp_c: number
    feelslike_c : number
    wind_kph : number
    wind_dir : string
    pressure_mb : number
    uv : number
    condition: {
      text: string
      icon: string
    }
  }
  forecast: {
    forecastday: Array<{
      date: string
      day: {
        maxtemp_c: number
        mintemp_c: number
        condition: {
          text: string
          icon: string
        }
      }
    }>
  }
}

export interface ErrorData {
  error: string,
}
