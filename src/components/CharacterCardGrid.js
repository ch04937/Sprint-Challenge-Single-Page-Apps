import React from 'react'

const GridExampleVerticalAlignmentRow = () => (
  <Grid columns={4} centered>
    <Grid.Row verticalAlign='top'>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
        <br />
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='middle'>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
        <br />
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='bottom'>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
        <br />
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleVerticalAlignmentRow
