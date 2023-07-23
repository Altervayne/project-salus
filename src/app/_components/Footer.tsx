'use client'
/* Assets Imports */
import adCamFooterLogo from "/public/ad-cam_logo_nobg.png"
/* Utils & Data Imports */
import { PageInfo } from "../_types/dataFiles"
const pageList: PageInfo[] = require("../_data/pageList.json")
const conditionsList: PageInfo[] = require("../_data/conditionsList.json")
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Image from "next/image"
import { IconButton, SocialButton } from "./Button"
import { NavLinkFooter } from "./NavLink"
import ContactForm from "./ContactForm"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",

            position: "relative",
            zIndex: 4,

            width: "100%",
            height: theme.spacing(28),
            marginTop: theme.spacing(5),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 100%)",
            backdropFilter: "blur(2px)",
        },
        logoRoot: {
            display: "flex",
            alignItems: "center",
            
            height: "100%",
            width: "auto",
        },
        logoImage: {
            height: "60%",
            width: "auto",

            alignSelf: "center",

            marginRight: theme.spacing(4),
        },
        logoInfoContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        logoInfoTitle: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            marginTop: 0,
            marginBottom: theme.spacing(2),

            color: "#FFF",
        },
        logoInfoButtons: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",

            marginTop: 0,
            marginBottom: theme.spacing(2),

            width: "100%",
        },
        footerNavRoot: {
            height: "100%",

            marginTop: theme.spacing(5),
        },
    }
})

function FooterNavigation() {
    const { classes } = useStyles()

    return (
        <div className={ classes.footerNavRoot }>
            <h3 className={ classes.logoInfoTitle }>
                { `Navigation` }
            </h3>
            {
                pageList.map(({ name, link, text }) => (
                    <NavLinkFooter  key={ name }
                                    isActive={ false }
                                    link={ link }
                                    linkText={ text } />
                ))
            }
        </div>
    )
}

function FooterConditions() {
    const { classes } = useStyles()

    return (
        <div className={ classes.footerNavRoot }>
            <h3 className={ classes.logoInfoTitle }>
                { `Conditions` }
            </h3>
            {
                conditionsList.map(({ name, link, text }) => (
                    <NavLinkFooter  key={ name }
                                    isActive={ false }
                                    link={ link }
                                    linkText={ text } />
                ))
            }
        </div>
    )
}



export default function Footer() {
    const { classes } = useStyles()

    return (      
        <footer className={ classes.root }>
            <div className={ classes.logoRoot }>
                <Image  className={ classes.logoImage }
                        src={ adCamFooterLogo }
                        alt="Logo de AD CAM, installateurs de systèmes de surveillance près d'Orléans"
                />
                <div className={ classes.logoInfoContainer }>
                    <h3 className={ classes.logoInfoTitle }>
                        <span>{ `Installateur d’alarme et vidéo` }</span>
                        <span>{ `surveillance à Orléans (45)` }</span>
                    </h3>
                    <div className={ classes.logoInfoButtons }>
                        <IconButton icon={ 'phone' } text={ '06 95 86 91 76' } link={ 'tel:+33695869176' } description={ 'Appelez nous au 06 95 86 91 76' }/>
                        <SocialButton icon={ 'facebook' } link={ 'https://www.facebook.com/AD-CAM-103597488861540' } description={ 'Suivez nous sur Facebook.' }/>
                    </div>
                    <IconButton icon={ 'certificate' } text={ 'Certifié AJAX Fibra' } link={ '/ajax-fibra_certificate.pdf' } description={ `Nous sommes certifiés pour l'installation d'équipements AJAX Fibra.` }/>
                </div>
            </div>
            <FooterNavigation />
            <FooterConditions />
            <ContactForm location={ "footer" } />
        </footer>
    )
}