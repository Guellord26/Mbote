import Head from 'next/head';
// import { Editeur } from'../src/components/editor/editeur';
import { DashboardLayout } from '../src/components/dashboard/dashboard-layout';
import React, { useEffect } from "react";
import dynamic from 'next/dynamic'; 
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Box, Container, Button, Typography} from "@mui/material";

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}

export const Editeur = () => (
  <div className='mb-32'>
  <Container>
     <Typography color="textPrimary" variant="h4">
        EDITEUR
     </Typography>
     <form className="group relative">
          <div>
          <input
            type="text"
            aria-label="Filter projects"
            placeholder="Titre article"
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          />
          </div>
         <div>
         <input
            type="text"
            aria-label="Filter projects"
            placeholder="Description"
            className="mt-5 fomt-5 cus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          />
         </div>
          {/* <select className="form-select px-4 py-3 rounded-full">
            <!-- ... -->
          </select> */}
          <div>
          <input
            type="text"
            aria-label="Filter projects"
            placeholder="Auteur"
            className="mt-5 mb-5 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          />
          </div>
        </form>
<Box sx={{ mb: 3, p: 1, border: "1px solid grey", borderRadius: "5px" }}>
  <Editor
    wrapperClassName="demo-wrapper"
    editorClassName="demo-editor"
    toolbar={{
      inline: { inDropdown: true },
      list: { inDropdown: true },
      textAlign: { inDropdown: true },
      link: { inDropdown: true },
      history: { inDropdown: true },
      image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
    }}
  />
</Box>
<Button
style={{backgroundColor: "black"}}
  // color="primary"
  
  size="large"
  type="submit"
  variant="contained"
>
  Editer
</Button>
</Container>
</div>
);
Editeur.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Editeur;
