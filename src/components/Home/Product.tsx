
import {Grid, Divider} from "@mui/material"  
import Image from 'next/image'



export default function Product() {
  return (
    <>
    
    <Grid container spacing={2}>
          <Grid item xs={8}>
            <Image src="/images/pourquoi_nous_choisir.png" alt="nous_choisir" width="100" height="60" layout="responsive" objectFit="cover"/>
          </Grid>
          <Grid item xs={4}>
          <h1 className="mt-5 text-3xl font-bold  font-bold text-gray-600">World Business</h1>
          <Divider variant="middle" />
            <h5 className="mt-2 ml-0 text-base text-gray-500">
                 World Business vous emmène aux larges de nos frontières à travers certains de nos partenaires à savoir :
            </h5>
            
              <ul>
                <li className="mt-2 ml-5 text-base text-gray-500">En aviation,</li>
                <li className="mt-2 ml-5 text-base text-gray-500">Les transports en communs dénommés Esprits de vie et Transco,</li>
                <li className="mt-2 ml-5 text-base text-gray-500">Ainsi que les divers Alimentations de la ville de Kinshasa, pour n’en citer que ceux là.</li>
              </ul>
              <p className="mt-10 ml-5 text-base text-gray-500">
              Une vraie panoplie de tous ce que l’on peut retrouver à Kinshasa et dans certaines de nos provinces, un vrai miroir de vente et d’achat de vos articles pour l’image de votre entreprise.
              </p>  
          </Grid>       
        </Grid>
        <Divider><div style={{backgroundColor: "#212121"}}><h1 className="text-3xl font-bold" style={{ color: "#ffff00", marginLeft: 10, marginRight: 10}}>Ils nous ont fait confiance </h1></div></Divider>
        
        <div className="mt-10">
           <Image src="/images/partenaires_exclusif_ethiopian.png" alt="ethiopian" width="50%" height="20%" layout="responsive" objectFit="cover"/>
        </div>
        <div style={{marginTop: "10px", marginBottom: "10px"}}>
              <Divider><div style={{backgroundColor: "#212121"}}><h1 className="text-3xl font-bold" style={{ color: "#ffff00", marginLeft: 10, marginRight: 10}}>Nos Partenaires</h1></div></Divider>
        </div>
        <Grid className="mt-3" container spacing={2}>
          <Grid item xs={4}>
           <Image src="/images/partenaires_kempinski.png" alt="kempinski" width="50%" height="30%" layout="responsive"/>
          </Grid>
          <Grid item xs={4}>
          <Image src="/images/partenaires_univers.png" alt="univers" width="50%" height="30%" layout="responsive"/>
          </Grid>
          <Grid item xs={4}>
          <Image src="/images/partenaires_bcdc.png" alt="bcdc" width="50%" height="30%" layout="responsive"/>
          </Grid>
        </Grid> 
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Image src="/images/partenaires_bollore.png" alt="bolore" width="50%" height="30%" layout="responsive"/>
          </Grid>
          <Grid item xs={4}>
          <Image src="/images/partenaires_canal_plus.png" alt="canal_plus" width="50%" height="30%" layout="responsive"/>
          </Grid>
          <Grid item xs={4}>
          <Image src="/images/partenaires_helios_tower.png" alt="helios_tower" width="50%" height="30%" layout="responsive"/>
          </Grid>
        </Grid>  
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Image src="/images/partenaires_cimko.png" alt="cimko" width="50%" height="30%" layout="responsive"/>
          </Grid>
          <Grid item xs={4}>
          <Image src="/images/partenaires_anapi.png" alt="anapi" width="50%" height="30%" layout="responsive"/>
          </Grid>
          <Grid item xs={4}>
          <Image src="/images/partenaires_equity_bank.png" alt="equity_bank" width="50%" height="30%" layout="responsive"/>
          </Grid>
        </Grid>   
    </>
  )
}
