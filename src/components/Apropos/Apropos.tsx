import * as React from 'react';
import Stack from '@mui/material/Stack';
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import Button from '@mui/material/Button';
import {Grid, Divider, Container} from "@mui/material"  
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const equipe =[
  {nom: "Elysé Zoé NinaBUMBA", title:"CEO and Founder", img:"/images/partenaires_bcdc.png"},
  {nom: "Arnold Lundu", title:"Délégué Commercial", img:"/images/partenaires_bcdc.png"},
  {nom: "Guelor Looma", title:"Expert Créa", img:"/images/partenaires_bcdc.png"},
  {nom: "Hadassa Bangi", title:"Directrice Commerciale et Marketing", img:"/images/partenaires_bcdc.png"}

]


const features = [
  {
    name: 'DISTRIBUTION',
    description:
      "A bord des avions Ethiopian'\'s Airlines, entreprises publiques, hôtels (Kempinsky Hôtel), entreprises partenaires, salon V.I.P, salon de coiffure, boutique d'\'habillement, Université, Bus et taxi...",
    icon: GlobeAltIcon,
  },
  {
    name: '1OO% Graduit',
    description:
      'Nos magazines sont 100% GRATUIT',
    icon: ScaleIcon,
  },
  {
    name: 'PÉRIODICITÉ',
    description:
      'Nous produisons un nouveau numéro tous les deux mois.',
      icon: ScaleIcon,
  },
  {
    name: 'EXEMPLAIRES',
    description:
      'Nous produisons pour chaque numéro, 10.000 exemplaires.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]


function Apropos () {
  return (
    <Container sx={{mt:15}}>
      <Grid container spacing={2} sx={{mb:10}}>
         
          <Grid item xs={4} sx={{mt: 6}}>
          <Divider><div style={{backgroundColor: "#212121"}}><h1 className="text-3xl text-base text-gray-500" style={{ color: "#ffff00", marginLeft: 10, marginRight: 10}}> NOUS SOMME WORLD BUSINESS</h1></div></Divider>
          
              <p className="mt-10 ml-5 text-base text-gray-500">
              Nous vous offrons une occasion unique de pouvoir faire valoir votre marque ou tout autre de vos produits à travers une panoplie de personnes attentifs composée de divers genre de consommateurs et ce, à tous les échelles de la société.
              </p>  
          </Grid> 
          <Grid item xs={8}>
            <Image src="/images/pourquoi_nous_choisir.png" width="100" height="60" layout="responsive" objectFit="cover"/>
          </Grid>      
      </Grid>
      {/* <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div> */}
        <Divider><div style={{backgroundColor: "#212121"}}><h1 className="text-3xl font-bold" style={{ color: "#ffff00", marginLeft: 10, marginRight: 10}}>Notre équipe</h1></div></Divider>
        
         <h2 className="text-base text-gray-500 text-center" style={{marginTop: 7}}>
          Nous sommes une équipe dévouée, motivée, notre but est de faire de ce magazine une vraie plateforme d’interaction publicitaire africaine. Imaginer et faire sont nos leitmotiv.
        </h2>
      <div >
      <Grid container spacing={1} sx={{mt:5}}>
      {
        equipe.map((item, index) => (
          <Grid key={index} item xs={6} md={3}>
          <Card >
             <CardActionArea>
             <Image src={item.img} alt={item.nom} width="50%" height="30%" layout="responsive" />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {item.nom}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
        ))
      }  
      </Grid> 
      </div>
       
     
    </Container>
  );
}
export default Apropos
