import React from 'react'
import { withSiteData } from 'react-static'
import {Container, Header} from "semantic-ui-react";

export default withSiteData(({mobile, email}) => (
    <div>
        <div className="page-header teampage-header">
            <Container text>
                <Header
                    as='h1'
                    content='Contact Us'
                    inverted
                    style={{
                        fontSize: mobile ? '2em' : '4em',
                        fontWeight: 'normal',
                    }}
                />
                <Header
                    as='h2'
                    content="Let us know if you have any questions or comments"
                    inverted
                    style={{
                        fontSize: mobile ? '1.5em' : '1.7em',
                        fontWeight: 'normal',
                        marginTop: mobile ? '0.5em' : '1.5em',
                    }}
                />
            </Container>
        </div>
        <div className="contact-container">
            <span>{`Send an email to `}<a href={`mailto:${email}`}>{email}</a></span>
        </div>
    </div>
))