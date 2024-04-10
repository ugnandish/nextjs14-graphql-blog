import request, {GraphQLClient, gql} from "graphql-request";

const graphQLClient = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/clunozoum12iq07wbdjv6l5j2/master");

export const getBlog = async () => {
    const query = gql`
        query blogLists {
            blogLists {
                slug
                description {
                    text
                }
                image {
                    url
                }
                title
            }
        }
    `
    const result = await graphQLClient.request(query);
    return result;
};

export const getSingleBlog = async (slug:any) => {
    const query = gql`
        query getSingleBlog($slug: String!) {
            blogList(where: { slug: $slug }) {
                description {
                    text
                }
                image {
                    url
                }
                title
            }
        }
    `
    
    const slugName = {
        slug,
    };

    const result = await graphQLClient.request(query, slugName);
    return result;
};
 