import React from'react'
import Image from 'next/image'
import Router from 'next/router'
import { Box, Grid, Container} from '@mui/material'

export default function Bannier() {
  const lecture = () => {
    Router.push({
      pathname: "/rubrique",
      // query: { id: id },
  })

}
const lectureContact = () => {
  Router.push({
    pathname: "/contact",
    // query: { id: id },
})

}

  return (
    <div style={{backgroundColor: '#ffff00', marginTop: 60}}>
      <Container>
       <Box>
         <Grid container spacing={2} >
           <Grid item xs={6}>
           
<main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
<div className="sm:text-center lg:text-left">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Votre Magasine </span>
          <span className="block ">Du Business</span>
        </h1>

  <p className=" text-base text-black sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
  Nous vous offrons gratuitement les meuilleurs du business
  </p>
  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">    
    <div className="mt-3 mb-10 sm:mt-0 sm:ml-3">
      <a style={{backgroundColor: "black", color: "white"}}
         onClick={()=> lectureContact()}
        className="flex w-full items-center justify-center rounded-full border border-transparent bg-white px-8 py-3 text-base font-medium hover:bg-white md:py-4 md:px-10 md:text-lg"
      >
        Nos Magasine
      </a>
    </div>
  </div>
</div>
</main>
           
</Grid>
<Grid item xs={6} sx={{mt: 8}}>
<Image
         
  src="/images/pourquoi_nous_choisir.png"
  alt="Picture of the author"
  width="50%" height="28%" layout="responsive"
/>
</Grid>           
</Grid>

       </Box>
       </Container>
    </div>
  )
}