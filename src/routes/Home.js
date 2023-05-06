import React from 'react'

// Comps
import Navbar from "../components/Navbar"
import Landing from "../components/Landing"
import LeftGif from "../components/LeftGif"
// import RightGif from "../components/RightGif"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <div style={{ height: "200vh" }} />
      <LeftGif />
    </div>
  )
}