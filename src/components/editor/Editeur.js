import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Box, Container, Button, Typography} from "@mui/material";

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
  <Container>
     <Typography
                color="textPrimary"
                variant="h4"
              >
                  EDITEUR
              </Typography>
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
                color="primary"
                // disabled={formik.isSubmitting}
                // fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Editer
              </Button>
</Container>
);