import React, { Component } from 'react';
import {Button, Input} from 'reactstrap'

class Homepage extends Component {
    state = { 
        pencetShow:0,
        kendaraan:'',
        totalbayar:0,
        durasi:0
     }

     onClickMobil=()=>{
        console.log(this.state.pencetShow)
        this.setState({
            kendaraan:'MOBIL',
            pencetShow:1,
            totalbayar:0,
            durasi:0

        })
     }
     
     onClickMotor=()=>{
        console.log(this.state.pencetShow)
        this.setState({
            kendaraan:'MOTOR',
            pencetShow:2,
            totalbayar:0,
            durasi:0
        })
     }

     onClickBayar=()=>{
        var totaljam = this.refs.inputJam.refs.innerJam.value
        var jeniskendaraan = this.state.pencetShow
        console.log(totaljam)
        if(jeniskendaraan===1){
            this.setState({
            durasi:totaljam,
            totalbayar:totaljam*2000
            })
        }else if(jeniskendaraan===2){
            this.setState({
            durasi:totaljam,
            totalbayar:totaljam*1000
            })
        }


     }



     printTampilan=()=>{
         var open = this.state.pencetShow
        if(open===1){
            return(
                <div>
                    <Input style={{width:'300px',textAlign:'center'}} type='number' ref='inputJam' innerRef='innerJam' placeholder='TOTAL JAM PARKIR' />
                    <p>Total bayar, Rp.{this.state.totalbayar},00</p>
                    <button  onClick={this.onClickBayar} style={{borderRadius:'7px'}}>Bayar</button>
                    <p>{this.state.durasi} JAM</p>
                    <p>Catatan = Mobil 2000/jam</p>
                </div>
            )
        }else if(open===2){
            return(
                <div>
                    <Input style={{width:'300px',textAlign:'center'}} type='number' ref='inputJam' innerRef='innerJam' placeholder='TOTAL JAM PARKIR'/>
                    <p>Total bayar, Rp.{this.state.totalbayar},00</p>
                    <button onClick={this.onClickBayar} style={{borderRadius:'7px'}}>Bayar</button>
                    <p>{this.state.durasi} JAM</p>
                    <p>Catatan = Motor 1000/jam</p>
                </div>
            )
        }
        // else if (open===3){
        //     return(
        //         <div>TERIMAKASIH</div>
        //     )
        // }
     }




    render() { 
        return ( 
            <div>
               <center>
                <h1 >APLIKASI PARKIR {this.state.kendaraan}</h1>
                <button onClick={this.onClickMobil} className='m-3' style={{borderRadius:'7px'}}>MOBIL</button> <button onClick={this.onClickMotor} className='m-3' style={{borderRadius:'7px'}} >MOTOR</button>
                <div>
                    {this.printTampilan()}
                </div>
               </center>
        
            </div>
         );
    }
}
 
export default Homepage;