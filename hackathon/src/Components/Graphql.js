import React from 'react'
import {GraphQLClient,gql} from 'graphql-request';
import Card from './Card';

const graphcms = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/clfdgzdpb0tkt01uk8fo4cek1/master');

const QUERY = gql`
{
    posts{
        id,
        title,
        datePublished,
        slug,
        content{
            html
        }
        author{
            name,
            avatar{
                url
            }
        }
        coverPhoto{
            publishedAt{
                createdBy{
                    id
                }
                url
            }
        }
    }
}
`;
export async function getInfo(){
    const { posts } = await graphcms.request(QUERY);
    return{
        props:{
            posts,
        },
    };
}

export default function Graphql({posts}) {
   return(
        <>
        <div className={index.container}>
             <main className={index.main}>
                {
                    posts.map((post)=>(
                    <Card title ={post.title} 
                    author={post.author} 
                    coverPhoto={post.coverPhoto} 
                    key={post.id} 
                    datePublished={post.datePublished} 
                    slug={post.slug} ></Card>
                    )
                    )
                }
            </main>
        </div>
           
        </>
   );
}
