import React from 'react';
import Navbar from '../lpn-navigation/navigation';
import back from '../../assets/bg.jpg';
import './home.css';
import {Button} from '@material-ui/core';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ChartSection from '../lpn-chart/chartSection';
import ERCToken from './ercToken';
import Roadmap from './advantages';
import SubForm from './subForm';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div id='navWrapper'>
                    <Navbar />
                </div>
                <img src={back} id='background'/>
                <div id='jumboTronWrapper'>
                    <div id='leftJumbo'>
                        <h1>Amazo ICO is Launching on 02-09-2021</h1>
                        <h4>Revolutionizing The Forex, Construction And Transport Industry</h4>
                        <div>
                            <Button variant="contained" id='buyBtn'>
                                BUY TOKEN
                            </Button>
                        </div>
                    </div>
                    <div id='rightJumbo'>
                        <div id='timerAnimation'>
                            <div class="showcase">
                                <div class="loader loader-classic"></div>
                            </div>
                            <div class="showcase-two">
                                <div class="loader-two loader-classic-two"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ERCToken />
                </div>
                <div>
                    <ChartSection />
                </div>
                <div>
                    <Roadmap />
                </div>
                <div>
                    <SubForm />
                </div>
            </div>
        )
    }
}
export default Home;