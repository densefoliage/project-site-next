import { getSiteInfo, getMenuLinks, getPlaces } from "@api/config"
import { getAllContent } from "@api/content";
import { getUniqueListBy } from "@utils/getUniqueListBy";

import { Typography, Box, Paper } from "@mui/material";
import { Masonry } from "@mui/lab";

import MuiNextLink from "@components/MuiNextLink"

import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';

import Image from 'next/image'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  borderRadius: theme.spacing(2),
  color: theme.palette.text.secondary,
  overflow: "hidden",
  "&:hover":{
    backgroundColor:"#34343c",
    transform: "scale(1.01)"
  }
}));

const Homepage = ({ siteInfo, menuLinks, places, content }) => {

  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const { title, tagline, body } = siteInfo;

  return (
    <>
      <Box
        sx={{
          maxWidth: "sm",
          mx: "auto",
          p: 4,
          textAlign: "justify"
        }}
      >
        <h1>{title}</h1>
        <Box
            sx={{
              fontWeight: "bold",
              mb: 4
            }}
          >
        <Typography>

            {tagline}
        </Typography>
        </Box>
        <Masonry 
          columns={matches ? 2 : 1} 
          spacing={2}
          sx={{
            m:0
          }}
        >
          {menuLinks.map(({ title, type, image, alt, url, placeholder }, i) => (
            <Item key={i}>
              <MuiNextLink
              activeClassName="active"
              href={`${url}`}
              sx={{
                textDecoration: "none"
              }}
              >
                <Box
                  sx={{
                    width: 1,
                    paddingBottom: "100%",
                    position: "relative"
                  }}
                >
                  <Image
                    src={`/${image}`}
                    objectFit="cover"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={placeholder}
                    alt={alt}
                  />
                </Box>
                <Box
                  sx={{
                    py: 1,
                    px: 2
                  }}
                >
                  <Box
                  sx={{
                    color:"text.secondary",
                    fontSize:"0.75rem"
                  }}
                  >
                    {type}:
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "white"
                    }}
                  >
                      {title}
                  </Typography>
                </Box>
              </MuiNextLink>
            </Item>
          )
          )}
          {/* { content.map( ({title, place, slug, extension}, i) => (
          <Item key={i}>
            <MuiNextLink activeClassName="active" href={`/projects/${slug}`}>
            <Box
              sx={{
                color: "white"
              }}
            >
              { title }
            </Box>
            </MuiNextLink>
            </Item>
          ) 
        )} */}
        </Masonry>
        {/* <div>Sort by: PLACE or METHOD</div>
      <br/>
      <div>
        { content.map( ({title, place, slug, extension}, i) => (
          <div key={i}>
                            <MuiNextLink activeClassName="active" href={`/projects/${slug}`}>
            <div>
              <b>Title: </b>{ title }
            </div>
            <div>
              <b>Extension: </b>{ extension }
            </div>
            <div>
              <b>Place:</b> { place } 
            </div>
            <br/>
            </MuiNextLink>
            </div>
          ) 
        )}
      </div>
      <h2>Places</h2>
      <div>
        { places.map( ({name, id}) => <li key={id}>{ name }</li> )}
      </div> */}
      </Box>
    </>
  )
};

export default Homepage;


export async function getStaticProps() {
  const siteInfo = await getSiteInfo();
  const menuLinks = await getMenuLinks();

  return {
    props: {
      siteInfo: siteInfo,
      menuLinks: menuLinks,
    }
  }
}