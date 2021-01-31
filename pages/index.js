import theme from '@hackclub/theme';
import { NavLink, Box, jsx, Text, Link, Image, Heading, Container } from 'theme-ui';
import Head from 'next/head';
import Content from '../components/index-content.mdx';

export default function Page(){
    return (
        <div>
            <Head>
                <title>MEA Hack Club</title>
                <link rel="shortcut icon" href="/static/favicon.ico"/>
            </Head>
            <Container sx={{position:'absolute', top:[1,2],width:[100,200]}}>
                <Image height="100" width="100" src="images/logo.png"/>
            </Container>
            <Box sx={{ bg: 'sheet', color:'text'}} as="header">
                <Container sx={{ paddingTop: 5, paddingBottom: [3, 4], textAlign: 'center' }}>
                    <Heading as="h1" color="red" variant="title" >
                        MEA Hack Club
                    </Heading>
                    <Text sx={{ paddingTop: '3', display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <NavLink href="https://github.com/MEA-Hack-Club" sx={{ m:'10px'}}>GitHub</NavLink>
                        <NavLink href="/projects" sx={{ m:'10px'}}>Projects</NavLink>
                    </Text>
                </Container>
            </Box>
            <Container sx={{ textAlign:'center' }}>
                <Content/>
            </Container>
            
        </div>
    );
}