import React from "react";
import Panel from "nav-frontend-paneler";
import { Knapp, Hovedknapp } from "nav-frontend-knapper";
import { Normaltekst, Innholdstittel } from "nav-frontend-typografi";
import { redirectToLogin } from '../Authentication/Api'

export default function Consent({ consent, onClick, hjelpeTekst }) {

    const panelBackground = {
        background: '#fff'
    }

    const flex = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const maxWidth = {
        maxWidth: '600px'
    }

    const fontSize = {
        fontSize: '1.3em'
    }

    const padding = {
        padding: '10px'
    }

    const headerMargin = {
        marginBottom: '15px'
    }

    return (
        <Panel style={{ ...panelBackground, ...maxWidth, ...flex }}>
            <div style={padding}>
                <Innholdstittel style={headerMargin}>Vi henter informasjon fra Skatteetaten </Innholdstittel>
                <Normaltekst style={headerMargin}>
                    Vi henter opplysninger fra Skatteetaten for å regne ut omtrent hvor mye du kunne fått i dagpenger i dag. Vi sletter opplysningene etter en time.
                </Normaltekst>
            </div>
            <Knapp onClick={onClick} >Fortsett</Knapp>

            {// DIV WITH CONTENTS UNDERNEATH SHOULD BE DELETED AFTER TESTING
            }
            <div style={{ marginTop: '10px' }}>
                <Hovedknapp onClick={() => redirectToLogin()}>log in</Hovedknapp>
            </div>
        </Panel >
    );

}