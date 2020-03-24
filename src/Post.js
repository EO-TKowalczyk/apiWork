import React  from 'react';
import {Row,Col} from "react-flexbox-grid";
import './Post.css';

    const Post = (props) => (
   
    
    <div>
  <Row><p className="PostTitle">Currency exchange</p></Row>
            <Row>

                <Col><p className="SubTitlesDate">Today date :</p></Col>
                <Col><p  className="SubTitlesDateDate">{props.date}</p></Col>
                <Col><p className="SubTitlesBase">Base :</p></Col>
                <Col><p className="SubTitlesBaseBase">{props.base}</p></Col>
                </Row>  
                 <Col><p className="SubTitlesRate">Rates :</p></Col> 


                  <React.Fragment>
                  {this.props.rates.map(item => 
                  <p>{item}</p>
                  )}
                  </React.Fragment>

                <Col><p className="SubTitlesBaseBase">{props.rates}</p></Col>
                {/* <Col><p className="SubTitlesBaseBase">{JSON.stringify(props.rates)}</p></Col> */}

    </div>
      );
    
export default Post;

























