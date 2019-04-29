import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Segment
} from 'semantic-ui-react'
import { withSiteData } from 'react-static'

const HomepageHeading = ({data}) => (
    <div className="page-header homepage-header">
        <Container text>
            <Header
                as='h1'
                content={data.companyName}
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                }}
            />
            <Header
                as='h2'
                content={data.companyTagline}
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
            />
        </Container>
    </div>
)

export default withSiteData((data) => {
    return (
        <div>
            <HomepageHeading data={data}/>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                The Problem
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                {data.problem}
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                The Solution
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                {data.solution}
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src='http://www.psychiatryemrsoftware.com/images/screenshots/Mental-Health-Patient-Dashboard---Psychiatric-EMR-&-Practice-Management-Software.png' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'><a href="/features">Check out Features</a></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
});
