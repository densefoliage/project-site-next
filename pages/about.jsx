import { getSiteInfo } from "@api/config";

const AboutPage = ({title, tagline, body}) => {
    return (
      <>
      <h1>{ title }</h1>
      <b><p>{ tagline }</p></b>
      <div>
        { body.map((paragraph, i) => <p key={i}>{ paragraph }</p>)}
      </div>
      </>
    )
  };
  
  export default AboutPage;

  export async function getStaticProps(context) {
    const {
      title,
      tagline,
      body
    } = await getSiteInfo()
  
    return {
      props: {
        title: title,
        tagline: tagline,
        body: body
      }
    }
  }