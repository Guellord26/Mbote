import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Box, Container, Button, Typography, Divider} from "@mui/material";
import { articles } from '../../__mocks__/articles'
import { useRouter } from "next/router";
import Image from 'next/image'


export const ReaderPage = () => {
    const { query } = useRouter();
    console.log(query.id)
    const id = query.id
return (

          <>
            {articles.map((article) => (
              <>{article.id == id ? 
                // <Divider />
                <>
               
                <Image
                    src={article.media}
                    alt="logo"
                    width={1000}
                    height={300}
                  />
                <h1>{article.title}</h1> 
                <h3>
                    {article.description}
                </h3>
                <Divider/>
                <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
  </p>
  <p>
    Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
    eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
    Interdum praesent ut penatibus fames eros ad consectetur sed.
  </p>
  <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
  </p>
  <p>
    Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
    eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
    Interdum praesent ut penatibus fames eros ad consectetur sed.
  </p>
                </>
                : ""

            }
               
               
              </>
            ))}
          </>
       
)};