import React, { Component } from 'react'
import SignaturePad from "react-signature-canvas";
import './sigPad.css'

export default class Button extends Component {
    sigPad = {}
    clear = () => {
        this.sigPad.clear()
    }
    render() {
        return (
            <div className="wrapPad">
                <SignaturePad
                    ref={(ref)=> {this.sigPad= ref}}
                    canvasProps={{ className: "signatureCanvas" }}
                />
                <div className="wrapBtn">
                <button className="clearBtn" onClick={this.clear}><i className="fa fa-eraser" aria-hidden="true"/> </button>
                </div>
            </div>
        )
    }
}
