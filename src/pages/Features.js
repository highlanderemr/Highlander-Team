import React from 'react'
import { withSiteData } from 'react-static'
import {Container, Header, Item} from "semantic-ui-react";

export default withSiteData(({features, featuresTagline, mobile}) => (
    <div>
        <div className="page-header teampage-header">
            <Container text>
                <Header
                    as='h1'
                    content='Features'
                    inverted
                    style={{
                        fontSize: mobile ? '2em' : '4em',
                        fontWeight: 'normal',
                    }}
                />
                <Header
                    as='h2'
                    content={featuresTagline}
                    inverted
                    style={{
                        fontSize: mobile ? '1.5em' : '1.7em',
                        fontWeight: 'normal',
                        marginTop: mobile ? '0.5em' : '1.5em',
                    }}
                />
            </Container>
        </div>
        <div className="features-container">
            <Item.Group className="features-list">
                {features.map((feature) => (
                    <Item key={feature.description}>
                        <Item.Content>
                            <Item.Header>{feature.description}</Item.Header>
                            <Item.Description>
                                {feature.explanation}
                            </Item.Description>
                            <Item.Extra>{`Example: ${feature.example}`}</Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </div>
    </div>
))