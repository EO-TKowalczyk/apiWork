import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

// import {Row,Col} from "react-flexbox-grid";
  class App extends Component {
    state = { posts:[] };
      
    componentDidMount () {
      axios.get('https://api.exchangeratesapi.io/latest')
      .then(response => {
        this.setState({posts: response.data}) ;
        console.log(response.data);
        console.log(response.data.rates);
        console.log(response.data.rates.PHP);
        console.log(response.data.base);
        console.log(response.data.date);
      });
    }

    render() {
     
      if (!this.state.posts.length){
        return <div>didn't post anything</div>
      }


         return(
         <div>
           {this.state.posts.map(post =>(
             <div>
                <div>{post.rates.rates}</div>



             </div>

           ))}
         </div>
        ) 
     
    }
  }
export default App;

// rates={posts.rates} 