import { getContactInfo } from "@api/config";
// import { getContactInfo } from "./api/config";

const AboutPage = ({title, body, methods}) => {
    return (
      <>
      <h1>{ title }</h1>
      <div>
        { body.map((paragraph, i) => <p key={i}>{ paragraph }</p>)}
      </div>
      <div>
        { methods.map(({type, address}, i) => <p key={i}>{ type }: {address}</p>)}
      </div>
      </>
    )
  };
  
  export default AboutPage;

  export async function getStaticProps(context) {
    const {
      title,
      body,
      methods,
    } = await getContactInfo()
  
    return {
      props: {
        title: title,
        body: body,
        methods: methods
      }
    }
  }