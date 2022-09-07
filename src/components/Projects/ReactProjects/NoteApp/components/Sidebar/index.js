import React from "react"
import './index.scss'
export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button className="title-delete" onClick={(event) => props.deleteNote(event, note.id)}>-</button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar-header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            <div className="note-elements">
            {noteElements}
            </div>
            
        </section>
    )
}
