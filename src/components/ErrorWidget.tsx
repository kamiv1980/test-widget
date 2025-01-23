'use client'

import React from 'react'
import {Box, Typography, useTheme} from "@mui/material";

export default function ErrorWidget({message}: { message: string }) {

    const theme = useTheme()

    return (
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h5">{message}</Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    mt:1,
                    color: theme.palette.text.secondary,
                }}
            >
                Try again
            </Typography>
        </Box>
    )
}
