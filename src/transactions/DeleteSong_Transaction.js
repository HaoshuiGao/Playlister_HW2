import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * * RemoveSong_Transaction
 * 
 * This class represents a transaction that works with remove song. 
 * It will be managed by the transaction stack.
 * 
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,deleteSongIndex) {
        super();
        this.app = initApp;
        this.deleteIndex=deleteSongIndex;
        this.deleteSongObject=initApp.state.currentList.songs[deleteSongIndex];
    }

    doTransaction() {
        this.app.deleteSong(this.deleteIndex);
    }
    
    undoTransaction() {
        this.app.insertDeletedSongBack(this.deleteIndex,this.deleteSongObject)
    }
}