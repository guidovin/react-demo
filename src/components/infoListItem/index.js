import React, {Component} from 'react'
import Modal from 'react-responsive-modal'
import ModuleStyle from '../infoListItem/infolistitem.module.css'




export default class ListItem extends Component{

    constructor(props){

        super(props)
        this.state = {open: false}

    }

    onCloseModal = () => {

        this.setState({ open: false })

    }

    onOpenModal = () => {

        this.setState({ open: true })

    }

    render(){

        const { open } = this.state;

        return (

            <div>
                <div className={ModuleStyle.InfoLI} onClick={this.onOpenModal.bind(this)}>

                    <p className={ModuleStyle.ItemName}>{ this.props.titulo }</p>

                </div>

                <Modal className={ModuleStyle.LIModal} open={open} onClose={this.onCloseModal.bind(this)}>
                    <div className={ModuleStyle.ModalWrap}>
                        <img src={this.props.img} alt='didnt load'/>

                        <p>{this.props.msg}</p>
                    </div>
                </Modal>

            </div>

        )

    }

}
