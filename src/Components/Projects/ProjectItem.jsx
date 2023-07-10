import React from 'react'
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';

function ProjectItem({ name, image, description, ProjectIamge, githublink }) {


  return (

    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      style={{ height: 'auto', borderRadius: '12px' }}
    >
      <Image id='ProjImg'
        objectFit='cover'
        maxW={{ base: '10%', sm: '200px' }}
        src={ProjectIamge}
        alt='Caffe Latte'
        style={{ maxWidth: '20vw', maxHeight: '40vh' }}
      />
      <Stack >
  
        <CardBody style={{ padding: '1rem', backgroundColor: '#aff3d77f' }}>
          <Heading size='md' id='ProjHeading'>{name}</Heading>

          <Text py='2' style={{ fontSize: '1.1rem' }} id='projDesc'>
            {description}
          </Text>

          <Link to={githublink}> <GitHubIcon style={{ position: 'relative', float: 'right', right: '0.4rem', color: 'black', top: '0.8rem' }} id="GitProjIcon" /></Link>

          <div class="icon-container">

            {image.map((project, index) => (
              <img src={project} />

            ))}

          </div>

        </CardBody>

      </Stack>
    </Card>
  )
}

export default ProjectItem
