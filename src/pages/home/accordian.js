import React, { Component } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './jumbo.css';

class AccordianComp extends Component {
    render() {
        return (
            <div id='accWrapper'>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography >{this.props.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {this.props.content}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}

export default AccordianComp
