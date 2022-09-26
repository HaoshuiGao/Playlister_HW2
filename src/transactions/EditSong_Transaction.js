import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,editSongIndex) {
        super();
        this.app = initApp;
        this.editSongIndex=editSongIndex;
        this.oldSongObject=initApp.state.currentList.songs[editSongIndex];
        this.newSong={title:document.getElementById("edit-song-modal-title-textfield").value,
                    artist:document.getElementById("edit-song-modal-artist-textfield").value,
                    youTubeId:document.getElementById("edit-song-modal-youTubeId-textfield").value,
        }
    }

    doTransaction() {
        this.app.renameSong(this.editSongIndex,this.newSong);
    }
    
    undoTransaction() {
        this.app.renameSong(this.editSongIndex,this.oldSongObject)
    }
}