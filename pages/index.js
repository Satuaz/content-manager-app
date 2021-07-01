import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";
import data from 'pages/api/data'
import { useEffect } from "react";

export default function Home({ resources }) {
    return (
        <Layout>
            <ResourceHighlight resources={resources.slice(0, 2)} />
            <Newsletter />
            <ResourceList resources={resources.slice(2)} />
            <Footer />
        </Layout>
    )
}

// is called every time you will visit the page
// function is executed on the server 
// data are always fresh
export async function getServerSideProps() {
    const resData = await fetch(`${process.env.API_URL}/resources`)
    const data = await resData.json()
    return {
        props: {
            resources: data
        }
    }
}

// is called at the build time, and it's called only once 
// html + json
// export async function getStaticProps() {
//     return {
//         props: {
//             resources: data
//         }
//     }
// }