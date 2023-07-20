'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Type Imports */
import { MouseEventHandler } from 'react'
/* Components Imports */
import { FunctionButton } from "./Button"



const inputVariants: Variants = {
    rest: {
        borderColor: "rgba(255, 255, 255, 0)",
    },
    hover: {
        borderColor: "rgba(252, 105, 105, 1)",
    },
    focus: {
        borderColor: "rgba(200, 4, 4, 1)",
    }
}



const useStyles = makeStyles()((theme) => {
    return {
        footerRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",

            width: "30%",

            color: "#FFFFFF",
        },
        genericRoot: {
        },
        formTitle: {
            width: "100%",
            fontWeight: 600,
        },
        inputContainer: {
            marginBottom: theme.spacing(2),

            width: "48%",
        },
        inputLabel: {
            marginLeft: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
        },
        inputField: {
            boxSizing: "border-box",

            margin: "0",
            padding: theme.spacing(0.5),
            outline: "none",
            border: "1px solid transparent",
            borderRadius: theme.spacing(0.5),

            width: "100%",
            maxWidth: "100%",
        },
        messageField: {
            boxSizing: "border-box",

            margin: "0",
            padding: theme.spacing(0.5),
            outline: "none",
            border: "1px solid transparent",
            borderRadius: theme.spacing(0.5),

            minHeight: theme.spacing(8),
            minWidth: "100%",
            resize: "none",
        }
    }
})

interface ContactFormProps {
    location: string;
}

const testHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    console.log("Ahah test")
}



export default function ContactForm({ location }: ContactFormProps) {
    const { classes } = useStyles()

    return (      
        <form className={ location === "footer" ? classes.footerRoot : classes.genericRoot }>
            <h3 className={ classes.formTitle }>{ `Contactez-nous` }</h3>

            <div className={ classes.inputContainer }>
                <label className={ classes.inputLabel }>{ `Nom` }</label>
                <motion.input   className={ classes.inputField }
                                variants={ inputVariants }
                                initial="rest"
                                whileHover="hover"
                                whileFocus="focus"
                />
            </div>
            <div className={ classes.inputContainer }>
                <label className={ classes.inputLabel }>{ `Adresse Email` }</label>
                <motion.input   className={ classes.inputField }
                                variants={ inputVariants }
                                initial="rest"
                                whileHover="hover"
                                whileFocus="focus"
                />
            </div>


            <motion.textarea    className={ classes.messageField }
                                variants={ inputVariants }
                                initial="rest"
                                whileHover="hover"
                                whileFocus="focus"
            />

            <FunctionButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" } handler={ testHandler } />
        </form>
    )
}
