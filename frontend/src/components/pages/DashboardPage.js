import React from "react";
import { Card } from 'semantic-ui-react'
import './DashboardPage.css';

const DashboardPage = () => (
    <div class="ui  container"> 
           <Card.Group itemsPerRow={3}>
               <Card> 
            <Card.Content> 
                <h3>5</h3> 
                <p>Orders in Progress</p>
            </Card.Content>
        </Card>

        <Card> 
            <Card.Content>
            <h3>5</h3> 
                <p>Payment Due</p>
            </Card.Content>
        </Card>
        
        <Card> 
            <Card.Content>
            <h3>5</h3> 
                <p>Orders Delivered</p>
            </Card.Content>
        </Card>
        
        </Card.Group>
    </div>
)


export default DashboardPage;
