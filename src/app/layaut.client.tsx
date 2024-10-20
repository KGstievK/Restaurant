"use client"
import LayoutSide from '@/components/Layout/LayoutSide'
import ReduxProvider from '@/providers/ReduxProvider'
import { League_Spartan } from 'next/font/google'
import React, { FC, ReactNode } from 'react'

interface LayoutClientType {
  children: ReactNode
}

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: "600", // Укажите нужный вес (например, 400)
});

const LayoutClient: FC<LayoutClientType> = ({children}) => {
  return (
    <div>
     <ReduxProvider>
			<LayoutSide>{children}</LayoutSide>
		</ReduxProvider>
    </div>
  )
}

export default LayoutClient