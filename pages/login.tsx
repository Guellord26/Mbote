import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../src/icons/facebook';
import { Google as GoogleIcon } from '../src/icons/google';

const Login = () => {
  const router = useRouter();
  const submitData = (data) => {
    console.log(data)
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Le mail doit etre valide')
        .max(255)
        .required(
          'Le mail est requi'),
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
        <title>Connexion | Mbote</title>
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
                Connexion
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Connexion via 
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                {/* <Button
                  style={{backgroundColor:'blue'}}
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Facebook
                </Button> */}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                {/* <Button
                  fullWidth
                  style={{backgroundColor:'red'}}
                  startIcon={<GoogleIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Google
                </Button> */}
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                ou avec le mail
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Mail du Media"
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
              label="Password"
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
                style={{backgroundColor: 'black'}}
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Vlider
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Vous n avais pas de compte?
              {' '}
              {/* <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Cr??er un ici
                </Link>
              </NextLink> */}
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
