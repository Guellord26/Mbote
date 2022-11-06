import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import NextLink from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div>
      <div className="" style={{ backgroundColor: "#212121", color: "grey" }}>
        <Container>
          <div className="grid gap-2 grid-cols-3 mt-5">
            <div className="">
              <p className="text- mt-5">
                World business est un magasine qui a pour mission première de
                promouvoir les entrepreneurs et de parler du business Congolais
                au Congo et partout ailleurs
              </p>

              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </div>
            {/* <div className="">
              <p>Conditiongénérales d'utilisation</p>
              <p>Politique de Confidentialité</p>
            </div> */}
            <div className="mt-5">
              <p>World business magasine</p>
              <p>World business l'entreprise</p>
              <p>World business parteneire</p>
              <p>Nous laisser un message</p>
            </div>
            <div className="mt-5">News letter</div>
          </div>
        </Container>
      </div>
<div className="h-12" style={{ backgroundColor: "black", color: "grey" }}>
<div className="text-center" >
<h5 className="font-serif">
          © 2019 Tous droits réservés - World Business.
        </h5>
        
      </div>
</div>
      
    </div>
  );
}

export default Footer;
