import * as React from 'react';
import { Divider, Icon,Image, Menu, Sidebar } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import * as Qbiplogo from '../img/QBipLogoB.png';

import './navbar.component.scss';

// NavBar Component
export class NavBar extends React.Component<any, any> {
  public state = {
    isVisible: false,
  }

  private handleClick = () => this.setState({isVisible: !this.state.isVisible});

  public render() {
    const { isVisible } = this.state;
    if (isVisible) {
      return (
        <Sidebar
          as={Menu}
          animation='slide along'
          direction='left'
          icon='labeled'
          onHide={this.handleClick}
          inverted
          vertical
          visible={true}
          className='gb-navbar'
        >
          <Menu.Item as={Link} to='/' header={true}><Image className="brand" src={Qbiplogo}/></Menu.Item>
          <Divider />
          <Menu.Menu>
            <Menu.Item onClick={this.handleClick} className='menuItem' >
              <span className='link'><Icon className='iconSpacing' name='arrow left' />Retour</span>
            </Menu.Item>
            <Menu.Item as={NavLink} className='menuItem' exact strict to='/' >
              <span className='link'><Icon className='iconSpacing' name='home' />Accueil</span>
            </Menu.Item>
            <Menu.Item as={NavLink} className='menuItem' exact strict to='/calendrier'>
              <span className='link'><Icon className='iconSpacing' name='calendar outline' />Calendrier</span>
            </Menu.Item>
            <Menu.Item as={NavLink} className='menuItem' exact strict to='/scenarios'>
              <span className='link'><Icon className='iconSpacing' name='book' />Vos Scénarios</span>
            </Menu.Item>
            <Menu.Item as={NavLink} className='menuItem' exact strict to='/scanner'>
              <span className='link'><Icon className='iconSpacing' name='qrcode' />Vos Scanner</span>
            </Menu.Item>
            <Menu.Item as={NavLink} className='menuItem' exact strict to='/equipe'>
              <span className='link'><Icon className='iconSpacing' name='users' />Votre Équipe</span>
            </Menu.Item>
            <Menu.Item as={NavLink} className='menuItem' exact strict to='/connexion'>
              <span className='link'><Icon className='iconSpacing' name='sign in' />Se connecter</span>
            </Menu.Item>
          </Menu.Menu>
        </Sidebar>
      );
    }
   
  }
}
// Affichage du code de nationalité choisi
document.getElementById("type-of-service").addEventListener("change", function (e) {
    console.log("Code de type-of-service : " + e.target.value);
    
    // Affiche de toutes les données saisies ou choisies   
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "ENG":
        console.log("Vous êtes anglais (e)");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});
