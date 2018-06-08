import React from 'react';
import {StateProvider,CityProvider,NeighborhoodProvider} from './provider';
import { RingLoader } from 'react-spinners';
import { Button } from 'reactstrap';
import Header from './components/header'
import Footer from './components/footer';
// import request from 'request';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loading:false,
         data: 0,
         states:{
           ToNow:"",
           list:[]
         },
         cities:{
           ToNow:"",
           list:[]
         },
         neighborhood:{
           ToNow:"",
           list:[]
         }
      }
      this.loadStates = this.loadStates.bind(this)
      this.onClickState = this.onClickState.bind(this)
      this.onClickCity = this.onClickCity.bind(this)
   };
   loadStates() {
      // this.setState({data: this.state.data + 1})
      this.setState({loading:true})
      StateProvider.getStatesByCountry().then( result => {
        console.log(result);
        this.setState({
          loading:false,
          states:{
            ToNow:"",
            list:result
          }
        })
      })
    }
    onClickState(value){
      const result = {}
      this.setState({loading:true})
      result[value.id]=this.state[value.id]?!this.state[value.id]:true
      if(this.state.states.ToNow != value.id){
        result[this.state.states.ToNow] = false
        result.states={
          ToNow:value.id,
          list:this.state.states.list
        }
      }
      // this.setState(result)
      CityProvider.getCitiesByState(value.id).then( cities => {
        result.cities = {
          ToNow:"",
          list:cities
        }
        result.loading =false
        this.setState(result)
      })
    }
    onClickCity(value){
      const result = {}
      this.setState({loading:true})
      result[value.id]=this.state[value.id]?!this.state[value.id]:true
      if(this.state.cities.ToNow != value.id){
        result[this.state.cities.ToNow] = false
        result.cities={
          ToNow:value.id,
          list:this.state.cities.list
        }
      }
      // result.cities = {}
      // this.setState(result)
        NeighborhoodProvider.getNeighborhoodsByCity(value.id).then( neighborhood => {
          result.neighborhood = {
            ToNow:"",
            list:neighborhood
          }
          result.loading =false
          this.setState(result)
        })

    }

   render() {
      return (
         <div>
         <Header/>
         <div style={{
           marginLeft:'120px'
         }}>
         <h1>States</h1>
         {this.state.loading &&
             <div className="popup"><span class="popuptext" id="myPopup"><RingLoader
             style={{
              position: 'fixed'
             }}
               color={'#123abc'}
               loading={this.state.loading}
             /></span></div>
         }
         <ul id="Menu">
         {!this.state.loading &&
             this.state.states.list.map((state,i) => {
            return (<li>
              <Button
                color={this.state[state.id]?"danger":"primary"}
                style={{margin: '5px',borderRadius:'50%'}}
                key={i}
                onClick ={() => this.onClickState(state)}>
                {this.state[state.id]?"-":"+"}
              </Button> {state.name}
            <ul>{this.state[state.id] &&  this.state.cities.list.map((city,i2) => {
                return (<li> {city.NeighborhoodCant} <Button color={this.state[city.id]?"danger":"info"} style={{margin: '5px',borderRadius:'50%'}} key={i2} onClick ={() => this.onClickCity(city)}>{this.state[city.id]?"-":"+"} </Button> {city.name}
                <ul>{this.state[city.id] &&  this.state.neighborhood.list.map((neighborhood,i2) => {
                    return (<li>{neighborhood.name}</li>)
                  }
                )}</ul></li>)
              }
            )}</ul></li>)
        })
         }
</ul>
         <Button color="info" onClick = {this.loadStates}>LoadStates</Button>
         </div>
         <Footer/>
         </div>
      );
   }
}

export default App;
