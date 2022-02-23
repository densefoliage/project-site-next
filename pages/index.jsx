import { getSiteInfo, getPlaces } from "@api/config"
import { getAllContent } from "@api/content";
import { getUniqueListBy } from "@utils/getUniqueListBy";

import { Typography } from "@mui/material";

import MuiNextLink from "@components/MuiNextLink"

const Homepage = ({ title, tagline, places, content }) => {
  return (
    <>
      <h1>{ title }</h1>
      <div>
        { tagline }
      </div>
      <h2>Outputs</h2>
      <div>Sort by: PLACE or METHOD</div>
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
      </div>
    </>
  )
};

export default Homepage;


export async function getStaticProps() {
  const siteInfo = await getSiteInfo();
  const places = await getPlaces();
  const content = getUniqueListBy(
    await getAllContent(), 
    'title'
    );

  return {
    props: {
      title: siteInfo.title,
      tagline: siteInfo.tagline,
      places: places,
      content: content
    }
  }
}