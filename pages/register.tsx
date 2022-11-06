import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
  const router = useRouter();
  const submitData = (data) => {
    console.log(data)
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      nameMedia: '',
      password: '',
      
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Le mail doit etre valide')
        .max(255)
        .required(
          'Le mail est requi'),
     
      nameMedia: Yup
        .string()
        .max(255)
        .required(
          'Le nom du media est requi'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Le mode passe est requi'),
      
    }),
    onSubmit: (data) => {
      // router.push('/');
      submitData(data)
    }
  });

  return (
    <>
      <Head>
        <title>
          Register | Mbote
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Creer un Compte
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Utilisez votre mail pour creer un compte 
              </Typography>
            </Box>
           
            <TextField
              error={Boolean(formik.touched.nameMedia && formik.errors.nameMedia)}
              fullWidth
              helperText={formik.touched.nameMedia&& formik.errors.nameMedia}
              label="Nom du media"
              margin="normal"
              name="nameMedia"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.nameMedia}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email du media"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Mot de passe"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            
            <Box sx={{ py: 2 }}>
              <Button
                style={{backgroundColor:'black'}}
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Valider
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Vous avais un compte?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Connexion
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
