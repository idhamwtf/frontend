import React, { Component } from 'react';
import {Table, TableBody, TableHead,TableCell,TableRow} from '@material-ui/core'
import Axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles'
import {APIURL} from '../support/apiurl'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'




class ManageAdmin extends Component {
    state = { 
        datafilm:[],
        readmoreselected:-1,
        modaladd:false
     }

     splitini=(a ='')=>{
         var b = a.split('').filter((val,index)=>index<=50)
     }

     componentDidMount(){
         Axios.get(`${APIURL}movies`)
         .then((res)=>{
             this.setState({datafilm:res.data})
         }).catch((err)=>{
             console.log(err)
         })
     }

     onSaveAddDataClick=()=>{
         var jadwaltemplate=[12,14,16,18,20]
         var jadwal=[]
         for(var i = 0;i<jadwaltemplate.length;i++){
             if(this.refs[`jadwal${i}`].checked){
                jadwal.push(jadwaltemplate[i])
             }
         }
         console.log(jadwal)
         var iniref=this.refs
         var title=iniref.title.value
         var image=iniref.image.value
         var synopsis=iniref.synopsis.value
         var sutradara=iniref.sutradara.value
         var durasi=iniref.durasi.value
         var genre=iniref.genre.value
         var produksi='RANS ENTERTAIMENT'
         var data={
             title:title,
             image,
             synopsis,
             sutradara,
             durasi,
             genre,
             produksi
         }

         Axios.post(`${APIURL}movies`, data )
         .then((res)=>{
            Axios.get(`${APIURL}movies`)
            .then((res)=>{
                this.setState({datafilm:res.data})
            }).catch((err)=>{
                console.log(err)
            })
             
         }).catch((err)=>{
             console.log(err)
         })
     }


     renderMovies=()=>{
         return this.state.datafilm.map((val,index)=>{
             return (
                 <TableRow key={index}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{val.title}</TableCell>
                    <TableCell><img src={val.image} alt={'gambar'} height='200px'/></TableCell>
                    {
                        this.state.readmoreselected===index?
                        <TableCell>
                     {val.synopsis} 
                    <span onClick={()=>{this.setState({readmoreselected:-1})}}>Read less</span>
                        </TableCell>
                    :
                    <TableCell>
                    {this.splitini(val.synopsis)} 
                    <span onClick={()=>{this.setState({readmoreselected:index})}}>Read More</span>
                    </TableCell>
                    }
                    <TableCell>{val.jadwal}</TableCell>
                    <TableCell>{val.sutradara}</TableCell>
                    <TableCell>{val.gender}</TableCell>
                    <TableCell> {val.durasi}</TableCell>
                    <TableCell>
                        <button className='btn btn-outline-primary'>EDIT</button>
                        <button className='btn btn-outline-danger'>DELETE</button>
                    </TableCell>
                 </TableRow>
             )
         })
     }
     

     

    render() { 

        
        return ( 
            <div className = 'mx-3'>
                <Modal isOpen={this.state.modaladd} toggle={()=>{this.setState({modaladd:false})}}>
                    <ModalHeader>
                        Add Data
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" ref='title'className='form-control' placeholder='title'/>
                        <input type="text" ref='image'className='form-control'  placeholder='image' />
                        <input type="text" ref='synopsis'className='form-control' placeholder='synopsis' />
                        {/* jadwal */}
                        <input type="checkbox" ref='jadwal0'/>12.00
                        <input type="checkbox" ref='jadwal1'/>14.00
                        <input type="checkbox" ref='jadwal2'/>16.00
                        <input type="checkbox" ref='jadwal3'/>18.00
                        <input type="checkbox" ref='jadwal4'/>20.00
                        <input type="text" ref='sutradara' className='form-control'placeholder='synopsis'/>
                        <input type="text" ref='durasi' className='form-control'placeholder='durasi'/>
                        <input type="text" ref='genre' className='form-control' placeholder='genre' />
                    </ModalBody>
                    <button onClick={this.onSaveAddDataClick}>Save</button>
                    <button onClick={()=>this.setState({modaladd:false})}>Cancel</button>
                    <ModalFooter>

                    </ModalFooter>
                </Modal>
                    <button className='btn btn-success' onClick={()=>this.setState({modaladd:true})}>add Data</button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell>Judul</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Sinopsis</TableCell>
                                <TableCell>Jadwal</TableCell>
                                <TableCell>Sutradara</TableCell>
                                <TableCell>Durasi</TableCell>
                                <TableCell>Genre</TableCell>
                                <TableCell>ACtion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderMovies()}
                        </TableBody>
                    </Table>
                    
            </div>
         );
    }
}
 
export default ManageAdmin;