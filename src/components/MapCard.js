import React from "react"
import styled from "styled-components"
import { appKey } from "../settings";

class MapCard extends React.Component{
    componentDidMount() {
        const script = document.createElement("script");

        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=" + appKey + "&autoload=false";

        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                let container = document.getElementById("map_" + this.props.id);
                let options = {
                    center: new window.kakao.maps.LatLng(this.props.x, this.props.y),
                    level: 4
                };
                
                const map = new window.kakao.maps.Map(container, options);
            });
        }
    }

    render(){
        return(
            <CardContainer>
                <Maps id={"map_" + this.props.id}/>
                <CardHeader>
                    <Title>
                        {this.props.title}
                    </Title>
                </CardHeader>
            </CardContainer>
        )
    }
}

const Maps = styled.div`
    width: 300px;
    height: 300px;
    display: inline-block;
`;

const CardContainer = styled.div`
    height: 100%;
    border-radius: 5px;
    border: 1px solid #f0f0f0;
    padding: 10px 5px 10px 5px;
    text-align: center;
`;

const CardHeader = styled.div`
    padding-bottom: 5px;
    color: rgba(0,0,0,.85);
`;

const Title = styled.div`
    font-weight: bold;
`;


export default MapCard;