import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        //songName contains the name to put in the modal, other two const use to call
        //back to app.js after click
        const { songNameForDeletion, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let name = "";
        if (songNameForDeletion) {
            name = songNameForDeletion;
        }
        return (
            <div
                //MODAL (i.e. dialog) FOR VERIFYING THE DELETION OF A SONG 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-song-root'>
                        <div class="modal-north">
                            Remove song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to permanently remove {name} from the playlist?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-song-confirm-button" 
                                class="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideDeleteSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}