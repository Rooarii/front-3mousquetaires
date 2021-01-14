import formations from '../json/formations.json';
import projects from '../json/projects.json';
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const CategoryMainPage = () => {
  return (
    <>
      <h1>Projects :</h1>
      <div className="card-wrap">
      {projects.projectElectronique.map(e => {
  return (
      <Card className="card-body">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{e.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to='/project'><Button>Button</Button></Link>
        </CardBody>
      </Card> 
  )
})}
      </div>
      
      <h1>Formations :</h1>
      <div className="card-wrap">
      {formations.electronique.map(e => {
  return (
      <Card className="card-body">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{e.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to='/formation'><Button>Button</Button></Link>
        </CardBody>
      </Card> 
  )
})}
      </div>
    </>
  )
}

export default CategoryMainPage;