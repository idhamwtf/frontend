import React, { Component } from 'react';
import { Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'    

const MySwal = withReactContent(Swal)


class Homepage extends Component {
    state = { 
        data:[],
        modalAddtodo:false,
        modalEdit:false,
        indexedit:-1 
     }


     componentDidMount(){
         this.setState({
             data:[
                 {kegiatan:'Lari',status:false,tanggal:'2019-11-27'},
                 {kegiatan:'Sarapan',status:true,tanggal:'2019-11-29'}
             ]
         })
     }

     onAdddataClick=()=>{
         var kegiatan = this.refs.kegiatan.value
         console.log(kegiatan)
         var tanggal=this.refs.tanggal.value
         console.log(tanggal)

         var obj={
             kegiatan,
             status:false,
             tanggal
         }

         if(kegiatan===''|| tanggal ===''){
            MySwal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
         }else{
             var newdata=[...this.state.data,obj]
             this.setState({data:newdata,isOpen:false})
         }
     }


     onEditClick=(index)=>{
        var editkegiatan = this.refs.editkegiatan.value
        var edittanggal = this.refs.edittanggal.value
        var data = this.state.data
        var editstatus = false
        if(this.refs.editstatus.value==='true'){
            editstatus = true
        }

            data[index].kegiatan=editkegiatan
            data[index].status=editstatus
            data[index].tanggal=edittanggal

                if(editkegiatan==='' || editstatus==='' || editkegiatan===''){
                    MySwal.fire(
                        'Cancelled',
                        'HIYA',
                        'error'
                      )
                }else{
                    this.setState({
                        data:data
                    }) 
                }
        
     }







     onDeletedataClick=(index)=>{
        MySwal.fire({
            title: 'Yakin apus?'+ this.state.data[index].kegiatan,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
                var data=this.state.data
                data.splice(index,1)
                this.setState({
                    data:data
                })
              MySwal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              MySwal.fire(
                'Cancelled',
                'HIYA',
                'error'
              )
            }
          })
     }




     renderTodo=()=>{
         return this.state.data.map((val,index)=>{
             return(
                 <tr key={index}>
                     <td>{index+1}</td>
                     <td>{val.kegiatan}</td>
                     <td>{val.status?'Sudah':'Belum'}</td>
                     <td>{val.tanggal}</td>
                     <td>
                         <button onClick={()=>this.setState({modalEdit:true,indexedit:index})} className='btn btn-sm btn-warning m-2'>Edit</button>
                         <button onClick={()=>this.onDeletedataClick(index)} className='btn btn-sm btn-danger'>Delete</button>
                     </td>
                 </tr>
             )
         })
     }


    render() { 
        return ( 
            <div>
                <Modal
                isOpen={this.state.modalAddtodo}
                toggle={()=> this.setState({modalAddtodo:false})}>
                    <ModalHeader>
                        Add Todo
                    </ModalHeader>
                    <ModalBody>
                        <input className='form-control' placeholder='kegiatan' type='text' ref='kegiatan'/>
                        <input className='form-control' placeholder='tanggal' type='date' ref='tanggal'/>
                        {/* <input className='form-control' placeholder='edit kegiatan' type='text' ref='editkegiatan'/>
                        <input className='form-control' placeholder='edit tanggal' type='date' ref='edittanggal'/> */}
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' onClick={this.onAdddataClick}>ADD</button>
                        <button className='btn btn-danger' onClick={()=>this.setState({modalAddtodo:false})}>Cancel</button>
                    </ModalFooter>
                </Modal>


                <Modal
                isOpen={this.state.modalEdit} 
                toggle={()=> this.setState({modalEdit:false})}>
                    <ModalHeader>
                        Edit
                    </ModalHeader>
                    <ModalBody>
                        <input className='form-control' placeholder='edit kegiatan' type='text' ref='editkegiatan'/><br></br>
                        <select className='form-control' ref='editstatus'>
                            <option value=''></option>
                            <option value='true'>udah </option>
                            <option value='false'>belom</option>
                        </select>
                        
                        <br></br><input className='form-control' placeholder='edit tanggal' type='date' ref='edittanggal'/>
                        
                        {/* <input className='form-control' placeholder='edit kegiatan' type='text' ref='editkegiatan'/>
                        <input className='form-control' placeholder='edit tanggal' type='date' ref='edittanggal'/> */}
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' onClick={()=>this.onEditClick(this.state.indexedit)}>Edit</button>
                        <button className='btn btn-danger' onClick={()=>this.setState({modalEdit:false})}>Cancel</button>
                    </ModalFooter>
                </Modal>

                <div>
                    <button className='btn btn-success m-5' onClick={()=>this.setState({modalAddtodo:true})}>tambah data</button>
                </div>
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tanggal</th>
                        <th>Kegiatan</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{this.renderTodo()}</tbody>
            </Table>
            </div>
            // <div>
            //     <button onClick={}></button>
            // </div>
         );
    }
}
 
export default Homepage;