import React from 'react'
import { withSiteData } from 'react-static'
import {Container, Header, Card, Image, Grid} from "semantic-ui-react";

export default withSiteData(({ team, teamTagline }) => (
  <div>
      <div className="page-header teampage-header">
          <Container text>
              <Header
                  as='h1'
                  content='Meet the team'
                  inverted
                  style={{
                      fontSize: '4em',
                      fontWeight: 'normal',
                  }}
              />
              <Header
                  as='h2'
                  content={teamTagline}
                  inverted
                  style={{
                      fontSize: '1.7em',
                      fontWeight: 'normal',
                      marginTop: '1.5em',
                  }}
              />
          </Container>
      </div>
      <div className="team-members">
          <Grid stackable doubling>
              <Grid.Row columns={4}>
                  {team.map((member, index) => (
                      <Grid.Column key={`team-member-${index}`}>
                          <Card centered>
                              <Image src={member.image}/>
                              <Card.Content>
                                  <Card.Header>{member.name}</Card.Header>
                                  <Card.Meta>
                                      <span className='role'>{member.role}</span>
                                  </Card.Meta>
                                  <Card.Description>{member.description}</Card.Description>
                              </Card.Content>
                          </Card>
                      </Grid.Column>
                  ))}
              </Grid.Row>
          </Grid>
      </div>
  </div>
))
